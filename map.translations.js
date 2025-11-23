// map.translations.js

const MAP_STRINGS = {
  // English
  en: {
    // Nav
    nav_home: "Home",
    nav_measure: "Measure",
    nav_map: "Map",
    nav_care: "Care",
    nav_farmers: "Farmers Assistant",
    nav_chart: "Chart",
    nav_learn: "Learn",
    nav_buykit: "Buy Kit",
    nav_about: "About",

    // Header
    map_title: "Water quality map",
    map_subtitle:
      "Explore your saved readings on an interactive map. Tap a point to see details and jump to care or farmer advice.",

    // Filters + legend
    map_filter_label: "Show band",
    map_filter_all: "All readings",
    map_filter_good: "Good (≥ 70)",
    map_filter_med: "Moderate (40–69)",
    map_filter_poor: "Poor (< 40)",

    map_btn_locate: "My location",

    map_legend_good: "Good (index ≥ 70)",
    map_legend_med: "Moderate (40–69)",
    map_legend_poor: "Poor (< 40)",
    map_legend_noloc: "Saved without location",

    // Details
    map_details_title: "Reading details",
    map_details_empty:
      "Tap a marker or pick a reading from the list to see its details here.",
    details_line: "Saved at {when} • {place}",
    details_sub: "Index {index} • pH {ph} • Temp {temp}°C • Turbidity {turb}",
    details_noloc:
      "This reading has no location saved. You can still use it for care or crop advice.",
    details_hasloc:
      "This reading is linked to a map location. Use it to plan care or farming actions nearby.",

    band_good: "Good quality",
    band_med: "Moderate quality",
    band_poor: "Poor quality",
    band_unknown: "No index",

    map_btn_care: "Open care advice",
    map_btn_farm: "Open farmer tips",

    // Recent list
    map_recent_title: "Recent readings",
    map_recent_empty:
      "No readings saved yet. Use the Measure page to add some, then come back here.",
    recent_line: "Index {index}, pH {ph}",
    recent_count: "{n} saved reading(s)",

    // Footer
    map_footer_note:
      "Tip: Tap a saved reading to zoom the map, then open Care or Farmers Assistant for next steps."
  },

  // Hindi
  hi: {
    nav_home: "होम",
    nav_measure: "मापन",
    nav_map: "मानचित्र",
    nav_care: "देखभाल",
    nav_farmers: "किसान सहायक",
    nav_chart: "चार्ट",
    nav_learn: "सीखें",
    nav_buykit: "किट खरीदें",
    nav_about: "परियोजना",

    map_title: "जल गुणवत्ता मानचित्र",
    map_subtitle:
      "अपनी सहेजी गई रीडिंग्स को इंटरैक्टिव मानचित्र पर देखें। किसी बिंदु पर टैप करके विवरण देखें और देखभाल या किसान सलाह वाले पेज पर जाएँ।",

    map_filter_label: "बैंड दिखाएँ",
    map_filter_all: "सभी रीडिंग्स",
    map_filter_good: "अच्छा (≥ 70)",
    map_filter_med: "मध्यम (40–69)",
    map_filter_poor: "खराब (< 40)",

    map_btn_locate: "मेरा स्थान",

    map_legend_good: "अच्छा (सूचकांक ≥ 70)",
    map_legend_med: "मध्यम (40–69)",
    map_legend_poor: "खराब (< 40)",
    map_legend_noloc: "स्थान बिना सहेजी गई रीडिंग",

    map_details_title: "रीडिंग विवरण",
    map_details_empty:
      "मानचित्र पर किसी मार्कर या सूची से रीडिंग चुनें, और यहाँ उसका विवरण देखें।",
    details_line: "सहेजा गया समय: {when} • {place}",
    details_sub:
      "सूचकांक {index} • pH {ph} • तापमान {temp}°C • अस्पष्टता {turb}",
    details_noloc:
      "इस रीडिंग के साथ स्थान सहेजा नहीं है, फिर भी आप इसे देखभाल या फसल सलाह के लिए उपयोग कर सकते हैं।",
    details_hasloc:
      "यह रीडिंग मानचित्र पर एक स्थान से जुड़ी है। पास की जगहों के लिए देखभाल और खेती की योजना बना सकते हैं।",

    band_good: "अच्छी गुणवत्ता",
    band_med: "मध्यम गुणवत्ता",
    band_poor: "खराब गुणवत्ता",
    band_unknown: "कोई सूचकांक नहीं",

    map_btn_care: "देखभाल सलाह खोलें",
    map_btn_farm: "किसान सुझाव खोलें",

    map_recent_title: "हाल की रीडिंग्स",
    map_recent_empty:
      "अभी तक कोई रीडिंग सेव नहीं है। पहले मापन पेज से रीडिंग जोड़ें और फिर यहाँ आएँ।",
    recent_line: "सूचकांक {index}, pH {ph}",
    recent_count: "{n} सहेजी गई रीडिंग",

    map_footer_note:
      "टिप: किसी सहेजी गई रीडिंग पर टैप करें, मानचित्र ज़ूम होगा, फिर आगे के कदमों के लिए देखभाल या किसान सहायक पेज खोलें।"
  },

  // Bengali
  bn: {
    nav_home: "হোম",
    nav_measure: "মাপ",
    nav_map: "মানচিত্র",
    nav_care: "যত্ন",
    nav_farmers: "কৃষক সহায়তা",
    nav_chart: "চার্ট",
    nav_learn: "শিখুন",
    nav_buykit: "কিট কিনুন",
    nav_about: "প্রকল্প",

    map_title: "জল মান মানচিত্র",
    map_subtitle:
      "আপনার সব সংরক্ষিত রিডিং একটি মানচিত্রে দেখুন। যে পয়েন্টে ট্যাপ করবেন তার বিস্তারিত দেখুন এবং যত্ন বা কৃষক সহায়তা পাতায় যান।",

    map_filter_label: "ব্যান্ড দেখান",
    map_filter_all: "সব রিডিং",
    map_filter_good: "ভাল (≥ 70)",
    map_filter_med: "মাঝারি (40–69)",
    map_filter_poor: "খারাপ (< 40)",

    map_btn_locate: "আমার অবস্থান",

    map_legend_good: "ভাল (সূচক ≥ 70)",
    map_legend_med: "মাঝারি (40–69)",
    map_legend_poor: "খারাপ (< 40)",
    map_legend_noloc: "অবস্থান ছাড়া সংরক্ষিত রিডিং",

    map_details_title: "রিডিংয়ের বিস্তারিত",
    map_details_empty:
      "মানচিত্রে কোনও মার্কারে ট্যাপ করুন বা তালিকা থেকে রিডিং বেছে নিন, এখানে বিস্তারিত দেখতে।",
    details_line: "সংরক্ষণের সময়: {when} • {place}",
    details_sub:
      "সূচক {index} • pH {ph} • তাপমাত্রা {temp}°C • ঘোলাভাব {turb}",
    details_noloc:
      "এই রিডিং‑এর সঙ্গে কোনও অবস্থান নেই, তবুও যত্ন বা ফসল পরামর্শের জন্য ব্যবহার করা যাবে।",
    details_hasloc:
      "এই রিডিং মানচিত্রের একটি স্থানের সঙ্গে যুক্ত। আশেপাশে যত্ন ও চাষের পরিকল্পনা করতে সাহায্য করবে।",

    band_good: "ভাল মানের পানি",
    band_med: "মাঝারি মানের পানি",
    band_poor: "খারাপ মানের পানি",
    band_unknown: "সূচক নেই",

    map_btn_care: "যত্নের পরামর্শ খুলুন",
    map_btn_farm: "কৃষক টিপস খুলুন",

    map_recent_title: "সাম্প্রতিক রিডিং",
    map_recent_empty:
      "এখনো কোনো রিডিং সংরক্ষিত নেই। মাপ পেজ থেকে রিডিং যোগ করে আবার এখানে আসুন।",
    recent_line: "সূচক {index}, pH {ph}",
    recent_count: "{n}টি সংরক্ষিত রিডিং",

    map_footer_note:
      "টিপস: কোনো রিডিংয়ে ট্যাপ করলে মানচিত্র জুম হবে, তারপর যত্ন বা কৃষক সহায়তা পেজ খুলে পরের ধাপ ঠিক করুন।"
  },

  // Tamil
  ta: {
    nav_home: "முகப்பு",
    nav_measure: "அளவீடு",
    nav_map: "வரைபடம்",
    nav_care: "பராமரிப்பு",
    nav_farmers: "விவசாயி உதவி",
    nav_chart: "வரைபட அட்டவணை",
    nav_learn: "கற்பது",
    nav_buykit: "கிட் வாங்க",
    nav_about: "திட்டம்",

    map_title: "நீர் தர வரைபடம்",
    map_subtitle:
      "உங்கள் சேமிக்கப்பட்ட அளவீடுகளை வரைபடத்தில் காணலாம். ஒரு இடத்தில் தட்டினால் முழு விவரம் தெரியும், அங்கிருந்து பராமரிப்பு அல்லது விவசாயி ஆலோசனைப் பக்கத்துக்கு செல்லலாம்.",

    map_filter_label: "தர நிலை காண்பி",
    map_filter_all: "அனைத்து அளவீடுகள்",
    map_filter_good: "நன்று (≥ 70)",
    map_filter_med: "சராசரி (40–69)",
    map_filter_poor: "மோசம் (< 40)",

    map_btn_locate: "என் இருப்பிடம்",

    map_legend_good: "நன்று (குறியீடு ≥ 70)",
    map_legend_med: "சராசரி (40–69)",
    map_legend_poor: "மோசம் (< 40)",
    map_legend_noloc: "இருப்பிடமின்றி சேமிக்கப்பட்டது",

    map_details_title: "அளவீட்டு விவரம்",
    map_details_empty:
      "வரைபடத்தில் ஒரு குறியை அல்லது பட்டியலில் உள்ள ஒரு வரியைத் தட்டி, விவரத்தை இங்கே பார்க்கவும்.",
    details_line: "சேமித்த நேரம்: {when} • {place}",
    details_sub:
      "குறியீடு {index} • pH {ph} • வெப்பநிலை {temp}°C • தெளிவின்மை {turb}",
    details_noloc:
      "இந்த அளவீட்டில் இருப்பிடம் சேமிக்கப்படவில்லை. இருப்பினும் பராமரிப்பு அல்லது பயிர் ஆலோசனைக்காக பயன்படுத்தலாம்.",
    details_hasloc:
      "இந்த அளவீடு வரைபடத்தில் ஒரு இடத்துடன் இணைக்கப்பட்டுள்ளது. அருகிலுள்ள பராமரிப்பு மற்றும் பயிர் திட்டமிட உதவும்.",

    band_good: "நல்ல தரம்",
    band_med: "சராசரி தரம்",
    band_poor: "மோசமான தரம்",
    band_unknown: "குறியீடு இல்லை",

    map_btn_care: "பராமரிப்பு ஆலோசனை",
    map_btn_farm: "விவசாயி குறிப்புகள்",

    map_recent_title: "சமீபத்திய அளவீடுகள்",
    map_recent_empty:
      "இப்பொழுது எந்த அளவீடும் சேமிக்கப்படவில்லை. முதலில் அளவீடு பக்கத்தில் சேமித்து, பின்னர் இங்கு வாருங்கள்.",
    recent_line: "குறியீடு {index}, pH {ph}",
    recent_count: "மொத்தம் {n} சேமிக்கப்பட்ட அளவீடு",

    map_footer_note:
      "குறிப்பு: சேமித்த அளவீட்டைத் தட்டினால் வரைபடம் அந்த இடத்துக்கு ஜூம் ஆகும்; அங்கிருந்து பராமரிப்பு அல்லது விவசாயி உதவி பக்கத்துக்கு செல்லலாம்."
  },

  // Marathi
  mr: {
    nav_home: "मुख्यपृष्ठ",
    nav_measure: "मापन",
    nav_map: "नकाशा",
    nav_care: "देखभाल",
    nav_farmers: "शेतकरी सहाय्यक",
    nav_chart: "चार्ट",
    nav_learn: "शिका",
    nav_buykit: "किट खरेदी",
    nav_about: "प्रकल्प",

    map_title: "पाण्याच्या गुणवत्तेचा नकाशा",
    map_subtitle:
      "तुमच्या सर्व जतन केलेल्या मोजमापांना नकाशावर पाहा. कुठल्याही ठिकाणी टॅप करा आणि तपशील पाहून देखभाल किंवा शेतकऱ्यांसाठीच्या सल्ल्याकडे जा.",

    map_filter_label: "पट्टा दाखवा",
    map_filter_all: "सर्व मोजमाप",
    map_filter_good: "चांगले (≥ 70)",
    map_filter_med: "मध्यम (40–69)",
    map_filter_poor: "खराब (< 40)",

    map_btn_locate: "माझे स्थान",

    map_legend_good: "चांगले (सुचकांक ≥ 70)",
    map_legend_med: "मध्यम (40–69)",
    map_legend_poor: "खराब (< 40)",
    map_legend_noloc: "स्थानाशिवाय जतन केलेले मोजमाप",

    map_details_title: "मोजमापाची माहिती",
    map_details_empty:
      "नकाशावरील मार्करवर किंवा यादीतील रकान्यावर टॅप करा आणि तपशील येथे पाहा.",
    details_line: "जतन केलेला वेळ: {when} • {place}",
    details_sub:
      "सुचकांक {index} • pH {ph} • तापमान {temp}°C • गढूळपणा {turb}",
    details_noloc:
      "या मोजमापाबरोबर स्थान जतन केलेले नाही, तरीही ते देखभाल किंवा पिक सल्ल्यासाठी वापरू शकता.",
    details_hasloc:
      "हे मोजमाप नकाशावरील एका ठिकाणाशी जोडलेले आहे. जवळच्या भागासाठी देखभाल आणि शेती नियोजनास मदत होते.",

    band_good: "चांगली गुणवत्ता",
    band_med: "मध्यम गुणवत्ता",
    band_poor: "खराब गुणवत्ता",
    band_unknown: "सुचकांक नाही",

    map_btn_care: "देखभाल सल्ला उघडा",
    map_btn_farm: "शेतकरी टिप्स उघडा",

    map_recent_title: "अलीकडची मोजमापे",
    map_recent_empty:
      "अजून कोणतेही मोजमाप जतन केलेले नाही. आधी मापन पृष्ठावर मोजमाप करा आणि नंतर येथे या.",
    recent_line: "सुचकांक {index}, pH {ph}",
    recent_count: "एकूण {n} जतन केलेली मोजमापे",

    map_footer_note:
      "सूचना: जतन केलेल्या मोजमापावर टॅप करा, नकाशा त्या ठिकाणी झूम होईल आणि पुढील टप्प्यासाठी देखभाल किंवा शेतकरी सहाय्यक पृष्ठ उघडा."
  },

  // Gujarati
  gu: {
    nav_home: "મુખપૃષ્ઠ",
    nav_measure: "માપ",
    nav_map: "નકશો",
    nav_care: "કાળજી",
    nav_farmers: "ખેડૂત સહાય",
    nav_chart: "ચાર્ટ",
    nav_learn: "શીખો",
    nav_buykit: "કિટ ખરીદો",
    nav_about: "પ્રોજેક્ટ",

    map_title: "પાણીની ગુણવત્તાનો નકશો",
    map_subtitle:
      "તમારા બધા સચવાયેલ રીડિંગને નકશા પર જુઓ. કોઈ બિંદુ પર ટેપ કરો અને વિગત જુઓ, પછી કાળજી કે ખેડૂત સહાય પેજ પર જાઓ.",

    map_filter_label: "બેન્ડ બતાવો",
    map_filter_all: "બધી રીડિંગ્સ",
    map_filter_good: "સારો (≥ 70)",
    map_filter_med: "મધ્યમ (40–69)",
    map_filter_poor: "ખરાબ (< 40)",

    map_btn_locate: "મારું સ્થાન",

    map_legend_good: "સારો (સૂચકાંક ≥ 70)",
    map_legend_med: "મધ્યમ (40–69)",
    map_legend_poor: "ખરાબ (< 40)",
    map_legend_noloc: "સ્થાન વિના સચવાયેલું રીડિંગ",

    map_details_title: "રીડિંગ વિગતો",
    map_details_empty:
      "નકશા પર કોઈ માર્કર અથવા યાદીમાંથી રીડિંગ પસંદ કરો અને અહીં વિગતો જુઓ.",
    details_line: "સચવાયેલ સમય: {when} • {place}",
    details_sub:
      "સૂચકાંક {index} • pH {ph} • તાપમાન {temp}°C • ગંદકાપણું {turb}",
    details_noloc:
      "આ રીડિંગ સાથે કોઈ સ્થાન સચવાયેલું નથી, છતાં તમે તેને કાળજી અથવા પાક સલાહ માટે ઉપયોગ કરી શકો છો.",
    details_hasloc:
      "આ રિડિંગ નકશા પરના એક સ્થાન સાથે જોડાયેલ છે. આસપાસના વિસ્તાર માટે કાળજી અને ખેતીની યોજના બનાવવામાં મદદ કરે છે.",

    band_good: "સારી ગુણવત્તા",
    band_med: "મધ્યમ ગુણવત્તા",
    band_poor: "ખરાબ ગુણવત્તા",
    band_unknown: "સૂચકાંક નથી",

    map_btn_care: "કાળજીની સલાહ ખોલો",
    map_btn_farm: "ખેડૂત ટીપ્સ ખોલો",

    map_recent_title: "નવાં રીડિંગ્સ",
    map_recent_empty:
      "હજુ સુધી કોઈ રિડિંગ સચવાયેલું નથી. પહેલા માપ પેજ પર જાઓ, રિડિંગ સચવો અને પછી અહીં આવો.",
    recent_line: "સૂચકાંક {index}, pH {ph}",
    recent_count: "કુલ {n} સચવાયેલ રીડિંગ્સ",

    map_footer_note:
      "ટિપ: સચવાયેલ રીડિંગ પર ટેપ કરો, નકશો તે સ્થાન પર ઝૂમ થશે, પછી આગળના પગલાં માટે કાળજી અથવા ખેડૂત સહાય પેજ ખોલો."
  },

  // Punjabi
  pa: {
    nav_home: "ਹੋਮ",
    nav_measure: "ਮਾਪ",
    nav_map: "ਨਕਸ਼ਾ",
    nav_care: "ਦੇਖਭਾਲ",
    nav_farmers: "ਕਿਸਾਨ ਸਹਾਇਕ",
    nav_chart: "ਚਾਰਟ",
    nav_learn: "ਸਿੱਖੋ",
    nav_buykit: "ਕਿਟ ਖਰੀਦੋ",
    nav_about: "ਪ੍ਰੋਜੈਕਟ",

    map_title: "ਪਾਣੀ ਦੀ ਗੁਣਵੱਤਾ ਦਾ ਨਕਸ਼ਾ",
    map_subtitle:
      "ਆਪਣੀਆਂ ਸਾਰੀਆਂ ਸੰਭਾਲੀਆਂ ਰੀਡਿੰਗਾਂ ਨੂੰ ਨਕਸ਼ੇ ਉੱਤੇ ਵੇਖੋ। ਕਿਸੇ ਬਿੰਦੂ 'ਤੇ ਟੈਪ ਕਰੋ, ਵੇਰਵਾ ਵੇਖੋ ਅਤੇ ਫਿਰ ਦੇਖਭਾਲ ਜਾਂ ਕਿਸਾਨ ਸਹਾਇਤਾ ਪੇਜ 'ਤੇ ਜਾਓ।",

    map_filter_label: "ਬੈਂਡ ਦਿਖਾਓ",
    map_filter_all: "ਸਭ ਰੀਡਿੰਗਾਂ",
    map_filter_good: "ਵਧੀਆ (≥ 70)",
    map_filter_med: "ਦਰਮਿਆਨਾ (40–69)",
    map_filter_poor: "ਨਿਰਾਸ਼ਾਜਨਕ (< 40)",

    map_btn_locate: "ਮੇਰਾ ਥਾਂ",

    map_legend_good: "ਵਧੀਆ (ਸੂਚਕ ≥ 70)",
    map_legend_med: "ਦਰਮਿਆਨਾ (40–69)",
    map_legend_poor: "ਨਿਰਾਸ਼ਾਜਨਕ (< 40)",
    map_legend_noloc: "ਥਾਂ ਬਿਨਾ ਸੇਵ ਕੀਤੀ ਰੀਡਿੰਗ",

    map_details_title: "ਰੀਡਿੰਗ ਦੇ ਵੇਰਵੇ",
    map_details_empty:
      "ਨਕਸ਼ੇ ਉੱਤੇ ਕਿਸੇ ਮਾਰਕਰ ਜਾਂ ਸੂਚੀ ਵਿੱਚੋਂ ਇੱਕ ਰੀਡਿੰਗ ਚੁਣੋ ਅਤੇ ਵੇਰਵੇ ਇੱਥੇ ਵੇਖੋ।",
    details_line: "ਸੰਭਾਲਣ ਦਾ ਸਮਾਂ: {when} • {place}",
    details_sub:
      "ਸੂਚਕ {index} • pH {ph} • ਤਾਪਮਾਨ {temp}°C • ਗੰਦਲਾਪਣ {turb}",
    details_noloc:
      "ਇਸ ਰੀਡਿੰਗ ਨਾਲ ਕੋਈ ਥਾਂ ਸੇਵ ਨਹੀਂ ਹੈ, ਪਰ ਫਿਰ ਵੀ ਇਸ ਨੂੰ ਦੇਖਭਾਲ ਜਾਂ ਫਸਲ ਸਲਾਹ ਲਈ ਵਰਤਿਆ ਜਾ ਸਕਦਾ ਹੈ।",
    details_hasloc:
      "ਇਹ ਰੀਡਿੰਗ ਨਕਸ਼ੇ ਉੱਤੇ ਇੱਕ ਥਾਂ ਨਾਲ ਜੋੜੀ ਹੋਈ ਹੈ। ਨੇੜਲੇ ਖੇਤਰ ਲਈ ਦੇਖਭਾਲ ਅਤੇ ਖੇਤੀ ਦੀ ਯੋਜਨਾ ਬਣਾਉਣ ਵਿੱਚ ਮਦਦ ਕਰਦੀ ਹੈ।",

    band_good: "ਵਧੀਆ ਗੁਣਵੱਤਾ",
    band_med: "ਮੱਧਮ ਗੁਣਵੱਤਾ",
    band_poor: "ਖਰਾਬ ਗੁਣਵੱਤਾ",
    band_unknown: "ਸੂਚਕ ਨਹੀਂ",

    map_btn_care: "ਦੇਖਭਾਲ ਸਲਾਹ ਖੋਲ੍ਹੋ",
    map_btn_farm: "ਕਿਸਾਨ ਟਿੱਪਸ ਖੋਲ੍ਹੋ",

    map_recent_title: "ਤਾਜ਼ਾ ਰੀਡਿੰਗਾਂ",
    map_recent_empty:
      "ਅਜੇ ਤੱਕ ਕੋਈ ਰੀਡਿੰਗ ਸੇਵ ਨਹੀਂ ਕੀਤੀ ਗਈ। ਪਹਿਲਾਂ ਮਾਪ ਪੇਜ 'ਤੇ ਰੀਡਿੰਗ ਸੇਵ ਕਰੋ ਅਤੇ ਫਿਰ ਇੱਥੇ ਆਓ।",
    recent_line: "ਸੂਚਕ {index}, pH {ph}",
    recent_count: "ਕੁੱਲ {n} ਸੇਵ ਕੀਤੀਆਂ ਰੀਡਿੰਗਾਂ",

    map_footer_note:
      "ਸੁਝਾਅ: ਸੇਵ ਕੀਤੀ ਰੀਡਿੰਗ 'ਤੇ ਟੈਪ ਕਰੋ, ਨਕਸ਼ਾ ਉਸ ਥਾਂ ਤੇ ਜ਼ੂਮ ਹੋ ਜਾਵੇਗਾ, ਫਿਰ ਅਗਲੇ ਕਦਮਾਂ ਲਈ ਦੇਖਭਾਲ ਜਾਂ ਕਿਸਾਨ ਸਹਾਇਕ ਪੇਜ ਖੋਲ੍ਹੋ।"
  },

  // Telugu
  te: {
    nav_home: "హోమ్",
    nav_measure: "మాపు",
    nav_map: "మ్యాప్",
    nav_care: "కేర్",
    nav_farmers: "రైతు సహాయం",
    nav_chart: "చార్ట్",
    nav_learn: "నెర్చుకోండి",
    nav_buykit: "కిట్ కొనండి",
    nav_about: "ప్రాజెక్ట్",

    map_title: "నీటి నాణ్యత మ్యాప్",
    map_subtitle:
      "మీరు సేవ్ చేసిన అన్ని రీడింగ్స్‌ను మ్యాప్‌లో చూడండి. ఏ పాయింట్‌పై ట్యాప్ చేస్తే వివరాలు కనిపిస్తాయి; అక్కడి నుంచి కేర్ లేదా రైతు సలహా పేజీకి వెళ్లండి.",

    map_filter_label: "బ్యాండ్ చూపు",
    map_filter_all: "అన్ని రీడింగ్స్",
    map_filter_good: "మంచిది (≥ 70)",
    map_filter_med: "మధ్యస్థం (40–69)",
    map_filter_poor: "చెడు (< 40)",

    map_btn_locate: "నా స్థానం",

    map_legend_good: "మంచిది (సూచిక ≥ 70)",
    map_legend_med: "మధ్యస్థం (40–69)",
    map_legend_poor: "చెడు (< 40)",
    map_legend_noloc: "స్థానం లేకుండా సేవ్ చేసిన రీడింగ్",

    map_details_title: "రీడింగ్ వివరాలు",
    map_details_empty:
      "మ్యాప్‌లో ఒక మార్కర్‌ను లేదా జాబితాలోని రీడింగ్‌ను ఎంచుకుని వివరాలు ఇక్కడ చూడండి.",
    details_line: "సేవ్ చేసిన సమయం: {when} • {place}",
    details_sub:
      "సూచిక {index} • pH {ph} • ఉష్ణోగ్రత {temp}°C • మబ్బుదనం {turb}",
    details_noloc:
      "ఈ రీడింగ్‌కి స్థానం సేవ్ చేయలేదు; అయినా కూడా దీనిని కేర్ లేదా పంట సలహా కోసం ఉపయోగించవచ్చు.",
    details_hasloc:
      "ఈ రీడింగ్ మ్యాప్‌లోని ఒక స్థలంతో లింక్ అయ్యింది. దగ్గర ప్రాంతాల కేర్ మరియు సాగు ప్రణాళికకి ఇది ఉపయోగపడుతుంది.",

    band_good: "మంచి నాణ్యత",
    band_med: "మధ్యస్థ నాణ్యత",
    band_poor: "చెడు నాణ్యత",
    band_unknown: "సూచిక లేదు",

    map_btn_care: "కేర్ సలహా తెరవండి",
    map_btn_farm: "రైతు టిప్స్ తెరవండి",

    map_recent_title: "ఇటీవలి రీడింగ్స్",
    map_recent_empty:
      "ఇంకా ఎటువంటి రీడింగ్ సేవ్ కాలేదు. ముందుగా మాపు పేజీలో రీడింగ్ సేవ్ చేసి, తరువాత ఇక్కడికి రండి.",
    recent_line: "సూచిక {index}, pH {ph}",
    recent_count: "మొత్తం {n} సేవ్ చేసిన రీడింగ్స్",

    map_footer_note:
      "సూచన: సేవ్ చేసిన రీడింగ్‌పై ట్యాప్ చేయండి; మ్యాప్ ఆ స్థలానికి జూమ్ అవుతుంది, తరువాత కేర్ లేదా రైతు సహాయం పేజీకి వెళ్లి తదుపరి చర్యలు ఎంచుకోండి."
  },

  // Kannada
  kn: {
    nav_home: "ಮುಖಪುಟ",
    nav_measure: "ಅಳತೆ",
    nav_map: "ನಕ್ಷೆ",
    nav_care: "ಕಾಳಜಿ",
    nav_farmers: "ರೈತ ಸಹಾಯಕ",
    nav_chart: "ಚಾರ್ಟ್",
    nav_learn: "ಕಲಿಯಿರಿ",
    nav_buykit: "ಕಿಟ್ ಖರೀದಿಸಿ",
    nav_about: "ಯೋಜನೆ",

    map_title: "ನೀರಿನ ಗುಣಮಟ್ಟದ ನಕ್ಷೆ",
    map_subtitle:
      "ನೀವು ಸಂಗ್ರಹಿಸಿದ ಎಲ್ಲಾ ಓದುಗಳನ್ನು ನಕ್ಷೆಯಲ್ಲಿ ನೋಡಿ. ಬಿಂದುವಿನ ಮೇಲೆ ಟ್ಯಾಪ್ ಮಾಡಿದರೆ ವಿವರಗಳು ಕಾಣಿಸುತ್ತವೆ; ಅಲ್ಲಿ നിന്ന് ಕೇರ್ ಅಥವಾ ರೈತ ಸಲಹೆ ಪುಟಕ್ಕೆ ಹೋಗಬಹುದು.",

    map_filter_label: "ಬ್ಯಾಂಡ್ ತೋರಿಸು",
    map_filter_all: "ಎಲ್ಲಾ ಓದುಗಳು",
    map_filter_good: "ಒಳ್ಳೆಯದು (≥ 70)",
    map_filter_med: "ಮಧ್ಯಮ (40–69)",
    map_filter_poor: "ಕೆಟ್ಟದು (< 40)",

    map_btn_locate: "ನನ್ನ ಸ್ಥಳ",

    map_legend_good: "ಒಳ್ಳೆಯದು (ಸೂಚಕ ≥ 70)",
    map_legend_med: "ಮಧ್ಯಮ (40–69)",
    map_legend_poor: "ಕೆಟ್ಟದು (< 40)",
    map_legend_noloc: "ಸ್ಥಳವಿಲ್ಲದೆ ಸಂಗ್ರಹಿಸಿದ ಓದು",

    map_details_title: "ಓದಿನ ವಿವರ",
    map_details_empty:
      "ನಕ್ಷೆಯಲ್ಲಿನ ಮಾರ್ಕರ್ ಅಥವಾ ಪಟ್ಟಿಯಲ್ಲಿನ ಸಾಲನ್ನು ಆಯ್ಕೆ ಮಾಡಿ, ವಿವರಗಳನ್ನು ಇಲ್ಲಿ ನೋಡಿ.",
    details_line: "ಸಂಗ್ರಹಿಸಿದ ಸಮಯ: {when} • {place}",
    details_sub:
      "ಸೂಚಕ {index} • pH {ph} • ತಾಪಮಾನ {temp}°C • ಮಸುಕುದನ {turb}",
    details_noloc:
      "ಈ ಓದಿಗೆ ಸ್ಥಳವನ್ನು ಸಂಗ್ರಹಿಸಿಲ್ಲ. ಆದರೂ ಇದನ್ನು ಕಾಳಜಿ ಅಥವಾ ಬೆಳೆ ಸಲಹೆಗಾಗಿ ಬಳಸಬಹುದು.",
    details_hasloc:
      "ಈ ಓದು ನಕ್ಷೆಯಲ್ಲಿನ ಒಂದು ಸ್ಥಳಕ್ಕೆ ಸಂಪರ್ಕಗೊಂಡಿದೆ. ಸಮೀಪದ ಪ್ರದೇಶಗಳ ಕಾಳಜಿ ಮತ್ತು ಕೃಷಿ ಯೋಜನೆಗೆ ಇದು ಸಹಾಯಕವಾಗಿದೆ.",

    band_good: "ಉತ್ತಮ ಗುಣಮಟ್ಟ",
    band_med: "ಮಧ್ಯಮ ಗುಣಮಟ್ಟ",
    band_poor: "ಕೆಟ್ಟ ಗುಣಮಟ್ಟ",
    band_unknown: "ಸೂಚಕ ಇಲ್ಲ",

    map_btn_care: "ಕಾಳಜಿ ಸಲಹೆ ತೆರೆಯಿರಿ",
    map_btn_farm: "ರೈತ ಸಲಹೆ ತೆರೆಯಿರಿ",

    map_recent_title: "ಇತ್ತೀಚಿನ ಓದುಗಳು",
    map_recent_empty:
      "ಇನ್ನೂ ಯಾವುದೇ ಓದು ಸಂಗ್ರಹಿಸಿಲ್ಲ. ಮೊದಲು ಅಳತೆ ಪುಟದಲ್ಲಿ ಓದುಗಳನ್ನು ಸಂಗ್ರಹಿಸಿ, ನಂತರ ಇಲ್ಲಿ ಬನ್ನಿ.",
    recent_line: "ಸೂಚಕ {index}, pH {ph}",
    recent_count: "ಒಟ್ಟು {n} ಸಂಗ್ರಹಿಸಿದ ಓದುಗಳು",

    map_footer_note:
      "ಸಲಹೆ: ಸಂಗ್ರಹಿಸಿದ ಓದಿನ ಮೇಲೆ ಟ್ಯಾಪ್ ಮಾಡಿದರೆ ನಕ್ಷೆ ಆ ಸ್ಥಳಕ್ಕೆ ಜೂಮ್ ಆಗುತ್ತದೆ; ನಂತರ ಕೇರ್ ಅಥವಾ ರೈತ ಸಹಾಯಕ ಪುಟವನ್ನು ತೆರೆಯಿರಿ."
  },

  // Urdu
  ur: {
    nav_home: "ہوم",
    nav_measure: "پیمائش",
    nav_map: "نقشہ",
    nav_care: "نگہداشت",
    nav_farmers: "کسان مددگار",
    nav_chart: "چارٹ",
    nav_learn: "سیکھیں",
    nav_buykit: "کِٹ خریدیں",
    nav_about: "پروجیکٹ",

    map_title: "پانی کے معیار کا نقشہ",
    map_subtitle:
      "اپنی محفوظ کی گئی تمام ریڈنگز کو نقشے پر دیکھیں۔ کسی نقطے پر ٹیپ کریں، تفصیل دیکھیں اور پھر نگہداشت یا کسان کے مشورے والے صفحے پر جائیں۔",

    map_filter_label: "بینڈ دکھائیں",
    map_filter_all: "تمام ریڈنگز",
    map_filter_good: "اچھا (≥ 70)",
    map_filter_med: "درمیانہ (40–69)",
    map_filter_poor: "خراب (< 40)",

    map_btn_locate: "میری لوکیشن",

    map_legend_good: "اچھا (انڈیکس ≥ 70)",
    map_legend_med: "درمیانہ (40–69)",
    map_legend_poor: "خراب (< 40)",
    map_legend_noloc: "لوکیشن کے بغیر محفوظ ریڈنگ",

    map_details_title: "ریڈنگ کی تفصیل",
    map_details_empty:
      "نقشے پر کسی مارکر یا فہرست میں سے ریڈنگ منتخب کریں اور تفصیل یہاں دیکھیں۔",
    details_line: "محفوظ ہونے کا وقت: {when} • {place}",
    details_sub:
      "انڈیکس {index} • pH {ph} • درجہ حرارت {temp}°C • گدلا پن {turb}",
    details_noloc:
      "اس ریڈنگ کے ساتھ کوئی لوکیشن محفوظ نہیں، لیکن پھر بھی اسے نگہداشت یا فصل کے مشورے کیلئے استعمال کیا جا سکتا ہے۔",
    details_hasloc:
      "یہ ریڈنگ نقشے پر ایک جگہ کے ساتھ جڑی ہوئی ہے، جس سے قریبی علاقوں میں نگہداشت اور کھیتی کی منصوبہ بندی میں مدد ملتی ہے۔",

    band_good: "اچھی کوالٹی",
    band_med: "درمیانی کوالٹی",
    band_poor: "خراب کوالٹی",
    band_unknown: "انڈیکس موجود نہیں",

    map_btn_care: "نگہداشت مشورہ کھولیں",
    map_btn_farm: "کسان مشورے کھولیں",

    map_recent_title: "حالیہ ریڈنگز",
    map_recent_empty:
      "ابھی تک کوئی ریڈنگ محفوظ نہیں ہوئی۔ پہلے پیمائش والے صفحے پر جا کر ریڈنگ محفوظ کریں، پھر یہاں آئیں۔",
    recent_line: "انڈیکس {index}, pH {ph}",
    recent_count: "کل {n} محفوظ ریڈنگز",

    map_footer_note:
      "مشورہ: محفوظ ریڈنگ پر ٹیپ کریں، نقشہ اسی جگہ پر زوم ہوگا؛ پھر اگلے مرحلے کیلئے نگہداشت یا کسان مددگار صفحہ کھولیں۔"
  }
};

function getMapStrings(langCode) {
  if (MAP_STRINGS[langCode]) return MAP_STRINGS[langCode];
  return MAP_STRINGS.en;
}
