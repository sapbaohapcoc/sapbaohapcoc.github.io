function loadData() {
  const fetchCmds = [
    fetch("/html/partials/wiki-item.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("item-list").innerHTML = data;
      })
      .catch(error => console.log("Error loading item-list:", error)),

    fetch("/html/partials/wiki-hero.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("hero-list").innerHTML = data;
      })
      .catch(error => console.log("Error loading hero-list:", error)),

    fetch("/html/partials/wiki-spell.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("spell-list").innerHTML = data;
      })
      .catch(error => console.log("Error loading spell-list:", error))
  ];

  Promise.all(fetchCmds)
    .then(() => {
      enableCategory();
      attachTooltip();
    })
    .catch(error => console.log("Error loading all data:", error));
}

function enableCategory() {
  const categories = document.querySelectorAll(".category");

  categories.forEach((category) => {
    const currentArea = category.nextElementSibling,
          areas = document.querySelectorAll(".area");

    category.addEventListener("click", () => {
      if (currentArea.style.display === "flex") {
        currentArea.style.display = "none";
      } else {
        areas.forEach(area => {
          area.style.display = "none";
        });
        currentArea.style.display = "flex";
      }
    })
  })

  const miniCategories = document.querySelectorAll(".mini-category");

  miniCategories.forEach((miniCategory) => {
    const currentMiniArea = miniCategory.nextElementSibling,
          miniAreas = document.querySelectorAll(".mini-area");

    miniCategory.addEventListener("click", () => {
      if (currentMiniArea.style.display === "flex") {
        currentMiniArea.style.display = "none";
      } else {
        miniAreas.forEach(miniArea => {
          miniArea.style.display = "none";
        });
        currentMiniArea.style.display = "flex";
      }
    })
  })
}

function attachTooltip() {
  const imgs = document.querySelectorAll("img.hero, img.item, img.spell");

  imgs.forEach((img) => {
    const tooltip = img.nextElementSibling;

    img.addEventListener("mousemove", (e) => {
      tooltip.style.display = "flex";

      const mouseX = e.clientX,
            mouseY = e.clientY;
            tooltipWidth = tooltip.clientWidth;
            tooltipHeight = tooltip.clientHeight;
            viewWidth = window.innerWidth;
            viewHeight = window.innerHeight;
            toRight = viewWidth - mouseX;
            toBottom = viewHeight - mouseY;
      
      if (toRight < tooltipWidth + 50) {
        tooltip.style.right = (viewWidth - mouseX + 10) + "px";
      } else {
        tooltip.style.left = (mouseX + 10) + "px";
      }
      
      if (toBottom < tooltipHeight + 50) {
        tooltip.style.bottom = (viewHeight - mouseY + 10) + "px";
      } else {
        tooltip.style.top = (mouseY + 10) + "px";
      }
    })

    img.addEventListener("mouseleave", () => {
      tooltip.style.display = "none";
    })
  })
}

document.addEventListener("DOMContentLoaded", loadData);