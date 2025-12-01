function getKitStrings(lang) {
  const t = {
    en: {
      buykit_title: "Buy Water Testing Kit",
      kit1_title: "All-in-One Water Testing Kit",
      kit1_desc: "Buy our complete starter kit – pH strips, TDS meter and thermometer for basic water checks.",
      kit1_price: "₹ 350",
      btn_buy: "Buy Now",

      prod_tds_title: "Wellon TDS Meter",
      prod_tds_desc: "Digital TDS and temperature meter to check dissolved solids in water.",
      prod_tds_price: "Approx. ₹80 – ₹188",

      prod_temp_title: "AptechDeals Digital Thermometer",
      prod_temp_desc: "Compact sensor thermometer for quick water temperature readings.",
      prod_temp_price: "Approx. ₹77 – ₹387",

      prod_ph_title: "pH Test Paper (80 Strips)",
      prod_ph_desc: "Universal pH indicator strips (1–14) for water and soil testing.",
      prod_ph_price: "Approx. ₹105",

      prod_link_amazon: "Buy on Amazon",
      prod_link_meesho: "Buy on Meesho"
    },

    hi: {
      buykit_title: "जल परीक्षण किट खरीदें",
      kit1_title: "ऑल‑इन‑वन जल परीक्षण किट",
      kit1_desc: "हमारी पूरी स्टार्टर किट खरीदें – बुनियादी जल जाँच के लिए pH स्ट्रिप्स, TDS मीटर और थर्मामीटर।",
      kit1_price: "₹ 350",
      btn_buy: "अभी खरीदें",

      prod_tds_title: "वेलॉन TDS मीटर",
      prod_tds_desc: "पानी में घुले ठोस पदार्थों की जाँच के लिए डिजिटल TDS और तापमान मीटर।",
      prod_tds_price: "लगभग ₹80 – ₹188",

      prod_temp_title: "AptechDeals डिजिटल थर्मामीटर",
      prod_temp_desc: "तेज़ जल तापमान मापने के लिए कॉम्पैक्ट सेंसर थर्मामीटर।",
      prod_temp_price: "लगभग ₹77 – ₹387",

      prod_ph_title: "pH टेस्ट पेपर (80 स्ट्रिप्स)",
      prod_ph_desc: "जल और मिट्टी की जाँच के लिए 1–14 रेंज वाले यूनिवर्सल pH इंडिकेटर स्ट्रिप्स।",
      prod_ph_price: "लगभग ₹105",

      prod_link_amazon: "अमेज़न पर खरीदें",
      prod_link_meesho: "मीशो पर खरीदें"
    },

    bn: {
      buykit_title: "জল পরীক্ষার কিট কিনুন",
      kit1_title: "অল‑ইন‑ওয়ান জল পরীক্ষার কিট",
      kit1_desc: "আমাদের সম্পূর্ণ স্টার্টার কিট কিনুন – মূল জল পরীক্ষার জন্য pH স্ট্রিপ, TDS মিটার এবং থার্মোমিটার।",
      kit1_price: "₹ 350",
      btn_buy: "এখনই কিনুন",

      prod_tds_title: "Wellon TDS মিটার",
      prod_tds_desc: "জলে দ্রবীভূত কঠিন পদার্থ পরিমাপের জন্য ডিজিটাল TDS এবং তাপমাত্রা মিটার।",
      prod_tds_price: "প্রায় ₹80 – ₹188",

      prod_temp_title: "AptechDeals ডিজিটাল থার্মোমিটার",
      prod_temp_desc: "দ্রুত জল তাপমাত্রা মাপার জন্য কম্প্যাক্ট সেন্সর থার্মোমিটার।",
      prod_temp_price: "প্রায় ₹77 – ₹387",

      prod_ph_title: "pH টেস্ট পেপার (৮০ স্ট্রিপ)",
      prod_ph_desc: "জল ও মাটি পরীক্ষার জন্য ১–১৪ রেঞ্জের ইউনিভার্সাল pH ইন্ডিকেটর স্ট্রিপ।",
      prod_ph_price: "প্রায় ₹105",

      prod_link_amazon: "অ্যামাজনে কিনুন",
      prod_link_meesho: "মিশোতে কিনুন"
    },

    ta: {
      buykit_title: "நீர் சோதனை கிட் வாங்குங்கள்",
      kit1_title: "ஆல்‑இன்‑ஒன் நீர் சோதனை கிட்",
      kit1_desc: "அடிப்படை நீர் பரிசோதனைக்காக pH ஸ்டிரிப், TDS மீட்டர், வெப்பமானி ஆகியவை உள்ள எங்கள் முழு ஸ்டார்டர் கிட் வாங்கவும்.",
      kit1_price: "₹ 350",
      btn_buy: "இப்போது வாங்கவும்",

      prod_tds_title: "Wellon TDS மீட்டர்",
      prod_tds_desc: "நீரில் கரைந்துள்ள திண்மங்களை அளக்கும் டிஜிட்டல் TDS மற்றும் வெப்பமானி.",
      prod_tds_price: "சுமார் ₹80 – ₹188",

      prod_temp_title: "AptechDeals டிஜிட்டல் வெப்பமானி",
      prod_temp_desc: "நீரின் வெப்பநிலையை விரைவாக அளவிட சிறிய சென்சார் வெப்பமானி.",
      prod_temp_price: "சுமார் ₹77 – ₹387",

      prod_ph_title: "pH டெஸ்ட் பேப்பர் (80 ஸ்டிரிப்கள்)",
      prod_ph_desc: "நீர் மற்றும் மண் பரிசோதனைக்கான 1–14 வரம்பில் யுனிவர்சல் pH ஸ்டிரிப்கள்.",
      prod_ph_price: "சுமார் ₹105",

      prod_link_amazon: "அமேசானில் வாங்கவும்",
      prod_link_meesho: "மீஷோவில் வாங்கவும்"
    },

    mr: {
      buykit_title: "पाणी चाचणी किट खरेदी करा",
      kit1_title: "ऑल‑इन‑वन पाणी चाचणी किट",
      kit1_desc: "मूलभूत पाणी तपासणीसाठी pH स्ट्रिप्स, TDS मीटर आणि थर्मामीटर असलेली आमची पूर्ण स्टार्टर किट खरेदी करा.",
      kit1_price: "₹ 350",
      btn_buy: "आता खरेदी करा",

      prod_tds_title: "Wellon TDS मीटर",
      prod_tds_desc: "पाण्यातील विरघळलेले घन पदार्थ तपासण्यासाठी डिजिटल TDS आणि तापमान मीटर.",
      prod_tds_price: "सुमारे ₹80 – ₹188",

      prod_temp_title: "AptechDeals डिजिटल थर्मामीटर",
      prod_temp_desc: "पाण्याचे तापमान पटकन मोजण्यासाठी कॉम्पॅक्ट सेन्सर थर्मामीटर.",
      prod_temp_price: "सुमारे ₹77 – ₹387",

      prod_ph_title: "pH टेस्ट पेपर (80 स्ट्रिप्स)",
      prod_ph_desc: "पाणी आणि माती तपासणीसाठी 1–14 श्रेणीतील युनिव्हर्सल pH स्ट्रिप्स.",
      prod_ph_price: "सुमारे ₹105",

      prod_link_amazon: "अॅमेझॉनवर खरेदी करा",
      prod_link_meesho: "मीशोवर खरेदी करा"
    },

    gu: {
      buykit_title: "પાણી ટેસ્ટિંગ કિટ ખરીદો",
      kit1_title: "ઓલ‑ઇન‑વન પાણી ટેસ્ટિંગ કિટ",
      kit1_desc: "મૂળ પાણી ચકાસણી માટે pH સ્ટ્રિપ્સ, TDS મીટર અને થર્મોમીટર ધરાવતી અમારી સંપૂર્ણ સ્ટાર્ટર કિટ ખરીદો.",
      kit1_price: "₹ 350",
      btn_buy: "હવે ખરીદો",

      prod_tds_title: "Wellon TDS મીટર",
      prod_tds_desc: "પાણીમાં ઘુલેલાં ઘન પદાર્થો માપવા માટે ડિજિટલ TDS અને તાપમાન મીટર.",
      prod_tds_price: "લગભગ ₹80 – ₹188",

      prod_temp_title: "AptechDeals ડિજિટલ થર્મોમીટર",
      prod_temp_desc: "પાણીનું તાપમાન જલદી માપવા માટે કોમ્પેક્ટ સેન્સર થર્મોમીટર.",
      prod_temp_price: "લગભગ ₹77 – ₹387",

      prod_ph_title: "pH ટેસ્ટ પેપર (80 સ્ટ્રિપ્સ)",
      prod_ph_desc: "પાણી અને જમીનની ચકાસણી માટે 1–14 રેન્જના યુનિવર્સલ pH સ્ટ્રિપ્સ.",
      prod_ph_price: "લગભગ ₹105",

      prod_link_amazon: "એમેઝોન પર ખરીદો",
      prod_link_meesho: "મેશો પર ખરીદો"
    },

    pa: {
      buykit_title: "ਪਾਣੀ ਟੈਸਟਿੰਗ ਕਿਟ ਖਰੀਦੋ",
      kit1_title: "ਆਲ‑ਇਨ‑ਵਨ ਪਾਣੀ ਟੈਸਟਿੰਗ ਕਿਟ",
      kit1_desc: "ਬੁਨਿਆਦੀ ਪਾਣੀ ਜਾਂਚ ਲਈ pH ਸਟਰਿੱਪ, TDS ਮੀਟਰ ਤੇ ਥਰਮੋਮੀਟਰ ਵਾਲੀ ਸਾਡੀ ਪੂਰੀ ਸਟਾਰਟਰ ਕਿਟ ਖਰੀਦੋ।",
      kit1_price: "₹ 350",
      btn_buy: "ਹੁਣ ਖਰੀਦੋ",

      prod_tds_title: "Wellon TDS ਮੀਟਰ",
      prod_tds_desc: "ਪਾਣੀ ਵਿੱਚ ਘੁੱਲੇ ਠੋਸ ਪਦਾਰਥ ਮਾਪਣ ਲਈ ਡਿਜੀਟਲ TDS ਤੇ ਤਾਪਮਾਨ ਮੀਟਰ।",
      prod_tds_price: "ਲਗਭਗ ₹80 – ₹188",

      prod_temp_title: "AptechDeals ਡਿਜੀਟਲ ਥਰਮੋਮੀਟਰ",
      prod_temp_desc: "ਪਾਣੀ ਦਾ ਤਾਪਮਾਨ ਜਲਦੀ ਮਾਪਣ ਲਈ ਛੋਟਾ ਸੈਂਸਰ ਥਰਮੋਮੀਟਰ।",
      prod_temp_price: "ਲਗਭਗ ₹77 – ₹387",

      prod_ph_title: "pH ਟੈਸਟ ਪੇਪਰ (80 ਸਟਰਿੱਪਾਂ)",
      prod_ph_desc: "ਪਾਣੀ ਅਤੇ ਮਿੱਟੀ ਦੀ ਜਾਂਚ ਲਈ 1–14 ਰੇਂਜ ਵਾਲੀਆਂ ਯੂਨੀਵਰਸਲ pH ਸਟਰਿੱਪਾਂ।",
      prod_ph_price: "ਲਗਭਗ ₹105",

      prod_link_amazon: "ਅਮੇਜ਼ਨ ਤੋਂ ਖਰੀਦੋ",
      prod_link_meesho: "ਮੀਸ਼ੋ ਤੋਂ ਖਰੀਦੋ"
    },

    te: {
      buykit_title: "నీటి పరీక్ష కిట్ కొనండి",
      kit1_title: "ఆల్‑ఇన్‑వన్ నీటి పరీక్ష కిట్",
      kit1_desc: "ప్రాథమిక నీటి తనిఖీల కోసం pH స్ట్రిప్స్, TDS మీటర్, థర్మామీటర్ కలిగిన మా పూర్తి స్టార్టర్ కిట్ కొనండి.",
      kit1_price: "₹ 350",
      btn_buy: "ఇప్పుడు కొనండి",

      prod_tds_title: "Wellon TDS మీటర్",
      prod_tds_desc: "నీటిలో కరిగిన ఘనాల్ని కొలిచే డిజిటల్ TDS మరియు ఉష్ణోగ్రత మీటర్.",
      prod_tds_price: "సుమారు ₹80 – ₹188",

      prod_temp_title: "AptechDeals డిజిటల్ థర్మామీటర్",
      prod_temp_desc: "నీటి ఉష్ణోగ్రతను త్వరగా కొలవడానికి కాంపాక్ట్ సెన్సార్ థర్మామీటర్.",
      prod_temp_price: "సుమారు ₹77 – ₹387",

      prod_ph_title: "pH టెస్ట్ పేపర్ (80 స్ట్రిప్స్)",
      prod_ph_desc: "నీరు, మట్టి పరీక్ష కోసం 1–14 రేంజ్‌లో యూనివర్సల్ pH స్ట్రిప్స్.",
      prod_ph_price: "సుమారు ₹105",

      prod_link_amazon: "అమెజాన్‌లో కొనండి",
      prod_link_meesho: "మేషోలో కొనండి"
    },

    kn: {
      buykit_title: "ನೀರು ಪರೀಕ್ಷಾ ಕಿಟ್ ಖರೀದಿಸಿ",
      kit1_title: "ಆಲ್‑ಇನ್‑ವನ್ ನೀರು ಪರೀಕ್ಷಾ ಕಿಟ್",
      kit1_desc: "ಮೂಲಭೂತ ನೀರಿನ ತಪಾಸಣೆಗೆ pH ಸ್ಟ್ರಿಪ್, TDS ಮೀಟರ್ ಮತ್ತು ತಾಪಮಾನ ಮಾಪಕ ಹೊಂದಿರುವ ನಮ್ಮ ಸಂಪೂರ್ಣ ಸ್ಟಾರ್ಟರ್ ಕಿಟ್ ಖರೀದಿಸಿ.",
      kit1_price: "₹ 350",
      btn_buy: "ಈಗ ಖರೀದಿಸಿ",

      prod_tds_title: "Wellon TDS ಮೀಟರ್",
      prod_tds_desc: "ನೀರಿನಲ್ಲಿ ಕರಗಿದ ಘನ ಪದಾರ್ಥಗಳನ್ನು ಅಳೆಯುವ ಡಿಜిటಲ್ TDS ಮತ್ತು ತಾಪಮಾನ ಮೀಟರ್.",
      prod_tds_price: "ಸುಮಾರು ₹80 – ₹188",

      prod_temp_title: "AptechDeals ಡಿಜಿಟಲ್ ತಾಪಮಾನ ಮೀಟರ್",
      prod_temp_desc: "ನೀರಿನ ತಾಪಮಾನವನ್ನು ಬೇಗ ಅಳೆಯಲು ಸಣ್ಣ ಸೆನ್ಸರ್ ತಾಪಮಾನ ಮೀಟರ್.",
      prod_temp_price: "ಸುಮಾರು ₹77 – ₹387",

      prod_ph_title: "pH ಟೆಸ್ಟ್ ಪೇಪರ್ (80 ಸ್ಟ್ರಿಪ್‌ಗಳು)",
      prod_ph_desc: "ನೀರು ಮತ್ತು ಮಣ್ಣಿನ ತಪಾಸಣೆಗೆ 1–14 ವ್ಯಾಪ್ತಿಯ ಯುನಿವರ್ಸಲ್ pH ಸ್ಟ್ರಿಪ್‌ಗಳು.",
      prod_ph_price: "ಸುಮಾರು ₹105",

      prod_link_amazon: "ಅಮೆಜಾನ್‌ನಲ್ಲಿ ಖರೀದಿಸಿ",
      prod_link_meesho: "ಮೀಶೋದಲ್ಲಿ ಖರೀದಿಸಿ"
    },

    ur: {
      buykit_title: "پانی ٹیسٹنگ کٹ خریدیں",
      kit1_title: "آل‑اِن‑ون پانی ٹیسٹنگ کٹ",
      kit1_desc: "بنیادی پانی چیک کے لیے pH اسٹرپس، TDS میٹر اور تھرمامیٹر پر مشتمل ہماری مکمل اسٹارٹر کٹ خریدیں۔",
      kit1_price: "₹ 350",
      btn_buy: "ابھی خریدیں",

      prod_tds_title: "Wellon TDS میٹر",
      prod_tds_desc: "پانی میں گھلے ہوئے ٹھوس مادّوں کو ناپنے کے لیے ڈیجیٹل TDS اور درجہ حرارت میٹر۔",
      prod_tds_price: "تقریباً ₹80 – ₹188",

      prod_temp_title: "AptechDeals ڈیجیٹل تھرمامیٹر",
      prod_temp_desc: "پانی کا درجہ حرارت تیزی سے جانچنے کے لیے چھوٹا سینسر تھرمامیٹر۔",
      prod_temp_price: "تقریباً ₹77 – ₹387",

      prod_ph_title: "pH ٹیسٹ پیپر (80 اسٹرپس)",
      prod_ph_desc: "پانی اور مٹی کی جانچ کے لیے 1–14 رینج کے یونیورسل pH اسٹرپس۔",
      prod_ph_price: "تقریباً ₹105",

      prod_link_amazon: "ایمیزون سے خریدیں",
      prod_link_meesho: "میisho سے خریدیں"
    }
  };

  return t[lang] || t.en;
}
