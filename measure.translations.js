// measure.translations.js
// Translations for Water Health Index – Measure page
// Includes: labels, index messages, and TDS response texts.

const MEASURE_LANGS = ["en","hi","bn","ta","mr","gu","pa","te","kn","ur"];

window.measureTranslations = {
  // =========================
  // ENGLISH
  // =========================
  en: {
    // Sidebar navigation
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
    measure_title: "Measure Water Quality",
    measure_subtitle:
      "Enter pH, temperature and turbidity, use the camera pH reader, and then check TDS to see if this water is safe for drinking.",

    // Left inputs
    measure_ph_label: "pH (0.0 - 14.0)",
    measure_temp_label: "Temperature (°C)",
    measure_turb_label: "Turbidity",
    measure_turb_select: "Select turbidity",
    measure_turb_low:
      "Low — water looks clear; bottom and small objects are easy to see.",
    measure_turb_medium:
      "Medium — water is slightly cloudy; shapes visible but details blurred.",
    measure_turb_high:
      "High — water is cloudy or muddy; hard to see more than a few cm deep.",
    measure_turb_hint:
      "Low = clear water, Medium = slightly cloudy, High = cloudy or muddy water.",

    // Buttons (camera + location)
    measure_btn_camera: "Camera",
    measure_btn_switch_camera: "Switch Camera",
    measure_btn_location: "Use My Location",

    // Camera card
    measure_cam_title: "Camera pH Reader",
    measure_btn_capture: "Capture Color",
    measure_btn_close_camera: "Close Camera",
    measure_cam_info:
      "Align the pH strip inside the dashed box under good light.",

    // Location pill
    measure_location_main: "No location selected yet.",
    measure_location_sub: "Your current test location",

    // Analyze / save
    measure_btn_analyze: "Analyze",
    measure_btn_save: "Save Reading",
    measure_btn_clear: "Clear History",

    // Status card
    measure_status_label: "Status",
    measure_status_params: "pH, Temp, Turbidity:",
    measure_map_caption:
      "Your saved readings appear here. Green = Good, Yellow = Moderate, Red = Poor.",

    // TDS card (static bits)
    tds_title: "Drinking safety (TDS)",
    tds_intro:
      "Use pH and TDS to check if this water is suitable for drinking.",
    tds_label: "TDS (mg/L or ppm)",
    tds_check_btn: "Check drinking safety",
    tds_flag_wait: "Enter TDS and tap “Check drinking safety”.",

    // History
    measure_history_title: "Saved Readings",
    measure_th_when: "When",
    measure_th_ph: "pH",
    measure_th_temp: "Temp",
    measure_th_turb: "Turb",
    measure_th_tds: "TDS",
    measure_th_index: "Index",
    measure_th_drinkable: "Drinkable?",
    measure_history_empty: "No readings saved.",
    measure_footer_note:
      "Tip: You can reuse these saved readings on the Map, Farmers Assistant, and Chart pages.",

    // =====================================================
    // Index score messages (same 30 as measure.js)
    // =====================================================
    index_thresholds: [
      100,97,94,91,88,85,82,79,76,73,
      70,67,64,61,58,55,52,49,46,43,
      40,37,34,31,28,25,22,19,15,0
    ],
    index_messages: [
      "Perfect lab-grade water.",
      "Ultra-clean, ideal for sensitive crops and drinking.",
      "Pristine mountain-spring quality.",
      "Excellent — minimal stress.",
      "Very good quality, safe for drinking.",
      "Good quality, only minor treatment needed.",
      "Slightly imbalanced but generally safe.",
      "Fair quality — simple filtration recommended.",
      "Usable, but avoid for babies or sensitive users.",
      "Noticeable issues; treat before drinking.",
      "Moderate quality, not ideal for daily drinking.",
      "Stressed water; boil and filter strongly.",
      "Borderline safe — use only with treatment.",
      "Poor quality; not recommended for direct use.",
      "Very poor; use only for cleaning, not drinking.",
      "High pollution risk; avoid for animals too.",
      "Severely stressed ecosystem water.",
      "Strong contamination suspected.",
      "Dangerous for human consumption.",
      "Extremely poor; emergency use only.",
      "Unsuitable for irrigation without strong treatment.",
      "Toxic risk; may harm crops and fish.",
      "Very high contamination, keep away.",
      "Industrial-level pollution likely.",
      "Critical — do not use for any living beings.",
      "Hazardous chemical signature.",
      "Near-toxic concentrate; isolate source.",
      "Emergency contamination zone.",
      "Deadly quality — immediate action required.",
      "Unusable water — treat as hazardous waste."
    ],

    // Short summary sentences used before the long index message
    index_summary_EXCELLENT:
      "Excellent water quality – good for drinking, cooking and crops.",
    index_summary_GOOD:
      "Good water – usually safe for drinking with simple precautions.",
    index_summary_FAIR:
      "Fair water – use for drinking only with treatment; fine for most crops.",
    index_summary_POOR:
      "Poor quality – avoid for drinking; use carefully for irrigation.",
    index_summary_VERY_POOR:
      "Very poor – treat as contaminated; avoid for people and animals.",

    // =====================================================
    // TDS result messages (all flags used by classifyDrinkability)
    // =====================================================

    // When user hasn't entered TDS
    tds_flag_UNKNOWN: "Add TDS",
    tds_note_UNKNOWN:
      "Enter TDS to get a drinking-safety result based on pH and dissolved solids.",

    // pH not in 6.5–8.5 band
    tds_flag_PH_OUT_OF_RANGE: "pH outside safe band",
    tds_note_PH_OUT_OF_RANGE:
      "The TDS looks okay, but pH is outside the usual 6.5–8.5 range for safe drinking.",

    // < 50
    tds_flag_VERY_LOW_TDS: "Very low minerals",
    tds_note_VERY_LOW_TDS:
      "Water is safe but has very low minerals; long-term use may lack essential salts.",

    // 50–150
    tds_flag_SOFT_WATER: "Soft water",
    tds_note_SOFT_WATER:
      "Soft, low-mineral water – generally safe for drinking and household use.",

    // 150–300
    tds_flag_IDEAL_RANGE: "Ideal range",
    tds_note_IDEAL_RANGE:
      "This is a commonly preferred TDS range (~150–300 mg/L) for good-tasting drinking water.",

    // 300–600
    tds_flag_ACCEPTABLE: "Acceptable",
    tds_note_ACCEPTABLE:
      "Acceptable for drinking for most people, though taste may feel slightly mineral-rich.",

    // 600–900
    tds_flag_HARD_WATER: "Hard water",
    tds_note_HARD_WATER:
      "High TDS – usually safe, but may cause scaling and is not ideal for some health conditions.",

    // 900–1200
    tds_flag_VERY_HARD_WATER: "Very hard water",
    tds_note_VERY_HARD_WATER:
      "Very high TDS – avoid for long-term drinking; better suited to cleaning or some crops.",

    // > 1200
    tds_flag_NOT_DRINKABLE: "Not recommended for drinking",
    tds_note_NOT_DRINKABLE:
      "Extremely high TDS – even if the index looks good, this water should not be used for drinking."
  },

  // =========================
  // HINDI
  // =========================
  hi: {
    nav_home: "मुख्य पृष्ठ",
    nav_measure: "मापें",
    nav_map: "मानचित्र",
    nav_care: "देखभाल",
    nav_farmers: "किसान सहायक",
    nav_chart: "चार्ट",
    nav_learn: "सीखें",
    nav_buykit: "किट खरीदें",
    nav_about: "परियोजना के बारे में",

    measure_title: "जल गुणवत्ता मापन",
    measure_subtitle:
      "pH, तापमान और अस्पष्टता दर्ज करें, कैमरा pH रीडर का प्रयोग करें, फिर TDS जाँच कर देखें कि पानी पीने के लिए सुरक्षित है या नहीं।",

    measure_ph_label: "pH (0.0 - 14.0)",
    measure_temp_label: "तापमान (°C)",
    measure_turb_label: "अस्पष्टता",
    measure_turb_select: "अस्पष्टता चुनें",
    measure_turb_low:
      "Low — साफ पानी; तली और छोटे ऑब्जेक्ट आसानी से दिखते हैं।",
    measure_turb_medium:
      "Medium — थोड़ा धुंधला पानी; आकार दिखते हैं पर विवरण धुंधले होते हैं।",
    measure_turb_high:
      "High — धुंधला या मटमैला पानी; कुछ सेंटीमीटर से अधिक गहराई तक देखना कठिन।",
    measure_turb_hint:
      "Low = साफ पानी, Medium = थोड़ा धुंधला, High = धुंधला या मटमैला पानी।",

    measure_btn_camera: "कैमरा",
    measure_btn_switch_camera: "कैमरा बदलें",
    measure_btn_location: "मेरा स्थान प्रयोग करें",

    measure_cam_title: "कैमरा pH रीडर",
    measure_btn_capture: "रंग कैप्चर करें",
    measure_btn_close_camera: "कैमरा बंद करें",
    measure_cam_info:
      "pH स्ट्रिप को डैश बॉक्स के अंदर रखें और अच्छा प्रकाश रखें।",

    measure_location_main: "अभी तक कोई स्थान चयनित नहीं।",
    measure_location_sub: "आपका वर्तमान परीक्षण स्थान",

    measure_btn_analyze: "विश्लेषण",
    measure_btn_save: "रीडिंग सेव करें",
    measure_btn_clear: "इतिहास साफ करें",

    measure_status_label: "स्थिति",
    measure_status_params: "pH, तापमान, अस्पष्टता:",
    measure_map_caption:
      "आपकी रीडिंग यहाँ दिखेंगी। हरा = अच्छा, पीला = मध्यम, लाल = खराब।",

    tds_title: "पीने की सुरक्षा (TDS)",
    tds_intro:
      "pH और TDS की मदद से जाँचें कि यह पानी पीने के लिए उपयुक्त है या नहीं।",
    tds_label: "TDS (mg/L या ppm)",
    tds_check_btn: "पीने की सुरक्षा जाँचें",
    tds_flag_wait: "TDS दर्ज करें और “पीने की सुरक्षा जाँचें” दबाएँ।",

    measure_history_title: "सहेजी गई रीडिंग्स",
    measure_th_when: "कब",
    measure_th_ph: "pH",
    measure_th_temp: "तापमान",
    measure_th_turb: "अस्पष्टता",
    measure_th_tds: "TDS",
    measure_th_index: "सूचकांक",
    measure_th_drinkable: "क्या पीने योग्य?",
    measure_history_empty: "कोई रीडिंग सहेजी नहीं गई।",
    measure_footer_note:
      "संकेत: इन्हीं रीडिंग्स को आप मानचित्र, किसान सहायक और चार्ट पेज पर भी उपयोग कर सकते हैं।"
  },

  // =========================
  // BENGALI
  // =========================
  bn: {
    nav_home: "হোম",
    nav_measure: "পরিমাপ",
    nav_map: "মানচিত্র",
    nav_care: "যত্ন",
    nav_farmers: "কৃষক সহায়ক",
    nav_chart: "চার্ট",
    nav_learn: "শিখুন",
    nav_buykit: "কিট কিনুন",
    nav_about: "প্রজেক্ট সম্পর্কে",

    measure_title: "জল মান পরিমাপ",
    measure_subtitle:
      "pH, তাপমাত্রা এবং ঘোলাভাব লিখুন, ক্যামেরা pH রিডার ব্যবহার করুন, তারপর TDS দেখে বুঝুন জল পান করার জন্য নিরাপদ কি না।",

    measure_ph_label: "pH (0.0 - 14.0)",
    measure_temp_label: "তাপমাত্রা (°C)",
    measure_turb_label: "ঘোলাভাব",
    measure_turb_select: "ঘোলাভাব নির্বাচন করুন",
    measure_turb_low:
      "Low — পানি স্বচ্ছ; তল ও ছোট বস্তু সহজে দেখা যায়।",
    measure_turb_medium:
      "Medium — সামান্য ঘোলা; আকার দেখা যায় কিন্তু বিস্তারিত ঝাপসা।",
    measure_turb_high:
      "High — ঘোলা বা কাদা মেশানো পানি; কয়েক সেন্টিমিটারের বেশি গভীরতা দেখা কঠিন।",
    measure_turb_hint:
      "Low = স্বচ্ছ পানি, Medium = সামান্য ঘোলা, High = ঘোলা বা কাদা মিশ্রিত।",

    measure_btn_camera: "ক্যামেরা",
    measure_btn_switch_camera: "ক্যামেরা পরিবর্তন",
    measure_btn_location: "আমার অবস্থান",

    measure_cam_title: "ক্যামেরা pH রিডার",
    measure_btn_capture: "রং ধরুন",
    measure_btn_close_camera: "ক্যামেরা বন্ধ",
    measure_cam_info:
      "pH স্ট্রিপটি ড্যাশ বক্সের ভেতরে রাখুন এবং ভাল আলোয় মাপুন।",

    measure_location_main: "এখনও কোনো অবস্থান নির্বাচন করা হয়নি।",
    measure_location_sub: "আপনার বর্তমান পরীক্ষার স্থান",

    measure_btn_analyze: "বিশ্লেষণ",
    measure_btn_save: "রিডিং সংরক্ষণ",
    measure_btn_clear: "ইতিহাস মুছুন",

    measure_status_label: "স্থিতি",
    measure_status_params: "pH, তাপমাত্রা, ঘোলাভাব:",
    measure_map_caption:
      "আপনার রিডিং এখানে দেখানো হবে। সবুজ = ভাল, হলুদ = মাঝারি, লাল = খারাপ।",

    tds_title: "পানযোগ্যতা (TDS)",
    tds_intro:
      "pH ও TDS ব্যবহার করে দেখুন জল পান করার জন্য উপযুক্ত কি না।",
    tds_label: "TDS (mg/L বা ppm)",
    tds_check_btn: "পানযোগ্যতা পরীক্ষা করুন",
    tds_flag_wait: "TDS লিখে “পানযোগ্যতা পরীক্ষা করুন” বাটনে চাপুন।",

    measure_history_title: "সংরক্ষিত রিডিং",
    measure_th_when: "কখন",
    measure_th_ph: "pH",
    measure_th_temp: "তাপ",
    measure_th_turb: "ঘোলাভাব",
    measure_th_tds: "TDS",
    measure_th_index: "সূচক",
    measure_th_drinkable: "পানযোগ্য?",
    measure_history_empty: "কোনো রিডিং সংরক্ষণ করা হয়নি।",
    measure_footer_note:
      "টিপস: এগুলোই আপনি মানচিত্র, কৃষক সহায়ক ও চার্ট পাতায়ও ব্যবহার করতে পারবেন।"
  },

  // =========================
  // TAMIL
  // =========================
  ta: {
    nav_home: "முகப்பு",
    nav_measure: "அளவிடு",
    nav_map: "வரைபடம்",
    nav_care: "பராமரிப்பு",
    nav_farmers: "விவசாயி உதவி",
    nav_chart: "வரைபடக் குறிப்பு",
    nav_learn: "கற்றுக்கொள்ள",
    nav_buykit: "பரிசோதனை கிட் வாங்க",
    nav_about: "திட்டம் பற்றி",

    measure_title: "நீர்த் தர அளவீடு",
    measure_subtitle:
      "pH, வெப்பநிலை மற்றும் குழப்பம் (turbidity) 값을 உள்ளிடுங்கள், கேமரா pH ரீடரை பயன்படுத்தி, பின்னர் TDS மூலம் இந்த நீர் குடிப்பதற்கு பாதுகாப்பானதா என்பதை சரிபார்க்கவும்.",

    measure_ph_label: "pH (0.0 - 14.0)",
    measure_temp_label: "வெப்பநிலை (°C)",
    measure_turb_label: "குழப்பம் (Turbidity)",
    measure_turb_select: "குழப்ப நிலையைத் தேர்வு செய்யவும்",
    measure_turb_low:
      "Low — நீர் தெளிவாக காணப்படும்; அடிப்பகுதி மற்றும் சிறிய பொருள்கள் எளிதாக தெரியும்.",
    measure_turb_medium:
      "Medium — நீர் கொஞ்சம் மங்கலாக இருக்கும்; வடிவம் தெரியும் ஆனால் விவரங்கள் தெளிவாக தெரியாது.",
    measure_turb_high:
      "High — நீர் மிகவும் மங்கலாக / சேற்றாக இருக்கும்; சில செ.மீ ஆழத்திற்கு மேல் பார்க்க கடினம்.",
    measure_turb_hint:
      "Low = தெளிவான நீர், Medium = சற்று மங்கல், High = மங்கலான அல்லது சேற்றான நீர்.",

    measure_btn_camera: "கேமரா",
    measure_btn_switch_camera: "கேமரா மாற்று",
    measure_btn_location: "என் இருப்பிடத்தைப் பயன்படுத்தவும்",

    measure_cam_title: "கேமரா pH ரீடர்",
    measure_btn_capture: "நிறத்தைப் பிடிக்கவும்",
    measure_btn_close_camera: "கேமராவை மூடு",
    measure_cam_info:
      "pH சீட்டை கோடு பெட்டியின் உள்ளே வைத்து, போதுமான வெளிச்சத்தில் அளவிடுங்கள்.",

    measure_location_main: "இன்னும் எந்த இடமும் தேர்ந்தெடுக்கப்படவில்லை.",
    measure_location_sub: "உங்கள் தற்போதைய சோதனை இடம்",

    measure_btn_analyze: "பகுப்பாய்வு செய்",
    measure_btn_save: "ரீடிங்கை சேமி",
    measure_btn_clear: "வரலாற்றை அழி",

    measure_status_label: "நிலை",
    measure_status_params: "pH, வெப்பநிலை, குழப்பம்:",
    measure_map_caption:
      "நீங்கள் சேமித்த ரீடிங்குகள் இங்கே காணப்படும். பச்சை = நல்லது, மஞ்சள் = நடுத்தரம், சிவப்பு = மோசம்.",

    tds_title: "குடிப்பதற்கான பாதுகாப்பு (TDS)",
    tds_intro:
      "இந்த நீர் குடிப்பதற்கு ஏற்றதா என்பதை pH மற்றும் TDS மூலம் சரிபார்க்கவும்.",
    tds_label: "TDS (mg/L அல்லது ppm)",
    tds_check_btn: "குடிப்பதற்கான பாதுகாப்பைச் சரிபார்",
    tds_flag_wait: "TDS மதிப்பை உள்ளிட்டு “குடிப்பதற்கான பாதுகாப்பைச் சரிபார்” ஐ அழுத்தவும்.",

    measure_history_title: "சேமித்த ரீடிங்குகள்",
    measure_th_when: "எப்போது",
    measure_th_ph: "pH",
    measure_th_temp: "வெப்பநிலை",
    measure_th_turb: "குழப்பம்",
    measure_th_tds: "TDS",
    measure_th_index: "சுட்டெண்",
    measure_th_drinkable: "குடிக்கலாமா?",
    measure_history_empty: "சேமிக்கப்பட்ட ரீடிங்குகள் எதுவும் இல்லை.",
    measure_footer_note:
      "குறிப்பு: இவ்வாறே சேமித்த ரீடிங்குகளை வரைபடம், விவசாயி உதவி மற்றும் வரைபடக் குறிப்பு பக்கங்களிலும் பயன்படுத்தலாம்."
  },

  // =========================
  // MARATHI
  // =========================
  mr: {
    nav_home: "मुखपृष्ठ",
    nav_measure: "मोजा",
    nav_map: "नकाशा",
    nav_care: "काळजी",
    nav_farmers: "शेतकरी सहाय्य",
    nav_chart: "चार्ट",
    nav_learn: "शिका",
    nav_buykit: "किट खरेदी करा",
    nav_about: "प्रकल्पाबद्दल",

    measure_title: "पाणी गुणवत्ता मापन",
    measure_subtitle:
      "pH, तापमान आणि गढूळपणा नोंदवा, कॅमेरा pH रीडर वापरा आणि नंतर TDS तपासून हे पाणी पिण्यास सुरक्षित आहे की नाही ते पाहा.",

    measure_ph_label: "pH (0.0 - 14.0)",
    measure_temp_label: "तापमान (°C)",
    measure_turb_label: "गढूळपणा",
    measure_turb_select: "गढूळपणा निवडा",
    measure_turb_low:
      "Low — पाणी स्वच्छ दिसते; तळ आणि लहान वस्तू सहज दिसतात.",
    measure_turb_medium:
      "Medium — पाणी थोडे गढूळ; आकार दिसतात पण तपशील अस्पष्ट.",
    measure_turb_high:
      "High — पाणी पूर्ण गढूळ / चिखलयुक्त; काही सेंमी पेक्षा खोल पाहणे कठीण.",
    measure_turb_hint:
      "Low = स्वच्छ पाणी, Medium = थोडा गढूळ, High = गढूळ किंवा चिखलयुक्त पाणी.",

    measure_btn_camera: "कॅमेरा",
    measure_btn_switch_camera: "कॅमेरा बदला",
    measure_btn_location: "माझे ठिकाण वापरा",

    measure_cam_title: "कॅमेरा pH रीडर",
    measure_btn_capture: "रंग कॅप्चर करा",
    measure_btn_close_camera: "कॅमेरा बंद करा",
    measure_cam_info:
      "pH पट्टीला डॅश बॉक्सच्या आत ठेवा आणि चांगल्या प्रकाशात मोजा.",

    measure_location_main: "अजून कोणतेही ठिकाण निवडलेले नाही.",
    measure_location_sub: "आपले सध्याचे चाचणी ठिकाण",

    measure_btn_analyze: "विश्लेषण करा",
    measure_btn_save: "रीडिंग सेव्ह करा",
    measure_btn_clear: "इतिहास पुसा",

    measure_status_label: "स्थिती",
    measure_status_params: "pH, तापमान, गढूळपणा:",
    measure_map_caption:
      "तुमची सेव्ह केलेली रीडिंग्स इथे दिसतील. हिरवा = चांगले, पिवळा = मध्यम, लाल = खराब.",

    tds_title: "पिण्याची सुरक्षितता (TDS)",
    tds_intro:
      "हे पाणी पिण्यास योग्य आहे का हे पाहण्यासाठी pH आणि TDS तपासा.",
    tds_label: "TDS (mg/L किंवा ppm)",
    tds_check_btn: "पिण्याची सुरक्षितता तपासा",
    tds_flag_wait: "TDS टाका आणि “पिण्याची सुरक्षितता तपासा” दाबा.",

    measure_history_title: "सेव्ह केलेली रीडिंग्स",
    measure_th_when: "कधी",
    measure_th_ph: "pH",
    measure_th_temp: "तापमान",
    measure_th_turb: "गढूळपणा",
    measure_th_tds: "TDS",
    measure_th_index: "सूचकांक",
    measure_th_drinkable: "पिण्यायोग्य?",
    measure_history_empty: "कोणतीही रीडिंग सेव्ह केलेली नाही.",
    measure_footer_note:
      "सूचना: या रीडिंग्सचा वापर नकाशा, शेतकरी सहाय्य आणि चार्ट पानांवरही करू शकता."
  },

  // =========================
  // GUJARATI
  // =========================
  gu: {
    nav_home: "મુખ્ય પાનું",
    nav_measure: "માપો",
    nav_map: "નકશો",
    nav_care: "કાળજી",
    nav_farmers: "ખેડૂત સહાય",
    nav_chart: "ચાર્ટ",
    nav_learn: "શીખો",
    nav_buykit: "કિટ ખરીદો",
    nav_about: "પ્રોજેક્ટ વિશે",

    measure_title: "પાણી ગુણવત્તા માપન",
    measure_subtitle:
      "pH, તાપમાન અને ગંદકપણું દાખલ કરો, કેમેરા pH રીડરનો ઉપયોગ કરો અને પછી TDS જોઈને પાણી પીવા માટે સુરક્ષિત છે કે નહીં તે તપાસો.",

    measure_ph_label: "pH (0.0 - 14.0)",
    measure_temp_label: "તાપમાન (°C)",
    measure_turb_label: "ગંદકપણું",
    measure_turb_select: "ગંદકપણું પસંદ કરો",
    measure_turb_low:
      "Low — પાણી સ્વચ્છ લાગે છે; તળિયું અને નાની વસ્તુઓ સરળતાથી દેખાય છે.",
    measure_turb_medium:
      "Medium — પાણી થોડું ગંદુ; આકાર દેખાય છે પરંતુ વિગતો ધુમ્મસમાં.",
    measure_turb_high:
      "High — પાણી ખૂબ ગંદુ / કાદવાળું; થોડા સે.મી. થી વધુ ઊંડે જોવું મુશ્કેલ.",
    measure_turb_hint:
      "Low = સ્વચ્છ পানি, Medium = થોડું ગંદુ, High = ગંદુ અથવા કાદવાળું પાણી.",

    measure_btn_camera: "કેમેરા",
    measure_btn_switch_camera: "કેમેરા બદલો",
    measure_btn_location: "મારું સ્થાન વાપરો",

    measure_cam_title: "કેમેરા pH રીડર",
    measure_btn_capture: "રંગ પકડો",
    measure_btn_close_camera: "કેમેરા બંધ કરો",
    measure_cam_info:
      "pH સ્ટ્રીપને ડેશ બોક્સની અંદર રાખો અને સારા પ્રકાશમાં માપો.",

    measure_location_main: "હજુ સુધી કોઈ સ્થાન પસંદ કર્યું નથી.",
    measure_location_sub: "તમારું વર્તમાન પરીક્ષણ સ્થાન",

    measure_btn_analyze: "વિશ્લેષણ",
    measure_btn_save: "રીડિંગ સેવ કરો",
    measure_btn_clear: "ઇતિહાસ સાફ કરો",

    measure_status_label: "સ્થિતિ",
    measure_status_params: "pH, તાપમાન, ગંદકપણું:",
    measure_map_caption:
      "તમારી સેવ કરેલી રીડિંગ્સ અહીં દેખાશે. લીલું = સારું, પીળું = મધ્યમ, લાલ = નબળું.",

    tds_title: "પીવાના પાણીની સુરક્ષા (TDS)",
    tds_intro:
      "આ પાણી પીવા યોગ્ય છે કે નહીં તે ચકાસવા માટે pH અને TDS બંને જુઓ.",
    tds_label: "TDS (mg/L અથવા ppm)",
    tds_check_btn: "પીવાના માટે સુરક્ષા તપાસો",
    tds_flag_wait: "TDS દાખલ કરો અને “પીવાના માટે સુરક્ષા તપાસો” ક્લિક કરો.",

    measure_history_title: "સેવ કરેલી રીડિંગ્સ",
    measure_th_when: "ક્યારે",
    measure_th_ph: "pH",
    measure_th_temp: "તાપમાન",
    measure_th_turb: "ગંદકપણું",
    measure_th_tds: "TDS",
    measure_th_index: "ઈન્ડેક્સ",
    measure_th_drinkable: "પીવા યોગ્ય?",
    measure_history_empty: "કોઈ રીડિંગ સેવ કરવામાં આવી નથી.",
    measure_footer_note:
      "ટિપ: આ જ રીડિંગ્સ નકશો, ખેડૂત સહાય અને ચાર્ટ પેજ પર પણ ઉપયોગ કરી શકો છો."
  },

  // =========================
  // PUNJABI
  // =========================
  pa: {
    nav_home: "ਮੁੱਖ ਪੰਨਾ",
    nav_measure: "ਮਾਪੋ",
    nav_map: "ਨਕਸ਼ਾ",
    nav_care: "ਦੇਖਭਾਲ",
    nav_farmers: "ਕਿਸਾਨ ਸਹਾਇਤਾ",
    nav_chart: "ਚਾਰਟ",
    nav_learn: "ਸਿੱਖੋ",
    nav_buykit: "ਕਿਟ ਖਰੀਦੋ",
    nav_about: "ਪਰੋਜੈਕਟ ਬਾਰੇ",

    measure_title: "ਪਾਣੀ ਦੀ ਗੁਣਵੱਤਾ ਮਾਪੋ",
    measure_subtitle:
      "pH, ਤਾਪਮਾਨ ਅਤੇ ਗੰਦਲਾਪਨ ਦਰਜ ਕਰੋ, ਕੈਮਰਾ pH ਰੀਡਰ ਵਰਤੋ, ਅਤੇ ਫਿਰ TDS ਨਾਲ ਜਾਂਚੋ ਕਿ ਇਹ ਪਾਣੀ ਪੀਣ ਲਈ ਸੁਰੱਖਿਅਤ ਹੈ ਜਾਂ ਨਹੀਂ।",

    measure_ph_label: "pH (0.0 - 14.0)",
    measure_temp_label: "ਤਾਪਮਾਨ (°C)",
    measure_turb_label: "ਗੰਦਲਾਪਨ (Turbidity)",
    measure_turb_select: "ਗੰਦਲਾਪਨ ਚੁਣੋ",
    measure_turb_low:
      "Low — ਪਾਣੀ ਬਿਲਕੁਲ ਸਾਫ; ਤਲ ਅਤੇ ਛੋਟੀ ਚੀਜ਼ਾਂ ਆਸਾਨੀ ਨਾਲ ਦਿੱਖ ਰਹੀਆਂ ਹਨ।",
    measure_turb_medium:
      "Medium — ਪਾਣੀ ਥੋੜ੍ਹਾ ਧੁੰਦਲਾ; ਆਕਾਰ ਦਿੱਖਦੇ ਹਨ ਪਰ ਵੇਰਵੇ ਸਾਫ ਨਹੀਂ।",
    measure_turb_high:
      "High — ਪਾਣੀ ਗੰਦਲਾ ਜਾਂ ਕੀਚੜ ਵਾਲਾ; ਕੁਝ ਸੈਂਟੀਮੀਟਰ ਤੋਂ ਵੱਧ ਗਹਿਰਾਈ ਤੱਕ ਦੇਖਣਾ ਔਖਾ।",
    measure_turb_hint:
      "Low = ਸਾਫ ਪਾਣੀ, Medium = ਥੋੜ੍ਹਾ ਧੁੰਦਲਾ, High = ਗੰਦਲਾ ਜਾਂ ਕੀਚੜ ਵਾਲਾ ਪਾਣੀ.",

    measure_btn_camera: "ਕੈਮਰਾ",
    measure_btn_switch_camera: "ਕੈਮਰਾ ਬਦਲੋ",
    measure_btn_location: "ਮੇਰਾ ਟਿਕਾਣਾ ਵਰਤੋ",

    measure_cam_title: "ਕੈਮਰਾ pH ਰੀਡਰ",
    measure_btn_capture: "ਰੰਗ ਕੈਪਚਰ ਕਰੋ",
    measure_btn_close_camera: "ਕੈਮਰਾ ਬੰਦ ਕਰੋ",
    measure_cam_info:
      "pH ਸਟ੍ਰਿਪ ਨੂੰ ਟੁੱਟੀ ਲਕੀਰ ਵਾਲੇ ਬਾਕਸ ਦੇ ਅੰਦਰ ਰੱਖੋ ਅਤੇ ਚੰਗੀ ਰੌਸ਼ਨੀ ਵਿੱਚ ਮਾਪੋ।",

    measure_location_main: "ਹਾਲੇ ਕੋਈ ਟਿਕਾਣਾ ਨਹੀਂ ਚੁਣਿਆ ਗਿਆ।",
    measure_location_sub: "ਤੁਹਾਡਾ ਮੌਜੂਦਾ ਟੈਸਟ ਟਿਕਾਣਾ",

    measure_btn_analyze: "ਵਿਸ਼ਲੇਸ਼ਣ ਕਰੋ",
    measure_btn_save: "ਰੀਡਿੰਗ ਸੇਵ ਕਰੋ",
    measure_btn_clear: "ਇਤਿਹਾਸ ਮਿਟਾਓ",

    measure_status_label: "ਹਾਲਤ",
    measure_status_params: "pH, ਤਾਪਮਾਨ, ਗੰਦਲਾਪਨ:",
    measure_map_caption:
      "ਤੁਹਾਡੀਆਂ ਸੇਵ ਕੀਤੀਆਂ ਰੀਡਿੰਗਾਂ ਇੱਥੇ ਵੇਖਾਈਆਂ ਜਾਣਗੀਆਂ। ਹਰਾ = ਚੰਗਾ, ਪੀਲਾ = ਦਰਮਿਆਨਾ, ਲਾਲ = ਖਰਾਬ।",

    tds_title: "ਪੀਣ ਦੀ ਸੁਰੱਖਿਆ (TDS)",
    tds_intro:
      "pH ਅਤੇ TDS ਦੀ ਮਦਦ ਨਾਲ ਵੇਖੋ ਕਿ ਇਹ ਪਾਣੀ ਪੀਣ ਲਈ ਢੰਗ ਦਾ ਹੈ ਕਿ ਨਹੀਂ।",
    tds_label: "TDS (mg/L ਜਾਂ ppm)",
    tds_check_btn: "ਪੀਣ ਦੀ ਸੁਰੱਖਿਆ ਜਾਂਚੋ",
    tds_flag_wait: "TDS ਦਾਖਲ ਕਰੋ ਅਤੇ “ਪੀਣ ਦੀ ਸੁਰੱਖਿਆ ਜਾਂਚੋ” ‘ਤੇ ਕਲਿੱਕ ਕਰੋ.",

    measure_history_title: "ਸੇਵ ਕੀਤੀਆਂ ਰੀਡਿੰਗਾਂ",
    measure_th_when: "ਕਦੋਂ",
    measure_th_ph: "pH",
    measure_th_temp: "ਤਾਪਮਾਨ",
    measure_th_turb: "ਗੰਦਲਾਪਨ",
    measure_th_tds: "TDS",
    measure_th_index: "ਇੰਡੈਕਸ",
    measure_th_drinkable: "ਪੀਣਯੋਗ?",
    measure_history_empty: "ਹਾਲੇ ਕੋਈ ਰੀਡਿੰਗ ਸੇਵ ਨਹੀਂ ਕੀਤੀ ਗਈ।",
    measure_footer_note:
      "ਸੁਝਾਅ: ਇਹੀ ਰੀਡਿੰਗਾਂ ਨਕਸ਼ਾ, ਕਿਸਾਨ ਸਹਾਇਤਾ ਅਤੇ ਚਾਰਟ ਪੰਨਿਆਂ ‘ਤੇ ਵੀ ਵਰਤੀ ਜਾ ਸਕਦੀਆਂ ਹਨ।"
  },

  // =========================
  // TELUGU
  // =========================
  te: {
    nav_home: "హోమ్",
    nav_measure: "కొలవండి",
    nav_map: "మ్యాప్",
    nav_care: "జాగ్రత్త",
    nav_farmers: "రైతు సహాయం",
    nav_chart: "చార్ట్",
    nav_learn: "నేర్చుకోండి",
    nav_buykit: "కిట్ కొనండి",
    nav_about: "ప్రాజెక్ట్ గురించి",

    measure_title: "నీటి నాణ్యత కొలత",
    measure_subtitle:
      "pH, ఉష్ణోగ్రత మరియు మసక (turbidity) 값을 నమోదు చేసి, కెమెరా pH రీడర్ ఉపయోగించండి, తరువాత TDS చూసి ఈ నీరు తాగడానికి సురక్షితమా కాదు చూడండి.",

    measure_ph_label: "pH (0.0 - 14.0)",
    measure_temp_label: "ఉష్ణోగ్రత (°C)",
    measure_turb_label: "మసక (Turbidity)",
    measure_turb_select: "మసక స్థాయి ఎంచుకోండి",
    measure_turb_low:
      "Low — నీరు చాలా పారదర్శకంగా ఉంటుంది; అడుగు భాగం మరియు చిన్న వస్తువులు సులభంగా కనిపిస్తాయి.",
    measure_turb_medium:
      "Medium — నీరు కొద్దిగా మసకగా; ఆకారం కనిపిస్తుంది కానీ వివరాలు స్పష్టంగా ఉండవు.",
    measure_turb_high:
      "High — నీరు చాలా మసకగా లేదా బురదగా; కొన్ని సెం.మీ. మించిన లోతు కనిపించదు.",
    measure_turb_hint:
      "Low = స్వచ్ఛ నీరు, Medium = కొంత మసక, High = మసక/బురద నీరు.",

    measure_btn_camera: "కెమెరా",
    measure_btn_switch_camera: "కెమెరా మార్చు",
    measure_btn_location: "నా స్థానాన్ని వినియోగించు",

    measure_cam_title: "కెమెరా pH రీడర్",
    measure_btn_capture: "రంగు తీసుకోండి",
    measure_btn_close_camera: "కెమెరా మూసివేయండి",
    measure_cam_info:
      "pH స్ట్రిప్‌ను చిట్టెడ్ బాక్స్ లోపల ఉంచి, మంచి వెలుతురులో కొలవండి.",

    measure_location_main: "ఇప్పటికీ ఎలాంటి స్థలం ఎంచుకోలేదు.",
    measure_location_sub: "మీ ప్రస్తుత పరీక్ష స్థలం",

    measure_btn_analyze: "విశ్లేషించు",
    measure_btn_save: "రెక్కార్డు సేవ్ చేయి",
    measure_btn_clear: "చరిత్రను క్లియర్ చేయి",

    measure_status_label: "స్థితి",
    measure_status_params: "pH, ఉష్ణోగ్రత, మసక:",
    measure_map_caption:
      "మీ సేవ్ చేసిన రీడింగ్‌లు ఇక్కడ కనిపిస్తాయి. ఆకుపచ్చ = మంచి, పసుపు = మధ్యస్థ, ఎరుపు = చెడు.",

    tds_title: "తాగునీటి సురక్షితత (TDS)",
    tds_intro:
      "నీరు తాగడానికి సరిపోతుందా అనేది pH మరియు TDS ఆధారంగా చూడండి.",
    tds_label: "TDS (mg/L లేదా ppm)",
    tds_check_btn: "తాగునీటి సురక్షితతను తనిఖీ చేయి",
    tds_flag_wait:
      "TDS విలువ నమోదు చేసి “తాగునీటి సురక్షితతను తనిఖీ చేయి” బటన్ నొక్కండి.",

    measure_history_title: "సేవ్ చేసిన రీడింగ్‌లు",
    measure_th_when: "ఎప్పుడు",
    measure_th_ph: "pH",
    measure_th_temp: "ఉష్ణోగ్రత",
    measure_th_turb: "మసక",
    measure_th_tds: "TDS",
    measure_th_index: "సూచిక",
    measure_th_drinkable: "తాగడానికి సరిపోతుందా?",
    measure_history_empty: "ఇంకా ఏ రీడింగ్ సేవ్ చేయలేదు.",
    measure_footer_note:
      "సూచన: ఇదే రీడింగ్‌లు మ్యాప్, రైతు సహాయం మరియు చార్ట్ పేజీలలో కూడా ఉపయోగించవచ్చు."
  },

  // =========================
  // KANNADA
  // =========================
  kn: {
    nav_home: "ಮುಖ್ಯ ಪುಟ",
    nav_measure: "ಅಳತೆ",
    nav_map: "ನಕ್ಷೆ",
    nav_care: "ಪರಿಹಾರ",
    nav_farmers: "ರೈತ ಸಹಾಯ",
    nav_chart: "ಚಾರ್ಟ್",
    nav_learn: "ಕಲಿಯಿರಿ",
    nav_buykit: "ಕಿಟ್ ಖರೀದಿಸಿ",
    nav_about: "ಯೋಜನೆ ಕುರಿತು",

    measure_title: "ನೀರಿನ ಗುಣಮಟ್ಟ ಮಾಪನ",
    measure_subtitle:
      "pH, ತಾಪಮಾನ ಮತ್ತು ಮಸುಕುದನವನ್ನು ದಾಖಲಿಸಿ, ಕ್ಯಾಮೆರಾ pH ರೀಡರ್ ಬಳಸಿ, ಬಳಿಕ TDS ನೋಡಿ ನೀರು ಕುಡಿಯಲು ಸುರಕ್ಷಿತವೋ ಇಲ್ಲವೋ ಎಂದು ಪರಿಶೀಲಿಸಿ.",

    measure_ph_label: "pH (0.0 - 14.0)",
    measure_temp_label: "ತಾಪಮಾನ (°C)",
    measure_turb_label: "ಮಸುಕುದನ (Turbidity)",
    measure_turb_select: "ಮಸುಕುದನ ಮಟ್ಟ ಆಯ್ಕೆಮಾಡಿ",
    measure_turb_low:
      "Low — ನೀರು ತುಂಬ ಸ್ಪಷ್ಟ; ಕೆಳಭಾಗ ಮತ್ತು ಚಿಕ್ಕ ವಸ್ತುಗಳು ಸುಲಭವಾಗಿ ಕಾಣುತ್ತವೆ.",
    measure_turb_medium:
      "Medium — ನೀರು ಸ್ವಲ್ಪ ಮಸುಕಾಗಿ; ಆಕಾರಗಳು ಕಾಣುತ್ತವೆ ಆದರೆ ವಿವರಗಳು ಸ್ಪಷ್ಟವಿಲ್ಲ.",
    measure_turb_high:
      "High — ನೀರು ತುಂಬ ಮಸುಕಾದ ಅಥವಾ ಕೆಸರಿನಿಂದ ಕೂಡಿದ; ಕೆಲವು ಸೆಂ.ಮೀ. ಗಿಂತ ಆಳದಲ್ಲಿ ಕಾಣಿಸಲು ಕಷ್ಟ.",

    measure_turb_hint:
      "Low = ಸ್ಪಷ್ಟ ನೀರು, Medium = ಸ್ವಲ್ಪ ಮಸುಕಾದ, High = ಮಸುಕಾದ/ಕೆಸರಿನ ನೀರು.",

    measure_btn_camera: "ಕ್ಯಾಮೆರಾ",
    measure_btn_switch_camera: "ಕ್ಯಾಮೆರಾ ಬದಲಾಯಿಸಿ",
    measure_btn_location: "ನನ್ನ ಸ್ಥಳ ಬಳಸಿ",

    measure_cam_title: "ಕ್ಯಾಮೆರಾ pH ರೀಡರ್",
    measure_btn_capture: "ಬಣ್ಣವನ್ನು ಹಿಡಿಯಿರಿ",
    measure_btn_close_camera: "ಕ್ಯಾಮೆರಾ ಮುಚ್ಚಿ",
    measure_cam_info:
      "pH ಪಟ್ಟಿಯನ್ನು ಟುಟುಕು ರೇಖೆಯ ಬಾಕ್ಸಿನ ಒಳಗೆ ಇಟ್ಟು, ಚೆನ್ನಾದ ಬೆಳಕಿನಲ್ಲಿ ಅಳೆಯಿರಿ.",

    measure_location_main: "ಇನ್ನೂ ಯಾವುದೇ ಸ್ಥಳ ಆಯ್ಕೆಮಾಡಲಾಗಿಲ್ಲ.",
    measure_location_sub: "ನಿಮ್ಮ ಪ್ರಸ್ತುತ ಪರೀಕ್ಷಾ ಸ್ಥಳ",

    measure_btn_analyze: "ವಿಶ್ಲೇಷಿಸಿ",
    measure_btn_save: "ರೀಡಿಂಗ್ ಸಂಗ್ರಹಿಸಿ",
    measure_btn_clear: "ಇತಿಹಾಸ ತೆರವುಗೊಳಿಸಿ",

    measure_status_label: "ಸ್ಥಿತಿ",
    measure_status_params: "pH, ತಾಪಮಾನ, ಮಸುಕುದನ:",
    measure_map_caption:
      "ನೀವು ಸೇವ್ ಮಾಡಿದ ರೀಡಿಂಗ್‌ಗಳು ಇಲ್ಲಿ ತೋರಿಸಲಾಗುತ್ತದೆ. ಹಸಿರು = ಉತ್ತಮ, ಹಳದಿ = ಮಧ್ಯಮ, ಕೆಂಪು = ಕೆಟ್ಟ.",

    tds_title: "ಕುಡಿಯುವ ನೀರಿನ ಸುರಕ್ಷತೆ (TDS)",
    tds_intro:
      "ಈ ನೀರು ಕುಡಿಯಲು ಸೂಕ್ತವೋ ಎಂಬುದನ್ನು pH ಮತ್ತು TDS ನೋಡಿ ತಿಳಿಯಿರಿ.",
    tds_label: "TDS (mg/L ಅಥವಾ ppm)",
    tds_check_btn: "ಕುಡಿಯುವ ಸುರಕ್ಷತೆ ಪರೀಕ್ಷಿಸಿ",
    tds_flag_wait:
      "TDS ನಮೂದಿಸಿ ಹಾಗೂ “ಕುಡಿಯುವ ಸುರಕ್ಷತೆ ಪರೀಕ್ಷಿಸಿ” ಬಟನ್ ಒತ್ತಿರಿ.",

    measure_history_title: "ಸಂಗ್ರಹಿಸಿದ ರೀಡಿಂಗ್‌ಗಳು",
    measure_th_when: "ಯಾವಾಗ",
    measure_th_ph: "pH",
    measure_th_temp: "ತಾಪಮಾನ",
    measure_th_turb: "ಮಸುಕುದನ",
    measure_th_tds: "TDS",
    measure_th_index: "ಸೂಚಕ",
    measure_th_drinkable: "ಕುಡಿಯಲು ಸೂಕ್ತವೇ?",
    measure_history_empty: "ಈವರೆಗೆ ಯಾವುದೇ ರೀಡಿಂಗ್ ಸಂಗ್ರಹಿಸಿಲ್ಲ.",
    measure_footer_note:
      "ಸೂಚನೆ: ಈ ರೀಡಿಂಗ್‌ಗಳನ್ನು ನಕ್ಷೆ, ರೈತ ಸಹಾಯ ಮತ್ತು ಚಾರ್ಟ್ ಪುಟಗಳಲ್ಲಿಯೂ ಬಳಸಬಹುದು."
  },

  // =========================
  // URDU
  // =========================
  ur: {
    nav_home: "ہوم",
    nav_measure: "پیمائش",
    nav_map: "نقشہ",
    nav_care: "نگہداشت",
    nav_farmers: "کسان مدد",
    nav_chart: "چارٹ",
    nav_learn: "سیکھیں",
    nav_buykit: "کِٹ خریدیں",
    nav_about: "پروجیکٹ کے بارے میں",

    measure_title: "پانی کے معیار کی پیمائش",
    measure_subtitle:
      "pH، درجہ حرارت اور گدلاپن درج کریں، کیمرہ pH ریڈر استعمال کریں، اور پھر TDS دیکھ کر جانچیں کہ یہ پانی پینے کے لیے محفوظ ہے یا نہیں۔",

    measure_ph_label: "pH (0.0 - 14.0)",
    measure_temp_label: "درجہ حرارت (°C)",
    measure_turb_label: "گدلاپن",
    measure_turb_select: "گدلاپن منتخب کریں",
    measure_turb_low:
      "Low — پانی بالکل صاف؛ تہہ اور چھوٹی چیزیں آسانی سے نظر آتی ہیں۔",
    measure_turb_medium:
      "Medium — پانی ہلکا سا دھندلا؛ شکلیں نظر آتی ہیں مگر تفصیل واضح نہیں۔",
    measure_turb_high:
      "High — پانی بہت گدلا یا کیچڑ والا؛ چند سینٹی میٹر سے زیادہ گہرائی تک دیکھنا مشکل۔",
    measure_turb_hint:
      "Low = صاف پانی، Medium = ہلکا دھندلا، High = گدلا یا کیچڑ والا پانی۔",

    measure_btn_camera: "کیمرہ",
    measure_btn_switch_camera: "کیمرہ تبدیل کریں",
    measure_btn_location: "میرا مقام استعمال کریں",

    measure_cam_title: "کیمرہ pH ریڈر",
    measure_btn_capture: "رنگ کیپچر کریں",
    measure_btn_close_camera: "کیمرہ بند کریں",
    measure_cam_info:
      "pH اسٹِرِپ کو نقطہ دار خانے کے اندر رکھیں اور اچھے نور میں پیمائش کریں۔",

    measure_location_main: "ابھی تک کوئی مقام منتخب نہیں ہوا۔",
    measure_location_sub: "آپ کا موجودہ ٹیسٹ مقام",

    measure_btn_analyze: "تجزیہ کریں",
    measure_btn_save: "ریڈنگ محفوظ کریں",
    measure_btn_clear: "ہسٹری صاف کریں",

    measure_status_label: "حالت",
    measure_status_params: "pH، درجہ حرارت، گدلاپن:",
    measure_map_caption:
      "آپ کی محفوظ کردہ ریڈنگز یہاں ظاہر ہوں گی۔ سبز = اچھا، پیلا = درمیانہ، سرخ = خراب۔",

    tds_title: "پینے کی حفاظت (TDS)",
    tds_intro:
      "pH اور TDS کی مدد سے دیکھیں کہ یہ پانی پینے کے لیے موزوں ہے یا نہیں۔",
    tds_label: "TDS (mg/L یا ppm)",
    tds_check_btn: "پینے کی حفاظت چیک کریں",
    tds_flag_wait:
      "TDS درج کریں اور “پینے کی حفاظت چیک کریں” پر کلک کریں۔",

    measure_history_title: "محفوظ کردہ ریڈنگز",
    measure_th_when: "کب",
    measure_th_ph: "pH",
    measure_th_temp: "درجہ حرارت",
    measure_th_turb: "گدلاپن",
    measure_th_tds: "TDS",
    measure_th_index: "انڈیکس",
    measure_th_drinkable: "کیا پینے کے قابل؟",
    measure_history_empty: "ابھی تک کوئی ریڈنگ محفوظ نہیں کی گئی۔",
    measure_footer_note:
      "مشورہ: یہی ریڈنگز آپ نقشہ، کسان مدد اور چارٹ صفحات پر بھی استعمال کر سکتے ہیں۔"
  }
};

// For any keys missing in non-English languages, fall back to English
MEASURE_LANGS.forEach(code => {
  if (code === "en") return;
  window.measureTranslations[code] = Object.assign(
    {},
    window.measureTranslations.en,
    window.measureTranslations[code] || {}
  );
});

// Helper used by measure.html / measure.js
function getMeasureStrings(langCode) {
  return window.measureTranslations[langCode] || window.measureTranslations.en;
}
