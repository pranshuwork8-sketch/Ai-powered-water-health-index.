// measure.js
// Logic for the Water Health Index "Measure" page.
// Features:
//  - Camera pH reader (RGB -> pH using reference table)
//  - Index calculation from pH, temperature, turbidity
//  - Detailed TDS-based drinking safety
//  - Geolocation + Nominatim reverse geocoding + Leaflet map markers
//  - LocalStorage history that other pages can reuse

document.addEventListener('DOMContentLoaded', () => {
  // ------- DOM references -------
  const phInput       = document.getElementById('ph');
  const tempInput     = document.getElementById('temp');
  const turbSelect    = document.getElementById('turbidity');
  const tdsInput      = document.getElementById('tds');

  const btnCamera     = document.getElementById('btnCamera');
  const btnSwitch     = document.getElementById('btnSwitch');
  const btnCloseCam   = document.getElementById('btnCloseCam');
  const btnDetect     = document.getElementById('btnDetect');
  const btnLocation   = document.getElementById('btnLocation');
  const btnAnalyze    = document.getElementById('btnAnalyze');
  const btnSave       = document.getElementById('btnSave');
  const btnClear      = document.getElementById('btnClear');
  const btnCheckTds   = document.getElementById('btnCheckTds');

  const historyBody   = document.getElementById('historyBody');
  const statusCard    = document.getElementById('statusCard');
  const statusScore   = document.getElementById('statusScore');
  const statusBadge   = document.getElementById('statusBadge');
  const statusText    = document.getElementById('statusText');
  const sPh           = document.getElementById('sPh');
  const sTemp         = document.getElementById('sTemp');
  const sTurb         = document.getElementById('sTurb');
  const camInfo       = document.getElementById('camInfo');
  const locationMain  = document.getElementById('locationMain');

  const tdsFlagText   = document.getElementById('tdsFlagText');
  const tdsNoteText   = document.getElementById('tdsNoteText');

  // ------- State -------
  const STORAGE_KEY = 'whReadings';

  let currentLat   = null;
  let currentLng   = null;
  let currentPlace = '';

  // =========================================================
  //  Leaflet map
  // =========================================================
  const map = L.map('map', {
    zoomControl: true,
    scrollWheelZoom: false
  }).setView([23, 80], 4.5);                           // India-centered default [web:117]

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 13,
    attribution: '© OpenStreetMap'
  }).addTo(map);                                      // standard Leaflet tiles [web:117]

  const markersLayer = L.layerGroup().addTo(map);

  function markerColor(index) {
    if (index >= 75) return 'green';
    if (index >= 45) return 'yellow';
    return 'red';
  }

  function addReadingMarker(rec) {
    if (typeof rec.lat !== 'number' || typeof rec.lng !== 'number') return;
    const color = markerColor(rec.index || 0);
    const popupHtml = `
      <strong>${rec.place || 'Saved location'}</strong><br/>
      pH: ${rec.ph}, Temp: ${rec.temp}°C, Turbidity: ${rec.turb}<br/>
      TDS: ${rec.tds ?? '—'} mg/L, Index: ${rec.index} (${rec.drinkableFlag || '–'})
    `;
    L.circleMarker([rec.lat, rec.lng], {
      radius: 6,
      color,
      fillColor: color,
      fillOpacity: 0.9
    }).addTo(markersLayer).bindPopup(popupHtml);      // typical Leaflet marker pattern [web:117][web:123]
  }

  // =========================================================
  //  Reverse geocoding with Nominatim
  // =========================================================
  function formatLocation(address) {
    if (!address) return 'Unknown location';
    const detail  = address.road || address.neighbourhood || address.suburb || address.town || address.village || '';
    const city    = address.city || address.town || address.village || address.suburb || '';
    const state   = address.state || address.region || '';
    const country = address.country || '';
    const postcode = address.postcode || '';

    const pieces = [];
    if (detail && detail !== city) pieces.push(detail);
    if (city) pieces.push(city);
    if (state) pieces.push(state);
    if (country) pieces.push(country);
    if (postcode) pieces.push(postcode);
    return pieces.join(', ');
  }

  async function reverseGeocode(lat, lng) {
    try {
      // Public Nominatim endpoint for reverse geocoding [web:75][web:76][web:124]
      const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`;
      const res = await fetch(url, { headers: { 'Accept-Language': 'en' } });
      const data = await res.json();
      return formatLocation(data.address);
    } catch (e) {
      console.error('Reverse geocode failed', e);
      return 'Unknown location';
    }
  }

  btnLocation.addEventListener('click', () => {
    if (!navigator.geolocation) {
      alert('Geolocation not supported by this browser.');
      return;
    }

    navigator.geolocation.getCurrentPosition(async pos => {
      const lat = pos.coords.latitude;
      const lng = pos.coords.longitude;
      const label = await reverseGeocode(lat, lng);

      currentLat = lat;
      currentLng = lng;
      currentPlace = label;
      locationMain.textContent = label;

      map.setView([lat, lng], 16);
      addReadingMarker({
        ph: phInput.value || '–',
        temp: tempInput.value || '–',
        turb: turbSelect.value || '–',
        tds: tdsInput.value ? Number(tdsInput.value) : null,
        index: 0,
        drinkableFlag: '',
        lat,
        lng,
        place: label
      });
    }, () => {
      alert('Could not get location.');
    }, {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 30000
    });
  });

  // =========================================================
  //  Camera pH reader (getUserMedia + canvas)
  // =========================================================
  const video  = document.getElementById('cameraView');
  const canvas = document.getElementById('phCanvas');
  const ctx    = canvas.getContext && (canvas.getContext('2d', { willReadFrequently: true }) || canvas.getContext('2d')); // performance hint [web:86]
  let stream   = null;
  let facing   = 'environment';                       // back camera on phones where available [web:80][web:89][web:92][web:94]

  async function openCamera() {
    try {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        alert('Camera API not supported in this browser.');
        return;
      }
      if (stream) return; // already open

      stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: facing }
      });                                                   // standard WebRTC getUserMedia usage [web:86][web:94]

      video.srcObject = stream;
      video.style.display = 'block';
      canvas.style.display = 'none';
      await video.play();
    } catch (e) {
      console.error(e);
      alert('Camera not available or permission denied.');
    }
  }

  function closeCamera() {
    if (stream) {
      stream.getTracks().forEach(t => t.stop());
      stream = null;
    }
    video.style.display = 'none';
    canvas.style.display = 'none';
  }

  btnCamera.addEventListener('click', openCamera);
  btnCloseCam.addEventListener('click', closeCamera);
  btnSwitch.addEventListener('click', () => {
    facing = (facing === 'environment') ? 'user' : 'environment';  // flip camera [web:80][web:89][web:122]
    closeCamera();
    openCamera();
  });

  // Approximate RGB reference table for pH colour strips
  const phReference = [
    { pH: 1,  rgb: [235,  90, 120] },
    { pH: 2,  rgb: [240, 120, 105] },
    { pH: 3,  rgb: [245, 160,  80] },
    { pH: 4,  rgb: [240, 200,  90] },
    { pH: 5,  rgb: [223, 205,  92] },
    { pH: 6,  rgb: [192, 192,  89] },
    { pH: 7,  rgb: [146, 182, 101] },
    { pH: 8,  rgb: [120, 189, 164] },
    { pH: 9,  rgb: [127, 188, 193] },
    { pH: 10, rgb: [117, 166, 233] },
    { pH: 11, rgb: [ 94, 132, 224] },
    { pH: 12, rgb: [ 85, 118, 192] },
    { pH: 13, rgb: [ 80, 110, 170] },
    { pH: 14, rgb: [ 65,  80, 150] }
  ];

  function rgbDistance(a, b) {
    return Math.sqrt(
      (a[0] - b[0]) ** 2 +
      (a[1] - b[1]) ** 2 +
      (a[2] - b[2]) ** 2
    );
  }

  function rgbToPh(r, g, b) {
    let bestIdx = 0;
    let nextBestIdx = 0;
    let minDist = Infinity;
    let nextMinDist = Infinity;

    for (let i = 0; i < phReference.length; i++) {
      const dist = rgbDistance([r, g, b], phReference[i].rgb);
      if (dist < minDist) {
        nextBestIdx = bestIdx;
        nextMinDist = minDist;
        bestIdx = i;
        minDist = dist;
      } else if (dist < nextMinDist) {
        nextBestIdx = i;
        nextMinDist = dist;
      }
    }

    const bestPh = phReference[bestIdx].pH;
    const nextPh = phReference[nextBestIdx].pH;

    if (Math.abs(bestPh - nextPh) === 1) {
      return ((bestPh * nextMinDist) + (nextPh * minDist)) / (minDist + nextMinDist);
    }
    return bestPh;
  }

  function captureColor() {
    if (!ctx) {
      alert('Canvas not available.');
      return;
    }
    if (!video.videoWidth) {
      alert('Open the camera and wait, then try again.');
      return;
    }

    const w = video.videoWidth;
    const h = video.videoHeight;
    canvas.width = w;
    canvas.height = h;
    ctx.drawImage(video, 0, 0, w, h);                       // common canvas usage for video frames [web:114]

    const box = 20;
    const sx = Math.max(0, Math.floor(w / 2 - box / 2));
    const sy = Math.max(0, Math.floor(h / 2 - box / 2));
    const img = ctx.getImageData(sx, sy, box, box);
    const data = img.data;

    let r = 0, g = 0, b = 0;
    const px = data.length / 4;
    for (let i = 0; i < data.length; i += 4) {
      r += data[i];
      g += data[i + 1];
      b += data[i + 2];
    }
    r /= px;
    g /= px;
    b /= px;

    const ph = rgbToPh(r, g, b);
    phInput.value = ph.toFixed(2);                          // this keeps 7.00 style like the old page
    camInfo.textContent =
      `Captured color (avg): R${r.toFixed(0)} G${g.toFixed(0)} B${b.toFixed(0)} → pH ≈ ${ph.toFixed(2)}`;
  }

  btnDetect.addEventListener('click', captureColor);

  // =========================================================
  //  Index scoring (pH + temp + turbidity)
  // =========================================================
  function scorePh(ph) {
    if (isNaN(ph)) return 0;
    const d = Math.abs(ph - 7);
    if (d >= 3) return 0;
    const s = 1 - d / 3;
    return Math.round(100 * s * s);
  }

  function scoreTemp(temp) {
    if (isNaN(temp)) return 0;
    const d = Math.abs(temp - 25);
    if (d >= 25) return 0;
    const s = 1 - d / 25;
    return Math.round(100 * s * s);
  }

  function scoreTurb(turb) {
    if (turb === 'Low') return 95;
    if (turb === 'Medium') return 65;
    if (turb === 'High') return 30;
    return 0;
  }

  function calcIndex(ph, temp, turb) {
    const sp = scorePh(ph);
    const st = scoreTemp(temp);
    const su = scoreTurb(turb);
    return Math.round(0.4 * sp + 0.3 * st + 0.3 * su);
  }

  const thresholds = [100,97,94,91,88,85,82,79,76,73,70,67,64,61,58,55,52,49,46,43,40,37,34,31,28,25,22,19,15,0];
  const messages = [
    'Perfect lab-grade water.',
    'Ultra-clean, ideal for sensitive crops and drinking.',
    'Pristine mountain-spring quality.',
    'Excellent — minimal stress.',
    'Very good quality, safe for drinking.',
    'Good quality, only minor treatment needed.',
    'Slightly imbalanced but generally safe.',
    'Fair quality — simple filtration recommended.',
    'Usable, but avoid for babies or sensitive users.',
    'Noticeable issues; treat before drinking.',
    'Moderate quality, not ideal for daily drinking.',
    'Stressed water; boil and filter strongly.',
    'Borderline safe — use only with treatment.',
    'Poor quality; not recommended for direct use.',
    'Very poor; use only for cleaning, not drinking.',
    'High pollution risk; avoid for animals too.',
    'Severely stressed ecosystem water.',
    'Strong contamination suspected.',
    'Dangerous for human consumption.',
    'Extremely poor; emergency use only.',
    'Unsuitable for irrigation without strong treatment.',
    'Toxic risk; may harm crops and fish.',
    'Very high contamination, keep away.',
    'Industrial-level pollution likely.',
    'Critical — do not use for any living beings.',
    'Hazardous chemical signature.',
    'Near-toxic concentrate; isolate source.',
    'Emergency contamination zone.',
    'Deadly quality — immediate action required.',
    'Unusable water — treat as hazardous waste.'
  ];

  function classifyIndex(score) {
    if (score >= 90) return 'EXCELLENT';
    if (score >= 75) return 'GOOD';
    if (score >= 60) return 'FAIR';
    if (score >= 45) return 'POOR';
    return 'VERY_POOR';
  }

  function analyze() {
    const ph   = parseFloat(phInput.value);
    const temp = parseFloat(tempInput.value);
    const turb = turbSelect.value;

    if (isNaN(ph) || isNaN(temp) || !turb) {
      alert('Please enter pH, temperature, and select turbidity.');
      return null;
    }

    const idx   = calcIndex(ph, temp, turb);
    const badge = classifyIndex(idx);

    statusScore.textContent = idx;
    statusBadge.textContent = badge;

    if (badge === 'EXCELLENT') statusBadge.style.background = '#1c6b3f';
    else if (badge === 'GOOD') statusBadge.style.background = '#2c9b5a';
    else if (badge === 'FAIR') statusBadge.style.background = '#d0a000';
    else if (badge === 'POOR') statusBadge.style.background = '#c45a2f';
    else statusBadge.style.background = '#b02030';

    let msg = messages[messages.length - 1];
    for (let i = 0; i < thresholds.length; i++) {
      if (idx >= thresholds[i]) {
        msg = messages[i];
        break;
      }
    }

    // Short summary based on badge, plus detailed message.
    let summary = '';
    if (badge === 'EXCELLENT') {
      summary = 'Excellent water quality – good for drinking, cooking and crops.';
    } else if (badge === 'GOOD') {
      summary = 'Good water – usually safe for drinking with simple precautions.';
    } else if (badge === 'FAIR') {
      summary = 'Fair water – use for drinking only with treatment; fine for most crops.';
    } else if (badge === 'POOR') {
      summary = 'Poor quality – avoid for drinking; use carefully for irrigation.';
    } else {
      summary = 'Very poor – treat as contaminated; avoid for people and animals.';
    }

    statusText.textContent = summary + ' ' + msg;
    sPh.textContent   = ph.toFixed(2);
    sTemp.textContent = temp.toFixed(1) + '°C';
    sTurb.textContent = turb;
    statusCard.style.display = 'flex';

    return { ph, temp, turb, index: idx };
  }

  btnAnalyze.addEventListener('click', analyze);

  // =========================================================
  //  TDS + drinking safety
  // =========================================================
  function classifyDrinkability(ph, tds) {
    const safePh = ph >= 6.5 && ph <= 8.5;

    if (isNaN(tds)) {
      return {
        flag: 'UNKNOWN',
        label: 'Add TDS',
        note: 'Enter TDS to get a drinking-safety result based on pH and dissolved solids.'
      };
    }

    if (!safePh) {
      return {
        flag: 'PH_OUT_OF_RANGE',
        label: 'pH outside safe band',
        note: 'The TDS looks okay, but pH is outside the usual 6.5–8.5 range for safe drinking.'
      };
    }

    if (tds < 50) {
      return {
        flag: 'VERY_LOW_TDS',
        label: 'Very low minerals',
        note: 'Water is safe but has very low minerals; long-term use may lack essential salts.'
      };
    } else if (tds < 150) {
      return {
        flag: 'SOFT_WATER',
        label: 'Soft water',
        note: 'Soft, low-mineral water – generally safe for drinking and household use.'
      };
    } else if (tds < 300) {
      return {
        flag: 'IDEAL_RANGE',
        label: 'Ideal range',
        note: 'This is a commonly preferred TDS range (~150–300 mg/L) for good-tasting drinking water.'
      };
    } else if (tds < 600) {
      return {
        flag: 'ACCEPTABLE',
        label: 'Acceptable',
        note: 'Acceptable for drinking for most people, though taste may feel slightly mineral-rich.'
      };
    } else if (tds < 900) {
      return {
        flag: 'HARD_WATER',
        label: 'Hard water',
        note: 'High TDS – usually safe, but may cause scaling and is not ideal for some health conditions.'
      };
    } else if (tds < 1200) {
      return {
        flag: 'VERY_HARD_WATER',
        label: 'Very hard water',
        note: 'Very high TDS – avoid for long-term drinking; better suited to cleaning or some crops.'
      };
    } else {
      return {
        flag: 'NOT_DRINKABLE',
        label: 'Not recommended for drinking',
        note: 'Extremely high TDS – even if the index looks good, this water should not be used for drinking.'
      };
    }
  }

  function updateTdsUI(result) {
    if (!result) return;

    tdsFlagText.textContent = result.label;
    tdsNoteText.textContent = result.note;

    if (result.flag === 'IDEAL_RANGE' || result.flag === 'SOFT_WATER') {
      tdsFlagText.style.color = '#55ebca';
    } else if (
      result.flag === 'ACCEPTABLE' ||
      result.flag === 'HARD_WATER' ||
      result.flag === 'VERY_LOW_TDS'
    ) {
      tdsFlagText.style.color = '#ffd26a';
    } else if (
      result.flag === 'VERY_HARD_WATER' ||
      result.flag === 'PH_OUT_OF_RANGE'
    ) {
      tdsFlagText.style.color = '#ffb36a';
    } else if (result.flag === 'NOT_DRINKABLE') {
      tdsFlagText.style.color = '#ff7a7a';
    } else {
      tdsFlagText.style.color = '#e3fbfa';
    }
  }

  btnCheckTds.addEventListener('click', () => {
    const ph  = parseFloat(phInput.value);
    const tds = parseFloat(tdsInput.value);
    if (isNaN(ph)) {
      alert('Enter or measure pH first.');
      return;
    }
    const result = classifyDrinkability(ph, tds);
    updateTdsUI(result);
  });

  // =========================================================
  //  History in localStorage (for Map / Chart / Farmers pages)
  // =========================================================
  function loadHistory() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);           // standard localStorage usage [web:81][web:84][web:87][web:93]
      if (!raw) return [];
      const arr = JSON.parse(raw);
      if (!Array.isArray(arr)) return [];
      return arr;
    } catch (e) {
      console.error('Failed to parse history', e);
      return [];
    }
  }

  function saveHistory(list) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    } catch (e) {
      console.error('Failed to save history', e);
    }
  }

  function renderHistory() {
    const list = loadHistory();
    historyBody.innerHTML = '';
    markersLayer.clearLayers();

    if (!list.length) {
      const tr = document.createElement('tr');
      const td = document.createElement('td');
      td.colSpan = 7;
      td.style.color = '#7ba9b0';
      td.textContent = 'No readings saved.';
      tr.appendChild(td);
      historyBody.appendChild(tr);
      return;
    }

    list.slice().reverse().forEach(rec => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${rec.when}</td>
        <td>${rec.ph}</td>
        <td>${rec.temp}</td>
        <td>${rec.turb}</td>
        <td>${rec.tds ?? '—'}</td>
        <td>${rec.index}</td>
        <td>${rec.drinkableFlag || '–'}</td>
      `;
      historyBody.appendChild(tr);
      addReadingMarker(rec);
    });
  }

  function saveReading() {
    const analysis = analyze();
    if (!analysis) return;

    const tds = tdsInput.value ? parseFloat(tdsInput.value) : NaN;
    const drink = classifyDrinkability(analysis.ph, tds);

    const list = loadHistory();
    const rec = {
      when: new Date().toLocaleString(),
      ph: analysis.ph.toFixed(2),
      temp: analysis.temp.toFixed(1),
      turb: analysis.turb,
      tds: isNaN(tds) ? null : Number(tds.toFixed(0)),
      index: analysis.index,
      drinkableFlag: drink.flag,
      drinkableNote: drink.note,
      lat: currentLat,
      lng: currentLng,
      place: currentPlace
    };
    list.push(rec);
    saveHistory(list);
    renderHistory();
  }

  btnSave.addEventListener('click', saveReading);

  btnClear.addEventListener('click', () => {
    if (confirm('Clear all saved readings?')) {
      localStorage.removeItem(STORAGE_KEY);
      renderHistory();
    }
  });

  // Initial render
  renderHistory();
});
