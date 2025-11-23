// care.translations.js
// Provides translations for Care page for 10 languages.
// Languages: en, hi, bn, ta, mr, gu, pa, te, kn, ur
// Usage in care.html: const t = getCareStrings(langCode);

(function (global) {
  const careStrings = {
    // ---------------- ENGLISH (base) ----------------
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
      care_title: "Water care & actions",
      care_intro:
        "See what your latest reading means, get a simple care plan for your water, and learn how to protect wells, tanks, ponds, and community water bodies.",

      // 1. My latest reading
      last_title: "1. My latest reading",
      last_load_btn: "Load latest from history",
      last_clear_checks: "Clear care checklist",
      last_empty_note:
        "Load the latest reading from the Measure page to see a care plan based on its index and pH.",

      // Reading details
      last_saved_prefix: "Last saved: ",
      location_prefix: "Location: ",
      band_good: "Good quality",
      band_med: "Moderate quality",
      band_poor: "Poor quality",
      band_unknown: "No index",
      details_index: "Index",
      details_ph: "pH",
      details_temp: "Temp",
      details_turb: "Turbidity",

      // 2. Care plan
      careplan_title: "2. Care plan for this band",
      safety_title: "Health & safety first",
      improve_title: "Improve water quality",
      expert_title: "When to seek expert help",
      checklist_title: "My care checklist",

      // 3. Symptom helper
      symptom_title: "3. What does your water look like?",
      symptom_label: "Choose a symptom",
      symptom_cause_title: "Likely causes",
      symptom_action_title: "What you can do now",

      // 4. Reminders
      reminder_title: "4. Reminders",
      reminder_label: "Check water every",
      reminder_none: "No reminder",
      reminder_7: "7 days",
      reminder_30: "30 days",
      reminder_90: "90 days",
      reminder_save_btn: "Save reminder",
      reminder_due:
        "Reminder: it has been {n} days, please test your water again.",
      reminder_ok:
        "You tested {n} days ago. Keep an eye and test again when the reminder is due.",
      reminder_saved: "Reminder saved for every {n} days.",

      // Right column: care library
      library_title: "Care library",
      home_care_title: "At home (drinking & cooking)",
      farm_care_title: "For farms & ponds",
      community_care_title: "Community water bodies",
      facts_title: "Did you know?",
      care_footer_note:
        "Tip: Use this care plan together with the Map and Farmers Assistant pages to decide next actions for your family, farm, or community.",

      // Care plan content by band
      carePlan: {
        good: {
          safety: [
            "Water is generally safe if the source is protected; still boil for babies and people with weak immunity.",
            "Use clean, covered storage containers and avoid dipping cups or hands directly into stored water."
          ],
          improve: [
            "Clean storage tanks and household filters at least once every 1–3 months.",
            "Keep runoff, detergents and oils away from wells and tanks to avoid sudden deterioration."
          ],
          expert: [
            "If you notice sudden colour, smell or taste changes, repeat the test and contact local health workers.",
            "Share good results with neighbours to encourage regular testing and protection of the source."
          ]
        },
        med: {
          safety: [
            "Avoid drinking directly; boil or use proper filters before consumption.",
            "Do not use moderately polluted water for infant formula or people with serious illness."
          ],
          improve: [
            "Clean storage tanks, pipelines and taps; remove settled sludge where possible.",
            "Improve drainage around wells and handpumps so that waste water does not flow back.",
            "Promote household filters (ceramic, RO, or UV) depending on local recommendations."
          ],
          expert: [
            "If the index remains moderate for three or more tests, request a detailed test from local authorities.",
            "Form a small community group to track readings and coordinate cleaning days."
          ]
        },
        poor: {
          safety: [
            "Do not use this water for drinking or cooking until quality improves.",
            "Use an alternative safe source (bottled, tanker, public tap) for all direct consumption."
          ],
          improve: [
            "Identify and stop direct pollution sources such as sewage leakage, dumping, or industrial discharge.",
            "Use this water only for non-contact uses (cleaning floors, flushing) until tests show recovery.",
            "Plan for medium-term solutions like new wells, treatment plants or source protection measures."
          ],
          expert: [
            "Inform local panchayat, water board or health department with your test results.",
            "If animals or fish are dying near the source, treat it as an emergency and restrict access."
          ]
        },
        unknown: {
          safety: [
            "Test the water at least once before using it regularly for drinking.",
            "If colour, smell or taste seems unusual, treat the source as unsafe until you can test it."
          ],
          improve: [
            "Keep the area around the source clean and free from waste, oil and chemicals.",
            "Talk to neighbours or local health workers about arranging a group water test."
          ],
          expert: [
            "If you suspect contamination from industry or sewage, report it even if no index is available yet."
          ]
        }
      },

      // Checklist
      checklistItems: [
        "I cleaned or inspected my storage tank or main container this month.",
        "I checked for smells, colour changes or visible oil/foam in my regular water source.",
        "I keep drinking water covered and use a ladle or tap instead of dipping cups.",
        "I avoid throwing chemicals, oil, medicine or plastic into drains or nearby water bodies.",
        "I plan to re-test water using strips or the camera tool within the reminder period."
      ],

      // Symptom helper
      symptomOptions: {
        muddy: {
          label: "Looks brown or muddy",
          causes: [
            "Heavy rain or upstream soil erosion has added a lot of suspended mud.",
            "The pump or well is drawing water from near the bottom where sediment is high."
          ],
          actions: [
            "Let water settle in a clean bucket and pour off the clear upper layer before use.",
            "Use cloth or cartridge filters to remove fine particles before boiling or disinfection.",
            "On farms, maintain vegetative strips and bunds to reduce soil erosion into ponds and canals."
          ]
        },
        green: {
          label: "Green layer / algae on top",
          causes: [
            "Excess nutrients (fertilisers, detergents, sewage) are feeding algal growth.",
            "Slow-moving or stagnant water with high sunlight encourages algal blooms."
          ],
          actions: [
            "Avoid using strongly green, smelly water for drinking or bathing.",
            "Reduce fertiliser and detergent runoff into tanks and ponds; repair leaks from toilets or drains.",
            "Increase shade or mixing of ponds where feasible, and consult fisheries experts if fish are present."
          ]
        },
        smell: {
          label: "Strong smell (rotten egg / sewage)",
          causes: [
            "Rotten-egg smell often indicates hydrogen sulphide from decaying organic matter with low oxygen.",
            "Sewage or industrial discharge may be mixing into the water source."
          ],
          actions: [
            "Do not drink foul-smelling water even after boiling; find a safer source.",
            "Check for nearby leaking toilets, drains or sewer lines and report them to local authorities.",
            "Increase ventilation of storage tanks and avoid leaving organic waste near wells."
          ]
        },
        scale: {
          label: "White scale on taps / utensils",
          causes: [
            "White scale on taps and utensils usually means hard water with high calcium and magnesium.",
            "Very hard water may also carry more dissolved salts and give a different taste."
          ],
          actions: [
            "Descale kettles and taps with mild vinegar or citric acid solutions.",
            "Consider softening options (RO units or softeners) if hardness is very high.",
            "Use hard water mainly for washing or cleaning, and save softer sources for drinking."
          ]
        },
        foam: {
          label: "Foam or detergent bubbles",
          causes: [
            "Detergents, soaps or surfactants are entering the water body.",
            "Grey-water or sewage outlets may be directly connected to drains or streams."
          ],
          actions: [
            "Avoid washing clothes or dishes directly in rivers, ponds or wells.",
            "Route grey-water through soak pits or simple treatment beds instead of open drains.",
            "Report persistent foaming in public water bodies to local authorities."
          ]
        }
      },

      // Care library lists
      homeCareList: [
        "Boil or filter drinking water, especially for children and elders.",
        "Clean kitchen storage containers regularly and keep them covered.",
        "Do not store drinking water near chemicals, fuel, or cleaning agents."
      ],
      farmCareList: [
        "Avoid over-use of fertilisers and pesticides near wells and ponds.",
        "Keep livestock sheds and manure pits away from drinking water sources.",
        "Use buffer strips of grass or trees along field edges and canals."
      ],
      communityCareList: [
        "Do not dump solid waste into ponds, lakes, rivers or drains.",
        "Organise periodic clean-ups of local ponds, tanks and riverbanks.",
        "Report sewage leaks and industrial discharge to local authorities."
      ],
      factsList: [
        "Regular testing helps detect changes before they become serious health risks.",
        "Protecting the catchment area is often cheaper than treating polluted water.",
        "Simple actions at home and on farms can greatly reduce water contamination."
      ]
    },

    // ---------------- HINDI ----------------
    // (Full content adapted from your old Care page + new keys)
    hi: {
      nav_home: "होम",
      nav_measure: "मापें",
      nav_map: "मानचित्र",
      nav_care: "देखभाल",
      nav_farmers: "किसान सहायता",
      nav_chart: "चार्ट",
      nav_learn: "सीखें",
      nav_buykit: "किट खरीदें",
      nav_about: "के बारे में",

      care_title: "पानी की देखभाल और उपाय",
      care_intro:
        "अपनी नवीनतम रीडिंग का मतलब समझें, अपने पानी के लिए सरल देखभाल योजना पाएं और कुओं, टैंकों, तालाबों और सामुदायिक जल स्रोतों की सुरक्षा करना सीखें।",

      last_title: "1. मेरी नवीनतम रीडिंग",
      last_load_btn: "इतिहास से नवीनतम लोड करें",
      last_clear_checks: "देखभाल चेकलिस्ट साफ करें",
      last_empty_note:
        "इंडेक्स और pH के आधार पर देखभाल योजना देखने के लिए माप पेज से नवीनतम रीडिंग लोड करें।",

      last_saved_prefix: "आखिरी रिकॉर्ड: ",
      location_prefix: "स्थान: ",
      band_good: "अच्छी गुणवत्ता",
      band_med: "मध्यम गुणवत्ता",
      band_poor: "खराब गुणवत्ता",
      band_unknown: "कोई इंडेक्स नहीं",
      details_index: "इंडेक्स",
      details_ph: "pH",
      details_temp: "तापमान",
      details_turb: "गंदलापन",

      careplan_title: "2. इस बैंड के लिए देखभाल योजना",
      safety_title: "पहले स्वास्थ्य और सुरक्षा",
      improve_title: "पानी की गुणवत्ता सुधारें",
      expert_title: "कब विशेषज्ञ की मदद लें",
      checklist_title: "मेरी देखभाल चेकलिस्ट",

      symptom_title: "3. आपका पानी कैसा दिखता है?",
      symptom_label: "एक लक्षण चुनें",
      symptom_cause_title: "संभावित कारण",
      symptom_action_title: "अभी आप क्या कर सकते हैं",

      reminder_title: "4. रिमाइंडर",
      reminder_label: "पानी की जाँच करें हर",
      reminder_none: "कोई रिमाइंडर नहीं",
      reminder_7: "7 दिन",
      reminder_30: "30 दिन",
      reminder_90: "90 दिन",
      reminder_save_btn: "रिमाइंडर सहेजें",
      reminder_due:
        "रिमाइंडर: {n} दिन हो गए हैं, कृपया अपना पानी फिर से जाँचें।",
      reminder_ok:
        "आपने {n} दिन पहले परीक्षण किया था। ध्यान रखें और समय आने पर फिर से जाँच करें।",
      reminder_saved: "हर {n} दिन पर रिमाइंडर सहेजा गया।",

      library_title: "देखभाल लाइब्रेरी",
      home_care_title: "घर पर (पीने और पकाने के लिए)",
      farm_care_title: "खेत और तालाबों के लिए",
      community_care_title: "सामुदायिक जल स्रोत",
      facts_title: "क्या आप जानते हैं?",
      care_footer_note:
        "सुझाव: अपने परिवार, खेत या समुदाय के लिए अगले कदम तय करने के लिए इस देखभाल योजना को मानचित्र और किसान सहायता पेज के साथ उपयोग करें।",

      carePlan: {
        good: {
          safety: [
            "यदि स्रोत सुरक्षित है तो पानी सामान्य रूप से सुरक्षित है; फिर भी बच्चों और कमजोर लोगों के लिए उबालें।",
            "साफ, ढके हुए बर्तनों में पानी रखें और सीधे हाथ या गिलास न डुबोएँ।"
          ],
          improve: [
            "स्टोरेज टैंक और घरेलू फिल्टर को हर 1–3 महीने में साफ करें।",
            "कुओं और टैंकों के पास बहता पानी, डिटर्जेंट और तेल जाने से रोकें।"
          ],
          expert: [
            "यदि रंग, गंध या स्वाद अचानक बदल जाए तो दोबारा टेस्ट करें और स्वास्थ्य कार्यकर्ताओं से संपर्क करें।",
            "अच्छे परिणाम पड़ोसियों के साथ साझा करें ताकि नियमित परीक्षण और स्रोत सुरक्षा को बढ़ावा मिले।"
          ]
        },
        med: {
          safety: [
            "सीधे न पिएँ; पीने से पहले उबालें या सही फिल्टर का उपयोग करें।",
            "मध्यम रूप से दूषित पानी शिशु आहार या गंभीर रोगियों के लिए उपयोग न करें।"
          ],
          improve: [
            "स्टोरेज टैंक, पाइप और नलों को साफ करें; जहाँ संभव हो जमी हुई गाद निकालें।",
            "कुओं और हैंडपंप के आसपास की निकासी सुधारें ताकि गंदा पानी वापस न आए।",
            "स्थानीय सलाह के अनुसार घरेलू फिल्टर (सिरेमिक, RO, या UV) अपनाएँ।"
          ],
          expert: [
            "यदि इंडेक्स 3 या अधिक टेस्ट में मध्यम रहे, तो स्थानीय विभाग से विस्तृत परीक्षण कराएँ।",
            "रीडिंग दर्ज करने और सफाई अभियान चलाने के लिए छोटा सामुदायिक समूह बनाएं।"
          ]
        },
        poor: {
          safety: [
            "गुणवत्ता सुधरने तक इस पानी का उपयोग पीने और पकाने के लिए न करें।",
            "सभी पीने के कामों के लिए वैकल्पिक सुरक्षित स्रोत (बोतलबंद, टैंकर, सार्वजनिक नल) का प्रयोग करें।"
          ],
          improve: [
            "सीवेज लीकेज, कचरा फेंकना या औद्योगिक उत्सर्जन जैसे प्रत्यक्ष प्रदूषण स्रोतों को पहचानें और रोकें।",
            "जब तक परीक्षण बेहतर न हों, इस पानी का उपयोग केवल फर्श साफ करने या फ्लश करने जैसे संपर्क‑रहित कार्यों के लिए करें।",
            "नए कुओं, ट्रीटमेंट प्लांट या स्रोत संरक्षण जैसे मध्यम अवधि के समाधान की योजना बनाएं।"
          ],
          expert: [
            "अपने परीक्षण परिणामों के साथ पंचायत, जल बोर्ड या स्वास्थ्य विभाग को सूचित करें।",
            "यदि स्रोत के पास मछलियाँ या जानवर मर रहे हों, तो इसे आपातकाल मानकर पहुँच सीमित करें।"
          ]
        },
        unknown: {
          safety: [
            "नियमित पीने के उपयोग से पहले पानी का कम से कम एक बार परीक्षण करें।",
            "यदि रंग, गंध या स्वाद असामान्य लगे तो परीक्षण होने तक स्रोत को असुरक्षित मानें।"
          ],
          improve: [
            "स्रोत के आसपास का क्षेत्र स्वच्छ रखें और वहाँ कचरा, तेल या रसायन न डालें।",
            "समूह परीक्षण के लिए पड़ोसियों या स्वास्थ्य कार्यकर्ताओं से बात करें।"
          ],
          expert: [
            "यदि आपको उद्योग या सीवेज से प्रदूषण का शक हो, तो इंडेक्स न होने पर भी रिपोर्ट करें।"
          ]
        }
      },

      checklistItems: [
        "मैंने इस महीने अपना स्टोरेज टैंक या मुख्य बर्तन साफ या जाँच किया है।",
        "मैंने अपने नियमित जल स्रोत में गंध, रंग परिवर्तन या तेल/झाग की जाँच की है।",
        "मैं पीने के पानी को ढककर रखता हूँ और सीधी डुबकी की बजाय करछुल या नल से निकालता हूँ।",
        "मैं रसायन, तेल, दवा या प्लास्टिक को नालियों या नजदीकी जल स्रोतों में नहीं फेंकता।",
        "मैं रिमाइंडर अवधि के अंदर स्ट्रिप्स या कैमरा टूल से पानी की दोबारा जाँच करने की योजना बनाता हूँ।"
      ],

      symptomOptions: {
        muddy: {
          label: "भूरा या कीचड़ जैसा दिखता है",
          causes: [
            "तेज बारिश या ऊपरी क्षेत्रों में कटाव से पानी में बहुत मिट्टी घुल गई है।",
            "पंप या कुआँ तल के पास से पानी खींच रहा है जहाँ तलछट अधिक है।"
          ],
          actions: [
            "साफ बाल्टी में पानी जमा कर उसे जमने दें और ऊपर की साफ परत को उपयोग करें।",
            "उबालने या कीटाणुशोधन से पहले कपड़े या कार्ट्रिज फिल्टर से महीन कण हटाएँ।",
            "खेतों में तालाब और नहरों के किनारे घास/पेड़ों की पट्टी रखें ताकि मिट्टी का कटाव कम हो।"
          ]
        },
        green: {
          label: "ऊपर हरी परत / काई",
          causes: [
            "अधिक उर्वरक, डिटर्जेंट या सीवेज से पोषक तत्व बढ़ने पर काई तेजी से बढ़ती है।",
            "धीमी या रुकी हुई धूप‑भरी जलराशि में शैवाल खूब फैलते हैं।"
          ],
          actions: [
            "बहुत हरा और बदबूदार पानी पीने या नहाने के लिए उपयोग न करें।",
            "उर्वरक और डिटर्जेंट का बहाव तालाबों और टैंकों में जाने से रोकें; टॉयलेट या नालियों के रिसाव सुधारें।",
            "जहाँ संभव हो तालाबों में आंशिक छाया या मिश्रण बढ़ाएँ और मछली होने पर मत्स्य विशेषज्ञ से सलाह लें।"
          ]
        },
        smell: {
          label: "तेज़ गंध (सड़ा अंडा / सीवेज)",
          causes: [
            "सड़ी‑अंडे जैसी गंध अक्सर कम ऑक्सीजन वाले सड़ते जैविक पदार्थ से आने वाले हाइड्रोजन सल्फाइड से होती है।",
            "सीवेज या औद्योगिक अपशिष्ट जल स्रोत में मिल सकता है।"
          ],
          actions: [
            "उबालने के बाद भी बदबूदार पानी न पिएँ; सुरक्षित स्रोत खोजें।",
            "पास के लीक होते शौचालय, नालियों या सीवर लाइन की जाँच करें और रिपोर्ट करें।",
            "स्टोरेज टैंकों में हवा का संचार बढ़ाएँ और पास में जैविक कचरा न रखें।"
          ]
        },
        scale: {
          label: "नलों / बर्तनों पर सफेद परत",
          causes: [
            "नलों और बर्तनों पर सफेद परत आम तौर पर उच्च कैल्शियम‑मैग्नीशियम वाले कठोर पानी को दर्शाती है।",
            "बहुत कठोर पानी में घुले लवण अधिक होते हैं और स्वाद अलग हो सकता है।"
          ],
          actions: [
            "केतली और नलों पर जमी परत को हल्के सिरके या साइट्रिक एसिड से साफ करें।",
            "बहुत अधिक कठोरता होने पर RO या सॉफ्टनर जैसे विकल्प पर विचार करें।",
            "कठोर पानी मुख्यतः धोने‑साफ करने के लिए और नरम स्रोत पीने के लिए रखें।"
          ]
        },
        foam: {
          label: "फोम या डिटर्जेंट के बुलबुले",
          causes: [
            "डिटर्जेंट, साबुन या अन्य सर्फेक्टेंट जल स्रोत में जा रहे हैं।",
            "ग्रे‑वॉटर या सीवेज सीधे नालों या धाराओं में छोड़ा जा रहा हो सकता है।"
          ],
          actions: [
            "कपड़े या बर्तन सीधे नदी, तालाब या कुएँ में धोने से बचें।",
            "ग्रे‑वॉटर को खुले नालों की बजाय सोख‑पिट या साधारण उपचार बेड से गुजारें।",
            "सार्वजनिक जल स्रोतों में लगातार झाग दिखने पर स्थानीय अधिकारियों को सूचना दें।"
          ]
        }
      },

      homeCareList: [
        "पीने का पानी विशेष रूप से बच्चों और बुजुर्गों के लिए उबालें या फिल्टर करें।",
        "रसोई के स्टोरेज बर्तनों को नियमित रूप से साफ कर ढककर रखें।",
        "पीने के पानी को रसायन, ईंधन या सफाई सामग्री के पास न रखें।"
      ],
      farmCareList: [
        "कुओं और तालाबों के पास उर्वरक और कीटनाशकों का अत्यधिक उपयोग न करें।",
        "पशु शेड और गोबर के गड्ढे पीने के जल स्रोतों से दूर रखें।",
        "खेतों और नहरों के किनारे घास या पेड़ों की पट्टी लगाएं।"
      ],
      communityCareList: [
        "तालाब, झील, नदी या नालों में ठोस कचरा न फेंकें।",
        "स्थानीय तालाबों, टैंकों और नदी किनारों की समय‑समय पर सफाई आयोजित करें।",
        "सीवेज लीकेज और औद्योगिक उत्सर्जन की सूचना अधिकारियों को दें।"
      ],
      factsList: [
        "नियमित परीक्षण से समस्या गंभीर होने से पहले ही पता चल जाती है।",
        "कैचमेंट क्षेत्र की सुरक्षा अक्सर प्रदूषित पानी के उपचार से सस्ती होती है।",
        "घर और खेतों पर छोटे‑छोटे कदम पानी के प्रदूषण को काफी घटा सकते हैं।"
      ]
    },

    // ---------------- BENGALI ----------------
    bn: {
      nav_home: "হোম",
      nav_measure: "মাপুন",
      nav_map: "মানচিত্র",
      nav_care: "যত্ন",
      nav_farmers: "কৃষক সহায়তা",
      nav_chart: "চার্ট",
      nav_learn: "শিখুন",
      nav_buykit: "কিট কিনুন",
      nav_about: "সম্পর্কে",

      care_title: "জল যত্ন ও করণীয়",
      care_intro:
        "আপনার সর্বশেষ রিডিং থেকে জল মানে কী বোঝায়, আপনার পানির জন্য একটি সহজ যত্ন পরিকল্পনা নিন এবং কুয়ো, ট্যাংক, পুকুর ও কমিউনিটি জলস্রোত কীভাবে রক্ষা করবেন তা শিখুন।",

      last_title: "১. আমার সর্বশেষ রিডিং",
      last_load_btn: "ইতিহাস থেকে সর্বশেষ নিন",
      last_clear_checks: "যত্ন চেকলিস্ট মুছে ফেলুন",
      last_empty_note:
        "ইন্ডেক্স এবং pH‑এর উপর ভিত্তি করে যত্ন পরিকল্পনা দেখতে মেজার পেজ থেকে সর্বশেষ রিডিং লোড করুন।",

      last_saved_prefix: "শেষ রেকর্ড: ",
      location_prefix: "অবস্থান: ",
      band_good: "ভাল মান",
      band_med: "মাঝারি মান",
      band_poor: "খারাপ মান",
      band_unknown: "কোনো ইন্ডেক্স নেই",
      details_index: "ইন্ডেক্স",
      details_ph: "pH",
      details_temp: "তাপমাত্রা",
      details_turb: "ঘোলাভাব",

      careplan_title: "২. এই ব্যান্ডের জন্য যত্ন পরিকল্পনা",
      safety_title: "প্রথমে স্বাস্থ্য ও নিরাপত্তা",
      improve_title: "জলের মান উন্নত করুন",
      expert_title: "কবে বিশেষজ্ঞের সাহায্য নেবেন",
      checklist_title: "আমার যত্ন চেকলিস্ট",

      symptom_title: "৩. আপনার পানি দেখতে কেমন?",
      symptom_label: "একটি লক্ষণ বেছে নিন",
      symptom_cause_title: "সম্ভাব্য কারণ",
      symptom_action_title: "এখন আপনি কী করতে পারেন",

      reminder_title: "৪. রিমাইন্ডার",
      reminder_label: "পানি পরীক্ষা করুন প্রতি",
      reminder_none: "কোনো রিমাইন্ডার নেই",
      reminder_7: "৭ দিন",
      reminder_30: "৩০ দিন",
      reminder_90: "৯০ দিন",
      reminder_save_btn: "রিমাইন্ডার সেভ করুন",
      reminder_due: "রিমাইন্ডার: {n} দিন হয়ে গেছে, দয়া করে আবার জল পরীক্ষা করুন।",
      reminder_ok:
        "আপনি {n} দিন আগে পরীক্ষা করেছেন। নজর রাখুন এবং সময় হলে আবার পরীক্ষা করুন।",
      reminder_saved: "প্রতি {n} দিনে রিমাইন্ডার সেভ করা হয়েছে।",

      library_title: "যত্ন লাইব্রেরি",
      home_care_title: "বাড়িতে (পান ও রান্নার জন্য)",
      farm_care_title: "খেত ও পুকুরের জন্য",
      community_care_title: "কমিউনিটি জলস্রোত",
      facts_title: "আপনি কি জানেন?",
      care_footer_note:
        "পরামর্শ: আপনার পরিবার, খেত বা কমিউনিটির পরবর্তী পদক্ষেপ ঠিক করতে এই যত্ন পরিকল্পনাকে মানচিত্র ও কৃষক সহায়তা পেজের সঙ্গে ব্যবহার করুন।",

      carePlan: {
        good: {
          safety: [
            "উৎস সুরক্ষিত থাকলে জল সাধারণত নিরাপদ; তবুও শিশু ও দুর্বলদের জন্য ফুটিয়ে নিন।",
            "পরিষ্কার, ঢাকনা‑ওয়ালা পাত্রে জল রাখুন এবং সরাসরি হাত বা গ্লাস ডোবাবেন না।"
          ],
          improve: [
            "স্টোরেজ ট্যাংক ও ঘরের ফিল্টার অন্তত প্রতি ১–৩ মাসে পরিষ্কার করুন।",
            "কুয়ো ও ট্যাংকের আশেপাশে বর্ষার পানি, ডিটারজেন্ট ও তেল ঢুকতে দেবেন না।"
          ],
          expert: [
            "হঠাৎ রং, গন্ধ বা স্বাদ বদলে গেলে আবার পরীক্ষা করুন এবং স্বাস্থ্যকর্মীদের জানান।",
            "ভাল ফলাফল প্রতিবেশীদের সঙ্গে ভাগ করে নিন যাতে নিয়মিত টেস্ট ও উৎস সুরক্ষা বাড়ে।"
          ]
        },
        med: {
          safety: [
            "সরাসরি খাবেন না; আগে ফুটিয়ে নিন বা ঠিকমতো ফিল্টার ব্যবহার করুন।",
            "মাঝারি দূষিত জল শিশুখাদ্য বা গুরুতর অসুস্থদের জন্য ব্যবহার করবেন না।"
          ],
          improve: [
            "স্টোরেজ ট্যাংক, পাইপ ও কল পরিষ্কার করুন; সম্ভব হলে জমে থাকা কাদা বের করে দিন।",
            "কুয়ো ও হ্যান্ডপাম্পের চারপাশের ড্রেনেজ ভাল করুন যাতে ময়লা জল ফিরে না আসে।",
            "স্থানীয় পরামর্শ অনুযায়ী ঘরে সেরামিক, RO বা UV ফিল্টার ব্যবহার করুন।"
          ],
          expert: [
            "ইন্ডেক্স যদি তিন বা ততোধিক পরীক্ষায় মাঝারি থাকে, তবে বিস্তারিত পরীক্ষার জন্য দপ্তরে জানিয়ে দিন।",
            "রিডিং নথিভুক্ত করতে ও পরিষ্কার‑পরিচ্ছন্নতার জন্য ছোট কমিউনিটি দল গড়ে তুলুন।"
          ]
        },
        poor: {
          safety: [
            "মান ভাল না হওয়া পর্যন্ত এই জল পান বা রান্নার জন্য ব্যবহার করবেন না।",
            "সব ধরনের পানীয় ব্যবহারের জন্য বিকল্প নিরাপদ উৎস (বোতল, ট্যাংকার, পাবলিক ট্যাপ) নিন।"
          ],
          improve: [
            "পয়ঃনিষ্কাশন লিক, আবর্জনা ফেলা বা কারখানার বর্জ্যর মতো প্রত্যক্ষ দূষণ উৎস চিহ্নিত করে বন্ধ করুন।",
            "টেস্ট ভাল না হওয়া পর্যন্ত এই জল কেবল মেঝে পরিষ্কার বা ফ্লাশের মত সংস্পর্শ‑বিহীন কাজে ব্যবহার করুন।",
            "নতুন কুয়ো, ট্রিটমেন্ট প্ল্যান্ট বা উৎস সুরক্ষা‑এর মতো মাঝারি মেয়াদের সমাধানের পরিকল্পনা করুন।"
          ],
          expert: [
            "আপনার পরীক্ষার ফলাফলসহ পঞ্চায়েত, জল দফতর বা স্বাস্থ্য দফতরকে জানান।",
            "উৎসের কাছে মাছ বা পশু মরতে দেখলে জরুরি অবস্থা ধরে নিয়ে প্রবেশ সীমিত করুন।"
          ]
        },
        unknown: {
          safety: [
            "নিয়মিত পান করার আগে জল অন্তত একবার পরীক্ষা করুন।",
            "রং, গন্ধ বা স্বাদ অস্বাভাবিক মনে হলে পরীক্ষার আগ পর্যন্ত উৎসকে অনিরাপদ ধরুন।"
          ],
          improve: [
            "উৎসের চারপাশ পরিষ্কার রাখুন এবং সেখানে আবর্জনা, তেল বা রাসায়নিক ফেলবেন না।",
            "গ্রুপ টেস্টের জন্য প্রতিবেশী বা স্বাস্থ্যকর্মীদের সঙ্গে কথা বলুন।"
          ],
          expert: [
            "শিল্প বা ড্রেনের দূষণের সন্দেহ থাকলে ইন্ডেক্স না থাকলেও জানিয়ে দিন।"
          ]
        }
      },

      checklistItems: [
        "এই মাসে আমি আমার স্টোরেজ ট্যাংক বা প্রধান পাত্র পরিষ্কার বা পরীক্ষা করেছি।",
        "আমি নিয়মিত জলস্রোতে গন্ধ, রং বদলানো বা তেল/ফেনা আছে কিনা দেখেছি।",
        "আমি পানির পাত্র ঢেকে রাখি এবং সরাসরি ডোবানোর বদলে ডেলচি বা ট্যাপ দিয়ে জল তুলি।",
        "আমি রাসায়নিক, তেল, ওষুধ বা প্লাস্টিক নালায় বা কাছের জলস্রোতে ফেলি না।",
        "আমি রিমাইন্ডার সময়ের মধ্যে স্ট্রিপ বা ক্যামেরা টুল দিয়ে আবার জল পরীক্ষা করার পরিকল্পনা করছি।"
      ],

      symptomOptions: {
        muddy: {
          label: "বাদামি বা কাদার মত দেখায়",
          causes: [
            "ভারি বৃষ্টি বা উজানে ভাঙনের ফলে জলে অনেক কাদা মিশে গেছে।",
            "পাম্প বা কুয়ো তলদেশের কাছ থেকে জল তুলছে যেখানে পলি বেশি।"
          ],
          actions: [
            "পরিষ্কার বালতিতে জল নিয়ে জমতে দিন, তারপর ওপরের স্বচ্ছ অংশ ব্যবহার করুন।",
            "ফুটোনোর বা জীবাণুমুক্ত করার আগে কাপড় বা কার্ট্রিজ ফিল্টার দিয়ে সূক্ষ্ম কণা ছেঁকে নিন।",
            "খেতে পুকুর ও খালের ধারে ঘাস/গাছের বাফার স্ট্রিপ রাখুন যাতে মাটি কম ভাঙে।"
          ]
        },
        green: {
          label: "উপরের দিকে সবুজ স্তর / শৈবাল",
          causes: [
            "অতিরিক্ত সার, ডিটারজেন্ট বা পয়ঃনিষ্কাশন থেকে পুষ্টি বেড়ে যাওয়ায় শৈবাল বাড়ছে।",
            "ধীর বা স্থির রৌদ্রোজ্জ্বল জলে শৈবাল দ্রুত ছড়ায়।"
          ],
          actions: [
            "অত্যন্ত সবুজ ও দুর্গন্ধযুক্ত জল পান বা স্নানের জন্য ব্যবহার করবেন না।",
            "সার ও ডিটারজেন্টের পানি ট্যাংক ও পুকুরে যাওয়া বন্ধ করুন; পায়খানা বা নালার লিক মেরামত করুন।",
            "যেখানে সম্ভব পুকুরে আংশিক ছায়া বা নাড়া বাড়ান এবং মাছ থাকলে মৎস্য‑বিশেষজ্ঞের সঙ্গে কথা বলুন।"
          ]
        },
        smell: {
          label: "তীব্র গন্ধ (পচা ডিম / নালা)",
          causes: [
            "পচা ডিমের গন্ধ সাধারণত কম অক্সিজেনযুক্ত পচা জৈব পদার্থ থেকে আসা হাইড্রোজেন সালফাইডের কারণে হয়।",
            "পয়ঃনিষ্কাশন বা শিল্পবর্জ্য জলের উৎসে মিশে যেতে পারে।"
          ],
          actions: [
            "ফুটিয়েও দুর্গন্ধযুক্ত জল খাবেন না; নিরাপদ উৎস খুঁজুন।",
            "চারপাশে লিক হওয়া পায়খানা, নালা বা স্যুয়ার লাইন আছে কি না দেখে রিপোর্ট করুন।",
            "স্টোরেজ ট্যাংকে বাতাস চলাচল বাড়ান এবং কাছে জৈব আবর্জনা জমতে দেবেন না।"
          ]
        },
        scale: {
          label: "কল / বাসনে সাদা আস্তরণ",
          causes: [
            "কল ও বাসনে সাদা আস্তরণ সাধারণত উচ্চ ক্যালসিয়াম‑ম্যাগনেসিয়ামযুক্ত শক্ত জল বোঝায়।",
            "অতিরিক্ত শক্ত জলে আরও লবণ থাকে এবং স্বাদ আলাদা হতে পারে।"
          ],
          actions: [
            "কেতলি ও কলের আস্তরণ হালকা ভিনেগার বা সাইট্রিক অ্যাসিড দিয়ে পরিষ্কার করুন।",
            "খুব বেশি শক্ত হলে RO বা সফ্টনারের মতো বিকল্প ভাবুন।",
            "শক্ত জল প্রধানত ধোয়া‑মোছার কাজে আর নরম উৎস পান করার জন্য ব্যবহার করুন।"
          ]
        },
        foam: {
          label: "ফেনা বা ডিটারজেন্টের বাবল",
          causes: [
            "ডিটারজেন্ট, সাবান বা অন্যান্য সার্ফেকট্যান্ট জলস্রোতে ঢুকছে।",
            "গ্রে‑ওয়াটার বা পয়ঃনিষ্কাশন সরাসরি নালা বা খালে ফেলা হচ্ছে।"
          ],
          actions: [
            "কাপড় বা বাসন সরাসরি নদী, পুকুর বা কুয়োতে ধোবেন না।",
            "গ্রে‑ওয়াটারকে খোলা নালার বদলে সোক‑পিট বা সহজ ট্রিটমেন্ট বেড দিয়ে পাঠান।",
            "পাবলিক জলস্রোতে বারবার ফেনা দেখলে স্থানীয় কর্তৃপক্ষকে জানান।"
          ]
        }
      },

      homeCareList: [
        "বিশেষ করে শিশু ও বৃদ্ধদের জন্য পানির জল ফুটিয়ে বা ফিল্টার করে নিন।",
        "রান্নাঘরের জল রাখার পাত্র নিয়মিত পরিষ্কার করে ঢেকে রাখুন।",
        "পানীয় জল রাসায়নিক, জ্বালানি বা ক্লিনার‑এর কাছে রাখবেন না।"
      ],
      farmCareList: [
        "কুয়ো ও পুকুরের কাছাকাছি অতিরিক্ত সার ও কীটনাশক ব্যবহার করবেন না।",
        "পশুর ঘর ও গোবরের গর্ত পানীয় জলস্রোত থেকে দূরে রাখুন।",
        "খেত ও খালের ধারে ঘাস বা গাছের বাফার স্ট্রিপ লাগান।"
      ],
      communityCareList: [
        "পুকুর, হ্রদ, নদী বা নালায় কঠিন আবর্জনা ফেলবেন না।",
        "স্থানীয় পুকুর, ট্যাংক ও নদীর ঘাট নিয়মিত পরিষ্কার‑অভিযান করুন।",
        "স্যুয়ার লিক ও শিল্পবর্জ্যের ছাড়ার খবর কর্তৃপক্ষকে দিন।"
      ],
      factsList: [
        "নিয়মিত জল পরীক্ষা করলে সমস্যা গুরুতর হওয়ার আগেই ধরা পড়ে।",
        "ক্যাচমেন্ট এলাকা রক্ষা করা প্রায়ই দূষিত জল পরিশোধনের চেয়ে সস্তা।",
        "বাড়ি ও খেতে ছোট ছোট পদক্ষেপ জল দূষণ অনেক কমাতে পারে।"
      ]
    },

   // ---------------- TAMIL (FULL) ----------------
ta: {
  nav_home: "முகப்பு",
  nav_measure: "அளவிடு",
  nav_map: "வரைபடம்",
  nav_care: "பராமரிப்பு",
  nav_farmers: "விவசாயி உதவி",
  nav_chart: "வரைபடம் (Chart)",
  nav_learn: "கற்றல்",
  nav_buykit: "கிட் வாங்க",
  nav_about: "தகவல்",

  care_title: "நீர் பராமரிப்பு மற்றும் நடவடிக்கைகள்",
  care_intro:
    "உங்கள் சமீபத்திய ரீடிங் என்ன அர்த்தம் சொல்கிறது என்பதை அறிந்து, உங்கள் நீருக்கான எளிய பராமரிப்பு திட்டத்தைப் பெற்று, கிணறுகள், தொட்டிகள், குளங்கள் மற்றும் சமூக நீர்நிலைகளை பாதுகாப்பது எப்படி என்று கற்றுக்கொள்ளுங்கள்.",

  last_title: "1. என் சமீபத்திய ரீடிங்",
  last_load_btn: "வரலாற்றிலிருந்து சமீபத்தியதை ஏற்று",
  last_clear_checks: "பராமரிப்பு சரிபார்ப்பு பட்டியலை அழி",
  last_empty_note:
    "இண்டெக்ஸ் மற்றும் pH அடிப்படையில் பராமரிப்பு திட்டம் காண Measure பக்கத்திலிருந்து சமீபத்திய ரீடிங்கை ஏற்றவும்.",

  last_saved_prefix: "கடைசியாக சேமித்தது: ",
  location_prefix: "இடம்: ",
  band_good: "நல்ல தரமான நீர்",
  band_med: "மிதமான தரமான நீர்",
  band_poor: "மோசமான தரமான நீர்",
  band_unknown: "இண்டெக்ஸ் கிடைக்கவில்லை",
  details_index: "இண்டெக்ஸ்",
  details_ph: "pH",
  details_temp: "சூடு",
  details_turb: "மங்கல்",

  careplan_title: "2. இந்த நிலைக்கு பராமரிப்பு திட்டம்",
  safety_title: "முதலில் ஆரோக்கியமும் பாதுகாப்பும்",
  improve_title: "நீர்தரத்தை மேம்படுத்துவது",
  expert_title: "நிபுணரிடம் எப்போது செல்ல வேண்டும்",
  checklist_title: "என் பராமரிப்பு சரிபார்ப்பு பட்டியல்",

  symptom_title: "3. உங்கள் தண்ணீர் எப்படி தெரிகிறது?",
  symptom_label: "ஒரு அறிகுறியைத் தேர்ந்தெடுக்கவும்",
  symptom_cause_title: "சாத்தியமான காரணங்கள்",
  symptom_action_title: "இப்போது நீங்கள் செய்யக்கூடியவை",

  reminder_title: "4. நினைவூட்டல்கள்",
  reminder_label: "தண்ணீரைச் சோதிக்க வேண்டிய இடைவெளி",
  reminder_none: "நினைவூட்டல் இல்லை",
  reminder_7: "7 நாட்கள்",
  reminder_30: "30 நாட்கள்",
  reminder_90: "90 நாட்கள்",
  reminder_save_btn: "நினைவூட்டலைச் சேமிக்கவும்",
  reminder_due:
    "நினைவூட்டல்: {n} நாட்கள் ஆகிவிட்டன, தயவுசெய்து மீண்டும் தண்ணீரைச் சோதிக்கவும்.",
  reminder_ok:
    "நீங்கள் {n} நாட்களுக்கு முன்பு தண்ணீரைச் சோதித்துள்ளீர்கள். கவனத்தில் வைத்திருந்து, காலம் வந்ததும் மீண்டும் சோதிக்கவும்.",
  reminder_saved: "ஒவ்வொரு {n} நாளுக்கும் நினைவூட்டல் சேமிக்கப்பட்டது.",

  library_title: "பராமரிப்பு நூலகம்",
  home_care_title: "வீட்டில் (குடிநீர் மற்றும் சமையல்)",
  farm_care_title: "வயல்கள் மற்றும் குளங்களுக்கு",
  community_care_title: "சமூக நீர்நிலைகள்",
  facts_title: "உங்களுக்குத் தெரியுமா?",
  care_footer_note:
    "உங்கள் குடும்பம், வயல் அல்லது சமூகத்திற்கு அடுத்த படிகளைத் தீர்மானிக்க இந்த பராமரிப்பு திட்டத்தை வரைபடம் மற்றும் விவசாயி உதவி பக்கங்களுடன் சேர்த்து பயன்படுத்துங்கள்.",

  carePlan: {
    good: {
      safety: [
        "நீர்மூலம் நன்றாக பாதுகாக்கப்பட்டிருந்தால் இந்த நீர் பொதுவாக குடிப்பதற்கு பாதுகாப்பானது; இருந்தாலும் குழந்தைகள் மற்றும் பலவீனமானவர்களுக்கு கொடுக்க முன் கொதிக்கவிடுங்கள்.",
        "சுத்தமான, மூடிய பாத்திரங்களில் நீரை வைத்திருந்து, கையையும் குவளையையும் நேராக தண்ணீரில் டிப் செய்யாமல் கரண்டி அல்லது குழாயைப் பயன்படுத்துங்கள்."
      ],
      improve: [
        "ஸ்டோரேஜ் டேங்கும் வீட்டுக்குள் இருக்கும் ஃபில்ட்டர்களும் குறைந்தது 1–3 மாதத்திற்கு ஒருமுறை நன்றாக சுத்தம் செய்யப்பட வேண்டும்.",
        "கிணறு, தொட்டி போன்றவற்றின் அருகில் கழிவுநீர், டிடர்ஜெண்ட், எண்ணெய் போன்றவை ஓடி சேராதபடி வடிகால் ஏற்பாடு செய்யுங்கள்."
      ],
      expert: [
        "நீரின் நிறம், வாசனை அல்லது சுவை திடீரென்று மாறினால் மீண்டும் டெஸ்ட் செய்து, அருகிலுள்ள சுகாதாரப் பணியாளர்களை தொடர்பு கொள்ளுங்கள்.",
        "உங்கள் நல்ல ரீடிங்கை அக்கம்பக்கத்தாருடன் பகிர்ந்து, அனைவரும் நிரந்தரமாக சோதனை செய்து மூலத்தைப் பாதுகாக்க ஊக்குவிக்கவும்."
      ]
    },
    med: {
      safety: [
        "இத்தகைய நீரை நேராகக் குடிக்க வேண்டாம்; முதலில் கொதிக்கவிடுங்கள் அல்லது சரியான ஃபில்ட்டர் மூலம் வடித்து குடிக்கவும்.",
        "மிதமாகக் கெட்ட நீரை குழந்தை பால் கலவை தயாரிக்கவும், கடுமையான நோயாளிகளுக்கும் பயன்படுத்த வேண்டாம்."
      ],
      improve: [
        "ஸ்டோரேஜ் டேங்க், குழாய்கள், டேப்கள் ஆகியவற்றை சுத்தம் செய்து, உள்ளே தங்கி இருக்கும் சழும்பை (sludge) வாய்ப்புள்ள இடங்களில் அகற்றுங்கள்.",
        "கிணறு அல்லது ஹேண்ட்பம்ப் சுற்றிலும் மழை நீரோட்டம் நன்றாக வெளியேறும்படி வடிகால் வசதி அமைத்து கழிவுநீர் திரும்பச் செல்லாமல் பார்த்துக் கொள்ளுங்கள்.",
        "உங்கள் பகுதியில் பரிந்துரைக்கப்பட்டிருப்பின் வீட்டு நிலை செராமிக், RO அல்லது UV ஃபில்ட்டர்களை ஊக்குவிக்கவும்."
      ],
      expert: [
        "மூன்று அல்லது அதற்கு மேற்பட்ட டெஸ்ட்களில் இண்டெக்ஸ் எப்போதும் மிதமான அளவிலேயே இருந்தால், உள்ளூர் அதிகாரிகளிடம் விரிவான ஆய்வை கோருங்கள்.",
        "கிராமம் அல்லது குடியிருப்பில் சிலர் சேர்ந்து ரீடிங்குகளை பதிவு செய்து, கூட்டு சுத்தம் செய்யும் நாட்களை திட்டமிடுங்கள்."
      ]
    },
    poor: {
      safety: [
        "இந்த நீரை தரம் மேம்படும் வரை குடிப்பதற்கும் சமையலுக்கும் முற்றிலும் பயன்படுத்த வேண்டாம்.",
        "பாட்டில் நீர், டேங்கர் அல்லது பொதுக் குழாய் போன்ற மாற்று பாதுகாப்பான மூலங்களை அனைத்துத் தாகத் தேவைகளுக்கும் பயன்படுத்துங்கள்."
      ],
      improve: [
        "கழிவுநீர் கசிவு, குப்பை கொட்டுதல், தொழிற்சாலை கழிவு போன்ற நேரடி மாசுபாட்டு மூலங்களை கண்டறிந்து உடனே நிறுத்த நடவடிக்கை எடுக்குங்கள்.",
        "டெஸ்ட் ரிசல்ட் மேம்படும் வரை இந்த நீரை தரை துப்பரவு, கழிப்பறை ப்ளஷ் போன்ற நேரடி தொடா்பு இல்லாத வேலைகளுக்கு மட்டும் பயன்படுத்துங்கள்.",
        "புதிய கிணறு தோண்டுதல், தண்ணீர் சுத்திகரிப்பு நிலையம் அமைத்தல், மூலப்பகுதி பாதுகாப்பு போன்ற நடுத்தர காலத் தீர்வுகளை திட்டமிடுங்கள்."
      ],
      expert: [
        "உங்கள் டெஸ்ட் விளைவுகளுடன் உள்ளூர் பஞ்சாயத்து, வாட்டர்போர்டு அல்லது சுகாதாரத்துறையினருக்கு தகவல் தெரிவிக்கவும்.",
        "அந்த நீர்நிலைக்கு அருகில் மீன்கள் அல்லது மிருகங்கள் இறந்து கிடப்பதை கண்டால், அதை அவசரநிலையாகக் கருதி மக்கள் நுழையாமல் கட்டுப்படுத்துங்கள்."
      ]
    },
    unknown: {
      safety: [
        "இந்த நீரை தினசரி குடிநீராக பயன்படுத்தும் முன் குறைந்தபட்சம் ஒருமுறை சோதனை செய்து உறுதி செய்து கொள்ளுங்கள்.",
        "நிறம், வாசனை அல்லது சுவை இயல்பிற்கு மாறாக இருந்தால், டெஸ்ட் செய்யும் வரை அந்த மூலத்தை பாதுகாப்பற்றதாகவே கருதுங்கள்."
      ],
      improve: [
        "நீர்மூலத்தைச் சுற்றியுள்ள பகுதியை சுத்தமாக வைத்துக் கொண்டு, குப்பை, எண்ணெய், இரசாயனங்கள் போன்றவை அங்கே சேராமல் தடுக்கவும்.",
        "உங்கள் அண்டை வீட்டார் அல்லது சுகாதாரப் பணியாளர்களுடன் சேர்ந்து குழுவாக நீர்தர சோதனை நடத்த பேசுங்கள்."
      ],
      expert: [
        "தொழிற்சாலை கழிவு அல்லது கழிவுநீர் மூலம் மாசுபாடு இருக்கலாம் என்று சந்தேகமிருந்தால், இன்னும் இண்டெக்ஸ் வராத நிலையில் இருந்தாலும் அதைப் பற்றிய புகாரை அளிக்கவும்."
      ]
    }
  },

  checklistItems: [
    "இந்த மாதத்தில் நான் என் ஸ்டோரேஜ் டேங்க் அல்லது முக்கிய நீர் பாத்திரத்தை குறைந்தது ஒருமுறை சுத்தம் செய்தோ அல்லது பரிசோதித்தோ உள்ளேன்.",
    "என் வழக்கமான நீர்மூலத்தில் புதிதாக வாசனை, நிறமாற்றம், எண்ணெய் படலம் அல்லது நுரை இருக்கிறதா என்று நான் கவனித்து பார்த்தேன்.",
    "குடிநீரை எப்போதும் மூடி வைத்திருக்கிறேன்; கை அல்லது குவளை நேராக மூழ்கவிடாமல் கரண்டி அல்லது குழாயின் மூலம் எடுக்கிறேன்.",
    "இரசாயனங்கள், எண்ணெய், மருந்து, பிளாஸ்டிக் போன்றவற்றை வீட்டுசுற்றிலும் இருக்கும் வடிகால்களிலும் நீர் ஓடும் இடங்களிலும் எறிவதில்லை.",
    "நினைவூட்டல் காலத்துக்குள் ஸ்டிரிப் அல்லது கேமரா கருவி பயன்படுத்திப் புனராய்வு (re‑test) செய்ய திட்டமிட்டுள்ளேன்."
  ],

  symptomOptions: {
    muddy: {
      label: "பழுப்பு / சேறு போன்ற தோற்றம்",
      causes: [
        "கனமழை அல்லது மேல் பகுதியில் ஏற்பட்ட மணல்/மண் சரிவு காரணமாக நீரில் நிறைய சேறும் மண்ணும் கலந்திருக்கலாம்.",
        "பம்ப் அல்லது கிணறு தாழ் பகுதியில் இருந்து நீரை இழுத்துக்கொள்கிறது; அங்கு அடித்தட்டு மண் அதிகமாக இருக்கும்."
      ],
      actions: [
        "சுத்தமான வாளியில் நீரை எடுத்து சில மணி நேரம் அமைதியாக இருக்க விடுங்கள்; மேல் பகுதியில் வரும் தெளிந்த நீரை மட்டும் மெதுவாக எடுத்துப் பயன்படுத்துங்கள்.",
        "உடனே குடிக்க வேண்டிய நீரை கையிருப்பு துணி அல்லது கார்ட்ரிட்ஜ் ஃபில்ட்டர் மூலம் வடிகட்டி பின்னர் கொதிக்கவிடுங்கள்.",
        "வயல்களில், குளங்கள் மற்றும் கால்வாய்களின் கரைகளில் பசுமை பட்டைகள் (களை/மரங்கள்) மற்றும் கட்டைகள் அமைத்து மண் சரிவை குறைக்குங்கள்."
      ]
    },
    green: {
      label: "மேல் பகுதியில் பச்சை படலம் / பாசி",
      causes: [
        "அதிக அளவு உரங்கள், சவர்க்காரம், கழிவுநீர் போன்றவற்றின் ஊட்டச்சத்துக்கள் குளம் அல்லது தொட்டியில் சேர்ந்து பாசி வளர்ச்சியை அதிகரிக்கின்றன.",
        "சூரியஒளி அதிகம் கிடைக்கும் மெதுவாகச் சிந்தும் அல்லது நின்ற நீர்நிலைகளில் பாசி விரைவாக பரவி பூக்களாக (algal bloom) மாறும்."
      ],
      actions: [
        "கடுமையாக பச்சையாகவும் துர்நாற்றம் வரும் நீரையும் குடிப்பதற்கும் குளிப்பதற்கும் பயன்படுத்த வேண்டாம்.",
        "உரமும் சவர்க்காரமும் கலந்த நீரோட்டம் குளம், தொட்டி, கிணறு போன்றவற்றில் நேராக செல்லாதபடி வடிகால் மாற்றங்களைச் செய்யுங்கள்; கழிப்பறை அல்லது கழிவுநீர் குழாய் கசிவு இருந்தால் உடனே சரிசெய்யுங்கள்.",
        "சாத்தியமாயின் குளங்களுக்கு பகுதி நிழல் அளிக்கும் மரங்கள், நெடுவாய் கலக்கம் (aeration) போன்றவற்றை ஏற்படுத்தவும்; மீன்கள் இருந்தால் மீன்வளம் நிபுணர்களிடம் ஆலோசனை பெறுங்கள்."
      ]
    },
    smell: {
      label: "கடுமையான துர்நாற்றம் (சேறு / முட்டை வாசனை)",
      causes: [
        "சேறு முட்டை போன்ற வாசனை, ஆக்சிஜன் குறைந்த நிலையில் அழுகிய உயிர்ச் சத்துகளில் இருந்து உருவாகும் ஹைட்ரஜன் சல்பைடு வாயுவால் ஏற்படுகிறது.",
        "அருகிலுள்ள கழிவுநீர் படுகுழி, கழிப்பறை, தொழிற்சாலை கழிவு போன்றவை நேராக நீர்மூலத்தில் கலந்திருக்கலாம்."
      ],
      actions: [
        "கொதிக்கவிட்ட பிறகும் துர்நாற்றம் இருந்து வந்தால் அந்த நீரைப் பருகாதீர்கள்; வேறு பாதுகாப்பான நீர்மூலத்தைத் தேடுங்கள்.",
        "அருகிலுள்ள கழிப்பறை, கழிவுநீர் குழாய், சாக்கடை போன்றவற்றில் சிதைவு/கசிவு உள்ளதா என்று பார்த்து உள்ளூர் நிர்வாகத்திடம் புகாரளியுங்கள்.",
        "ஸ்டோரேஜ் டேங்குக்கு நல்ல காற்றோட்டம் இருக்கும்படி வாய் பகுதி திறப்புகள் அமைத்து, அதைச்சுற்றி ஈரமான குப்பை, கழிவுகள் போன்றவை குவியாமல் வைத்துக் கொள்ளுங்கள்."
      ]
    },
    scale: {
      label: "டேப்புகள் / பாத்திரங்களில் வெள்ளைப் படலம்",
      causes: [
        "நீரின் கடினத்தன்மை (கால்சியம், மக்னீஷியம் அதிகம்) காரணமாக குழாய்கள், டேப்புகள், பாத்திரங்களில் வெள்ளைப் பாறைபோன்ற படலம் (scale) படிகிறது.",
        "கடின நீரில் கரைந்துள்ள உப்புகள் அதிகம் இருப்பதால் சுவையும் வேறுபடக்கூடும் மற்றும் சோப்பு நுரை குறைவாக இருக்கும்."
      ],
      actions: [
        "கெட்டில்கள், டேப்புகள் போன்றவற்றில் இருக்கும் வெள்ளை படலத்தை மிதமான வெங்காயம் (vinegar) அல்லது எலுமிச்சை அமிலத் திரவத்தால் நனைத்து துடைத்து நீக்குங்கள்.",
        "கடினத்தன்மை மிகவும் அதிகமிருந்தால் RO, softener போன்ற அமைப்புகளைப் பற்றி ஆலோசனை பெறுங்கள்.",
        "சிறிது கடினமான நீரை அதிகமாக குளியல், துவைப்பு போன்ற பயன்பாடுகளுக்கு வைத்துக் கொண்டு, மென்மையான நீர்மூலங்களை குடிப்பதற்கும் சமையலுக்கும் முன்னுரிமை அளிக்கவும்."
      ]
    },
    foam: {
      label: "நுரை அல்லது டிடர்ஜெண்ட் பப்பிள்கள்",
      causes: [
        "உடைத் துவைப்புப் பவுடர், சோப்பு, டிஷ் வாஷ் லிக்விட் போன்ற சுரபக்திகள் (surfactants) நேரடியாக நீர்நிலைகளில் கலந்து இருக்கலாம்.",
        "வீட்டிலிருந்து வரும் பசுமை நீர் (grey water) அல்லது கழிவுநீர் கால்வாய்கள், திறந்த ஓடைகளில் நேரடியாக சேர்க்கப்பட்டிருக்கலாம்."
      ],
      actions: [
        "நதிகள், குளங்கள், கிணறுகள் போன்ற நீர்நிலைகளில் நேரடியாக உடை அல்லது பாத்திரம் கழுவுவதை நிறுத்துங்கள்.",
        "வீட்டு சவர்க்காரம் கலந்த சாம்பாரநீரை திறந்த சாக்கடைக்கு விடாமல், சோக்பிட் அல்லது எளிய சுத்திகரிப்பு களங்களின் வழியாக ஊர்வாக்குங்கள்.",
        "பொது நீர்நிலைகளில் முற்றிலும் நுரை நிரம்பியதை அடிக்கடி பார்த்தால் அதைப் பற்றி உள்ளூர் அரசு அல்லது துறை அதிகாரிகளிடம் உடனே தெரிவியுங்கள்."
      ]
    }
  },

  homeCareList: [
    "சிறார்கள் மற்றும் முதியவர்கள் போன்றவர்களுக்கு குடிநீரை எப்போதும் கொதிக்கவைத்து அல்லது நம்பகமான ஃபில்ட்டர் மூலம் வடிகட்டி வழங்குங்கள்.",
    "சமையலறை ஸ்டோரேஜ் பாத்திரங்களை தடம்பதியாமல் சுத்தம் செய்து காற்று புகாதவாறு மூடியுடன் வைத்திருங்கள்.",
    "குடிநீர் வைக்கப்படும் இடத்திற்கு அருகில் இரசாயனங்கள், எரிபொருள், பூச்சிமருந்து அல்லது சக்திவாய்ந்த சுத்திகரிப்புகள் வைத்திருக்க வேண்டாம்."
  ],
  farmCareList: [
    "வயல்வெளியில் கிணறு, குளம் போன்ற குடிநீருக்கும் பாசனத்துக்கும் பயன்படுத்தப்படும் நீர்நிலைகளின் அருகில் அதிக உரமும் பூச்சிக்கொல்லியும் பயன்படுத்த வேண்டாம்.",
    "மாட்டுத் தோட்டங்கள், உரக் குவியல்கள், மண்ணிலே இருக்கும் மலம் போன்றவை நேரடியாக நீர்நிலைக்கு ஒழுகாமல் இருப்பதற்காக அவற்றைத் தள்ளி அமைக்கவும்.",
    "வயல்வெளி விளிம்புகளிலும் கால்வாய்களின் இருபுறத்திலும் புல் மற்றும் மரங்கள் கொண்ட பாதுகாப்பு பட்டைகள் அமைத்து மண் சரிவையும் ஓட்டத்தையும் குறைக்கவும்."
  ],
  communityCareList: [
    "குளம், ஏரி, ஆறு, கால்வாய் போன்ற எந்த நீர்நிலையிலும் திடக் குப்பை, பிளாஸ்டிக், மருத்துவக் கழிவு போன்றவற்றை எறியக் கூடாது.",
    "கிராமம் அல்லது பகுதி மக்கள் சேர்ந்து உள்ளூர் குளங்கள், கிணறுகள், நதித்தீர்கள் போன்ற இடங்களில் சுத்தம் செய்யும் தினங்களை திட்டமிட்டு நடத்தியுங்கள்.",
    "கழிவுநீர் கசிவு, தொழிற்சாலை கழிவு வெளியேறுதல் போன்றவை கண்ணில் பட்டவுடன் நகராட்சி, பஞ்சாயத்து அல்லது சம்பந்தப்பட்ட துறைக்கு புகார் அளிக்கவும்."
  ],
  factsList: [
    "நீர்தரத்தை நிரந்தரமாக சோதித்து வருவது, பெரிய சுகாதாரப் பிரச்சினையாக மாறும் முன்பே மாற்றங்களைப் ப அறிய உதவுகிறது.",
    "நீர்மூலத்தைச் சுற்றியுள்ள கரையையும் பிடிப்புப் பகுதியையும் பாதுகாப்பது, மாசுபட்ட நீரை சுத்திகரிப்பதை விட பெரும்பாலும் குறைந்த செலவாக இருக்கும்.",
    "வீட்டிலும் வயலிலும் எடுக்கப்படும் சின்னசின்ன முன்னெச்சரிக்கை நடவடிக்கைகள் கூட, நீர்மாசுபாட்டைக் கணிசமாகக் குறைக்க உதவும்."
  ]
},

// ---------------- MARATHI (FULL) ----------------
mr: {
  nav_home: "मुखपृष्ठ",
  nav_measure: "मोजमाप",
  nav_map: "नकाशा",
  nav_care: "काळजी",
  nav_farmers: "शेतकरी सहाय्य",
  nav_chart: "चार्ट",
  nav_learn: "शिका",
  nav_buykit: "किट खरेदी करा",
  nav_about: "माहिती",

  care_title: "पाणी काळजी आणि कृती",
  care_intro:
    "तुमच्या ताज्या मोजमापाचा अर्थ काय आहे हे समजा, पाण्यासाठी साधी काळजी योजना मिळवा आणि विहिरी, टाक्या, तळी आणि सामुदायिक जलस्रोत सुरक्षित कसे ठेवायचे ते शिका.",

  last_title: "1. माझे ताजे मोजमाप",
  last_load_btn: "इतिहासातून नवीनतम लोड करा",
  last_clear_checks: "काळजी तपासणी यादी साफ करा",
  last_empty_note:
    "इंडेक्स आणि pH वर आधारित काळजी योजना पाहण्यासाठी मोजमाप (Measure) पृष्ठावरून ताजे मोजमाप लोड करा.",

  last_saved_prefix: "शेवटचे नोंद: ",
  location_prefix: "ठिकाण: ",
  band_good: "चांगल्या प्रतीचे पाणी",
  band_med: "मध्यम प्रतीचे पाणी",
  band_poor: "निकृष्ट प्रतीचे पाणी",
  band_unknown: "इंडेक्स उपलब्ध नाही",
  details_index: "इंडेक्स",
  details_ph: "pH",
  details_temp: "तापमान",
  details_turb: "गढूळपणा",

  careplan_title: "2. या पातळीसाठी काळजी योजना",
  safety_title: "सर्वप्रथम आरोग्य व सुरक्षा",
  improve_title: "पाण्याची गुणवत्ता सुधार",
  expert_title: "तज्ज्ञांकडे कधी जावे",
  checklist_title: "माझी काळजी तपासणी यादी",

  symptom_title: "3. तुमचे पाणी कसे दिसते?",
  symptom_label: "एक लक्षण निवडा",
  symptom_cause_title: "संभाव्य कारणे",
  symptom_action_title: "आत्ता तुम्ही काय करू शकता",

  reminder_title: "4. स्मरणपत्रे",
  reminder_label: "पाणी तपासा दर",
  reminder_none: "स्मरणपत्र नाही",
  reminder_7: "7 दिवस",
  reminder_30: "30 दिवस",
  reminder_90: "90 दिवस",
  reminder_save_btn: "स्मरणपत्र जतन करा",
  reminder_due:
    "स्मरणपत्र: {n} दिवस झाले आहेत, कृपया पुन्हा पाणी तपासा.",
  reminder_ok:
    "तुम्ही {n} दिवसांपूर्वी तपासणी केली आहे. लक्ष ठेवून वेळ आल्यावर पुन्हा तपासा.",
  reminder_saved: "दर {n} दिवसांनी स्मरणपत्र जतन केले गेले आहे.",

  library_title: "काळजी लायब्ररी",
  home_care_title: "घरी (पिण्यासाठी व स्वयंपाकासाठी)",
  farm_care_title: "शेती आणि तलावांसाठी",
  community_care_title: "सामुदायिक जलस्रोत",
  facts_title: "तुम्हाला माहिती आहे का?",
  care_footer_note:
    "तुमच्या कुटुंब, शेत किंवा वसाहतीसाठी पुढील पावले निश्चित करण्यासाठी ही काळजी योजना नकाशा आणि शेतकरी सहाय्य पानांसोबत वापरा.",

  carePlan: {
    good: {
      safety: [
        "स्रोत चांगल्या प्रकारे संरक्षित असेल तर पाणी सर्वसाधारणपणे सुरक्षित असते; तरीही लहान मुले आणि कमकुवत प्रतिकारशक्ती असणाऱ्यांसाठी उकळून देणे उत्तम.",
        "पाणी नेहमी स्वच्छ व झाकण असलेल्या भांड्यात साठवा आणि हात किंवा ग्लास सरळ बुडवण्याऐवजी करछुल किंवा नळ वापरा."
      ],
      improve: [
        "स्टोरेज टाक्या आणि घरगुती फिल्टर दर 1–3 महिन्यांतून एकदा नीट स्वच्छ करा.",
        "विहिरी, टाक्या यांच्या भोवती सांडपाणी, डिटर्जंट आणि तेल यांचा ओघ जाऊ नये यासाठी योग्य निचरा (drainage) करा."
      ],
      expert: [
        "पाण्याचा रंग, वास किंवा चव अचानक बदलल्यास पुन्हा चाचणी करा आणि स्थानिक आरोग्य कर्मचाऱ्यांशी संपर्क साधा.",
        "चांगले निकाल शेजाऱ्यांसोबत शेअर करा जेणेकरून सर्व जण नियमित तपासणी आणि स्रोत संरक्षणाकडे वळतील."
      ]
    },
    med: {
      safety: [
        "अशा पाण्याचे थेट सेवन करू नका; प्रथम उकळा किंवा विश्वसनीय फिल्टर वापरा.",
        "मध्यम प्रदूषित पाणी बाळाच्या दुधासाठी किंवा गंभीर आजार असलेल्या लोकांसाठी वापरू नका."
      ],
      improve: [
        "स्टोरेज टाकी, पाइपलाईन आणि नळ स्वच्छ करा; शक्य असल्यास साचलेला गाळ काढून टाका.",
        "विहिरी आणि हँडपंपच्या आसपासचा निचरा सुधारा म्हणजे सांडपाणी परत त्या भागात जाऊ शकणार नाही.",
        "स्थानिक शिफारशीनुसार सिरेमिक, RO किंवा UV असे घरगुती फिल्टर प्रोत्साहित करा."
      ],
      expert: [
        "जर तीन किंवा अधिक चाचण्यांमध्ये इंडेक्स सतत मध्यम श्रेणीत राहिला तर स्थानिक अधिकाऱ्यांकडून सविस्तर तपासणी करून घ्या.",
        "रीडिंग नोंदवण्यासाठी आणि नियमित स्वच्छता मोहिमा आखण्यासाठी छोटा सामुदायिक गट तयार करा."
      ]
    },
    poor: {
      safety: [
        "पाण्याची गुणवत्ता सुधारलेपर्यंत हे पाणी पिण्यासाठी आणि स्वयंपाकासाठी अजिबात वापरू नका.",
        "होऊ शकत असल्यास पिण्याच्या सर्व गरजांसाठी पर्यायी सुरक्षित स्रोत — बाटलीबंद पाणी, टँकर किंवा सार्वजनिक नळ — वापरा."
      ],
      improve: [
        "सांडपाणी गळती, कचरा टाकणे, औद्योगिक स्राव यांसारखे थेट प्रदूषण स्रोत ओळखा आणि शक्य तितक्या लवकर थांबवा.",
        "चाचणी निकाल सुधारलेपर्यंत हे पाणी फक्त जमिन धुणे, फ्लशिंग इत्यादी प्रत्यक्ष संपर्क कमी असलेल्या कामांसाठी वापरा.",
        "दीर्घकाळासाठी नवे बोअरवेल, शुद्धीकरण प्रकल्प किंवा स्रोताभोवती संरक्षणात्मक उपाययोजना यांसारख्या योजना तयार करा."
      ],
      expert: [
        "आपल्या चाचणी निकालांसह ग्रामपंचायत, पाणी पुरवठा मंडळ किंवा आरोग्य विभागास माहिती द्या.",
        "स्रोताजवळ मासे किंवा पाळीव प्राणी मरताना दिसले तर त्यास आपत्कालीन स्थिती समजा आणि त्या भागात जाण्यावर मर्यादा आणा."
      ]
    },
    unknown: {
      safety: [
        "हे पाणी दररोज पिण्यापूर्वी किमान एकदा तरी त्याची चाचणी करून घ्या.",
        "रंग, वास किंवा चव काहीतरी वेगळे वाटल्यास चाचणी होईपर्यंत हा स्रोत असुरक्षित समजा."
      ],
      improve: [
        "स्रोताभोवतालचा परिसर नेहमी स्वच्छ व कचरा, तेल व रसायने यांपासून मुक्त ठेवा.",
        "शेजारी आणि स्थानिक आरोग्य कर्मचाऱ्यांशी चर्चा करून सामूहिक पाण्याच्या चाचण्या आयोजित करा."
      ],
      expert: [
        "कारखाना किंवा गटारांमधून प्रदूषण होत असल्याचा संशय असल्यास इंडेक्स नसला तरीही तक्रार नोंदवा."
      ]
    }
  },

  checklistItems: [
    "या महिन्यात मी माझी स्टोरेज टाकी किंवा मुख्य पाण्याचे भांडे किमान एकदा स्वच्छ केले किंवा तपासले आहे.",
    "मी माझ्या नियमित पाण्याच्या स्रोतामध्ये नवीन वास, रंग बदल किंवा तेल/फेस दिसतो का हे तपासले आहे.",
    "मी पिण्याचे पाणी नेहमी झाकून ठेवतो आणि हात किंवा ग्लास बुडवण्याऐवजी करछुल किंवा नळ वापरून काढतो.",
    "मी रसायने, तेल, औषधे किंवा प्लॅस्टिक नाल्यात किंवा जवळच्या जलस्रोतांमध्ये टाकत नाही.",
    "मी स्मरणपत्र काळात स्ट्रिप किंवा कॅमेरा साधन वापरून पुन्हा पाण्याची तपासणी करण्याची योजना केली आहे."
  ],

  symptomOptions: {
    muddy: {
      label: "पाण्याचा रंग तपकिरी / चिखलासारखा",
      causes: [
        "जोरदार पावसामुळे किंवा वरच्या भागात मातीचे क्षरण होऊन पाण्यात भरपूर गाळ मिसळला असू शकतो.",
        "पंप किंवा विहीर तळाजवळून पाणी खेचत आहे जिथे साचलेला गाळ जास्त असतो."
      ],
      actions: [
        "स्वच्छ बादलीत पाणी भरून काही तास तसेच ठेवा आणि वरचा स्वच्छ थर हळूवारपणे वापरा.",
        "उकळण्याआधी किंवा निर्जंतुकीकरणापूर्वी कापड किंवा कार्ट्रिज फिल्टर वापरून सूक्ष्म कण वेगळे करा.",
        "शेतीमध्ये तळी व कालव्यांच्या काठावर गवत व झाडांची पट्टी ठेवून मातीचे वहन कमी करा."
      ]
    },
    green: {
      label: "वर हिरवी शेवाळ / थर",
      causes: [
        "जास्त प्रमाणात खत, डिटर्जंट किंवा सांडपाणी मिळाल्याने पाण्यात पोषकद्रव्ये वाढतात आणि शेवाळ वेगाने वाढते.",
        "उन्हात उघड असलेले, हळूहळू वाहणारे किंवा स्थिर पाणी शैवाल फुलण्यासाठी (algal bloom) योग्य वातावरण देते."
      ],
      actions: [
        "खूप हिरवे किंवा दुर्गंधीयुक्त पाणी पिण्यासाठी किंवा अंघोळीकरता वापरू नका.",
        "खते व डिटर्जंट मिसळलेले पाणी टाक्या व तळ्यांमध्ये जाणार नाही याची काळजी घ्या; शौचालय किंवा गटारातील गळती लवकर दुरुस्त करा.",
        "शक्य असल्यास तळ्यांना अंशत: सावली, पाण्यात हवा मिसळण्याची साधने द्या आणि तिथे मासे असतील तर मत्स्यतज्ज्ञांचा सल्ला घ्या."
      ]
    },
    smell: {
      label: "तीव्र दुर्गंध (सडलेल्या अंड्यासारखा / गटारासारखा)",
      causes: [
        "सडलेल्या अंड्यासारखा वास बहुतेकदा कमी ऑक्सिजन असलेल्या कुजणाऱ्या सेंद्रिय पदार्थांमधून तयार होणाऱ्या हायड्रोजन सल्फाईडमुळे येतो.",
        "जवळच्या गटार, सेप्टिक टँक किंवा उद्योगातून येणारे सांडपाणी पाण्याच्या स्रोतामध्ये मिसळत असू शकते."
      ],
      actions: [
        "उकळल्यानंतरही वास राहणारे पाणी पिऊ नका; शक्य तितक्या लवकर दुसरा सुरक्षित स्रोत शोधा.",
        "जवळपासची शौचालये, नाले किंवा सीवर लाईन गळत आहेत का हे तपासून स्थानिक प्रशासनाला कळवा.",
        "स्टोरेज टाक्यांना पुरेसा हवेशीरपणा मिळेल याची काळजी घ्या आणि आजूबाजूला ओला कचरा व कुजणारे पदार्थ साचू देऊ नका."
      ]
    },
    scale: {
      label: "नळांवर / भांड्यांवर पांढऱ्या थराचे डाग",
      causes: [
        "नळ व भांड्यांवर दिसणारा पांढरा थर साधारणपणे कॅल्शियम, मॅग्नेशियम जास्त असलेल्या कडक पाण्याचे लक्षण असते.",
        "अतिशय कडक पाण्यात विरघळलेले क्षार अधिक असतात आणि पाण्याची चव वेगळी जाणवू शकते."
      ],
      actions: [
        "केतली, नळ व इतर भांड्यांवरील थर हलक्या व्हिनेगर किंवा लिंबाच्या आम्लाच्या द्रावणाने भिजवून स्वच्छ करा.",
        "कठोरता फार जास्त असल्यास RO यंत्रणा किंवा सॉफ्टनरविषयी स्थानिक तज्ज्ञांचा सल्ला घ्या.",
        "कडक पाणी मुख्यतः धुणे, साफसफाईसाठी वापरा आणि तुलनेने मऊ पाण्याच्या स्रोतांना पिणे व स्वयंपाकासाठी राखून ठेवा."
      ]
    },
    foam: {
      label: "फेस किंवा डिटर्जंटचे बुडबुडे",
      causes: [
        "कपडे धुण्याचे साबण, डिशवॉश किंवा इतर डिटर्जंट थेट नद्या, नाले, तळी यामध्ये सोडले जात असावेत.",
        "घरातील ग्रे‑वॉटर किंवा सांडपाणी कोणत्याही प्राथमिक शुद्धीकरणाशिवाय उघड्या नाल्यांमध्ये सोडले जात असेल."
      ],
      actions: [
        "नद्या, तळी किंवा विहिरी यामध्ये थेट कपडे किंवा भांडी धुणे टाळा.",
        "ग्रे‑वॉटरला सोकपिट, फिल्टर बेड किंवा साध्या उपचार व्यवस्थेद्वारे जमिनीत शोषून घ्या, उघड्या नाल्यात न सोडा.",
        "सार्वजनिक जलस्रोतांमध्ये सतत फेस दिसत असल्यास स्थानिक स्वराज्य संस्था किंवा पर्यावरण खात्याला लगेच माहिती द्या."
      ]
    }
  },

  homeCareList: [
    "विशेषतः लहान मुले आणि वृद्धांसाठी पिण्याचे पाणी नेहमी उकळून किंवा विश्वासार्ह फिल्टरमधून गाळून द्या.",
    "स्वयंपाकघरातील पाणी साठवणुकीची भांडी नियमितपणे धुऊन कोरडी व झाकून ठेवा.",
    "पिण्याचे पाणी जिथे ठेवले जाते त्या जागेजवळ रसायने, इंधन, किटकनाशके किंवा कडक साफसफाईचे पदार्थ ठेवू नका."
  ],
  farmCareList: [
    "शेतात विहीरी, बोअरवेल किंवा तळ्यांच्या अगदी जवळ जास्त खत व कीटकनाशके फवारणी करणे टाळा.",
    "जनावरांची गोठी, गोबराच्या खड्ड्या आणि शेण साठवणूक जागा पिण्याच्या पाण्याच्या स्त्रोतांपासून लांब ठेवा.",
    "शेतीच्या कडा व कालव्यांच्या काठावर गवत, झुडपे व झाडांनी बनलेले बफर पट्टे तयार करून मातीचे वहन कमी करा."
  ],
  communityCareList: [
    "तळी, तलाव, नद्या किंवा नाल्यांमध्ये कुठल्याही प्रकारचा घनकचरा, प्लास्टिक किंवा वैद्यकीय कचरा फेकू नका.",
    "गावात किंवा शहर परिसरात स्थानिक तळी, पाणथळ जागा व नदीकिनारे स्वच्छ ठेवण्यासाठी नियमित स्वच्छता मोहीम आयोजित करा.",
    "सीवर गळती, मलजल थेट नदीत सोडणे किंवा औद्योगिक सांडपाणी सोडले जात असल्याचे दिसल्यास त्वरित अधिकाऱ्यांना कळवा."
  ],
  factsList: [
    "नियमित पाणी चाचण्यांमुळे गंभीर आरोग्यधोका निर्माण होण्याआधीच बदल ओळखता येतात.",
    "पाण्याचा उगमस्थळ व त्याच्या आजूबाजूचा कॅचमेंट भाग सुरक्षित ठेवणे, प्रदूषित पाणी शुद्ध करण्यापेक्षा बहुतांश वेळा कमी खर्चिक असते.",
    "घर आणि शेतात घेतलेल्या लहान‑लहान खबरदारीच्या गोष्टींनीही पाण्याचे प्रदूषण मोठ्या प्रमाणात कमी करता येते."
  ]
},

// ---------------- GUJARATI (FULL) ----------------
gu: {
  nav_home: "હોમ",
  nav_measure: "માપો",
  nav_map: "નકશો",
  nav_care: "કાળજી",
  nav_farmers: "ખેડૂત સહાય",
  nav_chart: "ચાર્ટ",
  nav_learn: "શીખો",
  nav_buykit: "કિટ ખરીદો",
  nav_about: "વિશે",

  care_title: "પાણીની કાળજી અને પગલાં",
  care_intro:
    "તમારા તાજેતરના રીડિંગનો અર્થ સમજો, તમારા પાણી માટે સરળ કાળજી યોજના મેળવો અને કૂવા, ટાંકા, તળાવ અને સમુદાયના જળસ્રોતોને કેવી રીતે સુરક્ષિત રાખવા તે શીખો.",

  last_title: "1. મારું તાજેતરનું રીડિંગ",
  last_load_btn: "ઇતિહાસમાંથી નવું રીડિંગ લોડ કરો",
  last_clear_checks: "કાળજી ચેકલિસ્ટ સાફ કરો",
  last_empty_note:
    "ઇન્ડેક્સ અને pH આધારિત કાળજી યોજના જોવા માટે Measure પેજ પરથી તાજેતરનું રીડિંગ લોડ કરો.",

  last_saved_prefix: "છેલ્લે નોંધાયું: ",
  location_prefix: "સ્થાન: ",
  band_good: "સારી ગુણવત્તાનું પાણી",
  band_med: "મધ્યમ ગુણવત્તાનું પાણી",
  band_poor: "ખરાબ ગુણવત્તાનું પાણી",
  band_unknown: "ઇન્ડેક્સ ઉપલબ્ધ નથી",
  details_index: "ઇન્ડેક્સ",
  details_ph: "pH",
  details_temp: "તાપમાન",
  details_turb: "ધૂંધળાપો",

  careplan_title: "2. આ બેંડ માટે કાળજી યોજના",
  safety_title: "સૌપ્રથમ આરોગ્ય અને સુરક્ષા",
  improve_title: "પાણીની ગુણવત્તા સુધારો",
  expert_title: "ક્યારે નિષ્ણાતની મદદ લેવી",
  checklist_title: "મારી કાળજી ચેકલિસ્ટ",

  symptom_title: "3. તમારું પાણી કેવી દેખાય છે?",
  symptom_label: "એક લક્ષણ પસંદ કરો",
  symptom_cause_title: "સંભવિત કારણો",
  symptom_action_title: "હમણાં તમે શું કરી શકો છો",

  reminder_title: "4. સ્મરણપત્રો",
  reminder_label: "પાણી તપાસો દર",
  reminder_none: "સ્મરણપત્ર નથી",
  reminder_7: "7 દિવસ",
  reminder_30: "30 દિવસ",
  reminder_90: "90 દિવસ",
  reminder_save_btn: "સ્મરણપત્ર સાચવો",
  reminder_due:
    "સ્મરણપત્ર: {n} દિવસ થઈ ગયા છે, કૃપા કરીને ફરી પાણી તપાસો.",
  reminder_ok:
    "તમે {n} દિવસ પહેલાં પાણીની ચકાસણી કરી હતી. ધ્યાનમાં રાખો અને સમય આવે ત્યારે ફરી પરીક્ષણ કરો.",
  reminder_saved: "દર {n} દિવસે સ્મરણપત્ર સાચવવામાં આવ્યું છે.",

  library_title: "કાળજી લાઇબ્રેરી",
  home_care_title: "ઘરે (પીવા અને રસોઈ માટે)",
  farm_care_title: "ખેતર અને તળાવ માટે",
  community_care_title: "સમુદાયના જળસ્રોતો",
  facts_title: "શું તમને ખબર છે?",
  care_footer_note:
    "તમારા પરિવાર, ખેતર અથવા સમુદાય માટેના આગળના પગલાં નક્કી કરવા આ કાળજી યોજનાને નકશા અને ખેડૂત સહાય પૃષ્ઠો સાથે ઉપયોગ કરો.",

  carePlan: {
    good: {
      safety: [
        "સ્રોત સારી રીતે સુરક્ષિત હોય તો આ પાણી સામાન્ય રીતે પીવા માટે સુરક્ષિત છે; તેમ છતાં નાનાં બાળકો અને નબળી રોગપ્રતિકારક શક્તિ ધરાવતા લોકો માટે તેને ઉકાળી આપવું સારું.",
        "પાણીને હંમેશા સ્વચ્છ ઢાંકણવાળા વાસણમાં સંગ્રહિત રાખો અને સીધું હાથ કે ગ્લાસ ડૂબાડવાના બદલે કરછી અથવા નળ વડે કાઢો."
      ],
      improve: [
        "સ્ટોરેજ ટાંકી અને ઘરના ફિલ્ટર દર 1–3 મહિનામાં ઓછામાં ઓછો એક વખત સારી રીતે સાફ કરો.",
        "કૂવા અને ટાંકીની આજુબાજુ સાફ નિકાલ રાખીને, સાવરડ, ડિટર્જન્ટ અને તેલવાળો પાણી સીધો સ્રોતમાં ન જવા દો."
      ],
      expert: [
        "પાણીનો રંગ, વાસ અથવા સ્વાદ અચાનક બદલે તો ફરી ટેસ્ટ કરો અને નજીકના આરોગ્ય કર્મચારીઓને જાણ કરો.",
        "સારા પરિણામો પાડોશીઓ સાથે શેર કરો જેથી બધા લોકો નિયમિત પરીક્ષણ અને સ્રોતની રક્ષા તરફ પ્રોત્સાહિત થાય."
      ]
    },
    med: {
      safety: [
        "આ પાણીને સીધું ન પીવું; પહેલા ઉકાળો અથવા યોગ્ય ફિલ્ટર દ્વારા ગાળી પછી જ ઉપયોગ કરો.",
        "મધ્યમ રીતે પ્રદૂષિત પાણીને શિશુઓના દૂધ માટે અથવા ગંભીર બીમાર દર્દીઓ માટે વાપરવું નહીં."
      ],
      improve: [
        "સ્ટોરેજ ટાંકી, પાઇપલાઇન અને નળ સાફ કરો; શક્ય હોય ત્યાં સચ્ચડ (sludge) હટાવો.",
        "કૂવામાં અથવા હેન્ડપંપની આસપાસ ડ્રેનેજ સુધારો જેથી ગંદુ પાણી પાછું સ્રોત તરફ ન વળે.",
        "સ્થાનિક ભલામણ મુજબ ઘરેલુ સિરામિક, RO અથવા UV ફિલ્ટરનો ઉપયોગ પ્રોત્સાહિત કરો."
      ],
      expert: [
        "જો ત્રણ કે તેથી વધુ ટેસ્ટમાં ઇન્ડેક્સ સતત મધ્યમ રહે તો સ્થાનિક સત્તાધિકારીઓ પાસેથી વિગતવાર પરીક્ષણ કરાવો.",
        "રીડિંગ નોંધવા અને સ્વચ્છતા અભિયાન યોજવા માટે નાનું સમુદાય જૂથ બનાવો."
      ]
    },
    poor: {
      safety: [
        "ગુણવત્તા સુધરે ત્યાં સુધી આ પાણીને પીવા અથવા રસોઈ માટે બિલકુલ ઉપયોગમાં ન લેવું.",
        "બોટલવાળું પાણી, ટેન્કર અથવા જાહેર નળ જેવા સલામત વિકલ્પ પાણી સ્ત્રોતો પીવાના કામ માટે વાપરો."
      ],
      improve: [
        "સીવેજ લીક, કચરો ફેંકવો અથવા ઔદ્યોગિક પ્રવાહ જેવી સીધી પ્રદૂષણ સ્ત્રોતોને ઓળખો અને તરત જ બંધ કરો.",
        "ટેસ્ટનું પરિણામ સુધરે ત્યાં સુધી આ પાણીને ફક્ત ફ્લોર સફાઈ, ફ્લશિંગ જેવા જ્યાં શરીરનો સીધો સંપર્ક ઓછો હોય તેવા કામ માટે વાપરો.",
        "લાંબા ગાળાના ઉકેલ તરીકે નવા બોરવેલ, ટ્રીટમેન્ટ પ્લાન્ટ અથવા સ્રોત રક્ષણ જેવી યોજનાઓ બનાવો."
      ],
      expert: [
        "તમારા ટેસ્ટના પરિણામો સાથે ગ્રામ પંચાયત, પાણી વિભાગ અથવા આરોગ્ય વિભાગને તાત્કાલિક જાણ કરો.",
        "જો સૂત્ર પાસે માછલી અથવા પશુઓ મરતા હોય તો તેને આકસમિક પરિસ્થિતિ માનો અને લોકોના પ્રવેશને મર્યાદિત કરો."
      ]
    },
    unknown: {
      safety: [
        "આ પાણીને રોજિંદા પીવાનું પાણી તરીકે વાપરતાં પહેલાં ઓછામાં ઓછી એક વખત તેની ટેસ્ટ કરો.",
        "પાણીનો રંગ, વાસ અથવા સ્વાદ અસામાન્ય લાગે તો ટેસ્ટ થાય ત્યાં સુધી તેને અસુરક્ષિત માનો."
      ],
      improve: [
        "સ્રોતની આજુબાજુનો વિસ્તાર હંમેશા સ્વચ્છ અને કચરો, તેલ, રાસાયણિકોથી મુક્ત રાખો.",
        "પાડોશીઓ અને આરોગ્ય કર્મચારીઓ સાથે વાત કરી સમૂહમાં પાણીની ચકાસણી યોજો."
      ],
      expert: [
        "ઉદ્યોગ અથવા સીવેજથી પ્રદૂષણ થતું હોવાનું શંકા હોય તો ઇન્ડેક્સ ઉપલબ્ધ ન હોવા છતાં શાસનને રિપોર્ટ કરો."
      ]
    }
  },

  checklistItems: [
    "આ મહિને મેં મારી સ્ટોરેજ ટાંકી અથવા મુખ્ય પાણિયું વાસણ ઓછામાં ઓછો એક વખત સાફ કર્યું છે અથવા તેની તપાસ કરી છે.",
    "મેં મારા નિયમિત પાણી સ્રોતમાં નવો વાસ, રંગ બદલાવ અથવા તેલ/ફોમ દેખાય છે કે નહીં તે ચકાસ્યું છે.",
    "હું પીવાનું પાણી હંમેશાં ઢાંકણવાળા વાસણમાં રાખું છું અને સીધું હાથ/ગ્લાસ બૂડાડ્યા વિના કરછી અથવા નળ વડે કાઢું છું.",
    "હું રાસાયણિકો, તેલ, દવા અથવા પ્લાસ્ટિકનો કચરો નાળામાં અથવા નજીકના પાણી સ્ત્રોતોમાં નથી ફેંકતો.",
    "હું સ્મરણપત્ર સમયગાળામાં સ્ટ્રિપ અથવા કેમેરા ટૂલ વડે ફરી પાણીની ટેસ્ટ કરવાની યોજના બનાવી રહ્યો છું."
  ],

  symptomOptions: {
    muddy: {
      label: "તપકળી / કાદવ જેવી દેખાય છે",
      causes: [
        "ભારે વરસાદ અથવા ઉપરના વિસ્તારમાં માટી ધોવાઈ જવાથી પાણીમાં વધારે ગાળ અને કાદવ ભળી ગયો હોઈ શકે છે.",
        "પંપ અથવા કૂવો તળિયાની નજીકથી પાણી ખેંચે છે જ્યાં સેડિમેન્ટ વધુ હોય છે."
      ],
      actions: [
        "સ્વચ્છ બાલ્ટીમાં પાણી ભરી થોડો સમય શાંતિથી રાખો અને ઉપરનું સ્વચ્છ પાણી હળવે હળવે કાઢીને વાપરો.",
        "ઉકળાવતા પહેલાં અથવા જીવાણુમુક્ત કરતા પહેલાં કપડા અથવા કાર્ટ્રિજ ફિલ્ટરથી નાનું કણ દૂર કરો.",
        "ખેતરમાં તળાવ અને કેનાલની કાઠે ઘાસ/વૃક્ષોની પટ્ટી રાખી જમીનની ધરાશાયીને ઓછું કરો."
      ]
    },
    green: {
      label: "પર ઉપર લીલો પડ / શેવાળ",
      causes: [
        "વધેલા ખાતર, ડિટર્જન્ટ અને સીવેજના પોષક તત્ત્વો પાણીમાં જતાં શેવાળની વૃદ્ધિ ઝડપથી થાય છે.",
        "ધીમે વહેતું અથવા સ્થિર પાણી અને વધારે રોશની મળવાથી એલ્ગલ બ્લૂમ (શેવાળ ફૂલવું) થાય છે."
      ],
      actions: [
        "ખૂબ જ લીલું અને ડુંકડું વાસ આવતું પાણી પીવા અથવા નહાવા માટે ઉપયોગમાં ન લો.",
        "ખતર અને ડિટર્જન્ટ ભરેલું પાણી સીધું કૂવા/તળાવમાં ન જાય તે માટે ડ્રેનેજ સુધારો; લીક થતા ટોયલેટ અને નાળાની મરામત કરો.",
        "શક્ય હોય ત્યાં તળાવને ભાગે છાંયો આપી અથવા હવામાં મિક્ષિંગ (aeration) વધારી અને માછલી હોય તો માછીમારી નિષ્ણાતની સલાહ લો."
      ]
    },
    smell: {
      label: "તીવ્ર વાસ (સડેલા ઇંડા / ગટર જેવી)",
      causes: [
        "સડેલા ઇંડા જેવી ગંધ ઓક્સિજન ઓછું હોય અને સડતા સજીવ પદાર્થમાંથી ઉત્પન્ન થતા હાઇડ્રોજન સલ્ફાઇડ ગેસના કારણે હોઈ શકે છે.",
        "ગટર, સેપ્ટિક ટાંકી અથવા ઉદ્યોગમાંથી આવતું સાવરડું પાણી પાણીના સ્રોતમાં મળી રહ્યું હોઈ શકે."
      ],
      actions: [
        "ઉકાળ્યા પછી પણ વાસ ન જાય તો એવું પાણી પીવું નહીં; સલામત વિકલ્પ શોધો.",
        "આસપાસની ગટરની લાઇન, ટોયલેટ અથવા સીવેજ પાઇપ લીક થાય છે કે નહીં તે તપાસો અને તંત્રને જાણ કરો.",
        "સ્ટોરેજ ટાંકીમાં હવાનો ભરપૂર પ્રવેશ રહે તે માટે વેન્ટ બનાવો અને આજુબાજુ કચરો, ભેજવાળું સડતું સામાન ન સંગ્રહો."
      ]
    },
    scale: {
      label: "ટેપ અને વાસણ પર સફેદ પડ",
      causes: [
        "નળ અને વાસણ પરનો સફેદ પડ સામાન્ય રીતે વધુ કૅલ્શિયમ અને મેગ્નેશિયમ ધરાવતા કઠોર પાણીનું લક્ષણ છે.",
        "ખૂબ કઠોર પાણીમાં ભેસેલા ક્ષાર વધુ હોવાથી પાણીને અલગ સ્વાદ આવી શકે છે."
      ],
      actions: [
        "કેટલ અને નળ પર બનેલો પડ હળવા વીનીગર અથવા સીટ્રિક એસિડના દ્રાવણથી નરમ કરી સાફ કરો.",
        "જળકઠિનતા બહુ વધારે હોય તો RO યુનિટ અથવા વોટર સોફ્ટનર જેવા વિકલ્પ વિશે વિચાર કરો.",
        "કઠોર પાણીને મુખ્યત્વે ધોવા અને સફાઈ માટે રાખો અને મોખરા પીવાના કામ માટે નરમ પાણીનો સ્ત્રોત પસંદ કરો."
      ]
    },
    foam: {
      label: "ઝગ અને ડિટર્જન્ટના બબલ",
      causes: [
        "સાબુ, ડિટર્જન્ટ અને અન્ય સર્ફેક્ટન્ટ નદી, નાળો કે તળાવમાં જઈ રહ્યા છે.",
        "ઘરેલું ગ્રે‑વોટર અથવા સીવેજ સીધું ખુલ્લા નાળા કે પ્રવાહમાં છોડવામાં આવી રહ્યું હોઈ શકે છે."
      ],
      actions: [
        "નદી, તળાવ કે કૂવામાં સીધું કપડા કે વાસણ ધોવા નહીં.",
        "ગ્રે‑વોટરને સીધા નાળામાં છોડવા બદલે સોક પિટ, ફિલ્ટર બેડ જેવી સરળ સફાઈ પદ્ધતિઓમાં પસાર કરો.",
        "જાહેર જળસ્રોતોમાં વારંવાર વધારે ઝગ દેખાય તો તરત જ સ્થાનિક પ્રાધિકરણને જાણ કરો."
      ]
    }
  },

  homeCareList: [
    "ખાસ કરીને બાળકો અને વૃદ્ધો માટે પીવાનું પાણી હંમેશા ઉકાળીને અથવા વિશ્વસનીય ફિલ્ટરથી ગાળી આપીયે.",
    "રસોડામાં પાણી રાખવાના વાસણોને નિયમિત રીતે સાફ કરી સૂકા અને ઢાંકણવાળા રાખો.",
    "પીવાના પાણીની પાસે રાસાયણિક દવાઓ, ઇંધણ, કીટનાશક અથવા કડક સફાઇ એજન્ટો ન રાખો."
  ],
  farmCareList: [
    "ખેતરમાં કૂવા અથવા તળાવની નજીક વધારે ખાતર અને જીવાતનાશકનો ઉપયોગ ટાળો.",
    "પશુ શેડ અને માટીના/ગોબરના ખાડા પીવાના પાણીના સ્ત્રોતોથી દૂર રાખો.",
    "ખેતરના કિનારે અને કેનાલની બન્ને બાજુ ઘાસ અને વૃક્ષોની બફર પટ્ટી બનાવો જેથી જમીન અને રસાયણો પાણીમાં ન વહી જાય."
  ],
  communityCareList: [
    "તળાવો, સરોવરો, નદીઓ અને નાળામાં કોઈપણ પ્રકારનો ઘન કચરો, પ્લાસ્ટિક અને ઘરના કચરાનું ફેંકાણ ન કરો.",
    "સ્થાનિક તળાવો, સ્ટોરેજ ટાંકા અને નદીકિનારાની સમયાંતરે સફાઈ માટે લોકો સાથે મળી અભિયાન યોજો.",
    "સીવેજ લીકેજ, ઉદ્યોગમાંથી દૂષિત પાણી છોડાય તે જેવી ઘટનાઓ જોતા જ સ્થાનીક નગરપાલિકા અથવા પંચાયતને જાણ કરો."
  ],
  factsList: [
    "નિયમિત પાણી પરીક્ષણથી ગંભીર આરોગ્ય જોખમ ઊભો થવા પહેલાં જ ફેરફાર શોધી શકાય છે.",
    "ઉદ્ભવ સ્થળ અને કેચમેન્ટ વિસ્તારને સુરક્ષિત રાખવું ઘણી વાર પ્રદૂષિત પાણી શુદ્ધ કરવા કરતા સસ્તું અને સરળ હોય છે.",
    "ઘરે અને ખેતરમાં લેવામાં આવેલા નાના પરંતુ વિચારપૂર્વકના પગલાં પાણીના પ્રદૂષણને ખુબ ઓછું કરી શકે છે."
  ]
},

  symptomOptions: {
    muddy: {
      label: "ਭੂਰਾ ਜਾਂ ਕੀਚੜ ਵਰਗਾ ਦਿਸਦਾ ਹੈ",
      causes: [
        "ਜ਼ੋਰਦਾਰ ਬਾਰਿਸ਼ ਜਾਂ ਉੱਪਰਲੇ ਇਲਾਕੇ ਵਿੱਚ ਮਿੱਟੀ ਸਰਕਣ ਕਰਕੇ ਪਾਣੀ ਵਿੱਚ ਕਾਫ਼ੀ ਗੰਦਲਾ ਗਾਰਾ ਮਿਲ ਗਿਆ ਹੋ ਸਕਦਾ ਹੈ.",
        "ਪੰਪ ਜਾਂ ਕੂਆਂ ਤਲ ਤੋਂ ਨੇੜੇ ਵਾਲਾ ਪਾਣੀ ਖਿੱਚ ਰਿਹਾ ਹੈ ਜਿੱਥੇ ਸੈਡੀਮੈਂਟ ਵੱਧ ਹੁੰਦਾ ਹੈ."
      ],
      actions: [
        "ਸਾਫ ਬਾਲਟੀ ਵਿੱਚ ਪਾਣੀ ਭਰ ਕੇ ਕੁਝ ਸਮਾਂ ਅਡੋਲ ਛੱਡੋ, ਫਿਰ ਉੱਪਰਲਾ ਸਾਫ਼ ਹਿੱਸਾ ਹੌਲੇ‑ਹੌਲੇ ਨਿਕਾਲ ਕੇ ਵਰਤੋ.",
        "ਉਬਾਲਣ ਜਾਂ ਡਿਸਇਨਫੈਕਸ਼ਨ ਤੋਂ ਪਹਿਲਾਂ ਕਪੜੇ ਜਾਂ ਕਾਰਟ੍ਰਿਜ ਫਿਲਟਰ ਦਾ ਇਸਤੇਮਾਲ ਕਰ ਕੇ ਸੁੱਛੇ ਕਣ ਹਟਾਓ.",
        "ਖੇਤ ਵਿੱਚ ਤਲਾਬਾਂ ਅਤੇ ਨਹਿਰਾਂ ਦੇ ਕੰਢੇ ਘਾਹ ਜਾਂ ਰੁੱਖ‑ਬੂਟਿਆਂ ਦੀ ਪੱਟੀ ਰੱਖੋ ਤਾਂ ਜੋ ਮਿੱਟੀ ਘੱਟ ਵੱਗੇ."
      ]
    },
    green: {
      label: "ਉੱਪਰ ਹਰਾ ਪਰਤ / ਕਾਈ",
      causes: [
        "ਵਧੇਰੇ ਖਾਦ, ਸਾਬਣ, ਡਿਟਰਜੈਂਟ ਅਤੇ ਗੰਦੇ ਪਾਣੀ ਦੇ ਪੋਸ਼ਕ ਤੱਤ ਮਿਲਣ ਕਾਰਨ ਕਾਈ ਤੇਜ਼ੀ ਨਾਲ ਵਧਦੀ ਹੈ.",
        "ਧੀਮੇ ਵਗਦਾ ਜਾਂ ਠਹਿਰਿਆ ਹੋਇਆ ਪਾਣੀ ਅਤੇ ਤਿੱਖੀ ਧੁੱਪ ਵਾਲੇ ਇਲਾਕੇ ਵਿੱਚ algae ਦਾ ਬਲੂਮ ਬਣ ਸਕਦਾ ਹੈ."
      ],
      actions: [
        "ਬਹੁਤ ਹਰਾ ਅਤੇ ਬਦਬੂਦਾਰ ਪਾਣੀ ਪੀਣ ਜਾਂ ਨ੍ਹਾਉਣ ਲਈ ਵਰਤਣ ਤੋਂ ਬਚੋ.",
        "ਖੇਤਾਂ ਵਿੱਚੋਂ ਆਉਂਦਾ ਖਾਦ/ਡਿਟਰਜੈਂਟ ਮਿਲਿਆ ਪਾਣੀ ਟੈਂਕਾਂ ਅਤੇ ਪੋੰਡਾਂ ਵਿੱਚ ਨਾ ਜਾਣ ਦੇਵੋ; ਲੀਕ ਹੋ ਰਹੇ ਟਾਇਲਟ ਅਤੇ ਨਾਲਿਆਂ ਦੀ ਮੁਰੰਮਤ ਜਲਦੀ ਕਰੋ.",
        "ਜਿੱਥੇ ਸੰਭਵ ਹੋਵੇ ਤਲਾਬਾਂ ’ਤੇ ਹਿੱਸੇਦਾਰ ਛਾਂ ਜਾਂ ਪਾਣੀ ਨੂੰ ਹਿਲਾਉਣ/ਹਵਾ ਮਿਲਾਉਣ (aeration) ਦੀ ਵਿਵਸਥਾ ਕਰੋ ਅਤੇ ਜੇ ਮੱਛੀ ਮੌਜੂਦ ਹੈ ਤਾਂ ਮੱਛਲੀ ਪਾਲਣ ਮਾਹਰ ਨਾਲ ਸਲਾਹ ਕਰੋ."
      ]
    },
    smell: {
      label: "ਤਿੱਖੀ ਬਦਬੂ (ਸੜਿਆ ਅੰਡਾ / ਗਟਰ ਵਰਗੀ)",
      causes: [
        "ਸੜੇ ਅੰਡੇ ਵਰਗੀ ਬਦਬੂ ਅਕਸਰ ਘੱਟ ਆਕਸੀਜਨ ਵਾਲੇ ਕੁਝਦੇ ਜੀਵ‑ਪਦਾਰਥਾਂ ਵਿੱਚੋਂ ਨਿਕਲਣ ਵਾਲੇ ਹਾਈਡਰੋਜਨ ਸਲਫਾਈਡ ਗੈਸ ਕਾਰਨ ਹੁੰਦੀ ਹੈ.",
        "ਨੇੜਲੇ ਸੇਪਟਿਕ ਟੈਂਕ, ਗਟਰ ਜਾਂ ਉਦਯੋਗਿਕ ਯੂਨਿਟ ਤੋਂ ਆਉਂਦਾ ਗੰਦਾ ਪਾਣੀ ਸਰੋਤ ਵਿੱਚ ਮਿਲ ਰਿਹਾ ਹੋ ਸਕਦਾ ਹੈ."
      ],
      actions: [
        "ਜੇ ਪਾਣੀ ਨੂੰ ਉਬਾਲਣ ਤੋਂ ਬਾਅਦ ਵੀ ਤਿੱਖੀ ਬਦਬੂ ਰਹਿੰਦੀ ਹੈ ਤਾਂ ਇਸਨੂੰ ਕਦੇ ਵੀ ਨਾ ਪੀਓ; ਕੋਈ ਹੋਰ ਸੁਰੱਖਿਅਤ ਸਰੋਤ ਵਰਤੋ.",
        "ਨੇੜਲੇ ਟਾਇਲਟ, ਗਟਰੀ ਪਾਈਪਾਂ ਜਾਂ ਸੀਵਰੇਜ ਲਾਈਨਾਂ ਵਿੱਚ ਲੀਕ ਹੈ ਕਿ ਨਹੀਂ, ਇਸ ਦੀ ਜਾਂਚ ਕਰੋ ਅਤੇ ਸਥਾਨਕ ਅਥਾਰਟੀ ਨੂੰ ਸੂਚਿਤ ਕਰੋ.",
        "ਸਟੋਰੇਜ ਟੈਂਕ ਲਈ ਵੈਂਟੀਲੇਸ਼ਨ ਚੰਗੀ ਰੱਖੋ ਅਤੇ ਉਸ ਦੇ ਆਲੇ‑ਦੁਆਲੇ ਸੜਦਾ ਜੈਵਿਕ ਕੂੜਾ ਇਕੱਠਾ ਨਾ ਹੋਣ ਦਿਓ."
      ]
    },
    scale: {
      label: "ਟੈਪ / ਬਰਤਨਾਂ ’ਤੇ ਸਫ਼ੇਦ ਜਮਾ (scale)",
      causes: [
        "ਟੈਪ ਅਤੇ ਬਰਤਨਾਂ ’ਤੇ ਸਫ਼ੇਦ ਜਮਾ ਆਮ ਤੌਰ ’ਤੇ ਕੈਲਸ਼ੀਅਮ ਅਤੇ ਮੈਗਨਿਸੀਅਮ ਵੱਧ ਹੋਣ ਵਾਲੇ ਕਠੋਰ ਪਾਣੀ ਦੀ ਨਿਸ਼ਾਨੀ ਹੈ.",
        "ਬਹੁਤ ਕਠੋਰ ਪਾਣੀ ਵਿੱਚ ਘੁੱਲੇ ਹੋਏ ਲੂਣ ਵੱਧ ਹੁੰਦੇ ਹਨ ਜਿਸ ਨਾਲ ਪਾਣੀ ਦਾ ਸੁਆਦ ਵੀ ਬਦਲ ਸਕਦਾ ਹੈ."
      ],
      actions: [
        "ਕੇਟਲੀ, ਟੈਪ ਅਤੇ ਹੋਰ ਧਾਤੂ ਸਤ੍ਹਾਂ ’ਤੇ ਬਣੇ ਸਕੇਲ ਨੂੰ ਹਲਕੇ ਸਿਰਕੇ ਜਾਂ ਸਿਟਰਿਕ ਐਸਿਡ ਦੇ ਘੋਲ ਨਾਲ ਭਿੱਜ ਕੇ ਫਿਰ ਬਰਸ਼ ਨਾਲ ਸਾਫ ਕਰੋ.",
        "ਜਲਕਠੋਰਤਾ ਬਹੁਤ ਜ਼ਿਆਦਾ ਹੋਵੇ ਤਾਂ RO ਯੂਨਿਟ ਜਾਂ ਵਾਟਰ ਸਾਫ਼ਟਨਰ ਵਰਗੇ ਹੱਲ ਬਾਰੇ ਸਥਾਨਕ ਮਾਹਰ ਨਾਲ ਸਲਾਹ ਕਰੋ.",
        "ਕਠੋਰ ਪਾਣੀ ਨੂੰ ਜ਼ਿਆਦਾਤਰ ਧੋਣ ਅਤੇ ਸਫ਼ਾਈ ਲਈ ਵਰਤੋ ਅਤੇ ਨਰਮ ਜਾਂ ਚੰਗੇ ਸੁਆਦ ਵਾਲੇ ਸਰੋਤ ਨੂੰ ਪੀਣ ਲਈ ਸੰਭਾਲ ਕੇ ਰੱਖੋ."
      ]
    },
    foam: {
      label: "ਝੱਗ ਜਾਂ ਡਿਟਰਜੈਂਟ ਦੇ ਬੁਲਬਲੇ",
      causes: [
        "ਕਪੜੇ ਧੋਣ ਵਾਲਾ ਸਾਬਣ, ਡਿਟਰਜੈਂਟ ਜਾਂ ਹੋਰ ਸੁਰਫੈਕਟੈਂਟ ਨਦੀਆਂ, ਪੋੰਡਾਂ ਜਾਂ ਨਿਕਾਸੀ ਨਾਲਿਆਂ ਵਿੱਚ ਮਿਲ ਰਹੇ ਹੋ ਸਕਦੇ ਹਨ.",
        "ਘਰਾਂ ਤੋਂ ਨਿਕਲਦਾ ਗ੍ਰੇ‑ਵਾਟਰ ਜਾਂ ਸੀਵਰੇਜ ਬਿਨਾ ਕਿਸੇ ਇਲਾਜ ਦੇ ਸਿੱਧਾ ਖੁੱਲ੍ਹੇ ਨਾਲਿਆਂ ਅਤੇ ਧਾਰਾਂ ਵਿੱਚ ਛੱਡਿਆ ਜਾ ਸਕਦਾ ਹੈ."
      ],
      actions: [
        "ਨਦੀਆਂ, ਪੋੰਡਾਂ ਜਾਂ ਕੂਆਂ ਵਿੱਚ ਸਿੱਧੇ ਕਪੜੇ ਜਾਂ ਬਰਤਨ ਧੋਣ ਦੀ ਆਦਤ ਨੂੰ ਤੁਰੰਤ ਬੰਦ ਕਰੋ.",
        "ਗ੍ਰੇ‑ਵਾਟਰ ਨੂੰ ਖੁੱਲ੍ਹੇ ਨਾਲਿਆਂ ਵਿੱਚ ਛੱਡਣ ਦੀ ਬਜਾਏ ਸੋਖ ਪਿੱਟ (soak pit) ਜਾਂ ਸਧਾਰਣ ਫਿਲਟਰ ਬੈੱਡ ਰਾਹੀਂ ਜ਼ਮੀਨ ਵਿੱਚ ਸਿੱਝਣ ਦਿਓ.",
        "ਜੇ ਕਿਸੇ ਜਨਤਕ ਸਰੋਤ ਵਿੱਚ ਮੁੜ‑ਮੁੜ ਝੱਗ ਦਿਖਾਈ ਦੇਵੇ ਤਾਂ ਸਥਾਨਕ ਪ੍ਰਸ਼ਾਸਨ ਜਾਂ ਪਾਣੀ ਬੋਰਡ ਨੂੰ ਜਲਦੀ ਸੂਚਿਤ ਕਰੋ."
      ]
    }
  },

  homeCareList: [
    "ਖ਼ਾਸ ਤੌਰ ’ਤੇ ਬੱਚਿਆਂ ਅਤੇ ਬਜ਼ੁਰਗਾਂ ਲਈ ਤਾਜ਼ਾ ਪਾਣੀ ਹਮੇਸ਼ਾਂ ਉਬਾਲ ਕੇ ਜਾਂ ਭਰੋਸੇਮੰਦ ਫਿਲਟਰ ਰਾਹੀਂ ਗਾਲ ਕੇ ਹੀ ਦਿਓ.",
    "ਰਸੋਈ ਵਿੱਚ ਪੀਣ ਵਾਲਾ ਪਾਣੀ ਰੱਖਣ ਵਾਲੇ ਬਰਤਨਾਂ ਨੂੰ ਨਿਯਮਿਤ ਤੌਰ ’ਤੇ ਧੋ ਕੇ ਸੁੱਕੇ ਅਤੇ ਢੱਕੇ ਹੋਏ ਰੱਖੋ.",
    "ਪੀਣ ਵਾਲੇ ਪਾਣੀ ਦੇ ਨੇੜੇ ਰਸਾਇਣ, ਇੰਧਨ, کیਟਨਾਸ਼ਕ ਜਾਂ ਤਾਕਤਵਰ ਸਫ਼ਾਈ ਕਰਨ ਵਾਲੇ ਤਰਲ ਪਦਾਰਥ ਨਾ ਰੱਖੋ."
  ],
  farmCareList: [
    "ਖੇਤਾਂ ਵਿੱਚ ਕੂਆਂ, ਟਿਊਬਵੈੱਲ ਜਾਂ ਤਲਾਬ ਦੇ ਬਿਲਕੁਲ ਨੇੜੇ ਜ਼ਿਆਦਾ ਖਾਦ ਅਤੇ ਕੀਟਨਾਸ਼ਕ ਨਾ ਪਾਓ.",
    "ਪਸ਼ੂਆਂ ਦੇ ਬਾੜੇ, ਗੋਬਰ ਦੇ ਢੇਰ ਅਤੇ ਕੂੜਾ ਕਰਕਟ ਵਾਲੀਆਂ ਥਾਵਾਂ ਨੂੰ ਪੀਣ ਦੇ ਪਾਣੀ ਦੇ ਸਰੋਤ ਤੋਂ ਦੂਰ ਰੱਖੋ.",
    "ਖੇਤਾਂ ਦੇ ਕਿਨਾਰੇ ਅਤੇ ਨਹਿਰਾਂ/ਖਾਲਿਆਂ ਦੇ ਕੰਢੇ ਤੇ ਘਾਹ ਅਤੇ ਰੁੱਖਾਂ ਦੀ ਬਫ਼ਰ ਪੱਟੀ ਬਣਾਓ ਤਾਂ ਜੋ ਮਿੱਟੀ ਅਤੇ ਰਸਾਇਣ ਸਿੱਧੇ ਪਾਣੀ ਵਿੱਚ ਨਾ ਵਗਣ."
  ],
  communityCareList: [
    "ਤਲਾਬਾਂ, ਝੀਲਾਂ, ਦਰਿਆਵਾਂ ਜਾਂ ਨਾਲਿਆਂ ਵਿੱਚ ਠੋਸ ਕੂੜਾ, ਪਲਾਸਟਿਕ ਜਾਂ ਮੈਡੀਕਲ ਕਚਰਾ ਕਦੇ ਨਾ ਸੁੱਟੋ.",
    "ਪਿੰਡ ਜਾਂ ਸ਼ਹਿਰੀ ਇਲਾਕੇ ਵਿੱਚ ਲੋਕਾਂ ਨੂੰ ਨਾਲ ਜੋੜ ਕੇ ਸਥਾਨਕ ਤਲਾਬਾਂ, ਟੈਂਕੀਆਂ ਅਤੇ ਦਰਿਆ ਦੇ ਕੰਢਿਆਂ ਦੀ ਨਿਯਮਿਤ ਸਫ਼ਾਈ ਮੁਹਿੰਮ ਚਲਾਓ.",
    "ਜੇ ਕਿਸੇ ਥਾਂ ਸੀਵਰੇਜ ਦੀ ਲੀਕ, ਕਾਰਖਾਨਿਆਂ ਦਾ ਗੰਦਾ ਪਾਣੀ ਜਾਂ ਹੋਰ ਪ੍ਰਦੂਸ਼ਣ ਦਿਖਾਈ ਦੇਵੇ ਤਾਂ ਤੁਰੰਤ ਸੰਬੰਧਤ ਅਧਿਕਾਰੀਆਂ ਨੂੰ ਸੂਚਿਤ ਕਰੋ."
  ],
  factsList: [
    "پਾਣੀ ਦੀ ਨਿਯਮਿਤ ਜਾਂਚ ਨਾਲ ਵੱਡੇ ਸਿਹਤ ਖ਼ਤਰੇ ਬਣਨ ਤੋਂ ਪਹਿਲਾਂ ਹੀ تبدیلیاں پکੜੀਆਂ ਜਾ ਸਕਦੀਆਂ ਹਨ.",
    "ਸਰੋਤ ਅਤੇ ਉਸਦੇ ਕੈਚਮੈਂਟ ਇਲਾਕੇ ਦੀ ਰੱਖਿਆ ਕਰਨਾ ਅਕਸਰ ਪ੍ਰਦੂਸ਼ਿਤ ਪਾਣੀ ਨੂੰ ਸਾਫ਼ ਕਰਨ ਨਾਲੋਂ ਘੱਟ ਮਹਿੰਗਾ ਅਤੇ ਜ਼ਿਆਦਾ ਟਿਕਾਊ ਹੁੰਦਾ ਹੈ.",
    "ਘਰ ਅਤੇ ਖੇਤ ਵਿੱਚ ਲਈਆਂ ਛੋਟੀਆਂ‑ਛੋਟੀਆਂ ਸਾਵਧਾਨੀਆਂ ਨਾਲ ਵੀ ਪਾਣੀ ਦੇ ਪ੍ਰਦੂਸ਼ਣ ਨੂੰ ਕਾਫ਼ੀ ਹੱਦ ਤੱਕ ਘਟਾਇਆ ਜਾ ਸਕਦਾ ਹੈ."
  ]
},
     // ---------------- TELUGU (FULL) ----------------
  te: { 
    nav_home: "హోమ్",
  nav_measure: "కొలవండి",
  nav_map: "మ్యాప్",
  nav_care: "కేర్",
  nav_farmers: "రైతు సహాయం",
  nav_chart: "చార్ట్",
  nav_learn: "నేర్చుకోండి",
  nav_buykit: "కిట్ కొనండి",
  nav_about: "గురించి",

  care_title: "నీటి సంరక్షణ మరియు చర్యలు",
  care_intro:
    "మీ తాజా రీడింగ్ అంటే ఏమిటో అర్థం చేసుకుని, మీ నీటికి సరళమైన సంరక్షణ ప్రణాళికను పొందండి మరియు బావులు, ట్యాంకులు, చెరువులు మరియు కమ్యూనిటీ నీటి వనరులను ఎలా రక్షించాలో నేర్చుకోండి.",

  last_title: "1. నా తాజా రీడింగ్",
  last_load_btn: "చరిత్ర నుంచి తాజాదాన్ని లోడ్ చేయండి",
  last_clear_checks: "కేర్ చెక్లిస్ట్ క్లియర్ చేయండి",
  last_empty_note:
    "ఇండెక్స్ మరియు pH ఆధారంగా సంరక్షణ ప్రణాళికను చూడటానికి Measure పేజీ నుంచి తాజా రీడింగ్‌ను లోడ్ చేయండి.",

  last_saved_prefix: "చివరిసారి సేవ్ చేసినది: ",
  location_prefix: "స్థానం: ",
  band_good: "మంచి నాణ్యత గల నీరు",
  band_med: "మధ్యస్థ నాణ్యత గల నీరు",
  band_poor: "తక్కువ / చెడు నాణ్యత గల నీరు",
  band_unknown: "ఇండెక్స్ లేదు",
  details_index: "ఇండెక్స్",
  details_ph: "pH",
  details_temp: "ఉష్ణోగ్రత",
  details_turb: "మబ్బుదనం (turbidity)",

  careplan_title: "2. ఈ స్థాయికి సంరక్షణ ప్రణాళిక",
  safety_title: "మొదట ఆరోగ్యం మరియు భద్రత",
  improve_title: "నీటి నాణ్యతను మెరుగుపరచడం",
  expert_title: "నిపుణుడి సహాయం ఎప్పుడు తీసుకోవాలి",
  checklist_title: "నా కేర్ చెక్లిస్ట్",

  symptom_title: "3. మీ నీరు ఎలా కనిపిస్తుంది?",
  symptom_label: "ఒక లక్షణాన్ని ఎంచుకోండి",
  symptom_cause_title: "సంభవ్య కారణాలు",
  symptom_action_title: "ఇప్పుడు మీరు చేయగలిగేది",

  reminder_title: "4. రిమైండర్లు",
  reminder_label: "నీటిని పరీక్షించండి ప్రతి",
  reminder_none: "రిమైండర్ లేదు",
  reminder_7: "7 రోజులు",
  reminder_30: "30 రోజులు",
  reminder_90: "90 రోజులు",
  reminder_save_btn: "రిమైండర్ సేవ్ చేయండి",
  reminder_due:
    "రిమైండర్: {n} రోజులు అయ్యాయి, దయచేసి మళ్లీ నీటిని పరీక్షించండి.",
  reminder_ok:
    "మీరు {n} రోజుల క్రితం పరీక్షించారు. దృష్టిలో ఉంచుకుని, సమయం వచ్చినప్పుడు మళ్లీ పరీక్షించండి.",
  reminder_saved: "ప్రతి {n} రోజులకు రిమైండర్ సేవ్ చేయబడింది.",

  library_title: "కేర్ లైబ్రరీ",
  home_care_title: "ఇంట్లో (తాగడానికి మరియు వంటకు)",
  farm_care_title: "పొలాలు మరియు చెరువుల కోసం",
  community_care_title: "కమ్యూనిటీ నీటి వనరులు",
  facts_title: "మీకు తెలుసా?",
  care_footer_note:
    "మీ కుటుంబం, ఫారం లేదా కమ్యూనిటీ కోసం తదుపరి చర్యలను నిర్ణయించడానికి ఈ సంరక్షణ ప్రణాళికను మ్యాప్ మరియు రైతు సహాయం పేజీలతో కలిపి ఉపయోగించండి.",

  carePlan: {
    good: {
      safety: [
        "స్రోత్ (source) బాగా రక్షణలో ఉంటే ఈ నీరు సాధారణంగా తాగడానికి సురక్షితం; అయినప్పటికీ చిన్నపిల్లలు మరియు రోగనిరోధక శక్తి తక్కువ ఉన్నవారికి ఇవ్వడానికి ముందు ఎప్పుడూ మరిగించండి.",
        "నీటిని ఎల్లప్పుడూ శుభ్రమైన, మూత ఉన్న భాండాల్లో నిల్వ చేసి, కప్పు లేదా చెయ్యిని నేరుగా నీటిలో ముంచకుండా కలశం లేదా ట్యాప్ ద్వారా తీసుకోండి."
      ],
      improve: [
        "స్టోరేజ్ ట్యాంకులు మరియు ఇంటి ఫిల్టర్లను కనీసం ప్రతి 1–3 నెలలకు ఒకసారి బాగా శుభ్రం చేయండి.",
        "బావులు, ట్యాంకులు దగ్గరికి సబ్బు, డిటర్జెంట్, నూనె లేదా మలిన జలం (waste water) చేరకుండా డ్రైనేజ్‌ను మెరుగుపరచండి."
      ],
      expert: [
        "నీటి రంగు, వాసన లేదా రుచిలో అకస్మాత్తుగా మార్పు గమనిస్తే తిరిగి పరీక్ష చేసి, స్థానిక ఆరోగ్య సిబ్బందిని సంప్రదించండి.",
        "మంచి ఫలితాలను పొరుగువారితో పంచుకుని, వారు కూడా నిరంతరం పరీక్షలు చేసి మూలాన్ని కాపాడేలా ప్రోత్సహించండి."
      ]
    },
    med: {
      safety: [
        "ఇలాంటి నీటిని నేరుగా తాగకండి; ముందుగా మరిగించండి లేదా నమ్మకమైన ఫిల్టర్ ద్వారా వడకట్టి తాగండి.",
        "మధ్యస్థంగా కలుషితం అయిన నీటిని శిశువుల పాలు కలపడానికి లేదా తీవ్ర అనారోగ్యంతో ఉన్నవారికి వాడకండి."
      ],
      improve: [
        "స్టోరేజ్ ట్యాంక్, పైప్‌లైన్‌లు, ట్యాపులు మొదలైనవి శుభ్రం చేసి, సాధ్యమైనచోట కింద పేరుకున్న మట్టిని, మురికిని తొలగించండి.",
        "బావులు, హ్యాండ్పంప్‌ల చుట్టూ నీటి పారుదల బాగుండేలా చూడండి; ఇలా చేస్తే మలిన జలం తిరిగి మూలానికి చేరదు.",
        "మీ ప్రాంతంలో సూచించినట్లయితే ఇంటి వినియోగానికి సెరామిక్, RO లేదా UV ఫిల్టర్ల వినియోగాన్ని ప్రోత్సహించండి."
      ],
      expert: [
        "మూడు లేదా అంతకంటే ఎక్కువ పరీక్షల్లో ఇండెక్స్ ఎప్పుడూ మధ్యస్థ స్థాయిలోనే ఉంటే, స్థానిక అధికారుల ద్వారా విశ్లేషణాత్మక పరీక్ష చేయించమని అభ్యర్థించండి.",
        "రీడింగ్స్‌ను నోట్ చేసుకునే, శుభ్రతా కార్యక్రమాలు నిర్వహించే చిన్న కమ్యూనిటీ గ్రూప్‌ను ఏర్పాటు చేయండి."
      ]
    },
    poor: {
      safety: [
        "గుణాత్మకంగా స్పష్టమైన మెరుగుదల వచ్చే వరకు ఈ నీటిని తాగడానికి లేదా వంటకు అస్సలు ఉపయోగించకండి.",
        "తాగడానికి కావలసిన సమస్త అవసరాల కోసం బాటిల్ నీరు, ట్యాంకర్ నీరు లేదా పబ్లిక్ ట్యాప్ వంటి ప్రత్యామ్నాయ సురక్షిత స్రోతులను ఉపయోగించండి."
      ],
      improve: [
        "కాలువలు లీక్ అవడం, చెత్త వేయడం, ఫ్యాక్టరీల నుండి వచ్చే మలిన జలం వంటి నేరుగా కలుషితం చేసే మూలాలను గుర్తించి వెంటనే నిలిపివేయండి.",
        "పరీక్షా ఫలితాలు మెరుగుపడే వరకు ఈ నీటిని భూమి శుభ్రం చేయడం, టాయిలెట్ ఫ్లష్ వంటి శరీరానికి తక్కువ సంబంధం ఉన్న పనులకే పరిమితం చేయండి.",
        "కొత్త బోర్‌వెల్లు త్రవ్వడం, శుద్ధి కేంద్రాలు ఏర్పాటు చేయడం లేదా మూల ప్రాంతాన్ని రక్షించడం వంటి మధ్య‑దీర్ఘకాల పరిష్కారాల కోసం ప్రణాళిక సిద్ధం చేయండి."
      ],
      expert: [
        "మీ పరీక్షా ఫలితాలతో పాటు పంచాయతీ, వాటర్ బోర్డ్ లేదా ఆరోగ్య శాఖకు వెంటనే సమాచారం ఇవ్వండి.",
        "స్రోతు దగ్గర చేపలు లేదా జంతువులు చావడం కనిపిస్తే, దానిని అత్యవసర పరిస్థితిగా భావించి ప్రజల ప్రవేశాన్ని పరిమితం చేయండి."
      ]
    },
    unknown: {
      safety: [
        "ఈ నీటిని రోజువారీ తాగునీటిగా ఉపయోగించే ముందు కనీసం ఒకసారి అయినా పరీక్ష చేయించండి.",
        "రంగు, వాసన లేదా రుచిలో ఏదైనా అసాధారణం అనిపిస్తే పరీక్ష పూర్తయ్యే వరకు ఆ స్రోతును అసురక్షితంగా భావించండి."
      ],
      improve: [
        "నీటి మూలం చుట్టూ ప్రాంతాన్ని ఎల్లప్పుడూ శుభ్రంగా ఉంచి, చెత్త, నూనె, రసాయనాలు లాంటి వాటిని అక్కడ వేయకుండా జాగ్రత్త పడండి.",
        "పొరుగువారు, గ్రామ ఆరోగ్య కార్మికులతో మాట్లాడి సమూహంగా నీటి పరీక్షలు చేయించేలా ప్లాన్ చేసుకోండి."
      ],
      expert: [
        "కర్మాగారం లేదా కాలువల నుంచి కలుషితం అవుతున్నట్టు అనుమానం ఉంటే, ఇండెక్స్ ఇంకా అందుబాటులో లేకపోయినా సంబంధిత అధికారులకు ఫిర్యాదు చేయండి."
      ]
    }
  },

  checklistItems: [
    "ఈ నెలలో నేను నా స్టోరేజ్ ట్యాంక్ లేదా ముఖ్యమైన నీటి డ్రమ్‌ను కనీసం ఒకసారి శుభ్రం చేశాను లేదా తనిఖీ చేశాను.",
    "నేను ప్రతిరోజూ వాడే నీటి మూలంలో కొత్త వాసన, రంగు మార్పు లేదా నూనె/నురుగు కనిపిస్తుందా లేదా అన్నది గమనించాను.",
    "తాగునీటిని ఎల్లప్పుడూ మూతతో కప్పి ఉంచుతాను; గ్లాస్ లేదా చెయ్యిని నేరుగా ముంచకుండా కలశం లేదా ట్యాప్ ద్వారా తీసుకుంటాను.",
    "రసాయనాలు, నూనె, మందులు లేదా ప్లాస్టిక్ వ్యర్థాలను డ్రెయిన్‌లలో లేదా సమీపంలోని నీటి వనరుల్లో వేయను.",
    "రిమైండర్ గడువులోపు స్ట్రిప్ లేదా కెమెరా టూల్ ఉపయోగించి నీటిని తిరిగి పరీక్ష చేసే ప్రణాళిక చేసుకున్నాను."
  ],

  symptomOptions: {
    muddy: {
      label: "గోధుమ / బురదలా కనిపిస్తుంది",
      causes: [
        "భారీ వర్షం లేదా పైప్రాంతాల్లో మట్టిక్షయం (erosion) వల్ల నీటిలో ఎక్కువ సన్నని మట్టి, గార మొదలైనవి కలిసిపోయి ఉండవచ్చు.",
        "పంపు లేదా బావి నీటిని లోతైన భాగం దగ్గర నుంచి లాగుతుంది; అక్కడ మట్టి, సేడిమెంట్ ఎక్కువగా ఉంటుంది."
      ],
      actions: [
        "శుభ్రమైన బకెట్‌లో నీటిని పోసి కొన్ని గంటలు అలాగే ఉంచి, పై భాగంలో ఏర్పడే స్పష్టమైన నీటిని నెమ్మదిగా తీసుకుని వాడండి.",
        "తాగేముందు లేదా డిస్ఫెక్షన్ ముందు, గుడ్డ లేదా కార్ట్రిడ్జ్ ఫిల్టర్ ద్వారా సన్నని కణాలను తొలగించండి.",
        "పొలాల్లో చెరువులు, కాల్వల ఒడ్డుల వెంట గడ్డి లేదా చెట్లు నాటి బండ్లు (bunds) వేసి మట్టిక్షయాన్ని తగ్గించండి."
      ]
    },
    green: {
      label: "పైభాగంలో ఆకుపచ్చ పొర / ఆల్గీ",
      causes: [
        "ఎకోసిస్టంలో ఎక్కువ ఎరువులు, డిటర్జెంట్లు, మలిన జలం వంటి వాటి వల్ల పోషక పదార్థాలు ఎక్కువై ఆల్గీ వేగంగా పెరుగుతుంది.",
        "సూర్యకాంతి ఎక్కువగా పడే నెమ్మదిగా కదిలే లేదా నిలువనీటిలో అల్గల్ బ్లూమ్స్ త్వరగా ఏర్పడతాయి."
      ],
      actions: [
        "బాగా ఆకుపచ్చగా, దుర్వాసన వచ్చే నీటిని తాగడానికి లేదా స్నానం కోసం ఉపయోగించవద్దు.",
        "ఎరువులు, డిటర్జెంట్లు కలిగిన నీరు నేరుగా ట్యాంకులు, చెరువులు, బావులలోకి వెళ్లకుండా డ్రైనేజిని మార్చండి; టాయిలెట్ లేదా డ్రెయిన్‌లలో లీకేజ్ ఉంటే వెంటనే బాగు చేయండి.",
        "సాధ్యమైనచోట చెరువులకు కొంత నీడ, గాలి మిక్సింగ్ (aeration) వంటి ఏర్పాట్లు చేయండి; అక్కడ చేపలు ఉంటే మత్స్య నిపుణుల సలహా తీసుకోండి."
      ]
    },
    smell: {
      label: "తీవ్ర దుర్వాసన (పాడైన గుడ్డు / కాలువ వాసన)",
      causes: [
        "పాడైన గుడ్డు లాంటి దుర్వాసన, తక్కువ ఆక్సిజన్ ఉన్న పరిస్థితుల్లో కుళ్లిపోతున్న సేంద్రియ పదార్థాల నుంచి ఉద్భవించే హైడ్రోజన్ సల్ఫైడ్ వాయువుతో వస్తుంది.",
        "సమీపంలోని సెప్టిక్ ట్యాంక్, కాలువ లేదా పరిశ్రమల నుండి వచ్చే మలిన జలం నేరుగా నీటి మూలంలో కలవడం జరుగుతోందని అర్థం కావచ్చు."
      ],
      actions: [
        "మరిగించిన తర్వాత కూడా దుర్వాసన పోకపోతే, ఆ నీటిని అస్సలు తాగవద్దు; వెంటనే సురక్షితమైన ఇతర మూలాన్ని వినియోగించండి.",
        "దగ్గరిలో ఉన్న టాయిలెట్లు, కాలువలు, సీవరేజ్ పైపులు ఎక్కడైనా లీక్ అవుతున్నాయా అని తనిఖీ చేసి, స్థానిక అధికారులకు సమాచారం ఇవ్వండి.",
        "స్టోరేజ్ ట్యాంకులకు సరిపడా గాలి ప్రసరణ (ventilation) కల్పించి, వాటి చుట్టూ పాడైపోయే చెత్త, సేంద్రీయ వ్యర్థాలను పేరుకుపోయనివ్వకండి."
      ]
    },
    scale: {
      label: "ట్యాప్‌లు / పాత్రలపై తెల్లటి పడి (scale)",
      causes: [
        "ట్యాప్‌లు, గిన్నెలపై కనిపించే తెల్లటి పడి సాధారణంగా కాల్షియం, మాగ్నీషియం అధికంగా ఉన్న కఠిన జలానికి సూచిక.",
        "అత్యధిక కాఠిన్యం ఉన్న నీటిలో మరిన్ని లవణాలు (salts) కరిగి ఉండవచ్చు, అందువల్ల రుచిలో మార్పు ఉంటుంది."
      ],
      actions: [
        "కెట్టిల్స్, ట్యాప్‌లపై ఏర్పడిన scale ను సున్నితమైన వెనిగర్ లేదా సిట్రిక్ యాసిడ్ ద్రావణం రాసి కొంతసేపు ఉంచి తర్వాత బ్రష్ చేసి శుభ్రం చేయండి.",
        "కాఠిన్యం చాలా ఎక్కువగా ఉంటే RO ప్లాంట్ లేదా వాటర్ సాఫ్టెనర్ వంటి పరిష్కారాల గురించి స్థానిక నిపుణుల సలహా తీసుకోండి.",
        "ఎక్కువ కఠినమైన నీటిని ఎక్కువగా స్నానం, దుస్తుల ఉతకడం వంటి పనులకు వాడి, తక్కువ కాఠిన్యం ఉన్న మూలాలను తాగునీటి కోసం ఉంచండి."
      ]
    },
    foam: {
      label: "నురుగు లేదా డిటర్జెంట్ బుడగలు",
      causes: [
        "డిటర్జెంట్, సబ్బు లేదా ఇతర సర్ఫాక్టెంట్లు నేరుగా నదులు, చెరువులు, కాల్వలలో చేరుతున్నాయనే సూచన.",
        "ఇళ్లలోని గ్రే‑వాటర్, వాషింగ్ మెషిన్ నీరు లేదా మలిన జలం ఎలాంటి శుద్ధి లేకుండా ఓపెన్ డ్రెయిన్‌లోకి వదిలిపెట్టబడుతూ ఉండవచ్చు."
      ],
      actions: [
        "నదులు, చెరువులు, బావుల్లో నేరుగా బట్టలు లేదా పాత్రలు కడగడం మానేయండి.",
        "గ్రే‑వాటర్‌ను నేరుగా కాల్వల్లోకి వదిలేయకుండా, సోక్ పిట్‌లు లేదా సరళమైన వడపోత బెడ్స్ (filter beds) ద్వారా నేలలోకి దిగేలా మార్గం మార్చండి.",
        "పబ్లిక్ నీటి వనరుల్లో పలుమార్లు నురుగు కనిపిస్తే, వెంటనే పురపాలక, పంచాయతీ లేదా సంబంధిత విభాగానికి ఫిర్యాదు చేయండి."
      ]
    }
  },

  homeCareList: [
    "ప్రత్యేకంగా పిల్లలు మరియు వృద్ధుల కోసం తాగునీటిని ఎల్లప్పుడూ మరిగించండి లేదా నమ్మదగిన ఫిల్టర్ ద్వారా వడకట్టి ఇవ్వండి.",
    "వంటగదిలో నీటిని నిల్వ చేసే పాత్రలను నిరంతరం శుభ్రం చేసి, ఎప్పుడూ మూతతో కప్పి ఉంచండి.",
    "తాగునీటి దగ్గర ఎలాంటి రసాయనాలు, ఇంధన పదార్థాలు, పురుగుమందులు లేదా బలమైన శుభ్రపరిచే ద్రవాలు ఉంచవద్దు."
  ],
  farmCareList: [
    "బావులు, చెరువులు లేదా తాగునీటి మూలాలకు చాలా దగ్గరగా అధిక మోతాదులో ఎరువులు మరియు పురుగుమందులు వాడకండి.",
    "పశువుల కొట్లను, గోమయ గుంతలను మరియు చెత్త గుంతలను తాగునీటి మూలాల నుండి వీలైనంత దూరంగా ఉంచండి.",
    "పొలాల అంచులు, కాల్వల ఒడ్డుల వెంట గడ్డి, చెట్లు ఉన్న బఫర్ స్ట్రిప్‌లు ఏర్పరచి, మట్టి మరియు రసాయనాలు నేరుగా నీటిలోకి వెళ్లకుండా అడ్డుకోండి."
  ],
  communityCareList: [
    "చెరువులు, సరస్సులు, నదులు లేదా కాలువల్లో ఘన చెత్త, ప్లాస్టిక్, వైద్య వ్యర్థాలు వంటి వాటిని ఎప్పుడూ వేయవద్దు.",
    "స్థానికంగా చెరువులు, స్టోరేజ్ ట్యాంకులు, నది తీరాల కోసం క్రమం తప్పకుండా శుభ్రతా కార్యక్రమాలు నిర్వహించడానికి ప్రజలను కలుపుకోండి.",
    "కాలువలలో లీకేజీలు, ఫ్యాక్టరీల నుండి నేరుగా వదిలే మలిన జలం వంటి వాటిని గమనించిన వెంటనే సంబంధిత అధికారులకు తెలియజేయండి."
  ],
  factsList: [
    "నీటిని నిరంతరం పరీక్షించడం వల్ల పెద్ద ఆరోగ్య ప్రమాదం ఏర్పడే లోపే మార్పులను గుర్తించగలుగుతారు.",
    "నీటి మూలం మరియు దాని చుట్టూ ఉన్న కాచ్మెంట్ ప్రాంతాన్ని రక్షించడం, చాలా సందర్భాల్లో కలుషిత నీటిని శుద్ధి చేయడంపై ఖర్చు చేసే దానికంటే తక్కువ ఖర్చుతో పూర్తి అవుతుంది.",
    "ఇల్లు, పొలాల్లో తీసుకునే చిన్న చిన్న జాగ్రత్తలతో కూడా నీటి కాలుష్యాన్ని గణనీయంగా తగ్గించుకోవచ్చు."
  ]
},

// ---------------- KANNADA (FULL) ----------------
kn: {
  nav_home: "ಮುಖಪುಟ",
  nav_measure: "ಅಳತೆ",
  nav_map: "ನಕ್ಷೆ",
  nav_care: "ಪರಿಚರಿಕೆ",
  nav_farmers: "ರೈತ ಸಹಾಯ",
  nav_chart: "ಚಾರ್ಟ್",
  nav_learn: "ಕಲಿ",
  nav_buykit: "ಕಿಟ್ ಖರೀದಿಸಿ",
  nav_about: "ಬಗ್ಗೆ",

  care_title: "ನೀರಿನ ಆರೈಕೆ ಮತ್ತು ಕ್ರಮಗಳು",
  care_intro:
    "ನಿಮ್ಮ ಇತ್ತೀಚಿನ ಮಾಪನದ ಅರ್ಥವನ್ನು ತಿಳಿದುಕೊಳ್ಳಿ, ನಿಮ್ಮ ನೀರಿಗೆ ಸರಳ ಆರೈಕೆ ಯೋಜನೆಯನ್ನು ಹೊಂದಿ ಮತ್ತು ಬಾವಿಗಳು, ಟ್ಯಾಂಕ್‌ಗಳು, ಕೆರೆಗಳು ಹಾಗೂ ಸಮುದಾಯ ಜಲಮೂಲಗಳನ್ನು ಹೇಗೆ ರಕ್ಷಿಸಬೇಕೆಂದು ಕಲಿಯಿರಿ.",

  last_title: "1. ನನ್ನ ಇತ್ತೀಚಿನ ಮಾಪನ",
  last_load_btn: "ಇತಿಹಾಸದಿಂದ ಇತ್ತೀಚಿನದನ್ನು ಲೋಡ್ ಮಾಡಿ",
  last_clear_checks: "ಕೇರ್ ಪರಿಶೀಲನಾ ಪಟ್ಟಿಯನ್ನು ಅಳಿಸಿ",
  last_empty_note:
    "ಇಂಡೆಕ್ಸ್ ಮತ್ತು pH ಆಧಾರದ ಮೇಲೆ ಕೇರ್ ಯೋಜನೆಯನ್ನು ನೋಡಲು Measure ಪುಟದಿಂದ ಇತ್ತೀಚಿನ ರೀಡಿಂಗ್ ಅನ್ನು ಲೋಡ್ ಮಾಡಿ.",

  last_saved_prefix: "ಕೊನೆಯದಾಗಿ ಉಳಿಸಿದ ಸಮಯ: ",
  location_prefix: "ಸ್ಥಳ: ",
  band_good: "ಉತ್ತಮ ಗುಣಮಟ್ಟದ ನೀರು",
  band_med: "ಮಧ್ಯಮ ಗುಣಮಟ್ಟದ ನೀರು",
  band_poor: "ಕಳಪೆ ಗುಣಮಟ್ಟದ ನೀರು",
  band_unknown: "ಇಂಡೆಕ್ಸ್ ಲಭ್ಯವಿಲ್ಲ",
  details_index: "ಇಂಡೆಕ್ಸ್",
  details_ph: "pH",
  details_temp: "ತಾಪಮಾನ",
  details_turb: "ಮಂಜುಳಿಕೆ",

  careplan_title: "2. ಈ ಮಟ್ಟಕ್ಕೆ ಆರೈಕೆ ಯೋಜನೆ",
  safety_title: "ಮೊದಲು ಆರೋಗ್ಯ ಮತ್ತು ಸುರಕ್ಷತೆ",
  improve_title: "ನೀರಿನ ಗುಣಮಟ್ಟವನ್ನು ಸುಧಾರಿಸುವುದು",
  expert_title: "ತಜ್ಞರ ಸಹಾಯವನ್ನು ಯಾವಾಗ ಪಡೆಯಬೇಕು",
  checklist_title: "ನನ್ನ ಕೇರ್ ಪರಿಶೀಲನಾ ಪಟ್ಟಿ",

  symptom_title: "3. ನಿಮ್ಮ ನೀರು ಹೇಗೆ ಕಾಣುತ್ತದೆ?",
  symptom_label: "ಒಂದು ಲಕ್ಷಣವನ್ನು ಆಯ್ಕೆಮಾಡಿ",
  symptom_cause_title: "ಸಂಭವ್ಯ ಕಾರಣಗಳು",
  symptom_action_title: "ಈಗ ನೀವು ಏನು ಮಾಡಬಹುದು",

  reminder_title: "4. ನೆನಪಿಸಿವಿಕೆಗಳು",
  reminder_label: "ಪ್ರತಿ ಎಷ್ಟು ದಿನಕ್ಕೊಮ್ಮೆ ನೀರನ್ನು ಪರೀಕ್ಷಿಸಬೇಕು",
  reminder_none: "ನೆನಪಿಸಿವಿಕೆ ಇಲ್ಲ",
  reminder_7: "7 ದಿನ",
  reminder_30: "30 ದಿನ",
  reminder_90: "90 ದಿನ",
  reminder_save_btn: "ನೆನಪಿಸಿವಿಕೆಯನ್ನು ಉಳಿಸಿ",
  reminder_due:
    "ನೆನಪಿಸಿವಿಕೆ: {n} ದಿನಗಳು ಕಳೆದಿವೆ, ದಯವಿಟ್ಟು ಮತ್ತೆ ನೀರನ್ನು ಪರೀಕ್ಷಿಸಿ.",
  reminder_ok:
    "ನೀವು {n} ದಿನಗಳ ಹಿಂದೆ ನೀರನ್ನು ಪರೀಕ್ಷಿಸಿದ್ದೀರಿ. ಗಮನದಲ್ಲಿಟ್ಟು, ಸಮಯ ಬಂದಾಗ ಮತ್ತೆ ಪರೀಕ್ಷೆ ಮಾಡಿ.",
  reminder_saved: "ಪ್ರತಿ {n} ದಿನಗಳಿಗೆ ನೆನಪಿಸಿವಿಕೆ ಉಳಿಸಲಾಗಿದೆ.",

  library_title: "ಕೇರ್ ಲೈಬ್ರರಿ",
  home_care_title: "ಮನೆನಲ್ಲಿ (ಕುಡಿಯಲು ಮತ್ತು ಅಡುಗೆಗೆ)",
  farm_care_title: "ಗದ್ದೆಗಳು ಮತ್ತು ಕೆರೆಗಳಿಗಾಗಿ",
  community_care_title: "ಸಮುದಾಯ ಜಲಮೂಲಗಳು",
  facts_title: "ನಿಮಗೆ ಗೊತ್ತೇ?",
  care_footer_note:
    "ನಿಮ್ಮ ಕುಟುಂಬ, ಹೊಲ ಅಥವಾ ಸಮುದಾಯಕ್ಕೆ ಮುಂದಿನ ಹೆಜ್ಜೆಗಳನ್ನು ನಿರ್ಧರಿಸಲು ಈ ಆರೈಕೆ ಯೋಜನೆಯನ್ನು ನಕ್ಷೆ ಹಾಗೂ ರೈತ ಸಹಾಯ ಪುಟಗಳೊಂದಿಗೆ ಬಳಸಿ.",

  carePlan: {
    good: {
      safety: [
        "ನೀರಿನ ಮೂಲ (source) ಚೆನ್ನಾಗಿ ರಕ್ಷಿತವಾಗಿದ್ದರೆ ಈ ನೀರು ಸಾಮಾನ್ಯವಾಗಿ ಕುಡಿಯಲು ಸುರಕ್ಷಿತ; ಆದರೂ ಮಕ್ಕಳು ಮತ್ತು ರೋಗನಿರೋಧಕ ಶಕ್ತಿ ಕಡಿಮೆ ಇರುವವರಿಗಾಗಿ ನೀರನ್ನು ಮೊದಲು ಕುದಿಸಿ ನಂತರ ನೀಡುವುದು ಉತ್ತಮ.",
        "ನೀರನ್ನು ಯಾವಾಗಲೂ ಸ್ವಚ್ಛ ಮತ್ತು ಮುಚ್ಚಿದ ಪಾತ್ರೆಗಳಲ್ಲಿ ಸಂಗ್ರಹಿಸಿ, ಕೈ ಅಥವಾ ಗ್ಲಾಸ್ ಅನ್ನು ನೇರವಾಗಿ ನೀರಲ್ಲಿ ಮುಳುಗಿಸುವ ಬದಲು ಚಮಚ ಅಥವಾ ಟ್ಯಾಪ್ ಮೂಲಕ ತೆಗೆದುಕೊಳ್ಳಿ."
      ],
      improve: [
        "ಸ್ಟೋರೇಜ್ ಟ್ಯಾಂಕ್‌ಗಳು ಮತ್ತು ಮನೆ ಬಳಕೆ ಫಿಲ್ಟರ್‌ಗಳನ್ನು ಕನಿಷ್ಠ 1–3 ತಿಂಗಳಲ್ಲಿ ಒಮ್ಮೆ ಸಂಪೂರ್ಣವಾಗಿ ತೊಳೆಯಿರಿ.",
        "ಬಾವಿಗಳು, ಟ್ಯಾಂಕ್‌ಗಳ ಸುತ್ತ ಡ್ರೆನೆಜ್ ವ್ಯವಸ್ಥೆಯನ್ನು ಉತ್ತಮಪಡಿಸಿ; ಅಲ್ಲಿಗೆ ಡಿಟರ್ಜೆಂಟ್, ಎಣ್ಣೆ ಅಥವಾ ಸೋರಿಕೆ ನೀರು ನೇರವಾಗಿ ಸೇರುವುದನ್ನು ತಪ್ಪಿಸಿ."
      ],
      expert: [
        "ನೀರಿನ ಬಣ್ಣ, ವಾಸನೆ ಅಥವಾ ರುಚಿ ಅಕಸ್ಮಾತ್ ಬದಲಾಗಿದೆಯೆಂದು ಕಂಡರೆ ಮರುಪರೀಕ್ಷೆ ಮಾಡಿ ಮತ್ತು ಸಮೀಪದ ಆರೋಗ್ಯ ಸಿಬ್ಬಂದಿಯನ್ನು ಸಂಪರ್ಕಿಸಿ.",
        "ಉತ್ತಮ ಫಲಿತಾಂಶಗಳನ್ನು ನೆರೆಹೊರೆಯವರೊಂದಿಗೆ ಹಂಚಿಕೊಳ್ಳಿ, ಇದರಿಂದ ಎಲ್ಲರೂ ನಿಯಮಿತ ಪರೀಕ್ಷೆ ಮಾಡಿ ಮೂಲವನ್ನು ಕಾಪಾಡಲು ಪ್ರೇರಿತರಾಗುತ್ತಾರೆ."
      ]
    },
    med: {
      safety: [
        "ಇಂತಹ ನೀರನ್ನು ನೇರವಾಗಿ ಕುಡಿಯಬೇಡಿ; ಮೊದಲು ಕುದಿಸಿ ಅಥವಾ ವಿಶ್ವಾಸಾರ್ಹ ಫಿಲ್ಟರ್ ಮೂಲಕ ಗಾಳಿಸಿ ನಂತರ ಮಾತ್ರ ಕುಡಿಯಿರಿ.",
        "ಮಧ್ಯಮ ಮಟ್ಟದ ಮಾಲಿನ್ಯ ಹೊಂದಿದ ನೀರನ್ನು ಶಿಶು ಆಹಾರ ತಯಾರಿಸಲು ಅಥವಾ ಗಂಭೀರವಾಗಿ ಅಸ್ವಸ್ಥರಾಗಿರುವ ರೋಗಿಗಳಿಗೆ ಬಳಸಬೇಡಿ."
      ],
      improve: [
        "ಸ್ಟೋರೇಜ್ ಟ್ಯಾಂಕ್, ಪೈಪ್‌ಗಳು ಮತ್ತು ಟ್ಯಾಪ್‌ಗಳನ್ನು ಶುಚಿಗೊಳಿಸಿ; ಸಾಧ್ಯವಿದ್ದಲ್ಲಿ ತಳದಲ್ಲಿ ಜಮಾಯಿಸಿರುವ ಮಣ್ಣು, ಸ್ಲಡ್ಜ್ ಅನ್ನು ತೆಗೆದುಹಾಕಿ.",
        "ಬಾವಿ ಹಾಗೂ ಹ್ಯಾಂಡ್‌ಪಂಪ್ ಸುತ್ತಲಿನ ಡ್ರೆನೆಜ್ ನೆಟ್ವರ್ಕ್ ಅನ್ನು ಸುಧಾರಿಸಿ, ಮಲಿನ ಜಲವು ಹಿಂತಿರುಗಿ ಮೂಲದತ್ತ ಹರಿಯದಂತೆ ನೋಡಿ.",
        "ಸ್ಥಳೀಯ ಸಲಹೆಯ ಆಧಾರದ ಮೇಲೆ ಸೆರಾಮಿಕ್, RO ಅಥವಾ UV ಇತ್ಯಾದಿ ಮನೆ ಬಳಕೆಯ ಫಿಲ್ಟರ್‌ಗಳನ್ನು ಉತ್ತೇಜಿಸಿ."
      ],
      expert: [
        "ಮೂರು ಅಥವಾ ಹೆಚ್ಚಿನ ಪರೀಕ್ಷೆಗಳಲ್ಲಿಯೂ ಇಂಡೆಕ್ಸ್ ಸದಾ ಮಧ್ಯಮ ಮಟ್ಟದಲ್ಲಿಯೇ ಇದ್ದರೆ, ಸ್ಥಳೀಯ ಅಧಿಕಾರಿಗಳಿಂದ ವಿವರವಾದ ಜಲಪರೀಕ್ಷೆಯನ್ನು ವಿನಂತಿಸಿ.",
        "ಓದುಗಳನ್ನು (readings) ದಾಖಲಿಸಲು ಮತ್ತು ಸಮೂಹ ಸ್ವಚ್ಛತಾ ಕಾರ್ಯಗಳನ್ನು ಆಯೋಜಿಸಲು ಚಿಕ್ಕ ಸಮುದಾಯ ಗುಂಪೊಂದನ್ನು ರಚಿಸಿ."
      ]
    },
    poor: {
      safety: [
        "ನೀರಿನ ಗುಣಮಟ್ಟದಲ್ಲಿ ಸ್ಪಷ್ಟ ಸುಧಾರಣೆ ಕಾಣುವ ತನಕ ಈ ನೀರನ್ನು ಕುಡಿಯಲು ಅಥವಾ ಅಡುಗೆಗೆ ಯಾವಾಗಲೂ ಬಳಸಬೇಡಿ.",
        "ತಕ್ಷಣದ ಅವಶ್ಯಕತೆಗಾಗಿ ಬಾಟಲಿ ನೀರು, ಟ್ಯಾಂಕರ್ ನೀರು ಅಥವಾ ಸಾರ್ವಜನಿಕ ಟ್ಯಾಪ್ ಹೀಗೆ ಸುರಕ್ಷಿತ ಪರ್ಯಾಯ ಮೂಲಗಳನ್ನು ಬಳಸಿರಿ."
      ],
      improve: [
        "ಸೇವರೆಜ್ ಲೀಕ್, ಕಸದ ತೊಡಕು, ಕೈಗಾರಿಕಾ ಮಾಲಿನ್ಯ ಇತ್ಯಾದಿ ನೇರ ಮಾಲಿನ್ಯ ಮೂಲಗಳನ್ನು ಗುರುತುಹಾಕಿ ಸಾಧ್ಯವಾದಷ್ಟು ಬೇಗ ನಿಲ್ಲಿಸಿ.",
        "ಪರೀಕ್ಷಾ ಫಲಿತಾಂಶಗಳು ಉತ್ತಮಗೊಳ್ಳುವವರೆಗೆ ಈ ನೀರನ್ನು ನೆಲ ತೊಳೆಯುವುದು, ಶೌಚಾಲಯ ಫ್ಲಷ್ ಮಾಡುವಂತಹ ಶರೀರಕ್ಕೆ ಕಡಿಮೆ ಸಂಪರ್ಕ ಇರುವ ಕೆಲಸಗಳಿಗೆ ಮಾತ್ರ ಬಳಸಿರಿ.",
        "ಹೊಸ ಬೋರವೆಲ್‌ಗಳು, ಶುದ್ಧೀಕರಣ ಘಟಕಗಳು ಅಥವಾ ಮೂಲ ಪ್ರದೇಶದ ರಕ್ಷಣಾ ಕ್ರಮಗಳು ಸೇರಿದಂತೆ ಮಧ್ಯ‑ದೀರ್ಘಕಾಲೀನ ಪರಿಹಾರಗಳಿಗಾಗಿ ಯೋಜನೆ ರೂಪಿಸಿ."
      ],
      expert: [
        "ನಿಮ್ಮ ಪರೀಕ್ಷಾ ಫಲಿತಾಂಶಗಳೊಂದಿಗೆ ಗ್ರಾಮ ಪಂಚಾಯತ್, ವಾಟರ್ ಬೋರ್ಡ್ ಅಥವಾ ಆರೋಗ್ಯ ಇಲಾಖೆಗೆ ತಕ್ಷಣ ಮಾಹಿತಿ ನೀಡಿ.",
        "ಮೂಲದ ಬಳಿ ಮೀನುಗಳು ಅಥವಾ ಸಾಕುಪ್ರಾಣಿಗಳು ಸತ್ತಿರುವುದನ್ನು ಕಂಡರೆ ಇದನ್ನು ತುರ್ತು ಪರಿಸ್ಥಿತಿಯಾಗಿ ಪರಿಗಣಿಸಿ ಮತ್ತು ಆ ಪ್ರದೇಶಕ್ಕೆ ಜನರ ಪ್ರವೇಶವನ್ನು ನಿಯಂತ್ರಿಸಿ."
      ]
    },
    unknown: {
      safety: [
        "ಈ ನೀರನ್ನು ಪ್ರತಿದಿನದ ಕುಡಿಯುವ ನೀರಾಗಿ ಬಳಸುವ ಮೊದಲು ಕನಿಷ್ಠ ಒಮ್ಮೆ ಪರೀಕ್ಷೆ ಮಾಡಿಸಿಕೊಳ್ಳಿ.",
        "ನೀರಿನ ಬಣ್ಣ, ವಾಸನೆ ಅಥವಾ ರುಚಿ ಅಸಾಮಾನ್ಯವಾಗಿ ತೋರುತ್ತಿದ್ದರೆ ಪರೀಕ್ಷೆ ಮುಗಿಯುವವರೆಗೆ ಅದನ್ನು ಸುರಕ್ಷಿತವಲ್ಲವೆಂದು ಪರಿಗಣಿಸಿ."
      ],
      improve: [
        "ಮೂಲದ ಸುತ್ತಲಿನ ಪ್ರದೇಶವನ್ನು ಎಂದಿಗೂ ಸ್ವಚ್ಛ ಮತ್ತು ಕಸದ, ಎಣ್ಣೆಯ, ರಾಸಾಯನಿಕಗಳ ಬಳಕೆಯಿಂದ ಮುಕ್ತವಾಗಿರಿಸಿ.",
        "ಹೊಸ ಪರೀಕ್ಷೆಗಳನ್ನು ಏರ್ಪಡಿಸಲು ನೆರೆಹೊರೆಯವರು ಮತ್ತು ಆರೋಗ್ಯ ಸಿಬ್ಬಂದಿಗಳೊಂದಿಗೆ ಮಾತನಾಡಿ ಗುಂಪು ಜಲಪರೀಕ್ಷೆಯನ್ನು ಯೋಜಿಸಿ."
      ],
      expert: [
        "ಕಾರ್ಖಾನೆ ಅಥವಾ ಸೋರಿಕೆ ನೀರಿಂದ ಮಾಲಿನ್ಯ ಉಂಟಾಗುತ್ತಿದೆ ಎನ್ನುವ ಅನುಮಾನ ಇದ್ದರೆ, ಇಂಡೆಕ್ಸ್ ಇನ್ನೂ ಲಭ್ಯವಿರದಿದ್ದರೂ ಸಂಬಂಧಪಟ್ಟ ಅಧಿಕಾರಿಗಳಿಗೆ ದೂರುಸಿ."
      ]
    }
  },

  checklistItems: [
    "ಈ ತಿಂಗಳಲ್ಲಿ ನಾನು ನನ್ನ ಸ್ಟೋರೇಜ್ ಟ್ಯಾಂಕ್ ಅಥವಾ ಮುಖ್ಯ ನೀರಿನ ಪಾತ್ರೆಯನ್ನು ಕನಿಷ್ಠ ಒಂದು ಬಾರಿ ಶುದ್ಧಗೊಳಿಸಿದ್ದೇನೆ ಅಥವಾ ಪರಿಶೀಲಿಸಿದ್ದೇನೆ.",
    "ನಿತ್ಯ ಬಳಕೆಯ ನೀರಿನ ಮೂಲದಲ್ಲಿ ಹೊಸ ವಾಸನೆ, ಬಣ್ಣ ಬದಲಾವಣೆ ಅಥವಾ ಎಣ್ಣೆ/ನುರಿಗೆ ಇದ್ದೆಯೇ ಎಂದು ಗಮನಿಸಿದ್ದೇನೆ.",
    "ಕುಡಿಯುವ ನೀರನ್ನು ಯಾವಾಗಲೂ ಮುಚ್ಚಿದ ಪಾತ್ರೆಯಲ್ಲಿ ಇಟ್ಟು, ಕೈ ಅಥವಾ ಗ್ಲಾಸ್ ನೇರವಾಗಿ ಮುಳುಗಿಸುವ ಬದಲು ಚಮಚ ಅಥವಾ ಟ್ಯಾಪ್ ಬಳಸಿ ತೆಗೆದುಕೊಳ್ಳುತ್ತೇನೆ.",
    "ರಾಸಾಯನಿಕಗಳು, ಎಣ್ಣೆ, ಔಷಧಿ ಅಥವಾ ಪ್ಲಾಸ್ಟಿಕ್ ಕಸವನ್ನು ಒಳಚರಂಡಿ ಅಥವಾ ಸಮೀಪದ ನೀರಿನ ಮೈದುಂಬುಗಳಲ್ಲಿ ಎಸೆಯುವುದಿಲ್ಲ.",
    "ರಿಮೈಂಡರ್ ಅವಧಿಯೊಳಗೆ ಸ್ಟ್ರಿಪ್ ಅಥವಾ ಕ್ಯಾಮೆರಾ ಟೂಲ್ ಬಳಸಿ ನೀರನ್ನು ಮತ್ತೆ ಪರೀಕ್ಷಿಸುವ ಯೋಜನೆಯನ್ನು ಹೊಂದಿದ್ದೇನೆ."
  ],

  symptomOptions: {
    muddy: {
      label: "ಕಂದು / ಕಾದಿನೀರಿ (ಚಿಕ್ಕ ಮಣ್ಣು) ಇದ್ದಂತೆ ಕಾಣುತ್ತದೆ",
      causes: [
        "ಭಾರೀ ಮಳೆ ಅಥವಾ ಮೇಲ್ಭಾಗದ ಮಣ್ಣಿನ ಧೂಸಣೆಯಿಂದ ನೀರಿನಲ್ಲಿ ಹೆಚ್ಚಿನ ಮಣ್ಣು ಹಾಗೂ ಗಾರ ಮಿಶ್ರಣಗೊಂಡಿರಬಹುದು.",
        "ಪಂಪ್ ಅಥವಾ ಬಾವಿ ತಳಕ್ಕೆ ಸಮೀಪದ ಪದರದಿಂದ ನೀರನ್ನು ಎಳೆಯುತ್ತಿರಬಹುದು; ಅಲ್ಲಿ ಸೆಡಿಮೆಂಟ್ ಪ್ರಮಾಣ ಹೆಚ್ಚಿನದು."
      ],
      actions: [
        "ಸ್ವಚ್ಛವಾದ ಬಕೆಟ್‌ನಲ್ಲಿ ನೀರನ್ನು ತುಂಬಿ ಕೆಲ ಹೊತ್ತು ಹಾಗೆಯೇ ಇಡಿ; ನಂತರ ಮೇಲೆ ಸ್ವಚ್ಛವಾಗಿ ಕಾಣುವ ಭಾಗವನ್ನು ಮೆಲ್ಲಗೆ ಹಾಕಿ ಬಳಸಿರಿ.",
        "ಕುಡಿಯುವ ಮೊದಲು ಅಥವಾ ಜೀವಾಣು ನಿರ್ವೀಜಕರಣಕ್ಕಿಂತ ಮುಂಚೆ ಬಟ್ಟೆ ಅಥವಾ ಕಾರ್ಟ್ರಿಡ್ಜ್ ಫಿಲ್ಟರ್‌ನ ಮೂಲಕ ಸಣ್ಣ ಕಣಗಳನ್ನು ತೆಗೆದುಹಾಕಿ.",
        "ಗದ್ದೆಗಳಲ್ಲಿರುವ ಕೆರೆಗಳು ಮತ್ತು ಕಾಲುವೆಗಳ ದಡಗಳ ಬಳಿ ಹುಲ್ಲು ಹಾಗೂ ಮರಗಳ ಬಫರ್ ಪಟ್ಟಿಗಳನ್ನು ಕಾಪಾಡಿ, ಮಣ್ಣಿನ ಹರಿವು ಕಡಿಮೆ ಮಾಡಿರಿ."
      ]
    },
    green: {
      label: "ಮೇಲ್ಭಾಗದಲ್ಲಿ ಹಸಿರು ಪದರ / ಆಲ್ಗೀ",
      causes: [
        "ಆಧಿಕ ಪ್ರಮಾಣದ ರಾಸಾಯನಿಕ ಗೊಬ್ಬರ, ಡಿಟರ್ಜೆಂಟ್ ಅಥವಾ ಮಲಿನ ನೀರಿನಿಂದ ನೀರಿನಲ್ಲಿ ಪೋಷಕಾಂಶಗಳು ಹೆಚ್ಚಾಗಿ, ಆಲ್ಗೀ ವೇಗವಾಗಿ ಬೆಳೆಯುತ್ತದೆ.",
        "ಬಿಸಿಲು ಹೆಚ್ಚು ಬರುವ, ನಿಧಾನವಾಗಿ ಹರಿಯುವ ಅಥವಾ ನಿಂತಿರುವ ನೀರಿನಲ್ಲಿ ಆಲ್ಗೀ ಫೂಲುವಿಕೆ (algal bloom) ಸಾಮಾನ್ಯವಾಗಿದೆ."
      ],
      actions: [
        "ತೀವ್ರವಾಗಿ ಹಸಿರುಬಣ್ಣದ ಮತ್ತು ದುರ್ವಾಸನೆ ಬರುವ ನೀರನ್ನು ಕುಡಿಯಲು ಅಥವಾ ಸ್ನಾನಕ್ಕೆ ಬಳಸಬೇಡಿ.",
        "ಗೊಬ್ಬರ ಮತ್ತು ಡಿಟರ್ಜೆಂಟ್ ಮಿಶ್ರಿತ ನೀರು ನೇರವಾಗಿ ಕೆರೆ, ಟ್ಯಾಂಕ್ ಅಥವಾ ಬಾವಿಗೆ ಹೋಗದಂತೆ ಡ್ರೆನೆಜ್ ಮಾರ್ಗ ಬದಲಿಸಿ; ಸೋರಿಕೆಯಲ್ಲಿರುವ ಶೌಚಾಲಯ ಮತ್ತು ಒಳಚರಂಡಿಗಳನ್ನು ಕೂಡಲೇ ದುರಸ್ತಿಗೊಳಿಸಿ.",
        "ಸಾಧ್ಯವಾದಲ್ಲಿ ಕೆರೆಯ ಮೇಲೆ ಭಾಗಶಃ ನೆರಳು ನೀಡುವ ಮರಗಳನ್ನು ನೆಟ್ಟು ಅಥವಾ ಗಾಳಿ ಮಿಶ್ರಣ ವ್ಯವಸ್ಥೆ (aeration) ಮಾಡಿ; ಮೀನುಗಳು ಇದ್ದರೆ ಮೀನುಗಾರಿಕೆ ತಜ್ಞರ ಸಲಹೆ ಪಡೆಯಿರಿ."
      ]
    },
    smell: {
      label: "ತೀವ್ರ ದುರ್ವಾಸನೆ (ಹಾಳಾದ ಮೊಟ್ಟೆ / ಒಳಚರಂಡಿ ವಾಸನೆ)",
      causes: [
        "ಹಾಳಾದ ಮೊಟ್ಟೆ ತರದ ವಾಸನೆ ಹೆಚ್ಚಾಗಿ ಕಡಿಮೆ ಆಮ್ಲಜನಕ ಇರುವ ಸ್ಥಿತಿಯಲ್ಲಿ ಕುತಿದ ಜೀವಸಾಮಗ್ರಿಯಿಂದ ಹೊರಹೊಮ್ಮುವ ಹೈಡ್ರೋಜನ್ ಸಲ್ಫೈಡ್ ಅನಿಲದಿಂದ ಬರುತ್ತದೆ.",
        "ಸಮೀಪದ ಸೆಪ್ಟಿಕ್ ಟ್ಯಾಂಕ್, ಒಳಚರಂಡಿ ಅಥವಾ ಕೈಗಾರಿಕಾ ಘಟಕಗಳಿಂದ ಹೊರಬರುವ ಮಲಿನ ಜಲವು ಮೂಲ ನೀರಿನೊಂದಿಗೆ ಮಿಶ್ರಣಗೊಂಡಿರುವ ಸಾಧ್ಯತೆ ಇದೆ."
      ],
      actions: [
        "ಕುದಿಸಿದ ಮೇಲೂ ದುರ್ವಾಸನೆ ಕಡೆಯದಿದ್ದರೆ ಆ ನೀರನ್ನು ಕುಡಿಯಬೇಡಿ; ಶೀಘ್ರದಲ್ಲೇ ಸುರಕ್ಷಿತ ಪರ್ಯಾಯ ಮೂಲ ಹುಡುಕಿ.",
        "ಹತ್ತಿರದ ಶೌಚಾಲಯ, ಒಳಚರಂಡಿ ಪೈಪ್ ಅಥವಾ ಸೇವರೆಜ್ ಲೈನ್‌ಗಳಲ್ಲಿ ಲೀಕ್ ಇದೆಯೇ ಎಂದು ಪರಿಶೀಲಿಸಿ, ಸ್ಥಳೀಯ ಆಡಳಿತಕ್ಕೆ ತಿಳಿಸಿ.",
        "ಸ್ಟೋರೇಜ್ ಟ್ಯಾಂಕ್‌ಗಳಿಗೆ ತಕ್ಕ ಮಟ್ಟಿನ ಗಾಳಿಯ ಹರಿವು ಇರಲೆಂದು ವೆಂಟ್ ಮಾಡಿಸಿ; ಸುತ್ತಮುತ್ತ ಕುತಿದ ಕಸ ಹಾಗೂ ಜೀವಸಾಮಗ್ರಿ ರಾಶಿ ಆಗದಂತೆ ಸ್ವಚ್ಛತೆ ಕಾಪಾಡಿರಿ."
      ]
    },
    scale: {
      label: "ಟ್ಯಾಪ್‌ಗಳು / ಪಾತ್ರೆಗಳ ಮೇಲೆ ಬಿಳಿ ಪದರ (scale)",
      causes: [
        "ನಳ ಮತ್ತು ಪಾತ್ರೆಗಳ ಮೇಲೆ ಕಾಣುವ ಬಿಳಿ ಪದರ ಸಾಮಾನ್ಯವಾಗಿ ಅಧಿಕ ಕ್ಯಾಲ್ಸಿಯಂ ಮತ್ತು ಮ್ಯಾಗ್ನೀಶಿಯಂ ಇರುವ ಕಠಿಣ ನೀರಿನ ಸಂಕೇತವಾಗಿದೆ.",
        "ಬಹಳ ಕಠಿಣ ನೀರಿನಲ್ಲಿ ಕರಗಿದ ಲವಣಗಳು ಹೆಚ್ಚಾಗಿ ಇರುತ್ತವೆ, ಆದ್ದರಿಂದ ನೀರಿನ ರುಚಿಯಲ್ಲೂ ವ್ಯತ್ಯಾಸ ಕಾಣಬಹುದು."
      ],
      actions: [
        "ಕೇಟಲ್ ಮತ್ತು ಟ್ಯಾಪ್‌ಗಳ ಮೇಲಿನ ಬೆಳ್ಳಿಪದರವನ್ನು ನಾಜೂಕಾದ ವೆನಿಗರ್ ಅಥವಾ ಸಿಟ್ರಿಕ್ ಆಸಿಡ್ ದ್ರಾವಣದಲ್ಲಿ ನೆನೆಸಿ ನಂತರ ಬ್ರಷ್ ಮಾಡಿ ತೆಗೆದುಹಾಕಿ.",
        "ಜಲಕಠಿಣತೆ ತುಂಬಾ ಹೆಚ್ಚಿನಿದ್ದರೆ RO ಘಟಕ ಅಥವಾ ವಾಟರ್ ಸಾಫ್ಟನರ್ ಬಗ್ಗೆ ಸ್ಥಳೀಯ ತಜ್ಞರ ಸಲಹೆ ಪಡೆಯಿರಿ.",
        "ಅತಿ ಕಠಿಣ ನೀರನ್ನು ಹೆಚ್ಚಾಗಿ ಸ್ನಾನ, ಬಟ್ಟೆ ತೊಳೆಯುವಂತಹ ಉಪಯೋಗಗಳಿಗೆ ಮೀಸಲಿಟ್ಟು, ತಗ್ಗು ಕಠಿಣತೆ ಇರುವ ಮೂಲಗಳನ್ನು ಕುಡಿಯುವ ನೀರಿಗೆ ಬಳಸಿ."
      ]
    },
    foam: {
      label: "ನುರಿ ಅಥವಾ ಡಿಟರ್ಜೆಂಟ್ ಬುಬ್ಬುಳಗಳು",
      causes: [
        "ಸಾಬೂನು, ಡಿಟರ್ಜೆಂಟ್ ಮತ್ತು ಇತರೆ ಸರ್ಫ್ಯಾಕ್ಟೆಂಟ್‌ಗಳು ನೇರವಾಗಿ ನದಿ, ಕೆರೆ ಅಥವಾ ಕಾಲುವೆಗೆ ಹರಿದು ಹೋಗುತ್ತಿರಬಹುದು.",
        "ಮನೆಯಿಂದ ಬರುವ ಗ್ರೇ‑ವಾಟರ್ ಅಥವಾ ಮಲಿನಜಲವನ್ನು ಯಾವುದೇ ಶುದ್ಧೀಕರಣವಿಲ್ಲದೆ ತೆರೆದ ಒಳಚರಂಡಿಗೆ ಬಿಡಲಾಗುತ್ತಿರಬಹುದು."
      ],
      actions: [
        "ನದಿ, ಕೆರೆ ಅಥವಾ ಬಾವಿಗಳಲ್ಲಿ ನೇರವಾಗಿ ಬಟ್ಟೆ ಅಥವಾ ಪಾತ್ರೆಗಳನ್ನು ತೊಳೆಯುವುದು ನಿಲ್ಲಿಸಿ.",
        "ಗ್ರೇ‑ವಾಟರ್ ಅನ್ನು ನೇರವಾಗಿ ಕಾಲುವೆಗೆ ಬಿಡದೆ, ಸೋಕ್‌ಪಿಟ್ ಅಥವಾ ಸರಳ ಫಿಲ್ಟರ್ ಬೇಡ್‌ಗಳ ಮೂಲಕ ನೆಲದಲ್ಲಿ ಹೀರುವಂತೆ ವ್ಯವಸ್ಥೆ ಮಾಡಿ.",
        "ಸಾರ್ವಜನಿಕ ಜಲಮೂಲಗಳಲ್ಲಿ ಮರುಮರು ನುರಿ ಕಾಣಿಸಿದರೆ ಸ್ಥಳೀಯ ಪಂಚಾಯತ್ ಅಥವಾ ಮಹಾನಗರ ಪಾಲಿಕೆಗೆ ಕೂಡಲೇ ದೂರು ನೀಡಿ."
      ]
    }
  },

  homeCareList: [
    "ವಿಶೇಷವಾಗಿ ಮಕ್ಕಳು ಮತ್ತು ವೃದ್ಧರಿಗೆ ಕುಡಿಯುವ ನೀರನ್ನು ಯಾವಾಗಲೂ ಕುದಿಸಿ ಅಥವಾ ವಿಶ್ವಾಸಾರ್ಹ ಫಿಲ್ಟರ್ ಮೂಲಕ ಗಾಳಿಸಿ ನೀಡಿ.",
    "ಅಡುಗೆಮನೆಯಲ್ಲಿ ನೀರು ಇಡುವ ಪಾತ್ರೆಗಳನ್ನು ನಿಯಮಿತವಾಗಿ ತೊಳೆಯಿರಿ ಮತ್ತು ಸದಾ ಮುಚ್ಚಿದ ಸ್ಥಿತಿಯಲ್ಲಿ ಇಡಿ.",
    "ಕುಡಿಯುವ ನೀರಿನ ಹತ್ತಿರ ರಾಸಾಯನಿಕ ವಸ್ತುಗಳು, ಇಂಧನ, ಕೀಟನಾಶಕಗಳು ಅಥವಾ ತೀವ್ರ ಕ್ಲೀನರ್‌ಗಳನ್ನು ಇಟ್ಟುಕೊಳ್ಳಬೇಡಿ."
  ],
  farmCareList: [
    "ಗದ್ದೆಗಳಲ್ಲಿ ಬಾವಿ, ಕೆರೆ ಅಥವಾ ನೀರಿನ ತೊಟ್ಟಿಗಳ ಹತ್ತಿರ ಅಧಿಕ ಪ್ರಮಾಣದಲ್ಲಿ ರಾಸಾಯನಿಕ ಗೊಬ್ಬರ ಮತ್ತು ಕೀಟನಾಶಕಗಳ ಬಳಕೆಯನ್ನು ತಪ್ಪಿಸಿ.",
    "ಪಶುಶಾಲೆ, ಗೊಬ್ಬರದ ಗುಡ್ಡ ಹಾಗೂ ಗೋಮಯದ ಗುಂಡಿಗಳನ್ನು ಕುಡಿಯುವ ನೀರಿನ ಮೂಲಗಳಿಂದ ಸಾಧ್ಯವಾದಷ್ಟು ದೂರ ಇರಿಸಿ.",
    "ಗದ್ದೆಗಳ ಅಂಚು ಮತ್ತು ಕಾಲುವೆಗಳ ದಡಗಳ ಮೇಲೆ ಹುಲ್ಲು, ಗಿಡಗಳು ಮತ್ತು ಮರಗಳ ಬಫರ್ ಪಟ್ಟಿ ನಿರ್ಮಿಸಿ ಮಣ್ಣು ಮತ್ತು ರಾಸಾಯನಿಕಗಳು ನೇರವಾಗಿ ನೀರಿಗೆ ಸೇರುವುದನ್ನು ತಡೆಯಿರಿ."
  ],
  communityCareList: [
    "ಕೆರೆ, ಸರೋವರ, ನದಿ ಅಥವಾ ಕಾಲುವೆಗಳಲ್ಲಿ ಘನ ಕಸ, ಪ್ಲಾಸ್ಟಿಕ್ ಅಥವಾ ವೈದ್ಯಕೀಯ ಕಸವನ್ನು ಎಂದಿಗೂ ಎಸೆಯಬೇಡಿ.",
    "ಸ್ಥಳೀಯವಾಗಿ ಕೆರೆಗಳು, ಟ್ಯಾಂಕ್‌ಗಳು, ನದೀತಟಗಳು ಇತ್ಯಾದಿಗಳನ್ನು ಸ್ವಚ್ಛವಾಗಿಡಲು ಗ್ರಾಮಸ್ಥರೊಡನೆ ಸೇರಿ ನಿಯಮಿತ ಸ್ವಚ್ಛತಾ ಅಭಿಯಾನಗಳನ್ನು ಆಯೋಜಿಸಿ.",
    "ಸೇವರೆಜ್ ಲೀಕ್, ಕಾರ್ಖಾನೆಯಿಂದ ಬರುವ ಮಲಿನಜಲ ಹೊರಸೂಸು ಇತ್ಯಾದಿ ಮಾಲಿನ್ಯ ಘಟನೆಗಳನ್ನು ನೋಡುತ್ತಿದ್ದಂತೆಯೇ ಸಂಬಂಧಿತ ಇಲಾಖೆಗೆ ಮಾಹಿತಿ ನೀಡಿ."
  ],
  factsList: [
    "ನೀರಿನ ನಿಯಮಿತ ಪರೀಕ್ಷೆ ದೊಡ್ಡ ಆರೋಗ್ಯ ಅಪಾಯ ಉಂಟಾಗುವ ಮೊದಲು ಬದಲಾವಣೆಗಳನ್ನು ಪತ್ತೆ ಹಚ್ಚಲು ಸಹಕಾರಿಯಾಗುತ್ತದೆ.",
    "ಮೂಲ ಮತ್ತು ಕ್ಯಾಚ್ಮೆಂಟ್ ಪ್ರದೇಶವನ್ನು ರಕ್ಷಿಸುವುದು, ಬಹುಸಾರಿ ಮಾಲಿನ್ಯಗೊಂಡ ನೀರನ್ನು ಶುದ್ಧೀಕರಿಸುವುದಕ್ಕಿಂತ ಕಡಿಮೆ ವೆಚ್ಚದ ಹಾಗೂ ಸುಲಭವಿರುತ್ತದೆ.",
    "ಮನೆ ಮತ್ತು ಹೊಲಗಳಲ್ಲಿ ತೆಗೆದುಕೊಳ್ಳುವ ಸಣ್ಣ‑ಸಣ್ಣ ಜಾಗರೂಕತೆ ಕ್ರಮಗಳು ಕೂಡ ನೀರಿನ ಮಾಲಿನ್ಯವನ್ನು ಬಹಳ ಮಟ್ಟಿಗೆ ಕಡಿಮೆ ಮಾಡಬಲ್ಲವು."
  ]
},

// ---------------- URDU (FULL) ----------------
ur: {
  nav_home: "ہوم",
  nav_measure: "پیمائش",
  nav_map: "نقشہ",
  nav_care: "نگہداشت",
  nav_farmers: "کسان مدد",
  nav_chart: "چارٹ",
  nav_learn: "سیکھیں",
  nav_buykit: "کِٹ خریدیں",
  nav_about: "متعلق",

  care_title: "پانی کی دیکھ بھال اور اقدامات",
  care_intro:
    "اپنی تازہ ترین ریڈنگ کا مطلب سمجھیں، اپنے پانی کیلئے ایک سادہ کیئر پلان حاصل کریں اور کنوؤں، ٹینکیوں، تالابوں اور کمیونٹی کے پانی کے ذرائع کی حفاظت کا طریقہ سیکھیں۔",

  last_title: "1. میری تازہ ترین ریڈنگ",
  last_load_btn: "تاریخ سے تازہ ریڈنگ لوڈ کریں",
  last_clear_checks: "کیئر چیک لسٹ صاف کریں",
  last_empty_note:
    "انڈیکس اور pH کی بنیاد پر کیئر پلان دیکھنے کیلئے Measure صفحہ سے تازہ ریڈنگ لوڈ کریں۔",

  last_saved_prefix: "آخری بار محفوظ کیا گیا: ",
  location_prefix: "مقام: ",
  band_good: "اچھی کوالٹی کا پانی",
  band_med: "درمیانی کوالٹی کا پانی",
  band_poor: "خراب کوالٹی کا پانی",
  band_unknown: "انڈیکس دستیاب نہیں",
  details_index: "انڈیکس",
  details_ph: "pH",
  details_temp: "درجہ حرارت",
  details_turb: "تعکر (turbidity)",

  careplan_title: "2. اس سطح کے لئے کیئر پلان",
  safety_title: "سب سے پہلے صحت اور حفاظت",
  improve_title: "پانی کے معیار کو بہتر بنانا",
  expert_title: "ماہر سے کب رابطہ کریں",
  checklist_title: "میری کیئر چیک لسٹ",

  symptom_title: "3. آپ کا پانی کیسا دکھتا ہے؟",
  symptom_label: "کوئی علامت منتخب کریں",
  symptom_cause_title: "ممکنہ وجوہات",
  symptom_action_title: "آپ ابھی کیا کر سکتے ہیں",

  reminder_title: "4. یاد دہانیاں",
  reminder_label: "پانی کی جانچ کریں ہر",
  reminder_none: "کوئی یاد دہانی نہیں",
  reminder_7: "7 دن",
  reminder_30: "30 دن",
  reminder_90: "90 دن",
  reminder_save_btn: "یاد دہانی محفوظ کریں",
  reminder_due:
    "یاد دہانی: {n} دن گزر چکے ہیں، براہ کرم دوبارہ پانی ٹیسٹ کریں۔",
  reminder_ok:
    "آپ نے {n} دن پہلے پانی کی جانچ کی تھی۔ دھیان میں رکھیں اور وقت آنے پر دوبارہ ٹیسٹ کریں۔",
  reminder_saved: "ہر {n} دن کے وقفے سے یاد دہانی محفوظ کر لی گئی ہے۔",

  library_title: "کیئر لائبریری",
  home_care_title: "گھر میں (پینے اور کھانا پکانے کے لئے)",
  farm_care_title: "کھیتوں اور تالابوں کیلئے",
  community_care_title: "کمیونٹی کے آبی ذرائع",
  facts_title: "کیا آپ جانتے ہیں؟",
  care_footer_note:
    "اپنے خاندان، کھیت یا کمیونٹی کے اگلے اقدامات طے کرنے کیلئے اس کیئر پلان کو نقشے اور کسان مدد کے صفحات کے ساتھ ملا کر استعمال کریں۔",

  carePlan: {
    good: {
      safety: [
        "اگر پانی کا منبع اچھی طرح محفوظ ہے تو یہ پانی عموماً پینے کے لئے محفوظ ہوتا ہے؛ پھر بھی بچوں اور کمزور مدافعتی نظام والے افراد کو دینے سے پہلے پانی کو ضرور ابالیں۔",
        "پانی ہمیشہ صاف اور ڈھکن والے برتنوں میں ذخیرہ کریں اور گلاس یا ہاتھ کو براہِ راست پانی میں ڈالنے کے بجائے چمچ یا نلکے کے ذریعے پانی نکالیں۔"
      ],
      improve: [
        "اسٹوریج ٹینکیوں اور گھریلو فلٹرز کو کم از کم ہر 1–3 مہینے میں اچھی طرح صاف کریں۔",
        "کنوؤں اور ٹینکیوں کے آس پاس نکاسیٔ آب بہتر رکھیں تاکہ سابن، ڈٹرجنٹ، تیل یا گندا پانی براہِ راست منبع تک نہ پہنچے۔"
      ],
      expert: [
        "اگر آپ پانی کے رنگ، بو یا ذائقے میں اچانک تبدیلی محسوس کریں تو دوبارہ ٹیسٹ کریں اور قریبی صحت کارکن یا متعلقہ محکمے سے رابطہ کریں۔",
        "اچھی ریڈنگ اور مثبت نتائج اپنے ہمسایوں کے ساتھ شیئر کریں تاکہ سب لوگ باقاعدہ ٹیسٹنگ اور منبع کی حفاظت کی طرف توجہ دیں۔"
      ]
    },
    med: {
      safety: [
        "درمیانی درجے کے اس پانی کو کبھی بھی براہِ راست نہ پیئیں؛ پہلے اسے ابالیں یا مناسب فلٹر کے ذریعے گزاریں۔",
        "درمیانی حد تک آلودہ پانی کو شیر خوار بچوں کے دودھ یا سنگین بیماریوں میں مبتلا افراد کے لئے استعمال نہ کریں۔"
      ],
      improve: [
        "اسٹوریج ٹینک، پائپ لائن اور نلکوں کو باقاعدگی سے صاف کریں اور جہاں ممکن ہو وہاں جمع شدہ گاد (sludge) کو نکال دیں۔",
        "کنوؤں اور ہینڈ پمپ کے اردگرد نکاسیٔ آب کا نظام بہتر بنائیں تاکہ گندا پانی واپس منبع کے آس پاس جمع نہ ہو۔",
        "مقامی سفارش کے مطابق گھریلو فلٹر جیسے سیرامک، RO یا UV فلٹرز کے استعمال کو فروغ دیں۔"
      ],
      expert: [
        "اگر تین یا زیادہ ٹیسٹوں میں انڈیکس مسلسل درمیانی سطح پر رہے تو مقامی حکام سے تفصیلی لیبارٹری ٹیسٹ کی درخواست کریں۔",
        "ریڈنگ نوٹ کرنے اور صفائی مہم یا پانی کی حفاظت کے دن منانے کے لئے ایک چھوٹا کمیونٹی گروپ بنائیں۔"
      ]
    },
    poor: {
      safety: [
        "جب تک پانی کے معیار میں نمایاں بہتری نہ آ جائے اس پانی کو پینے یا کھانا پکانے کیلئے ہرگز استعمال نہ کریں۔",
        "تمام پینے کی ضروریات کیلئے محفوظ متبادل ذرائع مثلاً بوتل بند پانی، ٹینکر یا عوامی نلکا وغیرہ استعمال کریں۔"
      ],
      improve: [
        "گندے نالوں کی لیکیج، کچرا پھینکنا یا صنعتی گندے پانی کے اخراج جیسے براہِ راست آلودگی کے ذرائع کی نشاندہی کریں اور انہیں فوراً روکنے کی کوشش کریں۔",
        "جب تک ٹیسٹ کے نتائج بہتر نہ ہوں، اس پانی کو صرف فرش دھونے، صفائی یا ٹوائلٹ فلش کرنے جیسے ایسے کاموں کیلئے استعمال کریں جہاں جسم کے ساتھ براہِ راست رابطہ کم ہو۔",
        "درمیانی اور طویل مدتی حلوں کیلئے نئے کنویں، ٹریٹمنٹ پلانٹ یا منبع کے گرد حفاظتی زون بنانے جیسی منصوبہ بندی کریں۔"
      ],
      expert: [
        "اپنے ٹیسٹ نتائج کے ساتھ فوراً مقامی پَنجایت/یونین کونسل، واٹر بورڈ یا صحت کے محکمے کو اطلاع دیں۔",
        "اگر منبع کے قریب مچھلیاں یا جانور مر رہے ہوں تو اسے ہنگامی صورتحال سمجھ کر علاقے میں لوگوں کی آمد و رفت محدود کریں۔"
      ]
    },
    unknown: {
      safety: [
        "اس پانی کو روزمرہ پینے کے پانی کے طور پر استعمال کرنے سے پہلے کم از کم ایک بار اس کا ٹیسٹ ضرور کروائیں۔",
        "اگر پانی کا رنگ، بو یا ذائقہ غیر معمولی لگے تو ٹیسٹ مکمل ہونے تک اس منبع کو غیر محفوظ تصور کریں۔"
      ],
      improve: [
        "پانی کے منبع کے آس پاس کا علاقہ صاف رکھیں اور وہاں کچرا، تیل یا کوئی بھی زہریلا کیمیکل نہ پھینکیں۔",
        "اپنے ہمسایوں اور صحت کارکنان کے ساتھ مل کر گروپ کی سطح پر پانی کی مشترکہ جانچ کا انتظام کریں۔"
      ],
      expert: [
        "اگر آپ کو شک ہو کہ کسی فیکٹری یا سیوریج سے آلودگی ہو رہی ہے تو چاہے ابھی انڈیکس دستیاب نہ ہو، اس بارے میں متعلقہ حکام کو باضابطہ شکایت درج کروائیں۔"
      ]
    }
  },

  checklistItems: [
    "میں نے اس مہینے اپنی اسٹوریج ٹینک یا مرکزی پانی کے برتن کو کم از کم ایک بار صاف کیا یا اس کا معائنہ کیا ہے۔",
    "میں نے اپنے معمول کے پانی کے منبع میں کسی نئی بو، رنگ میں تبدیلی یا تیل/جھاگ کی موجودگی کو چیک کیا ہے۔",
    "میں پینے کے پانی کو ہمیشہ ڈھکن والے برتن میں رکھتا ہوں اور گلاس یا ہاتھ براہِ راست پانی میں ڈالنے کے بجائے چمچ یا نلکے کے ذریعے پانی نکالتا ہوں۔",
    "میں کیمیکلز، تیل، ادویات یا پلاسٹک کا کچرا نالیوں یا قریبی آبی ذرائع میں نہیں پھینکتا۔",
    "میں ریمائنڈر کی مدت کے اندر اندر اس پانی کو دوبارہ جانچنے کے لئے ٹیسٹ سٹرپس یا کیمرا ٹول استعمال کرنے کا ارادہ رکھتا ہوں۔"
  ],

  symptomOptions: {
    muddy: {
      label: "بھورا یا کیچڑ جیسا دکھائی دیتا ہے",
      causes: [
        "تیز بارش یا اوپر والے علاقوں میں مٹی کے کٹاؤ کی وجہ سے پانی میں بہت سا گار اور کیچڑ شامل ہو گیا ہو سکتا ہے۔",
        "پمپ یا کنواں پانی تلے کے قریب سے کھینچ رہا ہے جہاں تلچھٹ (sediment) زیادہ ہوتی ہے۔"
      ],
      actions: [
        "صاف بالٹی میں پانی بھر کر کچھ گھنٹے کے لئے چھوڑ دیں، پھر اوپر والی صاف تہہ کو آہستگی سے نکال کر استعمال کریں۔",
        "پینے یا جراثیم کشی سے پہلے کپڑے یا کارٹریج فلٹر کے ذریعے باریک ذرات کو چھان لیں۔",
        "کھیتوں میں تالابوں اور نہروں کے کناروں پر گھاس اور درختوں کی پٹیاں بنا کر مٹی کے بہاؤ (erosion) کو کم کریں۔"
      ]
    },
    green: {
      label: "اوپر سبز تہہ / کائی",
      causes: [
        "زیادہ کھاد، ڈٹرجنٹ اور سیوریج کے ملنے سے پانی میں غذائی اجزاء بڑھ جاتے ہیں، جس سے کائی تیزی سے بڑھتی ہے۔",
        "ہلکی رفتار سے بہنے یا رکے ہوئے، دھوپ والی جگہوں کے پانی میں اکثر algal bloom بنتا ہے۔"
      ],
      actions: [
        "بہت زیادہ سبز اور بدبودار پانی کو پینے یا نہانے کے لئے استعمال نہ کریں۔",
        "کھاد اور ڈٹرجنٹ ملا پانی براہِ راست ٹینکوں اور تالابوں میں جانے سے روکیں؛ لیک ہو رہے ٹوائلٹ اور نالیوں کی مرمت جلدی کریں۔",
        "جہاں ممکن ہو تالابوں کو جزوی سایہ فراہم کریں یا پانی میں ہوا ملانے (aeration) کا انتظام کریں اور اگر مچھلیاں ہوں تو ماہر مچھلی پالنے والے سے مشورہ لیں۔"
      ]
    },
    smell: {
      label: "تیز بدبو (سڑے انڈے / گٹر جیسی)",
      causes: [
        "سڑے ہوئے انڈے جیسی بدبو اکثر کم آکسیجن والے گندے جانداری مادوں سے بننے والی ہائیڈروجن سلفائیڈ گیس کی وجہ سے ہوتی ہے۔",
        "سیوریج یا صنعتی فضلہ براہِ راست پانی کے منبع میں شامل ہو رہا ہو سکتا ہے۔"
      ],
      actions: [
        "اگر ابالنے کے بعد بھی بدبو برقرار رہے تو اس پانی کو ہرگز نہ پیئیں؛ کسی محفوظ متبادل کا انتظام کریں۔",
        "قریبی ٹوائلٹ، سیوریج لائن یا نالیوں میں لیکیج کی جانچ کریں اور اسے فوراً مقامی انتظامیہ کو رپورٹ کریں۔",
        "اسٹوریج ٹینک کے لئے مناسب ہوا کی نکاسی (ventilation) رکھیں اور اس کے اردگرد نامیاتی کچرا جمع ہونے سے بچیں۔"
      ]
    },
    scale: {
      label: "نلکوں / برتنوں پر سفید تہہ (scale)",
      causes: [
        "نلکوں اور برتنوں پر سفید تہہ عموماً زیادہ کیلشیم اور میگنیشیم والے سخت پانی کی علامت ہوتی ہے۔",
        "بہت سخت پانی میں گھُلے ہوئے نمکیات زیادہ ہوتے ہیں جس سے پانی کا ذائقہ بھی بدلا ہوا محسوس ہو سکتا ہے۔"
      ],
      actions: [
        "کیٹل، نل اور برتنوں پر جمی تہہ کو ہلکے سرکے یا سِٹرک ایسڈ کے محلول سے بھگو کر پھر برش کے ذریعے صاف کریں۔",
        "اگر سختی بہت زیادہ ہو تو RO یونٹ یا واٹر سوفٹنر جیسے حل کے بارے میں مقامی ماہر سے مشورہ کریں۔",
        "سخت پانی کو زیادہ تر نہانے اور کپڑے دھونے کے لئے استعمال کریں اور نسبتاً نرم پانی کے ذرائع کو پینے کے لئے رکھیں۔"
      ]
    },
    foam: {
      label: "جھاگ یا ڈٹرجنٹ کے بلبلے",
      causes: [
        "ڈٹرجنٹ، صابن اور دیگر surfactants براہِ راست دریا، نہر یا تالاب میں جا رہے ہو سکتے ہیں۔",
        "گھروں سے نکلنے والا گندہ یا grey‑water بغیر کسی علاج کے کھلی نالیوں اور دھاروں میں چھوڑا جا رہا ہو سکتا ہے۔"
      ],
      actions: [
        "دریاؤں، تالابوں یا کنوؤں میں کپڑے یا برتن براہِ راست نہ دھوئیں۔",
        "گھریلو grey‑water کو کھلی نالی میں چھوڑنے کے بجائے soak pit یا سادہ فلٹر بیڈ کے ذریعے زمین میں جذب ہونے دیں۔",
        "اگر کسی عوامی آبی منبع میں بار بار جھاگ بنتا نظر آئے تو فوراً متعلقہ محکمہ یا واٹر بورڈ کو اطلاع دیں۔"
      ]
    }
  },

  homeCareList: [
    "خاص طور پر بچوں اور بزرگوں کیلئے پینے کے پانی کو ہمیشہ ابال کر یا قابلِ اعتماد فلٹر سے گزار کر استعمال کریں۔",
    "رसोئی میں پانی رکھنے والے برتنوں کو باقاعدگی سے دھو کر صاف رکھیں اور ہمیشہ ڈھکن سے بند رکھیں۔",
    "پینے کے پانی کے قریب کیمیکلز، ایندھن، کیڑے مار ادویات یا سخت صفائی کرنے والے محلول نہ رکھیں۔"
  ],
  farmCareList: [
    "کھیتوں میں کنوؤں، بورویل یا تالابوں کے بالکل قریب ضرورت سے زیادہ کھاد اور کیڑے مار ادویات استعمال کرنے سے پرہیز کریں۔",
    "پشو شیڈ، گوبر کے ڈھیر اور کچرے کے گڑھوں کو پینے کے پانی کے ذرائع سے مناسب فاصلے پر رکھیں۔",
    "کھیتوں کے کناروں اور نہروں کے دونوں طرف گھاس اور درختوں کی بفر پٹی لگا کر مٹی اور کیمیکلز کو براہِ راست پانی میں جانے سے روکیں۔"
  ],
  communityCareList: [
    "تالابوں، جھیلوں، دریاؤں یا نالیوں میں کبھی بھی ٹھوس کچرا، پلاسٹک، میڈیکل ویسٹ یا زہریلا ملبہ نہ پھینکیں۔",
    "گاؤں یا محلے میں لوگوں کے ساتھ مل کر مقامی تالابوں، ٹینکیوں اور دریائی کناروں کی باقاعدہ صفائی مہم کا انتظام کریں۔",
    "اگر کہیں سیوریج لیک، صنعتی گندا پانی یا کسی اور قسم کی آلودگی نظر آئے تو فوراً متعلقہ سرکاری محکمے کو اطلاع دیں۔"
  ],
  factsList: [
    "پانی کی باقاعدہ جانچ سے بڑی صحت کی خرابی پیدا ہونے سے پہلے ہی تبدیلیوں کو پہچانا جا سکتا ہے۔",
    "پانی کے منبع اور اس کے catchment علاقے کو محفوظ رکھنا عموماً آلودہ پانی کو صاف کرنے کے مقابلے میں کم خرچ اور زیادہ مؤثر ثابت ہوتا ہے۔",
    "گھر اور کھیت میں اختیار کی گئی چھوٹی مگر سمجھدار احتیاطی تدابیر بھی پانی کے آلودہ ہونے کے خطرے کو نمایاں حد تک کم کر سکتی ہیں۔"
  ]
}

  // Helper: merge base English with language overrides
  function getCareStrings(langCode) {
    const base = careStrings.en;
    const lang = careStrings[langCode] || careStrings.en;

    // Shallow-merge simple keys
    const merged = Object.assign({}, base, lang);

    // For nested structures, make sure there is always something
    merged.carePlan = lang.carePlan || base.carePlan;
    merged.checklistItems = lang.checklistItems || base.checklistItems;
    merged.symptomOptions = lang.symptomOptions || base.symptomOptions;
    merged.homeCareList = lang.homeCareList || base.homeCareList;
    merged.farmCareList = lang.farmCareList || base.farmCareList;
    merged.communityCareList =
      lang.communityCareList || base.communityCareList;
    merged.factsList = lang.factsList || base.factsList;

    return merged;
  }

  if (typeof window !== "undefined") {
    window.getCareStrings = getCareStrings;
  } else {
    global.getCareStrings = getCareStrings;
  }
})(this);
