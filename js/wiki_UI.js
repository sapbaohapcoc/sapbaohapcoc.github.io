document.addEventListener("DOMContentLoaded", () => {
  const titles = document.querySelectorAll(".category-title");

  titles.forEach((title) => {
    const area = title.nextElementSibling;

    title.addEventListener("click", () => {
      area.style.display = area.style.display === "flex" ? "none" : "flex";
    });
  });
});
