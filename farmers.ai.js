// farmers.ai.js
(function () {
  const openBtn = document.getElementById("openFarmAiBtn");
  const panel = document.getElementById("aiPlaceholder");
  const closeBtn = document.getElementById("aiPlaceholderClose");
  if (!openBtn || !panel || !closeBtn) return;

  openBtn.addEventListener("click", () => {
    panel.style.display = "block";
  });

  closeBtn.addEventListener("click", () => {
    panel.style.display = "none";
  });
})();
