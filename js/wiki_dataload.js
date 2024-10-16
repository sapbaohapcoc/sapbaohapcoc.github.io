function loadData() {
  const fetchCmds = [
    fetch("/wiki/wiki-hero.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("hero-list").innerHTML = data;
    })
    .catch(error => console.log("Error loading " + destination + ": ", error)),

    fetch("/wiki/wiki-item.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("item-list").innerHTML = data;
    })
    .catch(error => console.log("Error loading " + destination + ": ", error)),

    fetch("/wiki/wiki-spell.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("spell-list").innerHTML = data;
    })
    .catch(error => console.log("Error loading " + destination + ": ", error))
  ];

  Promise.all(fetchCmds)
    .then(() => {
      //enableCategory();
      enableItemCategory();
      attachSpellTooltip();
    })
    .catch(error => console.log("Error loading all data:", error));
}

/*function enableCategory() {
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
}*/

function enableItemCategory() {
  const titles = document.querySelectorAll("#categories.item>.category");

  titles.forEach((title) => {
    const currentCategory = document.querySelector("#" + title.id + ".area"),
          categories = document.querySelectorAll("#overflow-list.item>.area");

    title.addEventListener("click", () => {
      if (currentCategory.style.display === "flex") {
        currentCategory.style.display = "none";
      } else {
        categories.forEach(category => {
          category.style.display = "none";
        })
        currentCategory.style.display = "flex";
      }
    })
  })
}

function attachSpellTooltip() {
  const spells = document.querySelectorAll("img.spell");

  spells.forEach((spell) => {
    const tooltip = spell.nextElementSibling;

    spell.addEventListener("mousemove", (e) => {
      tooltip.style.display = "flex";

      const mouseX = e.clientX,
            mouseY = e.clientY;
            tooltipWidth = tooltip.clientWidth;
            tooltipHeight = tooltip.clientHeight;
            viewWidth = window.innerWidth;
            viewHeight = window.innerHeight;
            toRight = viewWidth - mouseX;
            toBottom = viewHeight - mouseY;
      
      if (toRight < tooltipWidth + 10) {
        tooltip.style.right = (viewWidth - mouseX + 10) + "px";
      } else {
        tooltip.style.left = (mouseX + 10) + "px";
      }

      if (tooltipHeight * 2 > viewHeight) {
        tooltip.style.top = (viewHeight - tooltipHeight) / 2 + "px";
      } else {
        if (toBottom < tooltipHeight + 10) {
          tooltip.style.bottom = (viewHeight - mouseY + 10) + "px";
        } else {
          tooltip.style.top = (mouseY + 10) + "px";
        }
      }
    })

    spell.addEventListener("mouseleave", () => {
      tooltip.style.display = "none";
    })
  })
}

document.addEventListener("DOMContentLoaded", loadData);