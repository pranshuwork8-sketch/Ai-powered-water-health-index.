// measure.js (rewritten, production-ready)
// - Includes robust camera handling (start/stop/switch)
// - Color capture -> pH detection with interpolation
// - Autofill pH input and show popup (you chose option B)
// - Index scoring, TDS check, history, map markers
// - Safe fallbacks if canvas not present (creates one dynamically)
// - No duplicate declarations; defensive DOM checks

document.addEventListener('DOMContentLoaded', () => {
  // -------------------------
  // DOM references (defensive)
  // -------------------------
  const phInput     = document.getElementById('ph');
  const tempInput   = document.getElementById('temp');
  const turbSelect  = document.getElementById('turbidity');
  const tdsInput    = document.getElementById('tds');

  const btnCamera   = document.getElementById('btnCamera');
  const btnSwitch   = document.getElementById('btnSwitch');
  const btnCloseCam = document.getElementById('btnCloseCam');
  const btnDetect   = document.getElementById('btnDetect');
  const btnLocation = document.getElementById('btnLocation');
  const btnAnalyze  = document.getElementById('btnAnalyze');
  const btnSave     = document.getElementById('btnSave');
  const btnClear    = document.getElementById('btnClear');
  const btnCheckTds = document.getElementById('btnCheckTds');

  const historyBody  = document.getElementById('historyBody');
  const statusCard   = document.getElementById('statusCard');
  const statusScore  = document.getElementById('statusScore');
  const statusBadge  = document.getElementById('statusBadge');
  const statusText   = document.getElementById('statusText');
  const sPh          = document.getElementById('sPh');
  const sTemp        = document.getElementById('sTemp');
  const sTurb        = document.getElementById('sTurb');
  const camInfo      = document.getElementById('camInfo');
  const locationMain = document.getElementById('locationMain');

  const tdsFlagText  = document.getElementById('tdsFlagText');
  const tdsNoteText  = document.getElementById('tdsNoteText');

  const STORAGE_KEY = 'whReadings';

  // -------------------------
  // State
  // -------------------------
  let currentLat = null;
  let currentLng = null;
  let currentPlace = '';
  let stream = null;
  let facingMode = 'environment'; // 'user' or 'environment'

  // Ensure video + canvas exist; if canvas missing (your HTML had a typo), create it.
  const video = document.getElementById('cameraView');
  let canvas = document.getElementById('phCanvas');
  if (!canvas) {
    canvas = document.createElement('canvas');
    canvas.id = 'phCanvas';
    canvas.style.display = 'none';
    // place it next to video if cam-box exists
    const camBox = document.querySelector('.cam-box');
    if (camBox) camBox.appendChild(canvas);
    else document.body.appendChild(canvas);
  }
  const ctx = canvas.getContext ? canvas.getContext('2d', { willReadFrequently: true }) : null;

  // -------------------------
  // Leaflet map init (defensive - require leaflet script loaded)
  // -------------------------
  let map, markersLayer;
  try {
    map = L.map('map', { zoomControl: true, scrollWheelZoom: false }).setView([23, 80], 4.5);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 13,
      attribution: '© OpenStreetMap'
    }).addTo(map);
    markersLayer = L.layerGroup().addTo(map);
  } catch (e) {
    console.warn('Leaflet map not available or not loaded:', e);
    map = null;
    markersLayer = { clearLayers: () => {}, addLayer: () => {} };
  }

  function markerColor(index) {
    if (index >= 75) return 'green';
    if (index >= 45) return 'yellow';
    return 'red';
  }

  function addReadingMarker(rec) {
    if (!map || !markersLayer) return;
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
    }).addTo(markersLayer).bindPopup(popupHtml);
  }

  // -------------------------
  // Reverse geocode (Nominatim)
  // -------------------------
  function formatLocation(address) {
    if (!address) return 'Unknown location';
    const detail   = address.road || address.neighbourhood || address.suburb || address.town || address.village || '';
    const city     = address.city || address.town || address.village || address.suburb || '';
    const state    = address.state || address.region || '';
    const country  = address.country || '';
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
      const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`;
      const res = await fetch(url, { headers: { 'Accept-Language': 'en' } });
      const data = await res.json();
      return formatLocation(data.address);
    } catch (e) {
      console.error('Reverse geocode failed', e);
      return 'Unknown location';
    }
  }

  if (btnLocation) {
    btnLocation.addEventListener('click', () => {
      if (!navigator.geolocation) {
        alert('Geolocation not supported by this browser.');
        return;
      }
      navigator.geolocation.getCurrentPosition(async pos => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;
        const label = await reverseGeocode(lat, lng);
        currentLat = lat; currentLng = lng; currentPlace = label;
        if (locationMain) locationMain.textContent = label;
        if (map) map.setView([lat, lng], 16);
        addReadingMarker({
          ph: phInput.value || '–',
          temp: tempInput.value || '–',
          turb: turbSelect.value || '–',
          tds: tdsInput.value ? Number(tdsInput.value) : null,
          index: 0, drinkableFlag: '', lat, lng, place: label
        });
      }, () => alert('Could not get location.'), {
        enableHighAccuracy: true, timeout: 10000, maximumAge: 30000
      });
    });
  }

  // -------------------------
  // Camera system (stable)
  // -------------------------
  async function startCamera() {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      alert('Camera API not supported in this browser.');
      return;
    }
    try {
      // prefer exact facing if supported
      const constraints = { video: { facingMode }, audio: false };
      stream = await navigator.mediaDevices.getUserMedia(constraints);
      if (!video) {
        alert('Video element missing in page.');
        return;
      }
      video.srcObject = stream;
      video.muted = true;
      video.playsInline = true;
      await video.play();
      video.style.display = 'block';
      if (canvas) canvas.style.display = 'none';
      if (camInfo) camInfo.textContent = 'Camera opened. Align the strip inside the dashed box.';
    } catch (err) {
      console.error('startCamera error:', err);
      alert('Camera not available or permission denied. Ensure you are on HTTPS and allow camera permission.');
    }
  }

  function stopCamera() {
    if (stream) {
      stream.getTracks().forEach(t => { try { t.stop(); } catch (e){} });
      stream = null;
    }
    if (video) {
      video.pause();
      try { video.srcObject = null; } catch (e) {}
      video.style.display = 'none';
    }
    if (canvas) canvas.style.display = 'none';
    if (camInfo) camInfo.textContent = 'Camera closed.';
  }

  async function switchCamera() {
    facingMode = facingMode === 'environment' ? 'user' : 'environment';
    stopCamera();
    // small delay helps some devices
    setTimeout(startCamera, 250);
  }

  // pH reference table (RGB samples for each full pH integer)
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
    return Math.sqrt((a[0]-b[0])**2 + (a[1]-b[1])**2 + (a[2]-b[2])**2);
  }

  // Map measured RGB to pH using nearest neighbors + linear interpolation
  function rgbToPh(r, g, b) {
    // find closest and next closest reference
    let bestIdx = -1, nextIdx = -1;
    let bestDist = Infinity, nextDist = Infinity;
    for (let i = 0; i < phReference.length; i++) {
      const dist = rgbDistance([r,g,b], phReference[i].rgb);
      if (dist < bestDist) {
        nextDist = bestDist; nextIdx = bestIdx;
        bestDist = dist; bestIdx = i;
      } else if (dist < nextDist) {
        nextDist = dist; nextIdx = i;
      }
    }
    if (bestIdx === -1) return 7.0; // fallback neutral

    const bestPh = phReference[bestIdx].pH;
    const nextPh = nextIdx === -1 ? bestPh : phReference[nextIdx].pH;

    // If the two are adjacent pH integers, interpolate by inverse-distance
    if (nextIdx !== -1 && Math.abs(bestPh - nextPh) <= 2 && (bestDist + nextDist) > 0) {
      const weighted = (bestPh * (1/Math.max(bestDist,0.0001)) + nextPh * (1/Math.max(nextDist,0.0001))) /
                       ((1/Math.max(bestDist,0.0001)) + (1/Math.max(nextDist,0.0001)));
      return Math.min(14, Math.max(0, weighted));
    }
    // else return nearest integer pH
    return bestPh;
  }

  // -------------------------
  // Capture color and detect pH
  // -------------------------
  function captureColorAndDetectPh() {
    if (!video || !canvas || !ctx) {
      alert('Camera or canvas element missing.');
      return;
    }
    if (!video.videoWidth || !video.videoHeight) {
      alert('Open the camera and wait a moment, then tap Capture again.');
      return;
    }

    const w = video.videoWidth;
    const h = video.videoHeight;
    // use center box area (configurable)
    const boxSize = Math.round(Math.min(w, h) * 0.12); // 12% of smaller dimension
    const sx = Math.floor(w/2 - boxSize/2);
    const sy = Math.floor(h/2 - boxSize/2);

    canvas.width = w;
    canvas.height = h;
    // draw current frame onto canvas
    try {
      ctx.drawImage(video, 0, 0, w, h);
    } catch (e) {
      console.error('drawImage failed', e);
      alert('Capture failed — try again.');
      return;
    }
    // get pixel block
    let img;
    try {
      img = ctx.getImageData(sx, sy, boxSize, boxSize);
    } catch (e) {
      console.error('getImageData failed', e);
      alert('Capture failed — browser security or CORS issue.');
      return;
    }

    let r = 0, g = 0, b = 0;
    const data = img.data;
    const pixels = data.length / 4;
    for (let i = 0; i < data.length; i += 4) {
      r += data[i];
      g += data[i+1];
      b += data[i+2];
    }
    r = r / pixels; g = g / pixels; b = b / pixels;

    const detectedPh = rgbToPh(r, g, b);
    // fill input and show popup (user selected option B)
    if (phInput) {
      phInput.value = detectedPh.toFixed(2);
    }
    if (camInfo) {
      camInfo.textContent = `Captured avg color R${r.toFixed(0)} G${g.toFixed(0)} B${b.toFixed(0)} → pH ≈ ${detectedPh.toFixed(2)}`;
    }

    // show a popup + auto-fill (user chose B)
    alert(`Detected pH ≈ ${detectedPh.toFixed(2)} — value has been entered into the pH box.`);

    // optionally hide canvas (we used it only for processing)
    canvas.style.display = 'none';
  }

  // wire camera buttons (defensive - check existence)
  if (btnCamera) btnCamera.addEventListener('click', startCamera);
  if (btnCloseCam) btnCloseCam.addEventListener('click', stopCamera);
  if (btnSwitch) btnSwitch.addEventListener('click', switchCamera);
  if (btnDetect) btnDetect.addEventListener('click', captureColorAndDetectPh);

  // -------------------------
  // Scoring / analyze logic
  // -------------------------
  function scorePh(ph) {
    if (isNaN(ph)) return 0;
    const d = Math.abs(ph - 7);
    if (d >= 3) return 0;
    const s = 1 - d/3;
    return Math.round(100 * s * s);
  }
  function scoreTemp(temp) {
    if (isNaN(temp)) return 0;
    const d = Math.abs(temp - 25);
    if (d >= 25) return 0;
    const s = 1 - d/25;
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
    const ph = parseFloat(phInput && phInput.value);
    const temp = parseFloat(tempInput && tempInput.value);
    const turb = turbSelect && turbSelect.value;

    if (isNaN(ph) || isNaN(temp) || !turb) {
      alert('Please enter pH, temperature, and select turbidity.');
      return null;
    }

    const idx = calcIndex(ph, temp, turb);
    const badge = classifyIndex(idx);

    if (statusScore) statusScore.textContent = idx;
    if (statusBadge) {
      statusBadge.textContent = badge;
      // colour
      if (badge === 'EXCELLENT') statusBadge.style.background = '#1c6b3f';
      else if (badge === 'GOOD') statusBadge.style.background = '#2c9b5a';
      else if (badge === 'FAIR') statusBadge.style.background = '#d0a000';
      else if (badge === 'POOR') statusBadge.style.background = '#c45a2f';
      else statusBadge.style.background = '#b02030';
    }

    let msg = messages[messages.length - 1];
    for (let i = 0; i < thresholds.length; i++) {
      if (idx >= thresholds[i]) { msg = messages[i]; break; }
    }

    let summary = '';
    if (badge === 'EXCELLENT') summary = 'Excellent water quality – good for drinking, cooking and crops.';
    else if (badge === 'GOOD') summary = 'Good water – usually safe for drinking with simple precautions.';
    else if (badge === 'FAIR') summary = 'Fair water – use for drinking only with treatment; fine for most crops.';
    else if (badge === 'POOR') summary = 'Poor quality – avoid for drinking; use carefully for irrigation.';
    else summary = 'Very poor – treat as contaminated; avoid for people and animals.';

    if (statusText) statusText.textContent = summary + ' ' + msg;
    if (sPh) sPh.textContent = ph.toFixed(2);
    if (sTemp) sTemp.textContent = temp.toFixed(1) + '°C';
    if (sTurb) sTurb.textContent = turb;
    if (statusCard) statusCard.style.display = 'flex';

    return { ph, temp, turb, index: idx };
  }

  if (btnAnalyze) btnAnalyze.addEventListener('click', analyze);

  // -------------------------
  // TDS drinking safety
  // -------------------------
  function classifyDrinkability(ph, tds) {
    const safePh = ph >= 6.5 && ph <= 8.5;
    if (isNaN(tds)) {
      return { flag: 'UNKNOWN', label: 'Add TDS', note: 'Enter TDS to get a drinking-safety result based on pH and dissolved solids.' };
    }
    if (!safePh) {
      return { flag: 'PH_OUT_OF_RANGE', label: 'pH outside safe band', note: 'The TDS looks okay, but pH is outside the usual 6.5–8.5 range for safe drinking.' };
    }
    if (tds < 50) return { flag: 'VERY_LOW_TDS', label: 'Very low minerals', note: 'Water is safe but very low minerals; long-term use may lack essential salts.' };
    if (tds < 150) return { flag: 'SOFT_WATER', label: 'Soft water', note: 'Low-mineral water — generally safe for drinking.' };
    if (tds < 300) return { flag: 'IDEAL_RANGE', label: 'Ideal range', note: 'Preferred TDS range (~150–300 mg/L) for good-tasting drinking water.' };
    if (tds < 600) return { flag: 'ACCEPTABLE', label: 'Acceptable', note: 'Acceptable for most people though taste may be mineral-rich.' };
    if (tds < 900) return { flag: 'HARD_WATER', label: 'Hard water', note: 'High TDS – may cause scaling.' };
    if (tds < 1200) return { flag: 'VERY_HARD_WATER', label: 'Very hard water', note: 'Very high TDS – avoid long-term drinking.' };
    return { flag: 'NOT_DRINKABLE', label: 'Not recommended for drinking', note: 'Extremely high TDS — avoid.' };
  }

  function updateTdsUI(result) {
    if (!result) return;
    if (tdsFlagText) tdsFlagText.textContent = result.label;
    if (tdsNoteText) tdsNoteText.textContent = result.note;
    if (tdsFlagText) {
      if (result.flag === 'IDEAL_RANGE' || result.flag === 'SOFT_WATER') tdsFlagText.style.color = '#55ebca';
      else if (['ACCEPTABLE','HARD_WATER','VERY_LOW_TDS'].includes(result.flag)) tdsFlagText.style.color = '#ffd26a';
      else if (['VERY_HARD_WATER','PH_OUT_OF_RANGE'].includes(result.flag)) tdsFlagText.style.color = '#ffb36a';
      else if (result.flag === 'NOT_DRINKABLE') tdsFlagText.style.color = '#ff7a7a';
      else tdsFlagText.style.color = '#e3fbfa';
    }
  }

  if (btnCheckTds) {
    btnCheckTds.addEventListener('click', () => {
      const ph = parseFloat(phInput && phInput.value);
      const tds = parseFloat(tdsInput && tdsInput.value);
      if (isNaN(ph)) { alert('Enter or measure pH first.'); return; }
      const result = classifyDrinkability(ph, tds);
      updateTdsUI(result);
    });
  }

  // -------------------------
  // History (localStorage)
  // -------------------------
  function loadHistory() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
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
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(list)); }
    catch (e) { console.error('Failed to save history', e); }
  }

  function renderHistory() {
    const list = loadHistory();
    historyBody.innerHTML = '';
    try { if (markersLayer && markersLayer.clearLayers) markersLayer.clearLayers(); } catch(e){}

    if (!list.length) {
      const tr = document.createElement('tr');
      const td = document.createElement('td');
      td.colSpan = 7; td.style.color = '#7ba9b0'; td.textContent = 'No readings saved.';
      tr.appendChild(td); historyBody.appendChild(tr); return;
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
    const tdsVal = tdsInput && tdsInput.value ? parseFloat(tdsInput.value) : NaN;
    const drink = classifyDrinkability(analysis.ph, isNaN(tdsVal) ? NaN : tdsVal);
    const list = loadHistory();
    const rec = {
      when: new Date().toLocaleString(),
      ph: analysis.ph.toFixed(2),
      temp: analysis.temp.toFixed(1),
      turb: analysis.turb,
      tds: isNaN(tdsVal) ? null : Math.round(tdsVal),
      index: analysis.index,
      drinkableFlag: drink.flag,
      drinkableNote: drink.note,
      lat: currentLat, lng: currentLng, place: currentPlace
    };
    list.push(rec);
    saveHistory(list);
    renderHistory();
  }

  if (btnSave) btnSave.addEventListener('click', saveReading);
  if (btnClear) {
    btnClear.addEventListener('click', () => {
      if (confirm('Clear all saved readings?')) {
        localStorage.removeItem(STORAGE_KEY);
        renderHistory();
      }
    });
  }

  // initial
  renderHistory();

  // -------------------------
  // Clean up camera when navigating away
  // -------------------------
  window.addEventListener('pagehide', () => stopCamera());
  window.addEventListener('beforeunload', () => stopCamera());
});
