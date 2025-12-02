// farmers.translations.en.js
// Full English text for Farmers page: UI + pH tips + all crop tips

window.FARMERS_I18N = window.FARMERS_I18N || {};

window.FARMERS_I18N.en = {
  /* ================= UI TEXT ================= */

  ui: {
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

    farm_title: "Farmers Assistance",
    farm_intro:
      "Turn water readings into simple steps: choose pH, pick a crop, and read clear tips on what to do next.",
    farm_badge_household: "Households",
    farm_badge_farmers: "Farmers",
    farm_badge_students: "Student projects",

    farm_ai_note:
      "In the next version this button will open a full voice helper. For now it shows a simple preview box.",
    farm_ai_btn: "Open Farmers AI Assistant",

    status_title: "Latest water status",
    status_text_empty:
      "No saved reading found yet. Measure water on the “Measure” page and save it to see a quick summary here.",

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

    ai_placeholder_title: "Farmers AI Assistant (preview)",
    ai_placeholder_close: "Close",
    ai_placeholder_text:
      "In the future this box will speak, answer questions and show step‑by‑step guidance. For now it is only a preview. Use the pH helper and crop advice panels below."
  },

  /* ================= pH IMPROVEMENT TEXT ================= */

  ph_improvement: {
    // 0–4.5
    band_extreme_acid: {
      min: 0,
      max: 4.5,
      short: [
        "This water is extremely acidic. Do NOT use it directly for vegetables, nurseries or young plants.",
        "If you must use it, always mix it with a better water source or collected rainwater.",
        "Never pour strong urea or other fertilisers straight into this water; it will burn roots badly.",
        "Use this water first for leaching salty soils or for non‑crop use, not for sensitive crops."
      ],
      long: [
        "Get a soil and water test from a lab before investing in crops with this water.",
        "Plan to apply lime or dolomite in several small doses over many seasons, not one huge shot.",
        "Grow very hardy grasses or green‑manure crops first, and slowly build organic matter.",
        "Work with local experts on a full reclamation plan that includes drainage, amendments and crop choice."
      ]
    },

    // 4.5–5.5
    band_strong_acid: {
      min: 4.5,
      max: 5.5,
      short: [
        "Water is strongly acidic. Many crops will suffer unless soil is corrected.",
        "For nurseries, mix this water with cleaner water or use rainwater where possible.",
        "Apply lime or dolomite only as per soil test, and mix it into the top 10–15 cm of soil.",
        "Avoid using only ammonium‑type fertilisers; prefer balanced NPK plus plenty of compost."
      ],
      long: [
        "Every season, add farmyard manure, compost and crop residues to slowly raise pH and protect roots.",
        "Include deep‑rooted legumes or fodder crops in rotation and leave the roots in the soil.",
        "Do not burn crop residues; keeping straw and leaves on the field improves pH buffering.",
        "Test pH every 2–3 years and adjust lime doses instead of doing one very heavy application."
      ]
    },

    // 5.5–6.5
    band_slight_acid: {
      min: 5.5,
      max: 6.5,
      short: [
        "Water is a little acidic. This is okay for many crops, but some vegetables prefer it slightly higher.",
        "For very sensitive crops you can apply a small lime dose in rows or planting pits.",
        "Check pH in different corners of the field; some patches may be more acidic than others.",
        "Use balanced NPK instead of only urea so the soil does not keep moving more acidic."
      ],
      long: [
        "Keep at least one pulse or green‑manure crop in rotation to hold pH steady.",
        "Return crop residues to the soil and use compost so the top layer stays soft and buffered.",
        "Avoid long‑term standing water on these soils; continuous puddling can slowly push pH down.",
        "Store soil‑test reports and compare them every few years to see whether pH moves up or down."
      ]
    },

    // 6.5–7.5
    band_near_neutral: {
      min: 6.5,
      max: 7.5,
      short: [
        "Your pH is close to ideal. Focus on keeping it stable, not changing it.",
        "Do not add lime or strong acid fertilisers without a soil test; they can spoil this good balance.",
        "Use clean water and avoid mixing in industrial or drainage water that may shift pH quickly.",
        "Choose crops mainly based on climate, soil type and market price, because pH is friendly here."
      ],
      long: [
        "Maintain soil cover with mulches or cover crops so microbes stay active and protect structure.",
        "Use reasonable tillage: deep plough only when needed, otherwise use shallow, timely cultivation.",
        "Include at least one legume or green‑manure crop every 2–3 years to keep soil biology strong.",
        "Keep a simple notebook: record pH, crop and yield each year so you notice small changes early."
      ]
    },

    // 7.5–8.5
    band_moderate_alkaline: {
      min: 7.5,
      max: 8.5,
      short: [
        "Water is moderately alkaline. Some crops are okay, but others will show yellow leaves or poor growth.",
        "Avoid long flood irrigation; give shorter irrigations through furrows or drip so salts do not climb up.",
        "If you have two water sources, use the better (lower pH) one for nurseries and fruits or vegetables.",
        "Watch the soil surface: a white crust is a sign of salt and high pH build‑up."
      ],
      long: [
        "Where soil tests confirm sodicity, apply gypsum in the right dose and ensure proper drainage.",
        "Add lots of farmyard manure, compost and crop residues so roots grow in a softer, darker layer.",
        "Deep plough once in a few years and cut small surface drains so rainwater can carry salts away.",
        "Prefer slightly tolerant crops such as barley, mustard, chickpea, sorghum and bajra while reclamation is going on."
      ]
    },

    // 8.5–9.5
    band_strong_alkaline: {
      min: 8.5,
      max: 9.5,
      short: [
        "Water is strongly alkaline. Most sensitive crops will struggle, especially vegetables and pulses.",
        "Do not use this water for seed trays or pots unless you mix it with better quality water.",
        "Use furrow or drip irrigation instead of full‑field flooding to reduce salt rise.",
        "Check for white crusts and hard clods; these are signs that soil salts and pH are already high."
      ],
      long: [
        "Work with a soil lab to design a gypsum and drainage programme for the worst affected fields.",
        "Grow salt‑tolerant crops, grasses or fodder initially and slowly shift to less tolerant crops later.",
        "Add thick organic mulches so the top 5–10 cm becomes more crumbly and darker over time.",
        "Monitor both pH and electrical conductivity every few years to track improvement."
      ]
    },

    // >9.5
    band_extreme_alkaline: {
      min: 9.5,
      max: 14,
      short: [
        "This pH is extremely alkaline. Direct irrigation on most crops is unsafe.",
        "Use this water only after mixing with much better water, or for leaching and non‑crop uses.",
        "Do not establish new orchards or high‑value vegetables with only this water source.",
        "Get professional lab advice before spending money on fertiliser or amendments."
      ],
      long: [
        "Plan a long‑term reclamation project with good drainage, gypsum or other amendments and heavy organic matter.",
        "Use very tolerant grasses, trees or halophyte species first to slowly change soil condition.",
        "Collect and store rainwater wherever possible to blend with this water in future seasons.",
        "Keep detailed records of tests, crops and yields so you can prove that reclamation is working."
      ]
    }
  },

  /* ================= CROP TEXT (25 CROPS) ================= */

  crops: {
    /* ---------- 1. Rice ---------- */
    rice: {
      name: "Rice (paddy)",
      group: "staple",
      phMin: 5.5,
      phMax: 7.0,
      improveLow: [
        "If pH is below 5.5, mix farmyard manure and compost into the top 10–15 cm of soil.",
        "Apply agricultural lime or dolomite 2–3 months before transplanting as per soil test.",
        "Avoid using only high‑nitrogen fertilisers on very acidic land; always combine with organic matter.",
        "Grow a legume or green‑manure crop before rice to soften the soil and gently raise pH."
      ],
      improveHigh: [
        "If pH is above 7.5, avoid long standing water and use short wet–dry cycles instead of deep flooding.",
        "Add green‑manure crops like dhaincha or sunnhemp and plough them in at flowering.",
        "Use more organic residues such as straw and weed biomass so the soil slowly moves closer to neutral.",
        "If canal or rain water is better than well water, prefer it for nurseries and early crop stages."
      ],
      irrigation: [
        "Keep 3–5 cm water during tillering and drain the field completely before harvest.",
        "Level the field carefully so water depth is even and fertiliser loss is lower.",
        "Avoid using very turbid or salty water for seedling nurseries whenever you have a choice.",
        "Do not let seedlings remain in stagnant, foul‑smelling water; refresh with cleaner water if needed."
      ],
      fertiliser: [
        "Use split nitrogen in 2–3 doses instead of one heavy dose such as basal, tillering and panicle stage.",
        "Apply basal NPK before planting and add zinc sulphate where deficiency is common in your area.",
        "Where organic manure is available, mix it in before puddling to reduce dependence on chemical fertiliser.",
        "Avoid very high nitrogen right before flowering; it can cause lodging and delay maturity."
      ]
    },

    /* ---------- 2. Wheat ---------- */
    wheat: {
      name: "Wheat",
      group: "staple",
      phMin: 6.0,
      phMax: 7.5,
      improveLow: [
        "If pH is below 6.0, apply lime based on soil test at least one season before wheat.",
        "In very acidic patches, apply lime in strips or bands in the root zone instead of the whole field.",
        "Increase farmyard manure and compost so soil is well buffered and does not become sharply acidic.",
        "Avoid repeated use of only ammonium‑based fertilisers on acidic soils without organic inputs."
      ],
      improveHigh: [
        "Above pH 7.8, watch for yellowing between veins and use zinc or iron foliar spray when symptoms appear.",
        "Use more organic residues and manures to reduce crusting on alkaline soils.",
        "If irrigation water is also alkaline, keep depths shallow and avoid over‑irrigation.",
        "Grow a legume in rotation before wheat to improve structure and nutrient balance."
      ],
      irrigation: [
        "Important irrigations are at crown‑root initiation, tillering, flowering and grain filling.",
        "Avoid waterlogging; wheat prefers moist but well‑aerated soil with no standing water.",
        "Irrigate lightly after sowing to ensure uniform germination, especially on light soils.",
        "Stop irrigation when grains turn hard; too much late water reduces grain quality."
      ],
      fertiliser: [
        "Use balanced NPK according to local recommendation instead of only urea.",
        "Place fertiliser slightly below seed level rather than broadcasting everything on the surface.",
        "On lighter soils, split nitrogen into more but smaller doses so it is not lost by leaching.",
        "Retain some straw as mulch or residue to recycle nutrients and reduce temperature stress."
      ]
    },

    /* ---------- 3. Maize ---------- */
    maize: {
      name: "Maize (corn)",
      group: "cereal",
      phMin: 6.0,
      phMax: 7.5,
      improveLow: [
        "Below pH 5.8, apply lime to prevent root damage and poor nutrient uptake.",
        "Combine lime with farmyard manure so the effect on pH is smoother and lasts longer.",
        "Avoid sowing maize immediately after very heavy applications of acidic fertilisers.",
        "Treat only the most acidic spots if the problem is patchy instead of liming the whole field."
      ],
      improveHigh: [
        "At high pH, apply zinc and manganese rich fertiliser or foliar mixture if leaves pale.",
        "Add crop residues and compost each season so the soil does not harden or crack.",
        "Prefer neutral canal or rain water for critical stages if it is available.",
        "Grow a green‑manure or fodder crop before maize on very alkaline land to soften the profile."
      ],
      irrigation: [
        "Do not allow stress at tasselling and grain filling; these stages decide final yield.",
        "Avoid standing water around plants for more than one or two days.",
        "On sandy soil, give more frequent but lighter irrigations to prevent wilting.",
        "After heavy rain, open small drains so extra water moves out quickly."
      ],
      fertiliser: [
        "Place fertiliser bands 5 cm away and 5 cm below the seed instead of broadcast application.",
        "Use a starter dose of DAP or complex NPK at sowing for strong early growth.",
        "Top‑dress nitrogen when plants are knee‑high and again just before tasselling.",
        "Where organic manure is available, combine it with chemical fertiliser rather than replacing one with the other completely."
      ]
    },

    /* ---------- 4. Sugarcane ---------- */
    sugarcane: {
      name: "Sugarcane",
      group: "cash",
      phMin: 5.5,
      phMax: 8.0,
      improveLow: [
        "On very acidic soils, apply lime and bulky organic manure before planting the plant crop.",
        "Use press‑mud or filter cake from sugar mills where available to improve pH and fertility.",
        "Avoid planting new ratoons on severely acidic patches; reclaim them first with amendments.",
        "Grow a green‑manure crop in the fallow period and incorporate it deeply."
      ],
      improveHigh: [
        "Where soil is alkaline and saline, leach salts with good‑quality water during pre‑plant irrigation.",
        "Use gypsum if soil tests show high exchangeable sodium.",
        "Maintain good surface drainage so salts do not accumulate around the stool.",
        "Plant tolerant varieties recommended for sodic or saline areas when reclamation is slow."
      ],
      irrigation: [
        "Give light but frequent irrigations in sandy soils and deeper irrigations in heavier soils.",
        "Stop irrigation 15–20 days before harvest to improve sugar recovery.",
        "Repair field channels and furrows before each season so water reaches all rows evenly.",
        "Avoid deep cracks in clay soil by timely irrigation and trash mulching between rows."
      ],
      fertiliser: [
        "Apply nitrogen in 3–4 splits along the furrows instead of one heavy application.",
        "Use balanced NPK doses as per local recommendation and soil test.",
        "In ratoon crops, apply fertiliser after gap‑filling so all stools receive similar nutrition.",
        "Combine chemical fertiliser with trash mulching or compost to keep soil alive for long seasons."
      ]
    },

    /* ---------- 5. Cotton ---------- */
    cotton: {
      name: "Cotton",
      group: "cash",
      phMin: 5.8,
      phMax: 7.5,
      improveLow: [
        "On very acidic soil, apply lime to avoid poor root growth and nutrient toxicity.",
        "Mix farmyard manure and compost at land preparation so soil stays open and well drained.",
        "Avoid water stagnation in acidic black soils by preparing proper ridges and furrows.",
        "Use tolerant varieties where soils are naturally more acidic in your region."
      ],
      improveHigh: [
        "On sodic soils, apply gypsum according to soil test and ensure good drainage.",
        "Avoid using highly alkaline well water if a better source is available.",
        "Add crop residues and manures to reduce crusting and surface sealing.",
        "Grow a deep‑rooted green‑manure crop before cotton on fields with long‑term alkalinity."
      ],
      irrigation: [
        "Give deep irrigation at flowering and boll formation; shallow wetting is not enough.",
        "Avoid waterlogging; it causes boll drop and root rot quickly.",
        "Do not irrigate late in the season when most bolls have opened; this encourages rank growth.",
        "Use furrow irrigation or drip to keep the root zone moist but not flooded."
      ],
      fertiliser: [
        "Use balanced NPK based on soil test rather than only nitrogen.",
        "Apply sulphur‑containing fertiliser where sulphur deficiency is common.",
        "Top‑dress nitrogen in smaller splits and stop heavy nitrogen after flowering.",
        "Combine fertiliser use with regular weeding so nutrients go to the crop, not weeds."
      ]
    },

    /* ---------- 6. Soybean ---------- */
    soybean: {
      name: "Soybean",
      group: "pulse",
      phMin: 6.0,
      phMax: 7.5,
      improveLow: [
        "Below pH 6.0, light liming improves nodulation and root growth.",
        "Use farmyard manure and compost so the top soil stays loose and well aerated.",
        "Avoid water stagnation on acidic clays by using raised beds or broad‑bed furrows.",
        "Check pH of nursery and seed‑bed soils separately; they may be more acidic than the main field."
      ],
      improveHigh: [
        "At high pH, apply iron or micronutrient spray if leaf veins remain green but areas between turn yellow.",
        "Increase organic matter to soften clods and reduce cracks.",
        "Avoid over‑irrigation on alkaline soils to prevent salt build‑up at the surface.",
        "Rotate soybean with cereals instead of growing it repeatedly on the same alkaline field."
      ],
      irrigation: [
        "Protect the crop from waterlogging during heavy rain; soybean is sensitive to standing water.",
        "Maintain good moisture at flowering and pod filling for maximum yield.",
        "In rain‑fed areas, conserve moisture by early weeding and interculture.",
        "Where irrigation is available, give one light pre‑flower irrigation if the monsoon breaks."
      ],
      fertiliser: [
        "Treat seed with Rhizobium and phosphate‑solubilising bacteria before sowing.",
        "Apply starter phosphorus through DAP or SSP at sowing; pulses respond strongly to phosphorus.",
        "Avoid heavy nitrogen; it reduces nodulation and wastes fertiliser.",
        "Add some organic manure each season so nodules and soil microbes stay active."
      ]
    },

    /* ---------- 7. Groundnut ---------- */
    groundnut: {
      name: "Groundnut (peanut)",
      group: "oilseed",
      phMin: 6.0,
      phMax: 7.5,
      improveLow: [
        "Very acidic soil needs lime to support peg and pod formation.",
        "Apply gypsum at pegging for better kernel filling.",
        "Keep soil loose by shallow tillage; hard pans at low pH restrict peg entry.",
        "Avoid continuous use of acid‑forming fertilisers without organic manure."
      ],
      improveHigh: [
        "On alkaline soil, micronutrient sprays of boron and zinc can prevent empty or poorly filled pods.",
        "Add compost and crop residue regularly so soil stays friable.",
        "If irrigation water is very alkaline, use smaller, more frequent irrigations instead of heavy flooding.",
        "Rotate with cereals or green manures to avoid build‑up of soil‑borne diseases."
      ],
      irrigation: [
        "Keep soil moist but not sticky from flowering to pod filling.",
        "Stop irrigation 10–15 days before digging for easier harvest and better shell quality.",
        "Avoid deep cracks in dry weather by timely irrigation and mulching.",
        "Do not use flood irrigation on light sandy soils; use furrows or sprinkler instead."
      ],
      fertiliser: [
        "Use SSP as phosphorus source; it also supplies sulphur for oil formation.",
        "Do not overuse nitrogen; groundnut fixes most of its own nitrogen through nodules.",
        "Apply gypsum around the pegging zone rather than spreading it randomly.",
        "Add well‑decomposed organic manure during land preparation to support soil life."
      ]
    },

    /* ---------- 8. Mustard ---------- */
    mustard: {
      name: "Mustard",
      group: "oilseed",
      phMin: 6.0,
      phMax: 7.5,
      improveLow: [
        "Apply lime in strips or bands before sowing where soil is strongly acidic.",
        "Use farmyard manure or compost in the previous crop so mustard sees a softer top soil.",
        "On very acid fields, avoid late sowing; seedlings are more sensitive in cold, acidic soils.",
        "Mix crop residues instead of burning them to improve pH slowly."
      ],
      improveHigh: [
        "Use sulphur‑rich fertiliser like SSP, ammonium sulphate or bentonite sulphur on high pH soils.",
        "Avoid saline irrigation water, especially at sowing and early seedling stage.",
        "Where boron deficiency is known, apply a small boron dose as per recommendation.",
        "Grow a legume or fodder crop after mustard on very alkaline land to rebuild structure."
      ],
      irrigation: [
        "Key irrigations are at flowering and pod filling; stress here cuts yield sharply.",
        "Avoid standing water; mustard is highly sensitive to waterlogging.",
        "Under rain‑fed conditions, conserve moisture by timely weed control and light interculture.",
        "Where frost risk is high, avoid irrigation just before expected frost nights."
      ],
      fertiliser: [
        "Use NPK doses recommended for your zone, not just urea.",
        "Ensure enough sulphur in the fertiliser schedule; oil content depends strongly on sulphur.",
        "Apply basal fertiliser below seed level and not in direct contact with seed.",
        "Combine fertiliser with good weed management so nutrients are not stolen by weeds."
      ]
    },

    /* ---------- 9. Chickpea ---------- */
    chickpea: {
      name: "Chickpea (gram)",
      group: "pulse",
      phMin: 6.0,
      phMax: 8.0,
      improveLow: [
        "On strongly acidic land, light liming before chickpea improves nodulation.",
        "Use broad‑bed and furrow system in high rainfall zones to avoid crusting.",
        "Do not over‑irrigate acidic heavy clays; roots need air to fix nitrogen.",
        "Add farmyard manure or compost in the previous crop so chickpea enters a mellow soil."
      ],
      improveHigh: [
        "On high pH soils, keep adding organic matter so nutrients stay available.",
        "Where hard pan exists, break it once in a few years with deep tillage.",
        "Avoid over‑use of sodium‑rich irrigation water; it worsens alkalinity.",
        "Rotate chickpea with cereals and oilseeds instead of growing pulses back‑to‑back."
      ],
      irrigation: [
        "Chickpea is mostly grown on stored soil moisture; too much water encourages disease.",
        "If irrigation is available, one light irrigation at pod filling gives good response.",
        "Avoid standing water in depressions by opening small drains after heavy rain.",
        "Do not irrigate when crop is close to harvest; pods may blacken and sprout."
      ],
      fertiliser: [
        "Treat seed with Rhizobium culture so plants can fix nitrogen efficiently.",
        "Apply basal phosphorus as per recommendation; chickpea responds well to phosphorus.",
        "Avoid high nitrogen fertiliser; it reduces nodulation and increases lodging.",
        "Add small doses of zinc or other micronutrients where soil tests show deficiency."
      ]
    },

    /* ---------- 10. Pigeonpea ---------- */
    pigeonpea: {
      name: "Pigeonpea (arhar)",
      group: "pulse",
      phMin: 6.0,
      phMax: 7.5,
      improveLow: [
        "Use lime on very acidic land before sowing pigeonpea or its preceding crop.",
        "Add farmyard manure and compost to improve drainage and reduce crusting.",
        "Avoid sowing pigeonpea in low‑lying acidic spots that stay waterlogged.",
        "Use tolerant varieties where soils remain moderately acidic even after treatment."
      ],
      improveHigh: [
        "In alkaline fields, ensure good surface drainage so salts are not trapped near roots.",
        "Grow green manure or fodder grasses in rotation to improve soil structure.",
        "Avoid repeated irrigation with very alkaline tube‑well water.",
        "Leave crop residues on the surface after harvest to slowly add organic matter."
      ],
      irrigation: [
        "Pigeonpea can handle short drought, but severe stress at flowering reduces yield.",
        "In heavy rains, open drains quickly so water does not stand around stems.",
        "Where supplemental irrigation is possible, give one irrigation at pod setting.",
        "Avoid very late irrigations that may delay maturity and interfere with harvest."
      ],
      fertiliser: [
        "Apply a small starter dose of nitrogen and sufficient phosphorus at sowing.",
        "Treat seed with Rhizobium so nodules form early and strongly.",
        "Do not apply large nitrogen doses later in the crop; rely on biological fixation.",
        "Use organic manures in rotation to keep deep roots moving through the profile."
      ]
    },

    /* ---------- 11. Potato ---------- */
    potato: {
      name: "Potato",
      group: "vegetable",
      phMin: 5.0,
      phMax: 6.5,
      improveLow: [
        "If pH is below 5.0, apply small lime doses based on soil test a season before potato.",
        "Use plenty of farmyard manure so soil becomes loose and well drained.",
        "Avoid very acid peat‑like soils for seed potato unless corrected first.",
        "Grow a cereal or fodder crop with manure before potato in very sour fields."
      ],
      improveHigh: [
        "Above pH 7.0, common scab increases; avoid fresh undecomposed manure close to planting.",
        "Use sulphur‑based fertilisers to slightly lower pH near tubers.",
        "Irrigate carefully so soil stays moist but not waterlogged; scab worsens in alternating dry and wet soil.",
        "Where scab is a major issue, choose tolerant varieties recommended locally."
      ],
      irrigation: [
        "Keep soil moist from tuber initiation to bulking; moisture stress reduces size.",
        "Avoid standing water, which leads to rots and hollow heart.",
        "Stop irrigation 7–10 days before harvest so skins cure and do not peel.",
        "Use ridges high enough to protect tubers from sunlight and greening."
      ],
      fertiliser: [
        "Use more potash relative to nitrogen for firm, well‑keeping tubers.",
        "Split nitrogen into 2–3 applications instead of one heavy dose.",
        "Avoid too much nitrogen late in the season; it delays maturity and softens tubers.",
        "Include organic manure or compost to improve flavour and storage life."
      ]
    },

    /* ---------- 12. Tomato ---------- */
    tomato: {
      name: "Tomato",
      group: "vegetable",
      phMin: 6.0,
      phMax: 7.5,
      improveLow: [
        "On very acidic soil, apply lime to reduce blossom‑end rot and calcium problems.",
        "Add compost and farmyard manure to improve buffering and water‑holding capacity.",
        "Avoid planting tomatoes right after heavy applications of only ammonium fertiliser.",
        "Where acidity is patchy, treat low‑pH beds separately with lime."
      ],
      improveHigh: [
        "At high pH, apply micronutrient sprays if leaves look pale between veins.",
        "Use organic mulches to keep the root zone cool and moist.",
        "Avoid over‑irrigation with alkaline water; salts may build up on the surface.",
        "Rotate with cereals or green manures to refresh soil on long‑term alkaline beds."
      ],
      irrigation: [
        "Keep moisture even; strong wet–dry swings cause fruit cracking and blossom‑end rot.",
        "Avoid overhead irrigation late in the evening to reduce leaf diseases.",
        "Use drip or furrow irrigation so foliage stays as dry as possible.",
        "Reduce irrigation slightly as fruits ripen to improve taste and shelf life."
      ],
      fertiliser: [
        "Apply basal NPK and extra potash to support fruit load and quality.",
        "Do not overload with nitrogen; it gives tall plants with few fruits.",
        "Use small doses of calcium or calcium‑rich sprays where blossom‑end rot appears.",
        "Combine organic manures with chemical fertilisers to maintain soil life."
      ]
    },

    /* ---------- 13. Onion ---------- */
    onion: {
      name: "Onion",
      group: "vegetable",
      phMin: 6.0,
      phMax: 7.0,
      improveLow: [
        "Apply lime and farmyard manure one season before onion on very acidic soil.",
        "Use raised beds to improve drainage and prevent bulb rots.",
        "Avoid very acidic peat‑like soils unless they are corrected.",
        "Where acidity is high, grow a cereal or fodder crop with lime and manure before onion."
      ],
      improveHigh: [
        "High pH can lock micronutrients; use foliar spray if tips yellow and bulbs remain small.",
        "Maintain organic matter to keep bulbs growing in soft soil.",
        "Avoid heavy applications of sodium‑rich irrigation water on onion beds.",
        "Use sulphur‑containing fertiliser to support bulb size and flavour on alkaline soils."
      ],
      irrigation: [
        "Give light but frequent irrigation; onion roots are shallow and fine.",
        "Stop irrigation 10–12 days before harvest for better curing and storage.",
        "Avoid standing water in the field, which can rot necks and bulbs.",
        "Do not over‑irrigate late in the season; bulbs may become soft and split."
      ],
      fertiliser: [
        "Onion needs good potash and sulphur; include SSP and MOP or similar fertilisers.",
        "Apply nitrogen in small splits; too much nitrogen late reduces storage life.",
        "Place fertiliser in bands beside the row, not directly on the seed line.",
        "Add some compost each season to keep soil crumbly for bulb expansion."
      ]
    },

    /* ---------- 14. Okra ---------- */
    okra: {
      name: "Okra (bhindi)",
      group: "vegetable",
      phMin: 6.0,
      phMax: 7.5,
      improveLow: [
        "Apply lime where pH is very low and plants remain stunted.",
        "Use farmyard manure and compost to build a loose, friable seed bed.",
        "Avoid heavy metal or industrial effluent water on acidic okra fields.",
        "Rotate with cereal or pulse crops and manure additions to slowly raise pH."
      ],
      improveHigh: [
        "On alkaline soil, avoid salty irrigation water, especially at seedling stage.",
        "Use drip or furrow irrigation to keep the root zone moist but not flooded.",
        "Add plenty of organic residues so soil does not become hard and cracked.",
        "Grow green‑manure crops before okra in badly sodic fields."
      ],
      irrigation: [
        "Irrigate regularly during flowering and fruiting to keep pods tender.",
        "Avoid waterlogging; wilt diseases spread fast in hot, wet soil.",
        "Use mulches between rows to reduce evaporation and keep weeds down.",
        "Do not allow long dry periods followed by heavy irrigation; this can split pods."
      ],
      fertiliser: [
        "Use balanced NPK and one or two sprays of micronutrient mixture in long‑season crops.",
        "Do not over‑apply nitrogen; it gives excess leaves and fewer pods.",
        "Incorporate farmyard manure before sowing to support steady picking over many weeks.",
        "Harvest pods frequently; regular picking encourages new flushes and better fertiliser use."
      ]
    },

    /* ---------- 15. Brinjal ---------- */
    brinjal: {
      name: "Brinjal (eggplant)",
      group: "vegetable",
      phMin: 5.5,
      phMax: 7.0,
      improveLow: [
        "Light liming and farmyard manure help in very acidic fields before planting brinjal.",
        "Avoid planting seedlings into waterlogged, sour soil; wait until it drains.",
        "Use raised beds or ridges on acidic heavy clays.",
        "Check nursery bed pH; it should not be extremely low compared with the main field."
      ],
      improveHigh: [
        "High pH may reduce iron and manganese; use foliar mixture if leaves pale.",
        "Apply plenty of organic matter to keep soil soft and active.",
        "Avoid over‑irrigation with alkaline water, which can form white crust on the surface.",
        "Rotate with cereals and pulses to rest the soil on long‑term alkaline plots."
      ],
      irrigation: [
        "Give regular irrigation; long dry spells cause flower drop and fruit shedding.",
        "Increase watering frequency in light sandy soils and during strong winds.",
        "Avoid wetting foliage late evening to reduce foliar diseases.",
        "Mulch around plants so the root zone stays cool in hot months."
      ],
      fertiliser: [
        "Apply basal NPK and top‑dress nitrogen in 2–3 splits through the season.",
        "Combine chemical fertiliser with farmyard manure or compost for better taste and shelf life.",
        "Do not oversupply nitrogen during late fruiting; it reduces yield and quality.",
        "Use micronutrient sprays if fruits remain small or leaves look pale despite good NPK."
      ]
    },

    /* ---------- 16. Banana ---------- */
    banana: {
      name: "Banana",
      group: "fruit",
      phMin: 5.5,
      phMax: 7.5,
      improveLow: [
        "Apply lime and plenty of farmyard manure in very acidic soil before planting suckers.",
        "Ensure good drainage by preparing raised pits or mounds.",
        "Avoid continuous banana on the same highly acidic land; rotate with other crops and manures.",
        "Monitor leaf colour; severe acidity often shows as weak, yellow plants with small leaves."
      ],
      improveHigh: [
        "Leach salts with good‑quality water where soil is sodic or saline.",
        "Apply gypsum according to soil test where exchangeable sodium is high.",
        "Mulch thickly with crop residues and leaves around the plant base.",
        "Use organic manures every year so roots explore a soft, cool layer of soil."
      ],
      irrigation: [
        "Banana is very sensitive to drought; do not allow soil to dry out at any stage.",
        "Avoid waterlogging at the base; prolonged flooding leads to root and corm rot.",
        "In very hot periods, increase irrigation frequency but reduce depth per watering.",
        "Stop heavy irrigation a few days before harvest to improve fruit handling."
      ],
      fertiliser: [
        "Apply fertiliser in a ring around the plant, away from the pseudostem.",
        "Split nitrogen and potash into many small doses during the growing season.",
        "Combine chemical fertilisers with farmyard manure or compost to maintain soil structure.",
        "Use magnesium and micronutrient sprays if old leaves show typical deficiency patterns."
      ]
    },

    /* ---------- 17. Mango ---------- */
    mango: {
      name: "Mango",
      group: "fruit",
      phMin: 5.5,
      phMax: 7.5,
      improveLow: [
        "Apply lime before planting new orchards on strongly acidic soil.",
        "Grow green‑manure crops in basins and incorporate them when tender.",
        "Avoid puddled or waterlogged basins around mango trees on acidic clays.",
        "Use mulches and farmyard manure to build a soft surface layer rich in fine roots."
      ],
      improveHigh: [
        "On high pH soils, spray micronutrients like zinc, iron and manganese at new flush.",
        "Keep basins mulched so salts do not accumulate and crack the surface.",
        "Avoid applying large amounts of sodium‑rich irrigation water near trunks.",
        "Where soil is very alkaline, plant on raised mounds with lots of organic matter."
      ],
      irrigation: [
        "Young plants need regular irrigation in summer for quick establishment.",
        "In bearing trees, provide moisture at fruit development but avoid excess near flowering.",
        "Do not leave deep standing water around trunks; it can suffocate roots.",
        "In rain‑fed orchards, conserve moisture with mulches and cover crops."
      ],
      fertiliser: [
        "Give farmyard manure plus NPK dose once or twice a year in a ring around the canopy drip line.",
        "Adjust fertiliser dose by tree age; young trees need lighter but more frequent feeding.",
        "Avoid placing fertiliser right against the trunk; keep it in a circular band.",
        "Regular micronutrient sprays keep foliage dark green and fruits well filled."
      ]
    },

    /* ---------- 18. Citrus ---------- */
    citrus: {
      name: "Citrus (orange/limon)",
      group: "fruit",
      phMin: 5.5,
      phMax: 7.5,
      improveLow: [
        "Correct very acidic soil with lime before establishing citrus orchards.",
        "Apply farmyard manure and compost shallowly because most citrus feeder roots are near the surface.",
        "Avoid water stagnation in acidic soils; construct ridges or drains if needed.",
        "Do not apply strong acid‑forming fertilisers without organic matter on already acidic land."
      ],
      improveHigh: [
        "High pH often causes micronutrient deficiency; use chelated sprays several times in the season.",
        "Avoid piling fertiliser next to the trunk; spread it evenly under the canopy.",
        "Maintain thick organic mulch to reduce cracking and salt crust formation.",
        "Where soil is very alkaline, apply small, regular doses of organic matter instead of rare heavy applications."
      ],
      irrigation: [
        "Irrigate at longer intervals but with enough water to wet the root zone thoroughly.",
        "Provide drainage in heavy soils to avoid Phytophthora root rot.",
        "Do not leave basins completely dry for long periods; sudden heavy irrigation can crack fruits.",
        "Reduce irrigation slightly just before harvest to improve fruit sweetness."
      ],
      fertiliser: [
        "Apply NPK in 2–3 splits per year together with farmyard manure or compost.",
        "Use micronutrient sprays based on leaf analysis or visible deficiency.",
        "Place fertiliser in a circular band under the canopy, not close to the stem.",
        "Keep weeds out of the basin so fertiliser benefits only the trees."
      ]
    },

    /* ---------- 19. Tea ---------- */
    tea: {
      name: "Tea",
      group: "plantation",
      phMin: 4.5,
      phMax: 6.0,
      improveLow: [
        "Tea prefers acidic soil; only correct pH if it is extremely low and roots are being damaged.",
        "Use organic mulches like pruned twigs and leaves to protect shallow surface roots.",
        "Avoid deep cultivation around bushes on very acidic slopes.",
        "Monitor leaf colour and growth; very slow bushes may indicate need for mild pH correction."
      ],
      improveHigh: [
        "If pH rises too high, use ammonium sulphate and other acid‑forming fertilisers.",
        "Add organic matter such as composted prunings to lower pH slowly.",
        "Avoid extra liming near mature tea bushes unless soil tests demand it.",
        "Improve drainage so alkaline salts are washed out rather than trapped."
      ],
      irrigation: [
        "In low‑rainfall areas, use sprinkler or drip irrigation during long dry spells.",
        "Mulch heavily under bushes to conserve moisture and moderate temperature.",
        "Avoid standing water in tea fields; waterlogged roots decline quickly.",
        "Adjust irrigation frequency with shade level and wind speed."
      ],
      fertiliser: [
        "Follow the regional tea board fertiliser schedule for NPK and micronutrients.",
        "Apply fertiliser in shallow bands around bushes, not directly on stems.",
        "Do not apply heavy fertiliser doses on very dry soil; it can burn roots.",
        "Combine chemical fertiliser with regular organic inputs to keep soil organisms active."
      ]
    },

    /* ---------- 20. Sunflower ---------- */
    sunflower: {
      name: "Sunflower",
      group: "oilseed",
      phMin: 6.0,
      phMax: 7.5,
      improveLow: [
        "Use lime and farmyard manure on very acidic soils before sowing sunflower.",
        "Avoid sowing on strongly acidic, compacted patches without prior treatment.",
        "Grow a legume or fodder crop with manure additions one season before sunflower.",
        "Where acidity is localised, apply lime only in those spots instead of the whole field."
      ],
      improveHigh: [
        "On high pH soils, boron may be low; apply a small boron dose if recommended.",
        "Return crop residues to the soil instead of burning to improve structure.",
        "Avoid long flood irrigations with alkaline water; they raise pH further.",
        "Grow green manure crops between sunflower seasons on sodic fields."
      ],
      irrigation: [
        "Ensure good moisture at flowering and grain filling; stress here sharply reduces yield.",
        "Do not over‑irrigate; waterlogging lowers oil content and weakens stems.",
        "On light soils, more frequent but lighter irrigations work better.",
        "Avoid very late irrigation close to harvest; heads may bend and lodge."
      ],
      fertiliser: [
        "Use recommended NPK dose; potash is important for oil quality and disease resistance.",
        "Apply most phosphorus and potash basally and split nitrogen into 2–3 doses.",
        "Keep weeds under control during early growth so fertiliser is used efficiently.",
        "Add organic manure when possible to support deep tap‑root growth."
      ]
    },

    /* ---------- 21. Pearl millet ---------- */
    millet: {
      name: "Pearl millet (bajra)",
      group: "cereal",
      phMin: 5.5,
      phMax: 7.5,
      improveLow: [
        "Use farmyard manure and light liming where pH is very low to avoid seedling shock.",
        "Do not sow bajra in extremely acidic sandy soils without at least some amendment.",
        "Grow a legume or mixed fodder crop with manure before bajra to soften the top soil.",
        "Avoid burning residues; incorporate them to help pH move slowly upwards."
      ],
      improveHigh: [
        "Millet tolerates slightly higher pH but avoid very sodic patches with white salt crust.",
        "Increase organic matter so the surface does not seal after rain.",
        "Where irrigation water is alkaline, use small doses and avoid ponding.",
        "Rotate bajra with legumes to keep soil structure open and active."
      ],
      irrigation: [
        "Often grown on rainfall; where irrigated, avoid stress at booting and flowering.",
        "Do not waterlog light sandy soils; short, shallow irrigations are enough.",
        "On heavy soils, give one pre‑sowing irrigation and sow on residual moisture.",
        "Use contour bunds and ridges in drylands to trap more rainwater."
      ],
      fertiliser: [
        "Apply basal NPK and one top dressing of nitrogen at early tillering.",
        "Use seed treatment and proper spacing to reduce disease and improve fertiliser use.",
        "On very poor soils, add farmyard manure or compost during land preparation.",
        "Avoid over‑fertilising with nitrogen where moisture is limited; it can cause lodging and poor grain filling."
      ]
    },

    /* ---------- 22. Sorghum ---------- */
    sorghum: {
      name: "Sorghum (jowar)",
      group: "cereal",
      phMin: 5.5,
      phMax: 7.5,
      improveLow: [
        "On very acidic soils below pH 5.5, apply lime and farmyard manure before sowing sorghum.",
        "Avoid sowing in low‑lying, sour patches that stay waterlogged after rain.",
        "Grow a legume or green‑manure crop with manure additions one season before sorghum.",
        "Reduce use of strong acid‑forming fertilisers unless combined with organic matter."
      ],
      improveHigh: [
        "Sorghum tolerates slightly higher pH, but avoid visibly sodic, salty crust patches.",
        "Where irrigation water is alkaline, use shallow irrigations and avoid ponding.",
        "Return crop residues to the field instead of burning to improve soil structure.",
        "Rotate sorghum with pulses to help keep soil open and biologically active."
      ],
      irrigation: [
        "Most sorghum is rain‑fed; avoid stress at booting and flowering if irrigation is available.",
        "Do not waterlog light sandy soils; short, shallow irrigations are enough.",
        "Use contour bunds and ridges in drylands so rainwater stays longer in the field.",
        "After heavy storms, drain excess water quickly from low spots to protect roots."
      ],
      fertiliser: [
        "Apply basal NPK and one top dressing of nitrogen at early tillering.",
        "Use seed treatment and correct spacing so each plant can use fertiliser efficiently.",
        "On very poor soils, add farmyard manure or compost during land preparation.",
        "Avoid overuse of nitrogen where moisture is limited; it can cause lodging and poor grain filling."
      ]
    },

    /* ---------- 23. Barley ---------- */
    barley: {
      name: "Barley",
      group: "cereal",
      phMin: 6.0,
      phMax: 8.0,
      improveLow: [
        "If pH is below 6.0, apply lime as per soil test at least one season before barley.",
        "Use farmyard manure and compost so the seedbed is soft and less acidic near the roots.",
        "Avoid sowing barley immediately after heavy applications of only ammonium fertilisers.",
        "Treat the worst acidic spots separately instead of wasting lime on the whole field."
      ],
      improveHigh: [
        "Barley can handle slightly alkaline soils, but very sodic soils still need gypsum.",
        "Use organic residues and green manures to reduce crusting on high pH fields.",
        "Where irrigation water is also alkaline, keep irrigation shallow and not too frequent.",
        "Rotate barley with deep‑rooted crops to break any compact hard pan."
      ],
      irrigation: [
        "Critical irrigations are at tillering and grain filling on light soils.",
        "Avoid standing water; barley prefers firm but well‑drained soil.",
        "In rain‑fed areas, conserve moisture with early weed control and mulching where possible.",
        "Stop irrigation once grains harden; late water can reduce grain quality."
      ],
      fertiliser: [
        "Apply balanced NPK at sowing; place fertiliser slightly below the seed line.",
        "Top‑dress nitrogen once at early tillering, not very late in the season.",
        "Retain some straw in the field to recycle nutrients and protect the surface.",
        "On very poor soils, include some organic manure every second or third season."
      ]
    },

    /* ---------- 24. Lentil ---------- */
    lentil: {
      name: "Lentil (masoor)",
      group: "pulse",
      phMin: 6.0,
      phMax: 7.5,
      improveLow: [
        "On strongly acidic land, apply light lime and plenty of farmyard manure before lentil.",
        "Avoid waterlogging on acidic clays by using broad‑bed and furrow planting.",
        "Do not puddle the soil before lentil; roots need air to fix nitrogen.",
        "Grow a cereal or oilseed with manure additions in rotation to gradually lift pH."
      ],
      improveHigh: [
        "On high pH soils, maintain good organic matter so micronutrients stay available.",
        "Avoid heavy, salty irrigation water; it stresses lentil roots and nodules.",
        "Use micronutrient mixtures where leaf tests show deficiency symptoms.",
        "Rotate lentil with cereals and oilseeds instead of growing pulses continuously."
      ],
      irrigation: [
        "Lentil is usually grown on stored soil moisture; excess water causes yellowing and disease.",
        "If irrigation is available, one light irrigation at pod filling gives good response.",
        "After unexpected heavy rain, drain water quickly from depressions.",
        "Avoid irrigation close to harvest; pods can blacken or sprout on wet plants."
      ],
      fertiliser: [
        "Treat seed with Rhizobium so plants can fix nitrogen early.",
        "Apply basal phosphorus at sowing; lentil responds well to moderate phosphorus doses.",
        "Avoid large nitrogen doses; they reduce nodulation and are usually not needed.",
        "Where soils are poor, add some farmyard manure in the previous crop to support lentil growth."
      ]
    },

    /* ---------- 25. Cabbage ---------- */
    cabbage: {
      name: "Cabbage",
      group: "vegetable",
      phMin: 6.0,
      phMax: 7.5,
      improveLow: [
        "On acidic soils, apply lime before planting cabbage to reduce club‑root disease risk.",
        "Use plenty of compost so the root zone is cool, moist and less acidic.",
        "Avoid planting in poorly drained, sour beds that stay sticky after rain.",
        "Raise beds slightly higher in very wet, acidic areas to improve aeration."
      ],
      improveHigh: [
        "At high pH, watch for micronutrient deficiencies causing pale young leaves.",
        "Use organic mulches and farmyard manure to keep soil loose and to buffer alkalinity.",
        "Avoid using very alkaline irrigation water for nurseries if another source exists.",
        "Rotate cabbage with cereals or pulses to rest soils that have long‑term alkalinity."
      ],
      irrigation: [
        "Keep soil evenly moist from transplanting until head formation; drought splits or loosens heads.",
        "Avoid waterlogging; standing water encourages root diseases.",
        "Irrigate in the morning or early afternoon so leaves dry before night.",
        "Use mulches between rows to reduce evaporation and weed growth."
      ],
      fertiliser: [
        "Cabbage is a heavy feeder; supply enough NPK, especially nitrogen and potash.",
        "Split nitrogen into several small doses rather than one heavy application.",
        "Include boron and other micronutrients where heads become hollow or distorted.",
        "Combine chemical fertiliser with organic manure to improve taste and storage quality."
      ]
    }
  },
  // Part 1: UI + pH improvement (Hindi)
  
  window.FARMERS_I18N.hi = {
  /* ================= UI TEXT (HINDI) ================= */

  ui: {
    topbar_title: "वॉटर इंडेक्स",

    nav_home: "होम",
    nav_measure: "मापें",
    nav_map: "मैप",
    nav_care: "देखभाल",
    nav_farmers: "किसान सहायक",
    nav_chart: "चार्ट",
    nav_learn: "सीखें",
    nav_buykit: "किट खरीदें",
    nav_about: "जानकारी",

    farm_title: "किसान सहायता",
    farm_intro:
      "पानी की रीडिंग को आसान कामों में बदलें: pH चुनें, फसल चुनें और आगे क्या करना है उसकी साफ़‑साफ़ सलाह पढ़ें।",
    farm_badge_household: "घरेलू उपयोग",
    farm_badge_farmers: "किसान",
    farm_badge_students: "स्टूडेंट प्रोजेक्ट",

    farm_ai_note:
      "अगले वर्शन में यह बटन पूरा वॉइस हेल्पर खोलेगा। अभी यह सिर्फ़ एक डेमो बॉक्स दिखाता है।",
    farm_ai_btn: "किसान AI असिस्टेंट खोलें",

    status_title: "ताज़ा पानी की स्थिति",
    status_text_empty:
      "अभी तक कोई रीडिंग सेव नहीं है। “मापें” पेज पर पानी नाप कर सेव करें, यहाँ उसका छोटा‑सा सारांश दिखाई देगा।",

    ph_helper_title: "स्मार्ट pH हेल्पर",
    ph_helper_sub:
      "स्टेप 1: pH चुनें या लिखें। स्टेप 2: देखें कौन‑सी फसलें आराम से बढ़ती हैं। स्टेप 3: pH को 7.0 के पास लाने के साफ़ स्टेप पढ़ें।",
    ph_choose_title: "1. pH चुनें या लिखें",
    ph_label: "pH",
    ph_use_latest: "आख़िरी रीडिंग लें",
    ph_check_btn: "फसलों के लिए pH जाँचें",
    ph_note:
      "अगर आपने “मापें” पेज पर पानी नाप कर सेव किया है तो यह बटन वही pH यहाँ भर देगा।",
    best_crops_title: "इस pH पर सबसे अच्छी फसलें",

    ph_improve_title: "2. pH को 7.0 के पास लाएँ",
    ph_improve_label: "मौजूदा pH",
    ph_improve_btn: "सुधार के टिप्स दिखाएँ",
    short_term_title: "तुरंत करने वाले स्टेप",
    long_term_title: "लंबी अवधि की मिट्टी‑सेहत",
    improve_note:
      "pH सुधार हमेशा मिट्टी की जाँच और स्थानीय कृषि सलाह के साथ ही मिलाकर करें।",

    crop_helper_title: "फसल‑आधारित सलाह",
    crop_helper_sub:
      "एक ही pH पर फसल चुनें। मेल, खाद, सिंचाई और देखभाल – इन सब पर आपको छोटी‑छोटी साफ़ लाइन में सलाह मिलेगी।",
    crop_choose_title: "3. फसल चुनें",
    crop_label: "फसल",
    crop_placeholder: "फसल चुनें…",
    crop_note:
      "बाएँ तरफ़ pH लिखें या लोड करें, फिर यहाँ फसल चुनें और देखें पानी उस फसल के लिए कितना उपयुक्त है।",
    crop_range_title: "उपयुक्त pH रेंज",
    crop_ph_improve_title: "इस फसल के लिए pH सुधार",
    irrigation_title: "सिंचाई के सुझाव",
    management_title: "खाद व प्रबंधन",

    ai_placeholder_title: "किसान AI असिस्टेंट (डेमो)",
    ai_placeholder_close: "बंद करें",
    ai_placeholder_text:
      "आगे चल कर यह बॉक्स आवाज़ में जवाब देगा और स्टेप‑बाय‑स्टेप गाइड करेगा। अभी यह सिर्फ़ डेमो है, नीचे दिए गए pH हेल्पर और फसल सलाह वाले पैनल का उपयोग करें।"
  },

  /* ================= pH IMPROVEMENT TEXT (HINDI) ================= */

  ph_improvement: {
    // 0–4.5 बहुत ज़्यादा अम्लीय
    band_extreme_acid: {
      min: 0,
      max: 4.5,
      short: [
        "यह पानी बेहद अम्लीय है। इसे सीधे सब्ज़ियों, नर्सरी या नाज़ुक पौधों पर बिल्कुल भी न दें।",
        "अगर इस्तेमाल करना ही पड़े तो हमेशा इसे बेहतर गुणवत्ता वाले पानी या वर्षा‑जल के साथ मिलाकर दें।",
        "इस पानी में तेज़ यूरिया या दूसरी मजबूत खाद सीधे घोल कर न डालें, जड़ें बुरी तरह जल सकती हैं।",
        "ऐसे पानी को पहले नमकीन मिट्टी धोने या गैर‑फसली कामों में लगाएँ, संवेदनशील फसलों पर नहीं।"
      ],
      long: [
        "ऐसे पानी से खेती शुरू करने से पहले मिट्टी और पानी दोनों की लैब से पूरी जाँच कराएँ।",
        "चूना या डोलोमाइट एक बार में भारी मात्रा में न दें, कई सालों में छोटे‑छोटे डोज़ में दें।",
        "शुरुआत में बहुत सहनशील घास या हरी खाद वाली फसलें उगाएँ और धीरे‑धीरे मिट्टी में जैविक पदार्थ बढ़ाएँ।",
        "स्थानीय विशेषज्ञों की मदद से ड्रेनेज, संशोधन और फसल‑चयन को मिलाकर लंबी अवधि की सुधार योजना बनाएँ।"
      ]
    },

    // 4.5–5.5 तेज़ अम्लीय
    band_strong_acid: {
      min: 4.5,
      max: 5.5,
      short: [
        "पानी काफ़ी अम्लीय है, बिना सुधार के कई फसलें ठीक से नहीं बढ़ेंगी।",
        "नर्सरी के लिए इस पानी को साफ़ पानी या वर्षा‑जल के साथ मिला कर ही इस्तेमाल करें।",
        "केवल मिट्टी परीक्षण के अनुसार ही चूना या डोलोमाइट दें और ऊपर की 10–15 सेंटीमीटर परत में अच्छी तरह मिलाएँ।",
        "सिर्फ़ अमोनियम‑टाइप उर्वरक बार‑बार न दें, संतुलित NPK के साथ भरपूर कम्पोस्ट इस्तेमाल करें।"
      ],
      long: [
        "हर सीज़न में गोबर की खाद, कम्पोस्ट और फसल‑अवशेष खेत में मिलाते रहें ताकि pH धीरे‑धीरे ऊपर आए।",
        "फसल चक्र में गहरी जड़ वाली दलहनी या चारा फसलें रखें और उनकी जड़ों को मिट्टी में ही रहने दें।",
        "फसल का ठूंठ और पत्तियाँ न जलाएँ, इन्हें मिट्टी में मिलाने से अम्लता सहने की क्षमता बढ़ती है।",
        "हर 2–3 साल में pH जाँच कर चूने की मात्रा समायोजित करें, एक बार में बहुत भारी डोज़ न दें।"
      ]
    },

    // 5.5–6.5 हल्का अम्लीय
    band_slight_acid: {
      min: 5.5,
      max: 6.5,
      short: [
        "पानी थोड़ा अम्लीय है, ज़्यादातर फसलों के लिए ठीक है लेकिन कुछ सब्ज़ियाँ हल्का ऊँचा pH पसंद करती हैं।",
        "बहुत संवेदनशील फसलों के लिए कतारों या गड्ढों में हल्की मात्रा में चूना दिया जा सकता है।",
        "खेत के अलग‑अलग हिस्सों में pH जाँचें, कुछ पैच बाकी से ज़्यादा अम्लीय हो सकते हैं।",
        "सिर्फ़ यूरिया पर निर्भर रहने की बजाय संतुलित NPK दें ताकि मिट्टी और ज़्यादा खट्टी न होती जाए।"
      ],
      long: [
        "कम से कम हर 2–3 साल में एक बार दलहनी या हरी खाद वाली फसल ज़रूर रखें ताकि pH स्थिर रहे।",
        "फसल‑अवशेष और कम्पोস্ট मिट्टी में वापस मिलाएँ ताकि ऊपर की परत मुलायम और बफर बनी रहे।",
        "ऐसी मिट्टी पर लंबे समय तक पानी खड़ा रखने से बचें, लगातार कीचड़ रहने से pH और नीचे जा सकता है।",
        "पुरानी मिट्टी‑जाँच रिपोर्ट सँभाल कर रखें और हर कुछ साल में तुलना कर देखें कि pH किस दिशा में बदल रहा है।"
      ]
    },

    // 6.5–7.5 लगभग तटस्थ
    band_near_neutral: {
      min: 6.5,
      max: 7.5,
      short: [
        "आपका pH लगभग आदर्श है, इसे बदलने के बजाय स्थिर रखना ज़्यादा ज़रूरी है।",
        "मिट्टी परीक्षण के बिना ज़्यादा चूना या तेज़ अम्लीय उर्वरक न दें, वरना यह अच्छा संतुलन बिगड़ सकता है।",
        "जहाँ सम्भव हो साफ़ पानी इस्तेमाल करें, नाला या गंदा पानी मिलाने से pH अचानक बदल सकता है।",
        "जब pH अनुकूल हो तो फसल‑चयन में मौसम, मिट्टी का प्रकार और बाज़ार‑भाव पर ज़्यादा ध्यान दें।"
      ],
      long: [
        "मल्च या कवर फसल से मिट्टी को ढक कर रखें ताकि सूक्ष्म जीव सक्रिय रहें और ढाँचा मज़बूत रहे।",
        "बहुत गहरी जुताई सिर्फ़ ज़रूरत पड़ने पर करें, सामान्य हाल में हल्की और समय पर जुताई ही काफ़ी है।",
        "हर 2–3 साल में एक लेग्युम या हरी खाद वाली फसल ज़रूर रखें ताकि मिट्टी की जैविक गतिविधि मज़बूत रहे।",
        "एक साधारण नोटबुक में हर साल pH, फसल और पैदावार लिखते रहें ताकि छोटी‑छोटी गड़बड़ियाँ जल्दी पकड़ में आ जाएँ।"
      ]
    },

    // 7.5–8.5 हल्का क्षारीय
    band_moderate_alkaline: {
      min: 7.5,
      max: 8.5,
      short: [
        "पानी हल्का क्षारीय है, कुछ फसलें इसे सह लेती हैं लेकिन कई में पत्तियाँ पीली और बढ़वार कम हो सकती है।",
        "लंबे समय तक पूरे खेत में पानी भरा न रखें, नालियों या ड्रिप से कम‑कम लेकिन बार‑बार सिंचाई करें ताकि नमक ऊपर न चढ़े।",
        "अगर दो पानी स्रोत हों तो नर्सरी और सब्ज़ी/फलों के लिए हमेशा कम pH वाला बेहतर पानी ही लें।",
        "मिट्टी की सतह पर सफ़ेद परत दिखे तो समझें कि नमक और ऊँचा pH जमा हो रहा है।"
      ],
      long: [
        "जहाँ मिट्टी‑जाँच से सोडिक मिट्टी की पुष्टि हो, वहाँ सही मात्रा में जिप्सम और अच्छा ड्रेनेज बहुत ज़रूरी है।",
        "हर मौसम में गोबर की खाद, कम्पोস্ট और फसल‑अवशेष डालें ताकि जड़ें नर्म, गहरी, काली परत में बढ़ सकें।",
        "हर कुछ साल में एक बार गहरी जुताई और छोटी सतही नालियाँ बनाकर वर्षा‑जल से लवणों को बाहर निकालने में मदद करें।",
        "सुधार के समय जौ, सरसों, चना, ज्वार, बाजरा जैसी हल्की सहनशील फसलें लगाएँ।"
      ]
    },

    // 8.5–9.5 तेज़ क्षारीय
    band_strong_alkaline: {
      min: 8.5,
      max: 9.5,
      short: [
        "पानी काफ़ी क्षारीय है, ज़्यादातर संवेदनशील फसलें – खासकर सब्ज़ियाँ और दलहन – इसमें संघर्ष करेंगी।",
        "इस पानी से सीड‑ট্রে या গमलों को सीधे सिंচाई न दें, बेहतर गुणवत्ता वाले पानी के साथ मिलाकर ही दें।",
        "पूरা खेत डुबोने की बजाय নালियों বা ড্রিপ से सिंচাই करें যাতে सतह पर ज्यादा नमক न चढे।",
        "সফেদ परत, सख़्त ढेले और दरারें दिखें तो यह मिट्टी में पहले से ही বেশি नमक और pH का संकेत है।"
      ],
      long: [
        "सबसे अधिक प्रभावित खेतों के लिए मिट्टी‑लैब रिपोर्ट के आधार पर জিপ्सম + ड्रेनेज প্রোগ্রাম बनाएं।",
        "शুরुवाती सালো मे नमक‑সহনशील घাস, चারা या अनाज लगाएँ और ধীরে‑ধীরে কম সহনशील फসलों की तरफ़ जाएँ।",
        "मोटी जैविक मल्च (পরালি, फसल‑অবশেষ) ऊपर की ৫–১০ সেমি परतকে সময় के साथ भुरभुरी और গहरी बनाती है।",
        "हर कुछ साल में pH के साथ‑साथ विद्युत चालकতা (EC) भी जाँचें ताकि सुधार की दिशा स्पष्ट दिखे।"
      ]
    },

    // 9.5–14 अत्यधिक क्षारीय
    band_extreme_alkaline: {
      min: 9.5,
      max: 14,
      short: [
        "यह pH बहुत ज़्यादा क्षारीय है, ज़्यादातर फसलों पर सीधे सिंचाई करना सुरक्षित नहीं है।",
        "इसे हमेशा बहुत बेहतर पानी के साथ मिलाकर या केवल लीচिंग और गैर‑फसली कामों के लिए ही उपयोग करें।",
        "सिर्फ़ इसी पानी पर नए बाग़ या महँगी सब्ज़ी की खेती शुरू न करें।",
        "उर्वरक या अन्य संशोधन पर पैसा लगाने से पहले विशेषज्ञ लैब से पूरी सलाह लें।"
      ],
      long: [
        "अच्छे ड्रेनेज, जिप्सम या अन्य संशोधन और भारी जैविक पदार्थ के साथ लंबी अवधि की सुधार‑योजना बनानी पड़ेगी।",
        "पहले कुछ साल बहुत सहनशील घास, पेड़ या हैलोफাইট प्रजातियाँ लगाएँ ताकि मिट्टी की स्थिति धीरे‑धीरे बदले।",
        "जहाँ सम्भव हो वहाँ तालाब, टैंक या छत‑जल संचयन से वर्षा‑जल इकट्ठा करें और भविष्य में इसी पानी के साथ मिलाकर प्रयोग करें।",
        "हर साल की मिट्टी‑पानी रिपोर्ट और पैदावार का रिकॉर्ड रखें ताकि यह साफ़ दिखे कि सुधार योजना सच‑मुच काम कर रही है।"
      ]
    }
  },
    /* ================= CROP TEXT (HINDI, 25 CROPS) ================= */

  crops: {
    /* ---------- 1. Rice ---------- */
    rice: {
      name: "धान (Rice)",
      group: "staple",
      phMin: 5.5,
      phMax: 7.0,
      improveLow: [
        "अगर pH 5.5 से नीचे हो तो ऊपर की 10–15 सेमी मिट्टी में भरपूर गोबर की खाद और कम्पोस्ट अच्छी तरह मिला दें।",
        "मिट्टी परीक्षण के अनुसार कृषि‑चूना या डोलोमाइट रोपाई से 2–3 महीने पहले डालें।",
        "बहुत अम्लीय जमीन पर सिर्फ़ ज़्यादा नाइट्रोजन वाली रासायनिक खाद न दें, हमेशा जैविक खाद के साथ मिलाकर दें।",
        "धान से पहले एक दलहनी या हरी‑खाद फसल उगाएँ ताकि मिट्टी मुलायम हो और pH हल्का ऊपर आए।"
      ],
      improveHigh: [
        "अगर pH 7.5 से ऊपर हो तो खेत में लंबे समय तक पानी भरा न रखें, गहरे पाड़ा करने की बजाय हल्के गीला‑सूखा चक्र रखें।",
        "ढैंचा या सनहेम्प जैसी हरी‑खाद फसलें उगाकर फूल आने पर मिट्टी में पलट दें।",
        "पराली, खरपतवार‑जैव‑द्रव्य जैसे अवशेष ज़्यादा मात्रा में मिलाएँ ताकि मिट्टी धीरे‑धीरे फिर तटस्थ के पास आए।",
        "अगर नहर या वर्षा‑जल कुएँ के पानी से बेहतर हो तो नर्सरी और शुरू के स्टेज में वही पानी इस्तेमाल करें।"
      ],
      irrigation: [
        "टिलरिंग के समय तक लगभग 3–5 सेमी पानी रखें और फसल पकने से पहले खेत पूरी तरह सूखा दें।",
        "खेत की लेवलिंग ठीक रखें ताकि हर जगह पानी की गहराई समान रहे और उर्वरक कम न बहे।",
        "जहाँ सम्भव हो नर्सरी के लिए बहुत गंदा या बहुत नमकीन पानी न लें।",
        "पौधों को बदबूदार, सड़ा हुआ पानी में लंबे समय तक डूबा न रहने दें; ज़रूरत हो तो साफ़ पानी से ताज़ा करें।"
      ],
      fertiliser: [
        "नाइट्रोजन को 2–3 हिस्सों में बाँटकर दें – जैसे बेसल, टिलरिंग और पैनिकल स्टेज – एक ही बार भारी डोज़ देने की बजाय।",
        "रोपाई से पहले बेसल NPK दें और जहाँ जिंक की कमी सामान्य हो वहाँ जिंक सल्फेट भी शामिल करें।",
        "जहाँ गोबर की खाद उपलब्ध हो, उसे पडलिंग से पहले ही मिला दें ताकि रासायनिक उर्वरक पर निर्भरता कम हो।",
        "फूल आने से ठीक पहले बहुत ज़्यादा नाइट्रोजन न दें, इससे गिरने (lodging) और पकने में देरी हो सकती है।"
      ]
    },

    /* ---------- 2. Wheat ---------- */
    wheat: {
      name: "गेहूँ",
      group: "staple",
      phMin: 6.0,
      phMax: 7.5,
      improveLow: [
        "अगर pH 6.0 से कम हो तो मिट्टी परीक्षण के अनुसार चूना गेहूँ से कम से कम एक सीज़न पहले डालें।",
        "बहुत अम्लीय पैच पर पूरे खेत की बजाय सिर्फ़ कतारों/पट्टी में, जड़‑क्षेत्र में ही चूना दें।",
        "गोबर की खाद और कम्पोस्ट बढ़ाएँ ताकि मिट्टी अच्छी तरह बफर रहे और तेज़ अम्लीय न हो।",
        "केवल अमोनियम‑बेस्ड उर्वरक बार‑बार न दें, इनके साथ हमेशा जैविक खाद मिलाते रहें।"
      ],
      improveHigh: [
        "pH 7.8 से ऊपर हो तो पत्तियों की नसें हरी और बीच का हिस्सा पीला दिखे तो जिंक/आयरन का घुलनशील स्प्रे दें।",
        "क्षारीय मिट्टी पर जैविक अवशेष और गोबर की खाद ज़्यादा दें ताकि सतह पर क्रस्ट कम बने।",
        "अगर सिंचाई का पानी भी क्षारीय हो तो हल्की और कम गहरी सिंचाई करें, ज़्यादा पानीभराव से बचें।",
        "गेहूँ से पहले दलहनी फसल रखें ताकि मिट्टी का ढाँचा और पोषक‑संतुलन ठीक रहे।"
      ],
      irrigation: [
        "महत्त्वपूर्ण सिंचाई चरण हैं – क्राउन‑रूट इनिशिएशन, टिलरिंग, फूल बनना और दाना भरना।",
        "पानी भराव से बचें, गेहूँ को नमी तो चाहिए पर मिट्टी हवादार और बिना खड़े पानी की होनी चाहिए।",
        "हल्की मिट्टी पर बोवाई के बाद हल्की सिंचाई दें ताकि अंकुरण समान रहे।",
        "जब दाने सख़्त हो जाएँ तो सिंचाई बंद कर दें, बहुत देर से पानी देने से अनाज की क्वालिटी गिरती है।"
      ],
      fertiliser: [
        "सिर्फ़ यूरिया की बजाय स्थानीय सिफ़ारिश के अनुसार संतुलित NPK उपयोग करें।",
        "उर्वरक को पूरी सतह पर फैलाने की बजाय बीज की लाइन से थोड़ा नीचे और बग़ल में दें।",
        "हल्की मिट्टी पर नाइट्रोजन को कई छोटे‑छोटे हिस्सों में बाँटकर दें ताकि लीचिंग से नुकसान न हो।",
        "थोड़ी पराली या अवशेष खेत पर छोड़ें ताकि पोषक‑तत्व लौट सकें और तापमान‑तनाव कम हो।"
      ]
    },

    /* ---------- 3. Maize ---------- */
    maize: {
      name: "मक्का (कॉर्न)",
      group: "cereal",
      phMin: 6.0,
      phMax: 7.5,
      improveLow: [
        "pH 5.8 से नीचे हो तो चूना डालकर जड़ों को नुकसान और पोषक‑तत्वों की कमी से बचाएँ।",
        "चूना हमेशा गोबर की खाद के साथ मिलाकर दें ताकि असर नरम और लंबे समय तक रहे।",
        "बहुत तेज़ अम्लीय उर्वरकों की भारी डोज़ के तुरंत बाद मक्का न बोएँ।",
        "अगर सिर्फ़ कुछ पैच ज़्यादा अम्लीय हों तो पूरे खेत की बजाय उन्हीं पर विशेष उपचार करें।"
      ],
      improveHigh: [
        "ऊँचे pH पर जिंक और मैंगनीज़ की कमी हो सकती है; पत्तियाँ पीली पड़ें तो इनके मिश्रित स्प्रे दें।",
        "हर सीज़न फसल‑अवशेष और कम्पोस्ट मिलाएँ ताकि मिट्टी सख़्त होकर दरार‑दार न हो।",
        "महत्त्वपूर्ण स्टेज पर जहाँ सम्भव हो नहर या वर्षा‑जल जैसा तटस्थ पानी उपयोग करें।",
        "बहुत क्षारीय खेतों पर मक्का से पहले हरी‑खाद या चारा फसल उगा कर मिट्टी को मुलायम बनाएँ।"
      ],
      irrigation: [
        "तस्सल निकलना और दाना भरना – इन दो चरणों पर नमी की कमी बिल्कुल न होने दें, यही उपज तय करते हैं।",
        "पौधों के आसपास 1–2 दिन से ज़्यादा पानी खड़ा न रहने दें।",
        "रेतीली मिट्टी पर बार‑बार लेकिन हल्की सिंचाई दें ताकि मुरझाने से बचें।",
        "भारी बारिश के बाद छोटी नालियाँ खोलकर अतिरिक्त पानी जल्दी निकालें।"
      ],
      fertiliser: [
        "उर्वरक को बीज से लगभग 5 सेमी दूर और 5 सेमी गहरा बैंड में दें, केवल सतह पर न बिखेरें।",
        "बोवाई के समय DAP या कॉम्प्लेक्स NPK की स्टार्टर डोज़ देने से शुरुआती विकास मज़बूत होता है।",
        "पौधे घुटने तक ऊँचे हों और फिर तस्सल से पहले नाइट्रोजन की टॉप‑ड्रेसिंग करें।",
        "जहाँ जैविक खाद उपलब्ध हो, उसे रासायनिक उर्वरक के साथ मिलाकर दें, किसी एक को पूरी तरह छोड़ें नहीं।"
      ]
    },

    /* ---------- 4. Sugarcane ---------- */
    sugarcane: {
      name: "गन्ना",
      group: "cash",
      phMin: 5.5,
      phMax: 8.0,
      improveLow: [
        "बहुत अम्लीय मिट्टी पर पौधा फसल लगाने से पहले चूना और भरपूर जैविक खाद डालें।",
        "जहाँ उपलब्ध हो वहाँ शुगर मिल की प्रेस‑मड या फिल्टर‑केक मिलाने से pH और उर्वरता दोनों सुधरते हैं।",
        "बहुत अम्लीय पैच में नई रैटून फसल शुरू न करें, पहले संशोधन करके मिट्टी सुधारें।",
        "खाली मौसम में हरी‑खाद फसल लगाकर उसे गहराई तक मिट्टी में पलट दें।"
      ],
      improveHigh: [
        "जहाँ मिट्टी क्षारीय और नमकीन हो वहाँ रोपाई से पहले अच्छी गुणवत्ता वाले पानी से लवणों की लीचिंग करें।",
        "मिट्टी परीक्षण में सोडियम ज़्यादा हो तो सिफ़ारिश अनुसार जिप्सम का प्रयोग करें।",
        "सतही ड्रेनेज ठीक रखें ताकि नमक पौधों के गट्ठे के आसपास जमा न हो।",
        "धीमी‑गति से सुधरने वाले sodic/नमकीन क्षेत्रों के लिए अनुशंसित सहनशील किस्में लगाएँ।"
      ],
      irrigation: [
        "रेतीली मिट्टी पर हल्की‑हल्की और बार‑बार सिंचाई, भारी मिट्टी पर कम लेकिन गहरी सिंचाई दें।",
        "खरीफ खत्म होने से 15–20 दिन पहले सिंचाई बंद कर दें ताकि शर्करा प्रतिशत अच्छा रहे।",
        "हर सीज़न से पहले नालियाँ और फरो अच्छी तरह ठीक कर लें ताकि पानी हर कतार तक बराबर पहुँचे।",
        "काली चिकनी मिट्टी में समय पर सिंचाई और बीच की पंक्ति में ट्रैश‑मल्चिंग से गहरी दरारों को रोका जा सकता है।"
      ],
      fertiliser: [
        "नाइट्रोजन को 3–4 किस्तों में फरो के साथ‑साथ दें, एक बार में भारी मात्रा न दें।",
        "स्थानीय सिफ़ारिश और मिट्टी परीक्षण के अनुसार संतुलित NPK की पूरी डोज़ दें।",
        "रैटून फसल में गैप‑फिलिंग के बाद उर्वरक लगाएँ ताकि सभी गट्ठों को बराबर पोषण मिले।",
        "लंबे समय तक चलने वाली फसल होने के कारण रासायनिक खाद के साथ ट्रैश‑मल्च या कम्पोस्ट ज़रूर मिलाएँ।"
      ]
    },

    /* ---------- 5. Cotton ---------- */
    cotton: {
      name: "कपास",
      group: "cash",
      phMin: 5.8,
      phMax: 7.5,
      improveLow: [
        "बहुत अम्लीय मिट्टी पर चूना डालने से जड़ विकास और पोषक‑विषाक्तता की समस्या कम होती है।",
        "जुताई के समय गोबर की खाद और कम्पोस्ट अच्छी तरह मिलाएँ ताकि मिट्टी खुली और अच्छी जलनिकासी वाली रहे।",
        "अम्लीय काली मिट्टी में पानी जमाव से बचने के लिए सही रेड्ज और फरो बनाएँ।",
        "जहाँ मिट्टी स्वभाव से ही ज़्यादा अम्लीय है, वहाँ सहनशील किस्में चुनें।"
      ],
      improveHigh: [
        "सोडिक मिट्टी में मिट्टी परीक्षण के अनुसार जिप्सम डालें और उत्तम ड्रेनेज सुनिश्चित करें।",
        "बहुत क्षारीय कुओं का पानी तभी लें जब बेहतर स्रोत उपलब्ध न हो।",
        "फसल‑अवशेष और गोबर की खाद मिलाने से सतह पर क्रस्ट और सख़्ती कम होती है।",
        "लंबे समय से क्षारीय रही ज़मीन पर कपास से पहले गहरी जड़ वाली हरी‑खाद फसल उगाएँ।"
      ],
      irrigation: [
        "फूल आने और बॉल बनते समय गहरी सिंचाई दें, सिर्फ़ हल्की सतही नमी काफ़ी नहीं होती।",
        "पानी भराव से बचें, इससे बॉल गिरना और जड़‑सड़न तेज़ी से बढ़ जाती है।",
        "जब ज़्यादातर बॉलें खुल चुकी हों तो आख़िरी दौर में बहुत ज़्यादा सिंचाई न दें, इससे बेकार हरा विकास बढ़ता है।",
        "फरो या ड्रिप सिंचाई अपनाएँ ताकि जड़‑क्षेत्र नम रहे पर डूबा हुआ न रहे।"
      ],
      fertiliser: [
        "मिट्टी परीक्षण पर आधारित संतुलित NPK दें, केवल नाइट्रोजन पर निर्भर न रहें।",
        "जहाँ सल्फर की कमी आम हो, सल्फर‑युक्त उर्वरक का उपयोग करें।",
        "नाइट्रोजन को छोटी‑छोटी किस्तों में दें और फूल आने के बाद भारी डोज़ देना बंद कर दें।",
        "उर्वरक के साथ नियमित निराई‑गुड़ाई करें ताकि पोषक‑तत्व घास की बजाय मुख्य फसल को मिलें।"
      ]
    },

    /* ---------- 6. Soybean ---------- */
    soybean: {
      name: "सोयाबीन",
      group: "pulse",
      phMin: 6.0,
      phMax: 7.5,
      improveLow: [
        "pH 6.0 से कम हो तो हल्का चूना डालने से गाँठें (nodules) और जड़ वृद्धि बेहतर होती है।",
        "गोबर की खाद और कम्पोस्ट से ऊपर की मिट्टी ढीली और अच्छी हवादार बनी रहती है।",
        "अम्लीय भारी मिट्टी पर ब्रॉड‑बेड और फरो या उठी हुई क्यारियाँ बना कर पानी भराव से बचें।",
        "नर्सरी या सीड‑बेड की मिट्टी का pH अलग से जाँचें, यह मुख्य खेत से ज़्यादा अम्लीय हो सकती है।"
      ],
      improveHigh: [
        "ऊँचे pH पर अगर नसें हरी और बीच का हिस्सा पीला हो तो आयरन/माइक्रोन्यूट्रिएंट स्प्रे दें।",
        "जैविक पदार्थ बढ़ाकर मिट्टी की ढेलीपन और दरारें कम करें।",
        "क्षारीय मिट्टी पर ज़्यादा सिंचाई से बचें, वरना सतह पर नमक जमा हो सकता है।",
        "सोयाबीन को बार‑बार वही क्षारीय खेत में न बोएँ, अनाज फसलों के साथ रोटेशन रखें।"
      ],
      irrigation: [
        "भारी बारिश के दौरान पानी रुकने न दें, सोयाबीन जड़ डूबने के प्रति संवेदनशील है।",
        "फूल और दाना भरने के समय पर्याप्त नमी रखें ताकि अधिकतम उपज मिल सके।",
        "वर्षा‑आधारित क्षेत्रों में शुरुआती निराई‑गुड़ाई और बुड़ाई से नमी का संरक्षण करें।",
        "जहाँ सिंचाई उपलब्ध हो, मानसून रुकने पर फूल से पहले एक हल्की सिंचाई मददगार रहती है।"
      ],
      fertiliser: [
        "बीज को बोने से पहले राइज़ोबियम और फॉस्फेट घुलनशील सूक्ष्म जीवों से ट्रीट करें।",
        "DAP या SSP के रूप में स्टार्टर्स फॉस्फोरस बोवाई के समय दें, दालें फॉस्फोरस से अच्छा रिस्पॉन्ड करती हैं।",
        "बहुत ज़्यादा नाइट्रोजन न दें, इससे गाँठें कम बनती हैं और खाद व्यर्थ जाती है।",
        "हर सीज़न कुछ न कुछ जैविक खाद मिलाएँ ताकि गाँठें और सूक्ष्म जीव सक्रिय रहें।"
      ]
    },

    /* ---------- 7. Groundnut ---------- */
    groundnut: {
      name: "मूंगफली (ग्राउंडनट)",
      group: "oilseed",
      phMin: 6.0,
      phMax: 7.5,
      improveLow: [
        "बहुत अम्लीय मिट्टी में पैंठ और फल भरने के लिए चूना ज़रूरी होता है।",
        "फूल‑छड़ बनने (pegging) के समय जिप्सम डालने से दाने अच्छे भरते हैं।",
        "हल्की गहरी जुताई से मिट्टी को ढीला रखें, कम pH पर सख़्त परत से पैंठ रुक जाती है।",
        "अम्लीय मिट्टी पर लगातार तेज़ अम्ल बनाने वाले उर्वरक बिना जैविक खाद के न दें।"
      ],
      improveHigh: [
        "क्षारीय मिट्टी पर बोरॉन और जिंक के स्प्रे से खाली या अधभरे फल कम हो सकते हैं।",
        "कम्पोस्ट और अवशेष नियमित डालें ताकि मिट्टी भुरभुरी बनी रहे।",
        "बहुत क्षारीय सिंचाई‑पानी हो तो भारी बाढ़‑सिंचाई की बजाय कम मात्रा में लेकिन अधिक बार पानी दें।",
        "अनाज या हरी‑खाद फसल के साथ रोटेशन रखें ताकि मिट्टीजनित रोगों का जमाव कम हो।"
      ],
      irrigation: [
        "फूल और फल भरने के समय मिट्टी हल्की नम रहे पर चिपचिपी न हो।",
        "खुदाई से 10–15 दिन पहले सिंचाई बंद कर दें ताकि खुदाई आसान हो और छिलके की गुणवत्ता अच्छी रहे।",
        "सूखे मौसम में समय पर सिंचाई और मल्चिंग से गहरी दरारों से बचा जा सकता है।",
        "हल्की रेतीली मिट्टी पर बाढ़‑सिंचाई न करें, फरो या स्प्रिंकलर बेहतर रहते हैं।"
      ],
      fertiliser: [
        "फॉस्फोरस के लिए SSP का उपयोग करें, इससे सल्फर भी मिलता है जो तेल बनाने में मदद करता है।",
        "नाइट्रोजन का ज़्यादा उपयोग न करें, मूंगफली ज़्यादातर नाइट्रोजन खुद ही फिक्स कर लेती है।",
        "जिप्सम को फल बनने वाले क्षेत्र (pegging zone) के आसपास दें, पूरे खेत में बिखेरने से कम असर होता है।",
        "जुताई के समय अच्छी सड़ी हुई जैविक खाद मिलाएँ ताकि मिट्टी में जीवन बना रहे।"
      ]
    },

    /* ---------- 8. Mustard ---------- */
    mustard: {
      name: "सरसों",
      group: "oilseed",
      phMin: 6.0,
      phMax: 7.5,
      improveLow: [
        "बहुत अम्लीय मिट्टी में बुवाई से पहले पट्टी या कतार के रूप में हल्का चूना दें।",
        "पिछली फसल में गोबर की खाद या कम्पोस्ट देने से सरसों के लिए ऊपर की परत मुलायम रहती है।",
        "अत्यधिक अम्लीय खेतों पर देर से बुवाई न करें, ठंडी और खट्टी मिट्टी में पौधे अधिक कमजोर होते हैं।",
        "फसल‑अवशेष जलाने की बजाय मिट्टी में मिलाएँ ताकि pH धीरे‑धीरे सुधरे।"
      ],
      improveHigh: [
        "ऊँचे pH वाली मिट्टी पर SSP, अमोनियम सल्फेट या बेंटोनाइट‑सल्फर जैसे सल्फर‑युक्त उर्वरक उपयोग करें।",
        "नमकीन पानी से सिंचाई से बचें, खासकर बुवाई और आरंभिक पौधा अवस्था में।",
        "जहाँ बोरॉन की कमी ज्ञात हो वहाँ सिफ़ारिश अनुसार थोड़ी मात्रा में बोरॉन दें।",
        "बहुत क्षारीय खेतों पर सरसों के बाद दलहनी या चारा फसल लेकर मिट्टी का ढाँचा सुधरें।"
      ],
      irrigation: [
        "महत्त्वपूर्ण सिंचाई अवस्थाएँ – फूल आना और दाना भरना; यहाँ नमी की कमी से उपज बहुत घटती है।",
        "पानी भराव से बचें, सरसों पानी रुकने के प्रति बहुत संवेदनशील है।",
        "वर्षा‑आधारित क्षेत्रों में समय पर निराई‑गुड़ाई और हल्की जुताई से नमी बचाकर रखें।",
        "जहाँ पाला पड़ने की आशंका हो, अनुमानित पाला‑रात से ठीक पहले सिंचाई करने से बचें।"
      ],
      fertiliser: [
        "अपने क्षेत्र की सिफ़ारिश के अनुसार NPK डोज़ लें, केवल यूरिया न दें।",
        "खाद कार्यक्रम में पर्याप्त सल्फर ज़रूर रखें, तेल की मात्रा काफी हद तक सल्फर पर निर्भर करती है।",
        "बेसल खाद को बीज की लाइन से थोड़ा नीचे और दूर रखें, सीधे बीज से संपर्क न हो।",
        "उर्वरक के साथ‑साथ खरपतवार नियंत्रण रखें ताकि पोषक‑तत्व घास में न जाएँ।"
      ]
    },

    /* ---------- 9. Chickpea ---------- */
    chickpea: {
      name: "चना (काबुली/देशी)",
      group: "pulse",
      phMin: 6.0,
      phMax: 8.0,
      improveLow: [
        "बहुत अम्लीय भूमि पर चना से पहले हल्का चूना डालने से गाँठें अच्छी बनती हैं।",
        "अधिक वर्षा वाले क्षेत्रों में ब्रॉड‑बेड और फरो पद्धति अपनाएँ ताकि सतह पर क्रस्ट न बने।",
        "अम्लीय भारी मिट्टी पर ज़्यादा सिंचाई न करें, जड़ों को नाइट्रोजन फिक्स करने के लिए हवा चाहिए।",
        "पिछली फसल में गोबर की खाद या कम्पोस्ट डालें ताकि चना नरम मिट्टी में प्रवेश करे।"
      ],
      improveHigh: [
        "ऊँचे pH वाली मिट्टी में लगातार जैविक पदार्थ मिलाते रहें ताकि पोषक‑तत्व उपलब्ध बने रहें।",
        "जहाँ हार्ड‑पैन हो, हर कुछ साल में गहरी जुताई कर उसे तोड़ दें।",
        "सोडियम‑युक्त सिंचाई पानी का ज़्यादा उपयोग न करें, इससे क्षारीयता और बढ़ती है।",
        "दालों को लगातार न उगाएँ, चने को अनाज और तिलहनों के साथ रोटेशन में रखें।"
      ],
      irrigation: [
        "चना आमतौर पर संचित मिट्टी‑नमी पर लिया जाता है, ज़्यादा पानी से रोग और पीलापन बढ़ता है।",
        "जहाँ सिंचाई मिले, दाना भरने की अवस्था पर एक हल्की सिंचाई अच्छा असर देती है।",
        "भारी वर्षा के बाद निचले हिस्सों से पानी जल्दी बाहर निकालें।",
        "कटाई के पास सिंचाई न करें, गीले पौधों पर फलियाँ काली पड़ सकती हैं या अंकुरित हो सकती हैं।"
      ],
      fertiliser: [
        "बीज को राइज़ोबियम कल्चर से ट्रीट करें ताकि पौधे शुरू से ही नाइट्रोजन अच्छी तरह फिक्स कर सकें।",
        "सिफ़ारिश अनुसार बेसल फॉस्फोरस दें, चना फॉस्फोरस से अच्छी प्रतिक्रिया देता है।",
        "ज़्यादा नाइट्रोजन देने से गाँठें कम बनती हैं और पौधा ज़्यादा लेट हो जाता है, इससे बचें।",
        "जहाँ मिट्टी‑परीक्षण में सूक्ष्म‑पोषक की कमी दिखे, वहाँ थोड़ी मात्रा में जिंक आदि दें।"
      ]
    },

    /* ---------- 10. Pigeonpea ---------- */
    pigeonpea: {
      name: "अरहर (तूर)",
      group: "pulse",
      phMin: 6.0,
      phMax: 7.5,
      improveLow: [
        "बहुत अम्लीय जमीन पर अरहर या उससे पहले वाली फसल की बोवाई से पहले चूना डालें।",
        "गोबर की खाद और कम्पोस्ट से मिट्टी को भुरभुरी बनाएँ और सतही क्रस्ट कम करें।",
        "नीची, गड्ढेदार और अम्लीय जगहों पर जहाँ पानी टिकता हो, वहाँ अरहर की बुवाई से बचें।",
        "जहाँ मिट्टी उपचार के बाद भी हल्की अम्लीय रहे, वहाँ सहनशील किस्में अपनाएँ।"
      ],
      improveHigh: [
        "क्षारीय खेतों में अच्छा सतही ड्रेनेज रखें ताकि नमक जड़ों के पास फँसे न रहें।",
        "हरी‑खाद या चारा घास जैसी फसलें रोटेशन में रखकर मिट्टी की बनावट सुधरें।",
        "बहुत क्षारीय ट्यूब‑वेल पानी से बार‑बार सिंचाई न करें।",
        "फसल कटने के बाद अवशेष सतह पर ही रहने दें ताकि धीरे‑धीरे जैविक पदार्थ बढ़ता रहे।"
      ],
      irrigation: [
        "अरहर कुछ हद तक सूखा सह लेती है, लेकिन फूल आने पर तेज़ तनाव से उपज घट जाती है।",
        "भारी बारिश में खेत से पानी जल्दी निकालें ताकि तनों के चारों ओर पानी न रुके।",
        "जहाँ अतिरिक्त सिंचाई सम्भव हो, दाना सेटिंग के समय एक सिंचाई दें।",
        "बहुत देर से सिंचाई न करें, इससे पकने में देरी और कटाई में परेशानी हो सकती है।"
      ],
      fertiliser: [
        "बोवाई पर थोड़ी स्टार्टर नाइट्रोजन और पर्याप्त फॉस्फोरस दें।",
        "बीज को राइज़ोबियम से ट्रीट करें ताकि शुरुआत से अच्छी गाँठें बनें।",
        "फसल बढ़ने पर भारी नाइट्रोजन डोज़ न दें, प्राकृतिक नाइट्रोजन फिक्सेशन पर भरोसा करें।",
        "रोटेशन में जैविक खाद का प्रयोग रखें ताकि गहरी जड़ें पूरे प्रोफाइल में चल सकें।"
      ]
    },

    /* ---------- 11. Potato ---------- */
    potato: {
      name: "आलू",
      group: "vegetable",
      phMin: 5.0,
      phMax: 6.5,
      improveLow: [
        "अगर pH 5.0 से कम हो तो आलू से एक सीज़न पहले मिट्टी परीक्षण के अनुसार हल्का चूना डालें।",
        "भरपूर गोबर की खाद दें ताकि मिट्टी ढीली और अच्छी जलनिकासी वाली बन सके।",
        "बहुत अम्लीय, पीट जैसी मिट्टी पर बीज‑आलू तभी लगाएँ जब पहले pH में सुधार कर चुके हों।",
        "बहुत खट्टी ज़मीन में आलू से पहले अनाज या चारा + गोबर खाद वाली फसल उगा कर मिट्टी सुधरें।"
      ],
      improveHigh: [
        "pH 7.0 से ऊपर होने पर सामान्य 'स्कैब' रोग बढ़ता है, इसलिए तुरंत पहले ताज़ा कच्ची खाद न डालें।",
        "सल्फर‑युक्त उर्वरक से कन्दों के आसपास pH थोड़ा नीचे लाया जा सकता है।",
        "सिंचाई ऐसे करें कि मिट्टी नम रहे पर जलभराव न हो; बार‑बार सूखा‑गीला चक्र स्कैब को बढ़ाता है।",
        "जहाँ स्कैब बड़ी समस्या हो, वहाँ स्थानीय रूप से अनुशंसित सहनशील किस्में चुनें।"
      ],
      irrigation: [
        "कन्द बनने से लेकर भरने तक मिट्टी में लगातार हल्की नमी रखें, सूखे से गाठें छोटी रह जाती हैं।",
        "पानी भराव से बचें, इससे सड़न और 'हॉलो हार्ट' जैसी समस्याएँ बढ़ती हैं।",
        "कटाई से 7–10 दिन पहले सिंचाई बंद कर दें ताकि छिलके अच्छे से कठोर हो जाएँ और न छिलें।",
        "रिज (मेढ़) इतनी ऊँची रखें कि कन्द धूप से हरे न पड़ें।"
      ],
      fertiliser: [
        "मजबूत और टिकाऊ कन्दों के लिए नाइट्रोजन की तुलना में पोटाश थोड़ा ज़्यादा रखें।",
        "नाइट्रोजन को 2–3 किस्तों में बाँटकर दें, एक ही बार भारी डोज़ न दें।",
        "सीज़न के आख़िरी हिस्से में बहुत ज़्यादा नाइट्रोजन देने से पकने में देरी और कन्द नरम हो जाते हैं।",
        "जैविक खाद या कम्पोस्ट से स्वाद और भंडारण‑क्वालिटी दोनों में सुधार आता है।"
      ]
    },

    /* ---------- 12. Tomato ---------- */
    tomato: {
      name: "टमाटर",
      group: "vegetable",
      phMin: 6.0,
      phMax: 7.5,
      improveLow: [
        "बहुत अम्लीय मिट्टी पर हल्का चूना देने से 'ब्लॉसम‑एंड रॉट' और कैल्शियम संबंधी दिक्कतें कम होती हैं।",
        "कम्पोस्ट और गोबर की खाद से मिट्टी की बफर क्षमता और पानी रोकने की शक्ति बढ़ती है।",
        "सिर्फ़ अमोनियम उर्वरक की भारी डोज़ के तुरंत बाद टमाटर न लगाएँ।",
        "जहाँ अम्लीयता कुछ‑कुछ जगह अधिक है, वहाँ उन्हीं क्यारियों पर अलग से चूना उपचार करें।"
      ],
      improveHigh: [
        "ऊँचे pH पर पत्तियों की नसें हरी और बीच का हिस्सा पीला लगे तो माइक्रोन्यूट्रिएंट स्प्रे दें।",
        "जैविक मल्च से जड़‑क्षेत्र ठंडा और नम बना रहता है।",
        "क्षारीय पानी से ज़्यादा सिंचाई न करें, वरना सतह पर नमक जमा हो सकता है।",
        "लंबे समय से क्षारीय रही क्यारियों पर अनाज या हरी‑खाद के साथ रोटेशन रखें।"
      ],
      irrigation: [
        "नमी को यथासम्भव समान रखें, अचानक सूखा‑गीला होने से फल फटते हैं और ब्लॉसम‑एंड रॉट बढ़ता है।",
        "शाम देर से स्प्रिंकलर/ऊपरी सिंचाई से बचें ताकि पत्ते रात भर गीले न रहें।",
        "ड्रिप या फरो सिंचाई से पत्तियाँ अपेक्षाकृत सूखी रहती हैं और रोग कम होते हैं।",
        "फल पकने के समय हल्की कमी की ओर सिंचाई रखें, इससे स्वाद और शेल्फ‑लाइफ बेहतर होती है।"
      ],
      fertiliser: [
        "बेसल NPK के साथ अतिरिक्त पोटाश दें ताकि फल‑भार और क्वालिटी दोनों सम्भल सकें।",
        "बहुत ज़्यादा नाइट्रोजन से पौधे बहुत घने और ऊँचे लेकिन कम फल वाले हो जाते हैं, इससे बचें।",
        "जहाँ ब्लॉसम‑एंड रॉट दिखे, वहाँ छोटी‑छोटी कैल्शियम युक्त स्प्रे या डोज़ दें।",
        "जैविक खाद और रासायनिक खाद को साथ‑साथ चलाने से मिट्टी की जीवंतता बनी रहती है।"
      ]
    },

    /* ---------- 13. Onion ---------- */
    onion: {
      name: "प्याज़",
      group: "vegetable",
      phMin: 6.0,
      phMax: 7.0,
      improveLow: [
        "बहुत अम्लीय मिट्टी पर प्याज़ के एक सीज़न पहले चूना और गोबर की खाद डालें।",
        "उठी हुई बेड (रेज़्ड बेड) पर खेती करें ताकि जलभराव और बल्ब‑सड़न से बच सकें।",
        "बहुत अम्लीय पीट जैसी मिट्टी पर बिना सुधार के प्याज़ न उगाएँ।",
        "जहाँ अम्लीयता ज़्यादा हो, वहाँ पहले अनाज या चारा + चूना + खाद वाली फसल लेकर मिट्टी सुधारें।"
      ],
      improveHigh: [
        "ऊँचे pH पर सूक्ष्म‑पोषक तत्व लॉक हो जाते हैं; पत्ते पीले और बल्ब छोटे रहें तो फोलियर स्प्रे दें।",
        "जैविक पदार्थ बनाए रखें ताकि बल्ब नरम, भुरभुरी मिट्टी में बढ़ें।",
        "सोडियम‑युक्त सिंचाई‑पानी की भारी डोज़ प्याज़ की क्यारियों पर न दें।",
        "सल्फर‑युक्त उर्वरक से क्षारीय मिट्टी पर भी बल्ब का आकार और स्वाद अच्छा रहता है।"
      ],
      irrigation: [
        "प्याज़ की जड़ें छोटी और नाज़ुक होती हैं, हल्की‑हल्की परन्तु बार‑बार सिंचाई ज़्यादा लाभदायक है।",
        "कटाई से 10–12 दिन पहले सिंचाई बंद कर दें ताकि बल्ब अच्छी तरह सूख‑सकें और स्टोर हों।",
        "खेत में लंबे समय तक पानी खड़ा रहने से ग्रीवा और बल्ब सड़ने लगते हैं, इससे बचें।",
        "सीज़न के आख़िर में बहुत ज़्यादा सिंचाई न करें, बल्ब नरम और फटने‑फूटने लगते हैं।"
      ],
      fertiliser: [
        "प्याज़ को अच्छे पोटाश और सल्फर की ज़रूरत होती है, SSP और MOP जैसे उर्वरक शामिल करें।",
        "नाइट्रोजन को छोटी‑छोटी किस्तों में दें, बहुत देर से देने से भंडारण क्षमता घटती है।",
        "उर्वरक को पंक्ति के बग़ल में बैंड के रूप में दें, सीधे बीज की लाइन पर न रखें।",
        "हर सीज़न थोड़ी कम्पोस्ट देने से मिट्टी भुरभुरी रहती है और बल्ब आसानी से फुलते हैं।"
      ]
    },

    /* ---------- 14. Okra ---------- */
    okra: {
      name: "भिंडी (ओकरा)",
      group: "vegetable",
      phMin: 6.0,
      phMax: 7.5,
      improveLow: [
        "जहाँ pH बहुत कम हो और पौधे बौने रह जाएँ, वहाँ हल्का चूना डालें।",
        "गोबर की खाद और कम्पोस्ट से बीज‑बिस्तर को ढीला और भुरभुरा बनाएँ।",
        "अम्लीय भिंडी खेतों पर भारी धातु या औद्योगिक गंदा पानी बिल्कुल न डालें।",
        "अनाज या दालों के साथ रोटेशन और जैविक खाद से pH धीरे‑धीरे ऊपर लाएँ।"
      ],
      improveHigh: [
        "क्षारीय मिट्टी पर खासकर अंकुर अवस्था में नमकीन पानी से सिंचाई से बचें।",
        "ड्रिप या फरो से सिंचाई करें ताकि जड़‑क्षेत्र नम रहे पर डूबा हुआ न हो।",
        "काफी मात्रा में फसल‑अवशेष और कम्पोस्ट मिलाएँ ताकि सतह सख़्त और फटने वाली न बने।",
        "बहुत सोडिक क्षेत्रों में भिंडी से पहले हरी‑खाद फसल उगाना लाभदायक है।"
      ],
      irrigation: [
        "फूल और फलन के समय नियमित सिंचाई रखें ताकि फल कोमल बने रहें।",
        "पानी भराव से बचें, गर्म और गीली मिट्टी में मुरझाने वाले रोग बहुत तेज़ी से फैलते हैं।",
        "कतारों के बीच मल्च डालने से वाष्पीकरण कम होता है और खरपतवार भी कम उगते हैं।",
        "लंबे सूखे के बाद अचानक भारी सिंचाई से फल फट सकते हैं, इससे बचें।"
      ],
      fertiliser: [
        "लंबे सीज़न वाली फसल में संतुलित NPK के साथ 1–2 बार माइक्रो‑न्यूट्रिएंट स्प्रे दें।",
        "बहुत ज़्यादा नाइट्रोजन से सिर्फ़ पत्तियाँ बढ़ती हैं, फल कम लगते हैं – डोज़ संतुलित रखें।",
        "बोवाई से पहले गोबर की खाद मिलाने से कई हफ्तों तक लगातार तुड़ाई सम्भव होती है।",
        "फल बार‑बार तोड़ते रहें, लगातार तुड़ाई से नए फ्लश आते हैं और उर्वरक का उपयोग बेहतर होता है।"
      ]
    },

    /* ---------- 15. Brinjal ---------- */
    brinjal: {
      name: "बैंगन (ब्रिंजल/एगप्लांट)",
      group: "vegetable",
      phMin: 5.5,
      phMax: 7.0,
      improveLow: [
        "बहुत अम्लीय खेतों में बैंगन लगाने से पहले हल्का चूना और गोबर की खाद मिलाने से अच्छा असर मिलता है।",
        "पौधों की रोपाई पानी में डूबी, सड़ी हुई मिट्टी में न करें, मिट्टी थोड़ा सूखने का इंतज़ार करें।",
        "अम्लीय भारी चिकनी मिट्टी पर उठी हुई क्यारियाँ या रेड्ज पर रोपाई करें।",
        "नर्सरी‑बेड का pH अलग से जाँचें, यह मुख्य खेत से बहुत कम न हो।"
      ],
      improveHigh: [
        "ऊँचे pH पर आयरन और मैंगनीज़ की कमी हो सकती है; पत्ते पीले हों तो मिश्रित सूक्ष्म‑पोषक स्प्रे दें।",
        "काफ़ी मात्रा में जैविक पदार्थ मिलाकर मिट्टी को नरम और सक्रिय रखें।",
        "क्षारीय पानी से ज़्यादा सिंचाई करने पर सतह पर सफेद क्रस्ट बन सकता है, इससे बचें।",
        "लंबे समय से क्षारीय रहे प्लॉट पर अनाज और दालों के रोटेशन से मिट्टी को विश्राम दें।"
      ],
      irrigation: [
        "नियमित सिंचाई ज़रूरी है, लंबे सूखे से फूल और छोटे फल झड़ जाते हैं।",
        "रेतीली मिट्टी और तेज़ हवा वाली स्थिति में सिंचाई की आवृत्ति बढ़ा दें।",
        "शाम देर से पत्तों को भिगोने वाली सिंचाई से बचें ताकि पत्ती वाले रोग कम हों।",
        "पौधों के चारों ओर मल्च रखने से गर्म मौसम में जड़‑क्षेत्र ठंडा रहता है।"
      ],
      fertiliser: [
        "बेसल NPK दें और नाइट्रोजन को 2–3 हिस्सों में सीज़न भर टॉप‑ड्रेसिंग के रूप में दें।",
        "रासायनिक उर्वरक के साथ‑साथ गोबर की खाद या कम्पोस्ट मिलाने से स्वाद और शेल्फ‑लाइफ दोनों बेहतर होते हैं।",
        "देर से फलन के समय बहुत ज़्यादा नाइट्रोजन न दें, इससे उपज और क्वालिटी दोनों पर असर पड़ता है।",
        "अगर अच्छा NPK देने पर भी फल छोटे और पत्ते पीले रहें तो माइक्रो‑न्यूट्रिएंट स्प्रे करें।"
      ]
    },

    /* ---------- 16. Banana ---------- */
    banana: {
      name: "केला",
      group: "fruit",
      phMin: 5.5,
      phMax: 7.5,
      improveLow: [
        "बहुत अम्लीय मिट्टी पर चूना और भरपूर गोबर की खाद डालकर फिर पौध (सकर) लगाएँ।",
        "उठे हुए गड्ढे या टीले बनाकर रोपाई करें ताकि जलनिकासी अच्छी रहे।",
        "बहुत खट्टी ज़मीन पर कई साल लगातार केला न लगाएँ, बीच‑बीच में अन्य फसल + खाद रखें।",
        "पत्तियों का रंग देखते रहें, बहुत अम्लीयता में पौधे पीले और छोटे पत्तों वाले हो जाते हैं।"
      ],
      improveHigh: [
        "सोडिक या नमकीन मिट्टी में अच्छी गुणवत्ता वाले पानी से लीचिंग कर नमकों को नीचे धकेलें।",
        "मिट्टी परीक्षण में एक्सचेंजेबल सोडियम ज़्यादा हो तो जिप्सम की सिफ़ारिश अनुसार मात्रा दें।",
        "पौधे के चारों ओर फसल‑अवशेष और पत्तियों की मोटी मल्च की परत रखें।",
        "हर साल जैविक खाद देने से जड़ें मुलायम, ठंडी परत में दूर तक फैल पाती हैं।"
      ],
      irrigation: [
        "केला सूखे के प्रति बहुत संवेदनशील है, किसी भी अवस्था में मिट्टी को पूरी तरह सूखा न पड़ने दें।",
        "तनों के चारों ओर लंबे समय तक पानी भरने से जड़ और कॉर्म सड़ सकते हैं, इससे बचें।",
        "बहुत गर्म मौसम में सिंचाई की आवृत्ति बढ़ाएँ पर हर बार की गहराई कम रखें।",
        "कटाई से कुछ दिन पहले भारी सिंचाई न करें ताकि फलों की हैंडलिंग आसान रहे।"
      ],
      fertiliser: [
        "खाद को पौधे के चारों ओर घेरानुमा (रिंग) में दें, तने से थोड़ा दूर रखें।",
        "नाइट्रोजन और पोटाश को पूरे बढ़वार‑काल में कई छोटी‑छोटी किस्तों में दें।",
        "रासायनिक खाद के साथ गोबर की खाद या कम्पोस्ट मिलाने से मिट्टी का ढाँचा अच्छा बना रहता है।",
        "पुरानी पत्तियों में कमी के लक्षण दिखें तो मैग्नीशियम और माइक्रो‑न्यूट्रिएंट स्प्रे करें।"
      ]
    },

    /* ---------- 17. Mango ---------- */
    mango: {
      name: "आम",
      group: "fruit",
      phMin: 5.5,
      phMax: 7.5,
      improveLow: [
        "बहुत अम्लीय मिट्टी पर नए बाग लगाने से पहले चूना डालें।",
        "क्योंचियों (बेसिन) में हरी‑खाद फसल उगाकर कोमल अवस्था में मिट्टी में मिला दें।",
        "अम्लीय चिकनी मिट्टी में आम के पेड़ों के चारों ओर पानी भरा कीचड़ न रहने दें।",
        "मल्च और गोबर की खाद से सतह पर एक मुलायम, महीन जड़ों वाली परत तैयार करें।"
      ],
      improveHigh: [
        "ऊँचे pH पर नई कोंपल के समय जिंक, आयरन और मैंगनीज़ जैसे सूक्ष्म‑पोषक स्प्रे करें।",
        "क्योंचियों को मल्च से ढककर रखें ताकि नमक सतह पर जमा और फटने वाली परत न बने।",
        "तनों के बिलकुल पास अधिक सोडियम‑युक्त सिंचाई‑पानी न डालें।",
        "बहुत क्षारीय मिट्टी में ऊँचे टीले बनाकर, उनमें भरपूर जैविक पदार्थ के साथ पौध लगाएँ।"
      ],
      irrigation: [
        "गर्मी में नये पौधों को तेज़ी से स्थापित करने के लिए नियमित सिंचाई ज़रूरी है।",
        "फलों वाले पेड़ों में फूल और फल बनने के समय नमी दें, पर फूल आने से ठीक पहले बहुत ज़्यादा पानी न दें।",
        "तनों के आसपास गहरा खड़ा पानी न रहने दें, इससे जड़ें घुट सकती हैं।",
        "वर्षा‑आधारित बागों में मल्च और कवर फसल से नमी का संरक्षण करें।"
      ],
      fertiliser: [
        "एक या दो बार साल में गोबर की खाद + NPK को पेड़ के चंदोवे (ड्रिप‑लाइन) के चारों ओर घेरा बनाकर दें।",
        "उर्वरक की मात्रा पेड़ की आयु के अनुसार समायोजित करें, छोटे पेड़ों को कम पर बार‑बार खुराक चाहिए।",
        "उर्वरक को सीधे तने से सटाकर न रखें, चक्र बनाकर थोड़ा दूर फैलाएँ।",
        "नियमित माइक्रो‑न्यूट्रिएंट स्प्रे से पत्तियाँ गहरी हरी और फल अच्छे भराव वाले रहते हैं।"
      ]
    },

    /* ---------- 18. Citrus ---------- */
    citrus: {
      name: "सिट्रस (संतरा/नींबू)",
      group: "fruit",
      phMin: 5.5,
      phMax: 7.5,
      improveLow: [
        "बहुत अम्लीय मिट्टी को चूना देकर ठीक करें, फिर ही नया सिट्रस बाग लगाएँ।",
        "ज़्यादातर जड़ें सतह के पास होती हैं, इसलिए गोबर की खाद और कम्पोस्ट को हल्की सतह परत में मिलाएँ।",
        "अम्लीय मिट्टी में पानी रुकने न दें, ज़रूरत हो तो रेड्ज या नाली बनाकर जलनिकासी ठीक करें।",
        "पहले से ही खट्टी जमीन पर तेज़ अम्ल बनाने वाले उर्वरक बिना जैविक खाद के न दें।"
      ],
      improveHigh: [
        "ऊँचे pH पर सूक्ष्म‑पोषक की कमी आम है; सीज़न में कई बार केलेटेड माइक्रो‑न्यूट्रिएंट स्प्रे दें।",
        "उर्वरक को तने के बिलकुल पास ढेर में न डालें, पूरे चंदोवे के नीचे समान रूप से फैलाएँ।",
        "मोटी जैविक मल्च की परत रखें ताकि दरारें और सतही नमक‑परत कम बने।",
        "बहुत क्षारीय मिट्टी पर भारी भरकम डोज़ की बजाय नियमित छोटी‑छोटी जैविक डोज़ देना बेहतर है।"
      ],
      irrigation: [
        "सिंचाई के बीच अंतराल थोड़ा बड़ा रखें पर हर बार पानी इतनी गहराई तक दें कि पूरा जड़‑क्षेत्र गीला हो जाए।",
        "भारी मिट्टी में जलनिकासी व्यवस्था रखें ताकि फाइटोफ्थोरा जड़‑सड़न से बचा जा सके।",
        "क्योंचियाँ लंबे समय तक बिल्कुल सूखी न छोड़ें, अचानक भारी सिंचाई से फल फट सकते हैं।",
        "कटाई से ठीक पहले हल्का कम सिंचाई देने से मिठास में सुधार हो सकता है।"
      ],
      fertiliser: [
        "साल में 2–3 बार NPK की डोज़ गोबर की खाद या कम्पोस्ट के साथ मिलाकर दें।",
        "पत्तों की जाँच या लक्षणों के आधार पर माइक्रो‑न्यूट्रिएंट स्प्रे करें।",
        "उर्वरक को चंदोवे के नीचे गोल घेरे में दें, सीधे तने पर न डालें।",
        "क्योंची में खरपतवार न रहने दें ताकि उर्वरक का लाभ केवल पेड़ को मिले।"
      ]
    },

    /* ---------- 19. Tea ---------- */
    tea: {
      name: "चाय",
      group: "plantation",
      phMin: 4.5,
      phMax: 6.0,
      improveLow: [
        "चाय को हल्की अम्लीय मिट्टी पसंद है, pH बहुत ही नीचे होने पर ही हल्का सुधार करें जब जड़ों पर नुकसान दिखे।",
        "कटी हुई टहनियों और पत्तियों की मोटी मल्च परत से सतही जड़ों की सुरक्षा होती है।",
        "बहुत अम्लीय ढलानों पर झाड़ियों के आसपास गहरी जुताई न करें।",
        "पत्तियों की वृद्धि और झाड़ियों की गति पर नज़र रखें, बहुत धीमी बढ़वार हल्के pH सुधार की ज़रूरत दिखाती है।"
      ],
      improveHigh: [
        "अगर pH ज़्यादा बढ़ जाए तो अमोनियम सल्फेट जैसे अम्ल बनाने वाले उर्वरकों का प्रयोग करें।",
        "ट्रिम किए गए अवशेष को कम्पोस्ट बनाकर मिट्टी में मिलाने से pH धीरे‑धीरे नीचे आता है।",
        "परिपक्व चाय‑बाग में मिट्टी परीक्षण की मांग न हो तो अनावश्यक चूना न डालें।",
        "अच्छी जलनिकासी से क्षारीय लवणों को नीचे धोने में मदद मिलती है।"
      ],
      irrigation: [
        "कम वर्षा वाले क्षेत्रों में लंबे सूखे दौर में स्प्रिंकलर या ड्रिप से सिंचाई करें।",
        "झाड़ियों के नीचे भारी मल्च से नमी बचती है और तापमान भी नियंत्रित रहता है।",
        "चाय के बाग में कहीं भी पानी खड़ा न रहने दें, जलभराव से जड़ें जल्दी खराब हो जाती हैं।",
        "छाया और हवा की गति के अनुसार सिंचाई की आवृत्ति समायोजित करें।"
      ],
      fertiliser: [
        "NPK और माइक्रो‑न्यूट्रिएंट के लिए क्षेत्रीय टी‑बोर्ड की सिफ़ारिशों का पालन करें।",
        "उर्वरक को झाड़ियों के चारों ओर हल्की गहराई वाली पट्टी में दें, सीधे तनों पर नहीं।",
        "बहुत सूखी मिट्टी पर भारी उर्वरक डोज़ न डालें, जड़ें जल सकती हैं।",
        "रासायनिक उर्वरक के साथ‑साथ नियमित जैविक इनपुट से मिट्टी के जीवाणु सक्रिय रहते हैं।"
      ]
    },

    /* ---------- 20. Sunflower ---------- */
    sunflower: {
      name: "सूरजमुखी",
      group: "oilseed",
      phMin: 6.0,
      phMax: 7.5,
      improveLow: [
        "बहुत अम्लीय मिट्टी पर सूरजमुखी से पहले चूना और गोबर की खाद अवश्य दें।",
        "तेज़ अम्लीय, सख़्त और दबे हुए पैच पर बिना पहले सुधार किए सीधे सूरजमुखी न बोएँ।",
        "सूरजमुखी से एक सीज़न पहले दलहनी या चारा फसल + खाद लेकर ऊपर की मिट्टी नरम करें।",
        "जहाँ अम्लीयता सिर्फ़ कुछ जगह ज़्यादा हो, वहाँ केवल उन्हीं हिस्सों पर चूना दें।"
      ],
      improveHigh: [
        "ऊँचे pH वाली मिट्टी पर बोरॉन की कमी हो सकती है; सिफ़ारिश अनुसार थोड़ी मात्रा दें।",
        "फसल‑अवशेषों को जलाने की बजाय मिट्टी में मिलाकर मिट्टी की बनावट सुधारें।",
        "बहुत क्षारीय पानी से लम्बी बाढ़‑सिंचाई न करें, इससे pH और ऊपर जा सकता है।",
        "सोडिक खेतों में सूरजमुखी के बीच हरी‑खाद फसलें लेकर pH को धीरे‑धीरे स्थिर करें।"
      ],
      irrigation: [
        "फूल और दाना भरने की अवस्था पर अच्छी नमी रखें, यहाँ तनाव से उपज बहुत घटती है।",
        "बहुत ज़्यादा सिंचाई न करें, जलभराव से तेल की मात्रा और तना दोनों कमजोर हो जाते हैं।",
        "हल्की मिट्टी पर थोड़ी‑थोड़ी परन्तु बार‑बार सिंचाई बेहतर रहती है।",
        "कटाई के क़रीब बहुत देर से सिंचाई न करें, भारी सिर झुक सकते हैं और गिर सकते हैं।"
      ],
      fertiliser: [
        "NPK की अनुशंसित पूरी डोज़ दें, पोटाश तेल की क्वालिटी और रोग‑रोधक क्षमता के लिए महत्त्वपूर्ण है।",
        "फॉस्फोरस और पोटाश का ज़्यादा हिस्सा बेसल में दें, नाइट्रोजन को 2–3 हिस्सों में बाँटें।",
        "शुरुआती वृद्धि के समय खरपतवार नियंत्रण रखें ताकि उर्वरक का पूरा लाभ फसल को मिले।",
        "जहाँ सम्भव हो, गहरी जड़ वाले सूरजमुखी के लिए गोबर की खाद भी मिलाएँ।"
      ]
    },

    /* ---------- 21. Pearl millet ---------- */
    millet: {
      name: "बाजरा (पर्ल मिलेट)",
      group: "cereal",
      phMin: 5.5,
      phMax: 7.5,
      improveLow: [
        "जहाँ pH बहुत कम हो वहाँ हल्का चूना और गोबर की खाद देने से अंकुर झटका कम महसूस करते हैं।",
        "एक्सट्रीम अम्लीय रेतीली मिट्टी पर बिना किसी संशोधन के बाजरा न उगाएँ।",
        "बाजरा से पहले दलहनी या मिक्स चारा + गोबर की खाद वाली फसल लेकर ऊपर की परत नरम करें।",
        "अवशेष को जलाने की बजाय मिट्टी में मिलाने से pH धीरे‑धीरे ऊपर उठता है।"
      ],
      improveHigh: [
        "बाजरा हल्का ऊँचा pH सह लेता है, पर बहुत सोडिक, सफेद नमक‑परत वाले पैच से बचें।",
        "जैविक पदार्थ बढ़ाकर वर्षा के बाद सतह की सीलिंग और क्रस्ट कम की जा सकती है।",
        "क्षारीय सिंचाई‑पानी हो तो हल्की, कम गहरी सिंचाई दें और पानी भराव न रखें।",
        "बाजरा को दालों के साथ रोटेशन में रखें ताकि मिट्टी का ढाँचा खुला और जीवंत रहे।"
      ],
      irrigation: [
        "अधिकतर बाजरा वर्षा पर निर्भर होता है; सिंचित क्षेत्र में बूटिंग और फूल अवस्था पर तनाव से बचाएँ।",
        "हल्की रेतीली मिट्टी पर पानी भराव बिल्कुल न होने दें, छोटी और सतही सिंचाई ही पर्याप्त है।",
        "भारी मिट्टी पर एक प्री‑सॉइंग सिंचाई देकर अवशिष्ट नमी पर बुवाई की जा सकती है।",
        "सूखे इलाक़ों में कंटूर‑बंड और रेड्ज से वर्षा‑जल को खेत में रोक कर रखें।"
      ],
      fertiliser: [
        "बोवाई पर बेसल NPK दें और शुरुआती टिलरिंग पर एक बार नाइट्रोजन की टॉप‑ड्रेसिंग करें।",
        "बीज उपचार और सही दूरी रखने से पौधे स्वस्थ रहते हैं और उर्वरक का उपयोग बढ़िया होता है।",
        "बहुत कमजोर मिट्टी पर जुताई के समय गोबर की खाद या कम्पोस्ट ज़रूर मिलाएँ।",
        "जहाँ नमी सीमित हो, वहाँ बहुत ज़्यादा नाइट्रोजन न दें, वरना पौधे लेटकर गिर सकते हैं और दाने ठीक से नहीं भरते।"
      ]
    },

    /* ---------- 22. Sorghum ---------- */
    sorghum: {
      name: "ज्वार (सोरघम)",
      group: "cereal",
      phMin: 5.5,
      phMax: 7.5,
      improveLow: [
        "pH 5.5 से नीचे की बहुत अम्लीय मिट्टी पर ज्वार से पहले चूना और गोबर की खाद डालें।",
        "बारिश के बाद जहाँ पानी देर तक रुके, ऐसे अम्लीय, नीची जगहों पर ज्वार न बोएँ।",
        "ज्वार से पहले दलहनी या हरी‑खाद + खाद वाली फसल लेकर ऊपर की परत सुधरें।",
        "तेज़ अम्ल बनाने वाले उर्वरक तभी दें जब साथ में जैविक खाद भी पर्याप्त हो।"
      ],
      improveHigh: [
        "ज्वार हल्का ऊँचा pH सह लेता है, लेकिन साफ़‑दिखने वाले सोडिक, नमक‑परत वाले हिस्सों से बचें।",
        "क्षारीय सिंचाई‑पानी हो तो उथली और छोटी सिंचाई करें, पानी खड़ा न रहने दें।",
        "फसल‑अवशेष खेत में ही मिलाने से मिट्टी का ढाँचा सुधरता है, जलधारण और जड़ प्रवेश बेहतर होता है।",
        "ज्वार को दालों के साथ रोटेशन में रखने से मिट्टी खुली और जैविक रूप से सक्रिय रहती है।"
      ],
      irrigation: [
        "अधिकतर ज्वार वर्षा पर निर्भर रहती है; सिंचाई हो तो बूटिंग और फूल अवस्था पर तनाव से बचाएँ।",
        "हल्की मिट्टी पर पानी भराव से बचें, छोटी‑छोटी परन्तु उथली सिंचाई पर्याप्त है।",
        "सूखे इलाक़ों में कंटूर‑बंड और रेड्ज से वर्षा‑जल को खेत में ज़्यादा देर तक रोकें।",
        "भारी तूफ़ानी वर्षा के बाद नीची जगहों से अतिरिक्त पानी जल्दी निकालें ताकि जड़ें सुरक्षित रहें।"
      ],
      fertiliser: [
        "बेसल NPK दें और शुरुआती टिलरिंग पर एक बार नाइट्रोजन की टॉप‑ड्रेसिंग करें।",
        "बीज उपचार और सही दूरी से हर पौधे को पर्याप्त रोशनी और उर्वरक मिल पाता है।",
        "बहुत गरीब मिट्टी पर जुताई के समय गोबर की खाद या कम्पोस्ट ज़रूर डालें।",
        "जहाँ नमी कम हो, वहाँ बहुत ज़्यादा नाइट्रोजन देने से पौधे गिर सकते हैं और दाने कम भरते हैं।"
      ]
    },

    /* ---------- 23. Barley ---------- */
    barley: {
      name: "जौ (Barley)",
      group: "cereal",
      phMin: 6.0,
      phMax: 8.0,
      improveLow: [
        "pH 6.0 से कम हो तो मिट्टी परीक्षण के अनुसार जौ से कम से कम एक सीज़न पहले चूना डालें।",
        "गोबर की खाद और कम्पोस्ट से बीज‑बिस्तर को नरम और कम अम्लीय बनाएं।",
        "केवल अमोनियम उर्वरकों की भारी डोज़ के तुरंत बाद जौ न बोएँ।",
        "सबसे ज़्यादा अम्लीय पॉकेट पर अलग‑से चूना डालें, पूरे खेत पर फिजूल खर्च न करें।"
      ],
      improveHigh: [
        "जौ हल्की क्षारीय मिट्टी सह लेता है, पर बहुत सोडिक खेतों में जिप्सम की ज़रूरत रहती है।",
        "उच्च pH वाली ज़मीन पर अवशेष और हरी‑खाद से सतही क्रस्ट को कम किया जा सकता है।",
        "अगर सिंचाई‑पानी भी क्षारीय हो तो सिंचाई उथली और कम अंतराल वाली रखें।",
        "कठोर पैन वाली ज़मीन पर हर कुछ साल में गहरी जुताई कर उसे तोड़ें।"
      ],
      irrigation: [
        "हल्की मिट्टी पर महत्त्वपूर्ण सिंचाई स्टेज – टिलरिंग और दाना भरना।",
        "जौ को सख़्त परन्तु अच्छी जलनिकासी वाली मिट्टी पसंद है, पानी खड़ा न रहने दें।",
        "वर्षा‑आधारित क्षेत्रों में शुरुआती खरपतवार नियंत्रण और जहाँ सम्भव हो हल्का मल्च नमी बचाने में मदद करता है।",
        "जब दाने सख़्त हो जाएँ तो सिंचाई बंद करें, देर से पानी देने से क्वालिटी गिर सकती है।"
      ],
      fertiliser: [
        "बोवाई पर संतुलित NPK दें और उर्वरक को बीज‑लाइन से थोड़ा नीचे रखें।",
        "शुरुआती टिलरिंग पर एक बार नाइट्रोजन की टॉप‑ड्रेसिंग करें, बहुत देर से न दें।",
        "कुछ पराली खेत में रहने दें ताकि पोषक‑तत्व लौट सकें और सतह सुरक्षित रहे।",
        "बहुत गरीब मिट्टी पर हर दूसरे या तीसरे सीज़न में कुछ जैविक खाद ज़रूर मिलाएँ।"
      ]
    },

    /* ---------- 24. Lentil ---------- */
    lentil: {
      name: "मसूर (Lentil)",
      group: "pulse",
      phMin: 6.0,
      phMax: 7.5,
      improveLow: [
        "बहुत अम्लीय खेतों पर मसूर से पहले हल्का चूना और भरपूर गोबर की खाद डालें।",
        "ब्रॉड‑बेड और फरो पद्धति से अम्लीय भारी मिट्टी पर जलभराव और पीलापन कम किया जा सकता है।",
        "मसूर से पहले मिट्टी को कीचड़ जैसी हालत (puddling) में न लाएँ, जड़ों को नाइट्रोजन फिक्स के लिए हवा चाहिए।",
        "अनाज या तिलहन + जैविक खाद वाली फसल के रोटेशन से pH धीरे‑धीरे ऊपर लाया जा सकता है।"
      ],
      improveHigh: [
        "ऊँचे pH वाली मिट्टी पर जैविक पदार्थ बनाए रखें ताकि सूक्ष्म‑पोषक उपलब्ध रहें।",
        "भारी, नमकीन सिंचाई‑पानी का अधिक उपयोग मसूर की जड़ों और गाँठों को तनाव देता है, इससे बचें।",
        "पत्ती‑जाँच में कमी दिखने पर माइक्रो‑न्यूट्रिएंट मिश्रण के स्प्रे का उपयोग करें।",
        "मसूर को लगातार न उगाकर अनाज और तिलहन के साथ रोटेशन में रखें।"
      ],
      irrigation: [
        "मसूर आमतौर पर संचित नमी पर ली जाती है, ज़्यादा पानी से पीलापन और रोग बढ़ते हैं।",
        "जहाँ सिंचाई उपलब्ध हो, दाना भरने की अवस्था पर एक हल्की सिंचाई अच्छा रिस्पॉन्स देती है।",
        "अचानक भारी वर्षा के बाद गड्ढेदार हिस्सों से पानी जल्दी निकाल दें।",
        "कटाई के पास सिंचाई न करें, गीले पौधों पर फलियाँ काली या अंकुरित हो सकती हैं।"
      ],
      fertiliser: [
        "बीज को राइज़ोबियम से ट्रीट करें ताकि शुरुआती अवस्था से ही नाइट्रोजन फिक्सेशन शुरू हो सके।",
        "बोवाई पर बेसल फॉस्फोरस दें, मसूर मध्यम फॉस्फोरस डोज़ पर अच्छी प्रतिक्रिया देती है।",
        "बहुत ज़्यादा नाइट्रोजन देने से गाँठें कम बनती हैं और आमतौर पर ज़रूरत भी नहीं होती।",
        "कमज़ोर मिट्टी पर पिछले सीज़न में थोड़ी गोबर की खाद डालने से मसूर की वृद्धि सुधरती है।"
      ]
    },

    /* ---------- 25. Cabbage ---------- */
    cabbage: {
      name: "पत्तागोभी (Cabbage)",
      group: "vegetable",
      phMin: 6.0,
      phMax: 7.5,
      improveLow: [
        "अम्लीय मिट्टी पर पत्तागोभी लगाने से पहले चूना डालने से 'क्लब‑रूट' रोग का ख़तरा घटता है।",
        "भरपूर कम्पोस्ट से जड़‑क्षेत्र ठंडा, नम और कम अम्लीय बना रहता है।",
        "बहुत चिपचिपी, खट्टी और खराब जलनिकासी वाली क्यारियों पर रोपाई से बचें।",
        "बहुत गीले और अम्लीय क्षेत्रों में क्यारियों की ऊँचाई थोड़ी बढ़ा देने से जड़ों को हवा बेहतर मिलती है।"
      ],
      improveHigh: [
        "ऊँचे pH पर सूक्ष्म‑पोषक की कमी से छोटी पीली कोमल पत्तियाँ दिख सकती हैं, इस पर नज़र रखें।",
        "जैविक मल्च और गोबर की खाद से मिट्टी ढीली रहती है और क्षारीयता का असर कम होता है।",
        "बहुत क्षारीय सिंचाई‑पानी हो तो नर्सरी के लिए जिसे सम्भव हो किसी अन्य बेहतर स्रोत का पानी लें।",
        "लंबे समय से क्षारीय रहे खेतों पर पत्तागोभी के बाद अनाज या दालें लगाकर मिट्टी को आराम दें।"
      ],
      irrigation: [
        "रोपाई से लेकर गोभी बनने तक मिट्टी को समान रूप से नम रखें, सूखे से गोभी फट सकती है या ढीली बनती है।",
        "जलभराव से बचें, खड़े पानी से जड़ और तनों के रोग जल्दी फैलते हैं।",
        "सुबह या दोपहर की सिंचाई से पत्ते रात होने से पहले सूख जाते हैं और रोग कम होते हैं।",
        "कतारों के बीच मल्च डालने से वाष्पीकरण और खरपतवार दोनों कम होते हैं।"
      ],
      fertiliser: [
        "पत्तागोभी भारी फीडर है; पर्याप्त NPK दें, विशेष रूप से नाइट्रोजन और पोटाश पर ध्यान दें।",
        "नाइट्रोजन को एक भारी डोज़ की बजाय कई छोटी‑छोटी किस्तों में दें।",
        "जहाँ सिर अंदर से खोखला या विकृत हो, वहाँ बोरॉन और अन्य माइक्रो‑न्यूट्रिएंट अवश्य दें।",
        "रासायनिक उर्वरक के साथ जैविक खाद मिलाने से स्वाद और भंडारण‑क्वालिटी दोनों में सुधार होता है।"
      ]
    }
  }
};

