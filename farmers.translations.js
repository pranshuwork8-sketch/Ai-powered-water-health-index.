// farmers.translations.js
// Central translation map for farmers.html UI strings

(function () {
  const STRINGS = {
    en: {
      // Top bar + navigation
      topbar_title: "Water Index",
      nav_home: "Home",
      nav_measure: "Measure",
      nav_map: "Map",
      nav_care: "Care",
      nav_farmers: "Farmers Assistant",
      nav_chart: "Chart",
      nav_learn: "Learn",
      nav_buykit: "Buy Kit",
      nav_about: "About",

      // Header card
      farm_title: "Farmers Assistance",
      farm_intro:
        "Turn water readings into simple steps: choose pH, pick a crop, and read clear tips on what to do next.",
      farm_badge_household: "Households",
      farm_badge_farmers: "Farmers",
      farm_badge_students: "Student projects",
      farm_ai_note:
        "In the next version this button will open a full voice helper. For now it shows a simple preview box.",
      farm_ai_btn: "Open Farmers AI Assistant",

      // Latest status card
      status_title: "Latest water status",
      status_text_empty:
        "No saved reading found yet. Measure water on the “Measure” page and save it to see a quick summary here.",

      // Left panel: pH helper
      ph_helper_title: "Smart pH helper",
      ph_helper_sub:
        "Step 1: choose a pH value. Step 2: see which crops are happy. Step 3: get clear actions to move pH closer to 7.0.",
      ph_choose_title: "1. Choose or enter pH",
      ph_label: "pH",
      ph_use_latest: "Use latest reading",
      ph_check_btn: "Check pH for crops",
      ph_note:
        "If you already measured water and pressed “Save” on the Measure page, this button will pull that value.",
      best_crops_title: "Best crops at this pH",

      ph_improve_title: "2. Improve pH towards 7.0",
      ph_improve_label: "Current pH",
      ph_improve_btn: "Show improvement tips",
      short_term_title: "Short‑term steps",
      long_term_title: "Long‑term soil health",
      improve_note:
        "Always match pH correction with soil tests and local agriculture advice.",

      // Right panel: crop advice
      crop_helper_title: "Crop‑based advice",
      crop_helper_sub:
        "Pick a crop and reuse the same pH. You will see simple text on fit, fertiliser, irrigation and care.",
      crop_choose_title: "3. Select a crop",
      crop_label: "Crop",
      crop_placeholder: "Choose crop…",
      crop_note:
        "Enter or load pH on the left, then choose crop here to see how well the water matches.",
      crop_range_title: "Ideal pH range",
      crop_ph_improve_title: "pH improvement for this crop",
      irrigation_title: "Irrigation tips",
      management_title: "Fertiliser & management",

      // AI placeholder
      ai_placeholder_title: "Farmers AI Assistant (preview)",
      ai_placeholder_close: "Close",
      ai_placeholder_text:
        "In the future this box will speak, answer questions and show step‑by‑step guidance. For now it is only a preview. Use the pH helper and crop advice panels below."
    }

    // Later: hi, bn, ta, mr, gu, pa, te, kn, ur...
  };

  // Global function used by farmers.html
  window.getFarmersStrings = function getFarmersStrings(langCode) {
    const code = (langCode || "en").toLowerCase();
    return STRINGS[code] || STRINGS.en;
  };
})();
