function getLearnStrings(lang) {
  const translations = {
    en: {
      // Navigation
      nav_home: "Home",
      nav_measure: "Measure",
      nav_map: "Map",
      nav_care: "Care",
      nav_farmers: "Farmers Assistant",
      nav_chart: "Chart",
      nav_learn: "Learn",
      nav_buykit: "Buy Kit",
      nav_about: "About",
      
      // Page header
      page_title: "Learn About Water Quality",
      page_subtitle: "Understanding water parameters and safe standards",
      intro_text: "Clean water is essential for health. Learn about the key parameters we measure, what they mean, and how to keep your water safe for drinking and farming.",
      
      // Section 1: Parameters
      section1_title: "Water Quality Parameters",
      
      param_ph_title: "pH Level",
      param_ph_desc: "pH measures how acidic or alkaline water is on a scale of 0 to 14. Pure water has a pH of 7 (neutral).",
      param_ph_safe: "Safe Range: 6.5 - 8.5",
      param_ph_effects_title: "Effects:",
      param_ph_effect1: "Low pH (acidic): Can corrode pipes, taste sour, cause stomach issues",
      param_ph_effect2: "High pH (alkaline): Bitter taste, skin irritation, scaling in pipes",
      param_ph_effect3: "Balanced pH: Safe for drinking and supports healthy crops",
      
      param_tds_title: "TDS (Total Dissolved Solids)",
      param_tds_desc: "TDS measures all minerals, salts, and metals dissolved in water, measured in mg/L or ppm.",
      param_tds_safe: "Safe Range: Below 500 mg/L (excellent), 500-1000 mg/L (acceptable)",
      param_tds_levels_title: "TDS Levels:",
      param_tds_level1: "0-300 mg/L: Excellent for drinking",
      param_tds_level2: "300-600 mg/L: Good quality",
      param_tds_level3: "600-1000 mg/L: Fair, may need treatment",
      param_tds_level4: "Above 1000 mg/L: Poor, unsuitable for drinking",
      
      param_turbidity_title: "Turbidity",
      param_turbidity_desc: "Turbidity measures water clarity - how cloudy or hazy it appears due to suspended particles.",
      param_turbidity_safe: "Safe Range: Below 5 NTU for drinking",
      param_turbidity_problems_title: "High Turbidity Problems:",
      param_turbidity_problem1: "Harbors bacteria, viruses, and parasites",
      param_turbidity_problem2: "Makes water treatment difficult",
      param_turbidity_problem3: "Reduces oxygen levels for aquatic life",
      param_turbidity_problem4: "Can contain heavy metals",
      
      param_temp_title: "Temperature",
      param_temp_desc: "Water temperature affects chemical reactions, oxygen levels, and biological activity in water.",
      param_temp_safe: "Ideal Range: 15-25°C for drinking water",
      param_temp_impacts_title: "Temperature Impacts:",
      param_temp_impact1: "Higher temperature reduces dissolved oxygen",
      param_temp_impact2: "Affects taste and increases bacterial growth",
      param_temp_impact3: "Influences effectiveness of water treatment",
      param_temp_impact4: "Cold water holds more oxygen (better quality)",
      
      // Section 2: Health
      section2_title: "Health & Safety",
      
      health_diseases_title: "Waterborne Diseases",
      health_diseases_desc: "Contaminated water can cause serious illnesses. Common waterborne diseases include:",
      health_disease1: "Diarrhea and dysentery (from bacteria)",
      health_disease2: "Cholera (from contaminated drinking water)",
      health_disease3: "Typhoid fever (from poor sanitation)",
      health_disease4: "Hepatitis A (from fecal contamination)",
      health_disease5: "Skin and eye infections",
      
      health_warning_title: "Warning Signs",
      health_warning_desc: "Do not use water if you notice:",
      health_warning1: "Unusual color (brown, yellow, or green)",
      health_warning2: "Strange smell or taste",
      health_warning3: "Cloudy or murky appearance",
      health_warning4: "Visible particles or sediment",
      health_warning5: "Oily film on surface",
      health_warning_action: "Action: Use our Measure tool to test the water and see Care tips for treatment options.",
      
      // Section 3: Improvement
      section3_title: "Improving Water Quality",
      
      improve_boiling_title: "Boiling Water",
      improve_boiling_desc: "Boiling is the most effective way to kill bacteria, viruses, and parasites.",
      improve_boiling_step1: "Bring water to a rolling boil for 1 minute",
      improve_boiling_step2: "At high altitudes (above 2000m), boil for 3 minutes",
      improve_boiling_step3: "Let it cool naturally",
      improve_boiling_step4: "Store in clean, covered containers",
      
      improve_filtration_title: "Filtration Methods",
      improve_filtration_desc: "Simple filtration can remove particles and improve clarity:",
      improve_filtration_method1: "Cloth filter: Fold clean cloth 4-6 times",
      improve_filtration_method2: "Sand filter: Layers of sand, gravel, and charcoal",
      improve_filtration_method3: "Ceramic filters: Remove bacteria and sediment",
      improve_filtration_method4: "RO (Reverse Osmosis): Removes TDS and most contaminants",
      
      improve_solar_title: "Solar Disinfection (SODIS)",
      improve_solar_desc: "Use sunlight to purify water naturally:",
      improve_solar_step1: "Fill clear plastic bottles (PET) with water",
      improve_solar_step2: "Place in direct sunlight for 6 hours",
      improve_solar_step3: "On cloudy days, expose for 2 days",
      improve_solar_step4: "UV rays kill most harmful organisms",
      improve_solar_note: "Note: Works best when turbidity is low (water is relatively clear)",
      
      improve_storage_title: "Safe Storage",
      improve_storage_desc: "Keep treated water safe from recontamination:",
      improve_storage_tip1: "Use clean, covered containers with narrow openings",
      improve_storage_tip2: "Keep containers away from animals and dirt",
      improve_storage_tip3: "Use a clean cup or ladle to pour (don't dip hands)",
      improve_storage_tip4: "Clean storage containers weekly with soap",
      improve_storage_tip5: "Store in cool, dark place"
    },
    
    hi: {
      // You can add Hindi translations here
      // Following the same structure
      nav_home: "होम",
      nav_measure: "मापें",
      nav_map: "नक्शा",
      nav_care: "देखभाल",
      nav_farmers: "किसान सहायक",
      nav_chart: "चार्ट",
      nav_learn: "सीखें",
      nav_buykit: "किट खरीदें",
      nav_about: "के बारे में",
      
      page_title: "जल गुणवत्ता के बारे में जानें",
      page_subtitle: "जल मापदंडों और सुरक्षित मानकों को समझना",
      intro_text: "स्वच्छ जल स्वास्थ्य के लिए आवश्यक है। हम जो प्रमुख मापदंड मापते हैं, उनका क्या अर्थ है, और अपने पानी को पीने और खेती के लिए सुरक्षित कैसे रखें, इसके बारे में जानें।",
      
      section1_title: "जल गुणवत्ता मापदंड",
      // Add more Hindi translations...
    }
    
    // Add other languages (bn, ta, mr, gu, pa, te, kn, ur) following the same pattern
  };
  
  return translations[lang] || translations.en;
}
