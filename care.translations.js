const careStrings = {
  // ------------- ENGLISH (base) -------------
  en: {
    // Nav
    nav_home: "Home",
    nav_measure: "Measure",
    nav_map: "Map",
    nav_care: "Care",
    nav_farmers: "Farmers assistant",
    nav_chart: "Chart",
    nav_learn: "Learn",
    nav_buykit: "Buy kit",
    nav_about: "About",

    // Header
    care_title: "Water care & actions",
    care_intro:
      "Understand your latest reading, follow a clear care plan for your water, and see simple ways to guard wells, tanks, ponds and shared water bodies.",

    // 1. My latest reading
    last_title: "1. My latest reading",
    last_load_btn: "Load latest from history",
    last_clear_checks: "Clear care checklist",
    last_empty_note:
      "Load the latest reading from the Measure page to see a care plan created from its index and pH.",

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
    safety_title: "Health and safety first",
    improve_title: "Improving water quality",
    expert_title: "When to call an expert",
    checklist_title: "My care checklist",

    // 3. Symptom helper
    symptom_title: "3. What does your water look like?",
    symptom_label: "Choose a symptom",
    symptom_cause_title: "Possible causes",
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
      "You tested {n} days ago. Keep checking and test again when the reminder is due.",
    reminder_saved: "Reminder saved for every {n} days.",

    // Right column
    library_title: "Care library",
    home_care_title: "At home (drinking & cooking)",
    farm_care_title: "For farms & ponds",
    community_care_title: "Community water bodies",
    facts_title: "Did you know?",
    care_footer_note:
      "Use this care plan together with the Map and Farmers assistant pages to choose next steps for your family, farm or community.",

    // Care plan by band
    carePlan: {
      good: {
        safety: [
          "If the source is protected, this water is usually safe to drink; still boil it for babies and people with weak immunity.",
          "Store water in clean, covered containers and do not dip hands or cups directly into stored water."
        ],
        improve: [
          "Wash storage tanks and household filters at least once every 1–3 months.",
          "Keep rain run‑off, soaps and oils away from wells, handpumps and tanks so quality does not suddenly drop."
        ],
        expert: [
          "If colour, smell or taste changes quickly, repeat the test and speak with local health workers.",
          "Share good results with neighbours to encourage regular testing and joint protection of the source."
        ]
      },
      med: {
        safety: [
          "Do not drink this water directly; always boil or filter it before use.",
          "Do not use moderately polluted water for infant feeding or for very sick people."
        ],
        improve: [
          "Clean storage tanks, supply pipes and taps; remove settled sludge where you can reach it.",
          "Improve drainage around wells and handpumps so that waste water does not flow back into the source.",
          "Promote simple home filters (ceramic, RO or UV) as recommended in your area."
        ],
        expert: [
          "If three or more tests stay in the moderate band, ask the local authority for a detailed laboratory test.",
          "Form a small community group to track readings, plan cleaning days and record changes."
        ]
      },
      poor: {
        safety: [
          "Do not use this water for drinking or cooking until new tests show better quality.",
          "Use a different safe source, such as bottled water, tanker water or a public tap, for all drinking purposes."
        ],
        improve: [
          "Find and stop direct pollution sources such as sewage leaks, open dumping or industrial discharge.",
          "Use this water only for low‑contact tasks like floor cleaning or toilet flushing until quality improves.",
          "Plan medium‑term fixes such as new wells, treatment plants or strong protection around the source."
        ],
        expert: [
          "Report your test results to the panchayat, water board or health department as soon as possible.",
          "If fish or animals are dying near the source, treat it as an emergency and restrict access immediately."
        ]
      },
      unknown: {
        safety: [
          "Test this water at least once before you start using it every day for drinking.",
          "If the colour, smell or taste feels strange, treat the source as unsafe until you can test it."
        ],
        improve: [
          "Keep the area around the source clean and free from rubbish, oil, fuel and chemicals.",
          "Talk with neighbours or health workers about arranging a shared water test for the area."
        ],
        expert: [
          "If you suspect pollution from industry or sewage, report it even if you do not yet have an index value."
        ]
      }
    },

    // Checklist
    checklistItems: [
      "I cleaned or inspected my storage tank or main container this month.",
      "I checked my usual water source for new smells, colour change or oil/foam on the surface.",
      "I keep drinking water covered and use a tap or ladle instead of dipping cups or hands.",
      "I do not throw chemicals, oil, medicine or plastic into drains or near water bodies.",
      "I plan to re‑test this water with strips or the camera tool within the reminder period."
    ],

    // Symptom helper
    symptomOptions: {
      muddy: {
        label: "Looks brown or muddy",
        causes: [
          "Heavy rain or soil erosion upstream has mixed a lot of mud into the water.",
          "The pump or well is drawing water from near the bottom where sediment is high."
        ],
        actions: [
          "Fill a clean bucket, let the water settle, and pour off the clearer top layer for use.",
          "Use cloth or cartridge filters to remove fine particles before boiling or disinfection.",
          "On farms, keep grass strips and bunds along canals and pond edges to reduce soil erosion."
        ]
      },
      green: {
        label: "Green layer or algae on top",
        causes: [
          "Extra nutrients from fertilisers, detergents or sewage are feeding algal growth.",
          "Slow‑moving or still water in strong sunlight encourages algal blooms."
        ],
        actions: [
          "Do not drink or bathe in water that is strongly green and smelly.",
          "Reduce fertiliser and detergent run‑off into ponds and tanks; fix leaks from toilets or drains.",
          "Where possible, add shade or mixing/aeration to ponds and ask a fisheries expert if fish are present."
        ]
      },
      smell: {
        label: "Strong smell (rotten egg or sewage)",
        causes: [
          "Rotten‑egg smell often comes from hydrogen sulphide gas made by rotting organic matter in low oxygen water.",
          "Nearby sewage or industrial waste water may be entering the source."
        ],
        actions: [
          "Do not drink foul‑smelling water, even after boiling; switch to a safer source.",
          "Look for leaking toilets, drains or sewer lines and report them to local authorities.",
          "Increase ventilation of storage tanks and keep rotting organic waste away from wells."
        ]
      },
      scale: {
        label: "White scale on taps or utensils",
        causes: [
          "White scale usually means hard water with high calcium and magnesium.",
          "Very hard water often carries more dissolved salts and may taste different."
        ],
        actions: [
          "Remove scale from kettles and taps using mild vinegar or citric acid solutions.",
          "Consider softening options such as RO units or softeners if hardness is very high.",
          "Use hard water mainly for washing and cleaning, and keep softer sources for drinking."
        ]
      },
      foam: {
        label: "Foam or detergent bubbles",
        causes: [
          "Detergents, soaps or other surfactants are getting into the water body.",
          "Grey‑water or sewage outlets may be connected directly to drains or streams."
        ],
        actions: [
          "Avoid washing clothes or dishes directly in rivers, ponds or wells.",
          "Send grey‑water through soak pits or simple treatment beds instead of open drains.",
          "Report long‑lasting foam in public water bodies to the local authority."
        ]
      }
    },

    // Library lists
    homeCareList: [
      "Boil or filter drinking water, especially for children, pregnant women and elders.",
      "Wash and cover kitchen storage containers often so dust and insects cannot enter.",
      "Keep drinking water away from fuel, pesticides, medicines and strong cleaners."
    ],
    farmCareList: [
      "Reduce fertiliser and pesticide use close to wells, borewells and ponds.",
      "Keep livestock sheds, manure heaps and compost pits away from drinking water sources.",
      "Plant grass or trees as buffer strips along field edges and canals to slow run‑off."
    ],
    communityCareList: [
      "Do not throw solid waste, plastic or building debris into ponds, lakes, rivers or drains.",
      "Organise regular cleaning days for local ponds, tanks and riverbanks with neighbours and students.",
      "Report sewage leaks, open drains and industrial discharge to the local authority."
    ],
    factsList: [
      "Small changes in smell, colour or taste can be early signs of serious water problems.",
      "Protecting the land around a source is usually cheaper than cleaning polluted water later.",
      "Simple actions at home, in the village and on farms can greatly reduce water contamination."
    ]
  },

  // ------------- HINDI -------------
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

    care_title: "पानी की देखभाल और कदम",
    care_intro:
      "अपनी ताज़ा रीडिंग को समझें, पानी के लिए साफ‑साधा देखभाल प्लान पाएं और कुओं, टैंकों, तालाबों व सामुदायिक जल स्रोतों की सुरक्षा के आसान तरीके जानें।",

    last_title: "1. मेरी ताज़ा रीडिंग",
    last_load_btn: "इतिहास से ताज़ा रीडिंग लोड करें",
    last_clear_checks: "देखभाल चेकलिस्ट साफ करें",
    last_empty_note:
      "इंडेक्स और pH के आधार पर देखभाल योजना देखने के लिए माप (Measure) पेज से ताज़ा रीडिंग लोड करें।",

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

    careplan_title: "2. इस स्तर के लिए देखभाल योजना",
    safety_title: "सबसे पहले स्वास्थ्य और सुरक्षा",
    improve_title: "पानी की गुणवत्ता सुधारें",
    expert_title: "विशेषज्ञ की मदद कब लें",
    checklist_title: "मेरी देखभाल चेकलिस्ट",

    symptom_title: "3. आपका पानी कैसा दिखता है?",
    symptom_label: "कोई लक्षण चुनें",
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
      "रिमाइंडर: {n} दिन हो चुके हैं, कृपया अपना पानी फिर से जाँच लें।",
    reminder_ok:
      "आपने {n} दिन पहले पानी की जाँच की थी। ध्यान रखते रहें और समय आने पर दोबारा जाँच करें।",
    reminder_saved: "हर {n} दिन के लिए रिमाइंडर सहेजा गया।",

    library_title: "देखभाल लाइब्रेरी",
    home_care_title: "घर पर (पीने व पकाने के लिए)",
    farm_care_title: "खेत और तालाबों के लिए",
    community_care_title: "सामुदायिक जल स्रोत",
    facts_title: "क्या आप जानते हैं?",
    care_footer_note:
      "अपने परिवार, खेत या बस्ती के अगले कदम तय करने के लिए इस देखभाल योजना को मानचित्र और किसान सहायता पेज के साथ मिलाकर उपयोग करें।",

    carePlan: {
      good: {
        safety: [
          "यदि स्रोत सुरक्षित है तो यह पानी सामान्यतः पीने योग्य है; फिर भी बच्चों और कमजोर रोग प्रतिरोधक शक्ति वाले लोगों के लिए पहले उबालें।",
          "पानी हमेशा साफ, ढक्कन वाले बर्तनों में रखें और हाथ या गिलास सीधे पानी में न डुबोएँ।"
        ],
        improve: [
          "स्टोरेज टैंक और घरेलू फिल्टर को हर 1–3 महीने में अच्छी तरह साफ करें।",
          "कुओं और टैंकों के पास साबुन, डिटर्जेंट या तेल वाला गंदा पानी जमा न होने दें।"
        ],
        expert: [
          "अगर रंग, गंध या स्वाद अचानक बदल जाए तो दोबारा टेस्ट करें और स्थानीय स्वास्थ्य‑कर्मियों से संपर्क करें।",
          "अच्छी रीडिंग पड़ोसियों के साथ साझा करें ताकि सब लोग मिलकर स्रोत की रक्षा करें।"
        ]
      },
      med: {
        safety: [
          "ऐसे पानी को सीधे न पिएँ; हमेशा उबालकर या भरोसेमंद फिल्टर से छानकर ही उपयोग करें।",
          "मध्यम रूप से दूषित पानी को शिशु आहार या गंभीर बीमार मरीजों के लिए न इस्तेमाल करें।"
        ],
        improve: [
          "स्टोरेज टैंक, पाइप लाइन और नलों की सफाई करें; जहाँ संभव हो जमा गाद निकालें।",
          "कुओं और हैंडपंप के आसपास निकासी प्रणाली सुधारें ताकि गंदा पानी वापस न लौटे।",
          "क्षेत्रीय सलाह के अनुसार सिरेमिक, RO या UV जैसे घरेलू फिल्टर अपनाएँ।"
        ],
        expert: [
          "यदि तीन या अधिक परीक्षणों में इंडेक्स हमेशा मध्यम रहे, तो विस्तार से जाँच के लिए विभाग से अनुरोध करें।",
          "रीडिंग लिखने और सामूहिक सफाई‑अभियान चलाने के लिए छोटा समुदाय समूह बनाएं।"
        ]
      },
      poor: {
        safety: [
          "जब तक गुणवत्ता स्पष्ट रूप से न सुधरे, इस पानी का उपयोग पीने या पकाने के लिए न करें।",
          "पीने के लिए सुरक्षित विकल्प जैसे बोतलबंद पानी, टैंकर या सार्वजनिक नल का उपयोग करें।"
        ],
        improve: [
          "सीवेज लीकेज, कचरा फेंकने या औद्योगिक उत्सर्जन जैसे प्रत्यक्ष प्रदूषण स्रोतों की पहचान कर उन्हें रोकें।",
          "टेस्ट बेहतर होने तक इस पानी का उपयोग केवल फर्श साफ करने या फ्लश जैसे कम संपर्क वाले कामों में करें।",
          "लंबी अवधि के लिए नए कुएँ, ट्रीटमेंट प्लांट या स्रोत संरक्षण जैसी योजनाएँ बनाएँ।"
        ],
        expert: [
          "अपनी रीडिंग और अवलोकन पंचायत, जल बोर्ड या स्वास्थ्य विभाग को लिखित रूप में दें।",
          "यदि स्रोत के पास मछलियाँ या जानवर मर रहे हों, तो इसे आपात स्थिति मानकर लोगों की पहुँच सीमित करें।"
        ]
      },
      unknown: {
        safety: [
          "इस पानी को नियमित पीने के लिए अपनाने से पहले कम से कम एक बार परीक्षण करा लें।",
          "यदि रंग, गंध या स्वाद सामान्य से अलग लगे तो परीक्षण होने तक इसे असुरक्षित मानें।"
        ],
        improve: [
          "स्रोत के आसपास का इलाका साफ रखें और वहाँ कचरा, तेल या रसायन जमा न होने दें।",
          "पड़ोसियों या स्वास्थ्य‑कर्मियों के साथ मिलकर सामूहिक जल‑परीक्षण की योजना बनाएं।"
        ],
        expert: [
          "यदि आपको उद्योग या सीवेज से प्रदूषण का संदेह हो तो इंडेक्स न होने पर भी शिकायत दर्ज करें।"
        ]
      }
    },

    checklistItems: [
      "मैंने इस महीने अपना स्टोरेज टैंक या मुख्य पानी का बर्तन साफ या जाँच किया है।",
      "मैंने अपने नियमित स्रोत में नई गंध, रंग‑परिवर्तन या तेल/झाग तो नहीं है, यह देखा है।",
      "मैं पीने के पानी को ढककर रखता हूँ और सीधे डुबोने की बजाय करछुल या नल से निकालता हूँ।",
      "मैं रसायन, तेल, दवाइयाँ या प्लास्टिक नालियों या पास के जल स्रोतों में नहीं फेंकता।",
      "मैं रिमाइंडर अवधि के अंदर स्ट्रिप या कैमरा टूल से पानी की दोबारा जाँच की योजना बनाता हूँ।"
    ],

    symptomOptions: {
      muddy: {
        label: "भूरा या कीचड़ जैसा दिखता है",
        causes: [
          "तेज़ बारिश या ऊपरी इलाकों में मिट्टी कटने से पानी में बहुत कीचड़ मिला हो सकता है।",
          "पंप या कुआँ तल के पास से पानी खींच रहा है जहाँ तलछट ज़्यादा होती है।"
        ],
        actions: [
          "साफ बाल्टी में पानी भर कर कुछ समय जमने दें, फिर ऊपर की साफ परत का उपयोग करें।",
          "उबालने से पहले कपड़े या कार्ट्रिज फिल्टर से महीन कण छानें।",
          "खेतों में तालाब व नहरों के किनारे घास/पेड़ों की पट्टी रखें ताकि मिट्टी का कटाव कम हो।"
        ]
      },
      green: {
        label: "ऊपर हरी परत या काई",
        causes: [
          "अधिक उर्वरक, डिटर्जेंट और सीवेज से पोषक‑तत्व बढ़ने पर काई तेजी से बढ़ती है।",
          "धीमे या रुके पानी पर तेज धूप पड़ने से शैवाल‑फूल (algal bloom) बनता है।"
        ],
        actions: [
          "बहुत हरे और बदबूदार पानी को पीने या नहाने के लिए न लें।",
          "उर्वरक और डिटर्जेंट वाला बहाव तालाबों में न जाने दें; टॉयलेट व नालियों की लीकेज ठीक करें।",
          "जहाँ संभव हो तालाबों को आंशिक छाया या हवा‑मिलावट (aeration) दें और मछली हो तो मत्स्य‑विशेषज्ञ से सलाह लें।"
        ]
      },
      smell: {
        label: "तेज़ गंध (सड़ा अंडा / सीवेज)",
        causes: [
          "सड़े अंडे जैसी गंध अक्सर कम ऑक्सीजन वाले सड़ते कार्बनिक पदार्थों से निकलने वाली हाइड्रोजन सल्फाइड गैस से आती है।",
          "सीवेज या औद्योगिक अपशिष्ट जल स्रोत में मिल रहा हो सकता है।"
        ],
        actions: [
          "उबालने के बाद भी यदि तेज़ बदबू रहे तो पानी न पिएँ; सुरक्षित स्रोत ढूँढें।",
          "पास के लीक होते शौचालय, नालियाँ या सीवर लाइन की जाँच कर स्थानीय निकाय को सूचित करें।",
          "स्टोरेज टैंकों में हवा का अच्छा संचार रखें और आस‑पास सड़ता जैविक कचरा जमा न होने दें।"
        ]
      },
      scale: {
        label: "नलों / बर्तनों पर सफेद परत",
        causes: [
          "नलों और बर्तनों पर सफेद परत आम तौर पर ज़्यादा कैल्शियम‑मैग्नीशियम वाले कठोर पानी का संकेत है।",
          "अत्यधिक कठोर पानी में घुले लवण अधिक होते हैं और स्वाद अलग हो सकता है।"
        ],
        actions: [
          "केतली और नलों पर जमी परत को हल्के सिरके या सिट्रिक एसिड से साफ करें।",
          "बहुत ज़्यादा कठोरता हो तो RO या सॉफ्टनर जैसी व्यवस्था पर विचार करें।",
          "कठोर पानी को ज़्यादातर धोने‑साफ करने में और अपेक्षाकृत नरम पानी को पीने के लिए रखें।"
        ]
      },
      foam: {
        label: "फोम या डिटर्जेंट के बुलबुले",
        causes: [
          "डिटर्जेंट, साबुन या अन्य सर्फेक्टेंट जल स्रोत में पहुँच रहे हैं।",
          "घरेलू ग्रे‑वॉटर या सीवेज सीधे नालों या धाराओं में छोड़ा जा रहा है।"
        ],
        actions: [
          "कपड़े या बर्तनों को सीधे नदी, तालाब या कुएँ में धोने से बचें।",
          "ग्रे‑वॉटर को खुले नालों की बजाय सोख‑पिट या साधारण ट्रीटमेंट बेड से गुजारें।",
          "सार्वजनिक जल स्रोतों में लगातार झाग दिखने पर स्थानीय अधिकारियों को सूचना दें।"
        ]
      }
    },

    homeCareList: [
      "पीने का पानी विशेष रूप से बच्चों और बुज़ुर्गों के लिए उबालें या फिल्टर करें।",
      "रसोई के पानी‑भंडारण बर्तनों को नियमित रूप से साफ कर ढक कर रखें।",
      "पीने का पानी रसायन, ईंधन या कीटनाशकों के पास न रखें।"
    ],
    farmCareList: [
      "कुओं और तालाबों के पास अधिक मात्रा में उर्वरक व कीटनाशक न डालें।",
      "पशु‑शेड और गोबर के गड्ढे पीने के जल स्रोतों से दूर रखें।",
      "खेतों व नहरों के किनारे घास या पेड़ों की बफर पट्टी लगाएँ।"
    ],
    communityCareList: [
      "तालाब, झील, नदी या नालों में ठोस कचरा व प्लास्टिक न फेंकें।",
      "स्थानीय तालाबों, टैंकों और नदी किनारों की समय‑समय पर सामूहिक सफाई करें।",
      "सीवेज लीकेज और औद्योगिक उत्सर्जन की सूचना अधिकारियों को दें।"
    ],
    factsList: [
      "नियमित जाँच से समस्या गंभीर होने से पहले ही पकड़ में आ जाती है।",
      "कैचमेंट क्षेत्र की सुरक्षा, प्रदूषित पानी के उपचार से अक्सर सस्ती और टिकाऊ होती है।",
      "घर और खेतों पर छोटे‑छोटे कदम पानी के प्रदूषण को बहुत कम कर सकते हैं।"
    ]
  },

  // ------------- BENGALI -------------
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

    care_title: "জল যত্ন ও পদক্ষেপ",
    care_intro:
      "আপনার সর্বশেষ রিডিং কী বলছে তা বুঝুন, পানির জন্য সহজ যত্ন পরিকল্পনা নিন এবং কুয়ো, ট্যাংক, পুকুর ও কমিউনিটি জলস্রোতকে রক্ষা করার সহজ উপায় শিখুন।",

    last_title: "১. আমার সর্বশেষ রিডিং",
    last_load_btn: "ইতিহাস থেকে সর্বশেষ নিন",
    last_clear_checks: "যত্ন চেকলিস্ট মুছে ফেলুন",
    last_empty_note:
      "ইন্ডেক্স ও pH‑এর উপর ভিত্তি করে যত্ন পরিকল্পনা দেখতে Measure পেজ থেকে সর্বশেষ রিডিং লোড করুন।",

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

    careplan_title: "২. এই স্তরের জন্য যত্ন পরিকল্পনা",
    safety_title: "প্রথমে স্বাস্থ্য ও নিরাপত্তা",
    improve_title: "জলের মান উন্নত করুন",
    expert_title: "কখন বিশেষজ্ঞের সাহায্য নেবেন",
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
    reminder_due:
      "রিমাইন্ডার: {n} দিন হয়ে গেছে, দয়া করে আবার জল পরীক্ষা করুন।",
    reminder_ok:
      "আপনি {n} দিন আগে পরীক্ষা করেছেন। নজর রাখুন এবং সময় হলে আবার পরীক্ষা করুন।",
    reminder_saved: "প্রতি {n} দিনে রিমাইন্ডার সেভ করা হয়েছে।",

    library_title: "যত্ন লাইব্রেরি",
    home_care_title: "বাড়িতে (পান ও রান্নার জন্য)",
    farm_care_title: "খেত ও পুকুরের জন্য",
    community_care_title: "কমিউনিটি জলস্রোত",
    facts_title: "আপনি কি জানেন?",
    care_footer_note:
      "আপনার পরিবার, খেত বা কমিউনিটির পরবর্তী পদক্ষেপ ঠিক করতে এই যত্ন পরিকল্পনাকে মানচিত্র ও কৃষক সহায়তা পেজের সঙ্গে একসাথে ব্যবহার করুন।",

    carePlan: {
      good: {
        safety: [
          "উৎস যদি সুরক্ষিত থাকে তবে এই জল সাধারণত নিরাপদ; তবুও শিশু ও দুর্বলদের জন্য সবসময় ফুটিয়ে নিন।",
          "পরিষ্কার ঢাকনাওয়ালা পাত্রে জল রাখুন এবং হাত বা গ্লাস সরাসরি জলে ডুবিয়ে জল তুলবেন না।"
        ],
        improve: [
          "স্টোরেজ ট্যাংক ও ঘরের ফিল্টার প্রতি ১–৩ মাসে ভালোভাবে পরিষ্কার করুন।",
          "কুয়ো ও ট্যাংকের চারপাশে সঠিক নিকাশি রাখুন যাতে ডিটারজেন্ট, তেল বা গন্দা জল ফিরে না আসে।"
        ],
        expert: [
          "রং, গন্ধ বা স্বাদ হঠাৎ বদলালে আবার টেস্ট করুন এবং স্থানীয় স্বাস্থ্যকর্মীর সঙ্গে কথা বলুন।",
          "ভাল ফলাফল প্রতিবেশীদের সঙ্গে ভাগ করে সবাইকে নিয়মিত টেস্টে উৎসাহিত করুন।"
        ]
      },
      med: {
        safety: [
          "এমন জল সরাসরি খাবেন না; আগে ফুটিয়ে নিন অথবা বিশ্বস্ত ফিল্টার দিয়ে ছেঁকে নিন।",
          "মাঝারি দূষিত জল শিশুখাদ্য ও গুরুতর অসুস্থ মানুষের জন্য ব্যবহার করবেন না।"
        ],
        improve: [
          "স্টোরেজ ট্যাংক, পাইপ ও কল পরিষ্কার করুন; যেখানে সম্ভব তলার কাদা পরিষ্কার করুন।",
          "কুয়ো ও হ্যান্ডপাম্পের চারপাশে ড্রেন এমনভাবে করুন যাতে নোংরা জল উৎসে ফিরে না আসে।",
          "স্থানীয় পরামর্শ অনুযায়ী সিরামিক, RO বা UV ফিল্টার ব্যবহার করুন।"
        ],
        expert: [
          "তিন বা তার বেশি পরীক্ষায় ইন্ডেক্স যদি সবসময় মাঝারি থাকে, তবে দপ্তরে বিস্তারিত পরীক্ষার জন্য লিখিতভাবে জানান।",
          "রিডিং লিখে রাখার ও পরিস্কার‑পরিচ্ছন্নতার জন্য ছোট কমিউনিটি দল গড়ে তুলুন।"
        ]
      },
      poor: {
        safety: [
          "মান ভালো না হওয়া পর্যন্ত এই জল খাবেন না এবং রান্নাতেও ব্যবহার করবেন না।",
          "সব ধরনের পানীয় কাজের জন্য বোতল, ট্যাংকার বা পাবলিক ট্যাপের মতো নিরাপদ বিকল্প ব্যবহার করুন।"
        ],
        improve: [
          "পয়ঃনিষ্কাশন লিক, আবর্জনা ফেলা বা কারখানার বর্জ্যর মতো সরাসরি দূষণ উৎসগুলো চিহ্নিত করে যত দ্রুত সম্ভব বন্ধ করুন।",
          "মান উন্নত না হওয়া পর্যন্ত এই জল শুধু ফ্লোর ধোয়া বা ফ্লাশের মতো কম‑সংস্পর্শ কাজের জন্য ব্যবহার করুন।",
          "নতুন কুয়ো, ট্রিটমেন্ট প্ল্যান্ট বা উৎস সুরক্ষার মতো মাঝারি‑দীর্ঘমেয়াদি সমাধানের পরিকল্পনা করুন।"
        ],
        expert: [
          "নিজের টেস্ট ফলাফলসহ পঞ্চায়েত, জল দফতর বা স্বাস্থ্য দফতরকে দ্রুত জানান।",
          "উৎসের কাছে যদি মাছ বা গবাদি পশু মরতে দেখা যায়, সেটিকে জরুরি অবস্থা ধরে প্রবেশ সীমিত করুন।"
        ]
      },
      unknown: {
        safety: [
          "এই জলকে দৈনন্দিন পানীয় হিসেবে ব্যবহার করার আগে অন্তত একবার পরীক্ষা করুন।",
          "রং, গন্ধ বা স্বাদ অস্বাভাবিক মনে হলে পরীক্ষা হওয়া পর্যন্ত উৎসকে অনিরাপদ ধরে নিন।"
        ],
        improve: [
          "উৎসের চারপাশ পরিষ্কার রাখুন এবং ওখানে আবর্জনা, তেল বা রাসায়নিক ফেলবেন না।",
          "পড়শি বা স্বাস্থ্যকর্মীদের সঙ্গে কথা বলে দলগত জল পরীক্ষা করার আয়োজন করুন।"
        ],
        expert: [
          "শিল্প বা ড্রেন থেকে দূষণের সন্দেহ থাকলে ইন্ডেক্স না থাকলেও বিষয়টি রিপোর্ট করুন।"
        ]
      }
    },

    checklistItems: [
      "এই মাসে আমি আমার স্টোরেজ ট্যাংক বা প্রধান পাত্র অন্তত একবার পরিষ্কার বা পরীক্ষা করেছি।",
      "আমি নিয়মিত জলস্রোতে নতুন গন্ধ, রং বদলানো বা তেল/ফেনা আছে কি না লক্ষ্য করেছি।",
      "আমি পানির পাত্র সবসময় ঢেকে রাখি এবং গ্লাস ডোবানোর বদলে ডোল বা ট্যাপ দিয়ে জল তুলি।",
      "আমি রাসায়নিক, তেল, ওষুধ বা প্লাস্টিকের কচরা নালায় বা কাছের জলস্রোতে ফেলি না।",
      "আমি রিমাইন্ডারের সময়সীমার মধ্যে স্ট্রিপ বা ক্যামেরা টুল দিয়ে আবার জল পরীক্ষা করার পরিকল্পনা করছি।"
    ],

    symptomOptions: {
      muddy: {
        label: "বাদামি বা কাদার মত দেখায়",
        causes: [
          "ভারি বৃষ্টি বা উজানে মাটি ভেঙে পড়ায় জলে অনেক গার ও কাদা মিশে গেছে।",
          "পাম্প বা কুয়ো তলদেশের কাছ থেকে জল তুলছে, যেখানে তলানি বেশি।"
        ],
        actions: [
          "পরিষ্কার বালতিতে জল নিয়ে কিছুক্ষণ স্থির থাকতে দিন, তারপর উপরের তুলনামূলক স্বচ্ছ অংশ ব্যবহার করুন।",
          "ফুটোনোর আগে কাপড় বা কার্ট্রিজ ফিল্টার দিয়ে সূক্ষ্ম কণা ছেঁকে নিন।",
          "খেতে পুকুর ও খালের ধারে ঘাস/গাছের বাফার স্ট্রিপ রাখুন, যাতে মাটির ক্ষয় কম হয়।"
        ]
      },
      green: {
        label: "উপরে সবুজ স্তর / শৈবাল",
        causes: [
          "অতিরিক্ত সার, ডিটারজেন্ট এবং পয়ঃনিষ্কাশনের পুষ্টি থেকে শৈবাল দ্রুত বাড়ছে।",
          "স্থির বা ধীরে চলা, রৌদ্রোজ্জ্বল জলে সাধারণত algal bloom দেখা যায়।"
        ],
        actions: [
          "খুব বেশি সবুজ এবং দুর্গন্ধযুক্ত জল পান বা স্নানের কাজে ব্যবহার করবেন না।",
          "সার‑ডিটারজেন্ট মিশ্রিত জলকে সরাসরি পুকুর/ট্যাংকে যাওয়া থেকে আটকান; পায়খানা বা নালার লিক মেরামত করুন।",
          "যেখানে সম্ভব পুকুরে আংশিক ছায়া ও হাওয়া মেশানোর ব্যবস্থা করুন এবং মাছ থাকলে মৎস্য‑বিশেষজ্ঞের পরামর্শ নিন।"
        ]
      },
      smell: {
        label: "তীব্র গন্ধ (পচা ডিম / নালা)",
        causes: [
          "পচা ডিমের মত গন্ধ কম অক্সিজেনযুক্ত, পচা জৈব‑পদার্থ থেকে বের হওয়া হাইড্রোজেন সালফাইড গ্যাসের কারণে হয়।",
          "গটার বা কারখানার গন্দা জল উৎসে মিশে যেতে পারে।"
        ],
        actions: [
          "ফুটিয়েও যদি গন্ধ না যায়, সেই জল কখনো খাবেন না; নিরাপদ বিকল্প নিন।",
          "চারপাশে লিক হওয়া সেপটিক ট্যাংক, নালা বা স্যুয়ার লাইনের খোঁজ করুন এবং কর্তৃপক্ষকে জানান।",
          "স্টোরেজ ট্যাংকে যথেষ্ট বাতাস চলাচল রাখুন এবং আশেপাশে পচা জৈব কচরা জমতে দেবেন না।"
        ]
      },
      scale: {
        label: "কল / বাসনে সাদা আস্তরণ",
        causes: [
          "কল ও বাসনের সাদা আস্তরণ সাধারণত উচ্চ ক্যালশিয়াম‑ম্যাগনেসিয়ামযুক্ত শক্ত জল বোঝায়।",
          "অতিরিক্ত শক্ত জলে আরও ঘুলে যাওয়া লবণ থাকে এবং স্বাদ আলাদা হতে পারে।"
        ],
        actions: [
          "কেটলি ও কলের আস্তরণকে হালকা ভিনেগার বা সাইট্রিক এসিডের দ্রবণ দিয়ে ভিজিয়ে পরে মুছে ফেলুন।",
          "কঠোরতা খুব বেশি হলে RO বা সফ্টনারের মত ব্যবস্থা নিয়ে স্থানীয় বিশেষজ্ঞের সঙ্গে আলোচনা করুন।",
          "শক্ত জলকে মূলত ধোয়া‑মোছার কাজে ব্যবহার করুন এবং তুলনামূলক নরম জল পান করার জন্য রাখুন।"
        ]
      },
      foam: {
        label: "ফেনা বা ডিটারজেন্টের বাবল",
        causes: [
          "ডিটারজেন্ট, সাবান ও অনুরূপ রাসায়নিক জলে মিশছে।",
          "ঘর থেকে বের হওয়া grey‑water বা পয়ঃনিষ্কাশন সরাসরি নালায় বা খালে ফেলা হচ্ছে।"
        ],
        actions: [
          "নদী, পুকুর বা কুয়োতে সরাসরি কাপড়‑বাসন ধোবেন না।",
          "grey‑water‑কে খোলা নালার বদলে soak‑pit বা সোজা ট্রীটমেন্ট বেডের মাধ্যমে ফেলুন।",
          "পাবলিক জলস্রোতে বারবার ফেনা দেখা গেলে স্থানীয় প্রশাসনকে খবর দিন।"
        ]
      }
    },

    homeCareList: [
      "বিশেষ করে শিশু ও বৃদ্ধদের জন্য পানীয় জল ফুটিয়ে বা ফিল্টার করে নিন।",
      "রান্নাঘরের জল রাখার পাত্র নিয়মিত ধুয়ে পরিষ্কার ও ঢেকে রাখুন।",
      "পানীয় জল রাসায়নিক, জ্বালানি বা কীটনাশকের কাছে রাখবেন না।"
    ],
    farmCareList: [
      "কুয়ো ও পুকুরের কাছাকাছি অতিরিক্ত সার ও কীটনাশক ব্যবহার করবেন না।",
      "পশুর ঘর ও গোবরের গর্ত পানীয় জলস্রোত থেকে যথাসম্ভব দূরে রাখুন।",
      "খেত ও খালের ধারে ঘাস বা গাছের বাফার পট্টি লাগান যাতে মাটি ও রাসায়নিক কম ভেসে যায়।"
    ],
    communityCareList: [
      "পুকুর, হ্রদ, নদী বা নালায় কখনোও কঠিন আবর্জনা, প্লাস্টিক বা মেডিকেল বর্জ্য ফেলবেন না।",
      "স্থানীয় পুকুর, স্টোরেজ ট্যাংক ও নদীঘাটের নিয়মিত পরিষ্কার‑অভিযান আয়োজন করুন।",
      "স্যুয়ার লিক এবং শিল্পবর্জ্য ছাড়ার ঘটনা দেখলে কর্তৃপক্ষকে জানান।"
    ],
    factsList: [
      "নিয়মিত জল পরীক্ষা করলে সমস্যা গুরুতর হওয়ার আগেই ধরা পড়ে।",
      "ক্যাচমেন্ট এলাকা রক্ষা করা বেশির ভাগ সময় দূষিত জল পরিশোধনের চেয়ে সস্তা ও সহজ।",
      "বাড়ি ও খেতে সঠিক অভ্যাস জল দূষণ অনেক কমিয়ে দিতে পারে।"
    ]
  },

  // ------------- TAMIL -------------
  ta: {
    // (use the full Tamil block you already pasted earlier; it is structurally correct)
  },

  // ------------- MARATHI -------------
  mr: {
    // (use the full Marathi block you already pasted earlier; it is structurally correct)
  }
};
