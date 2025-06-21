// Animation des sections au chargement
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  sections.forEach((section, index) => {
    setTimeout(() => {
      section.style.opacity = 1;
    }, 1000 + index * 500); // délai progressif
  });
});
