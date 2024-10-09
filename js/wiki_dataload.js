function loadData() {
  fetch("/html/partials/wiki-hero.html")
    .then((response) => response.text())
    .then((data) => {
      document.querySelector(".hero-list").innerHTML = data;
      attachArea();
      attachTooltip();
    })
    .catch((error) => console.error("Error loading hero-data:", error));

  fetch("/html/partials/wiki-item.html")
    .then((response) => response.text())
    .then((data) => {
      document.querySelector(".item-list").innerHTML = data;
      attachArea();
      attachTooltip();
    })
    .catch((error) => console.error("Error loading item-data:", error));

  fetch("/html/partials/wiki-spell.html")
    .then((response) => response.text())
    .then((data) => {
      document.querySelector(".spell-list").innerHTML = data;
      attachArea();
      attachTooltip();
    })
    .catch((error) => console.error("Error loading spell-data:", error));
}

function attachArea() {
  const titles = document.querySelectorAll(".category-title");

  titles.forEach((title) => {
    const area = title.nextElementSibling;

    title.addEventListener("click", () => {
      const isDisplayed = window.getComputedStyle(area).display !== "none";

      area.style.display = isDisplayed ? "none" : "flex";
    })
  })
}

function attachTooltip() {
  const imgs = document.querySelectorAll(".hero, .item, .spell");

  imgs.forEach((img) => {
    const tooltip = img.nextElementSibling;

    img.addEventListener("mousemove", (e) => {
      tooltip.style.display = "flex";

      const screenWidth = window.innerWidth,
            tooltipWidth = 500,
            spacetoRight = screenWidth - e.pageX;

      if (spacetoRight < tooltipWidth + 100) {
        tooltip.style.right = `${screenWidth - e.pageX + 10}px`;
      } else {
        tooltip.style.left = `${e.pageX + 10}px`;
      }
      tooltip.style.top = `${e.pageY - 67}px`;
    });

    img.addEventListener("mouseleave", () => {
      tooltip.style.display = "none";
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  loadData();
});
