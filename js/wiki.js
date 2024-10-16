//Prepare for 3 main categories: Heroes, Items and Summoner Spells

const heroList = document.getElementById("hero-list"),
      itemList = document.getElementById("item-list"),
      spellList = document.getElementById("spell-list");
      blurCover = document.getElementById("blur-cover");

function toggleHero() {
  heroList.style.display = "flex";
  itemList.style.display = "none";
  spellList.style.display = "none"
}

function toggleItem() {
  itemList.style.display = "flex";
  heroList.style.display = "none";
  spellList.style.display = "none"
}

function toggleSpell() {
  spellList.style.display = "flex";
  heroList.style.display = "none";
  itemList.style.display = "none"
}

function removeBlur() {
  blurCover.style.display = "none";
}

//Load the data from partials

function loadData() {
  const fetchCmds = [
    fetch("/wiki/wiki-hero.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("hero-list").innerHTML = data;
    })
    .catch(error => console.log("Error loading hero-list: ", error)),

    fetch("/wiki/wiki-item.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("item-list").innerHTML = data;
    })
    .catch(error => console.log("Error loading item-list: ", error)),

    fetch("/wiki/wiki-spell.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("spell-list").innerHTML = data;
    })
    .catch(error => console.log("Error loading spell-list: ", error))
  ];

  Promise.all(fetchCmds)
    .then(() => {
      loadItemData();
      fixItemHeight();
      enableItemCategory();
      attachItemTooltip();
      attachSpellTooltip();
    })
    .catch(error => console.log("Error loading all data:", error));
}

//Setup the UI for Items category

function loadItemData() {
  const fetchCmds = [
    fetch("/wiki/wiki-item/attack.html")
    .then(response => response.text())
    .then(data => {
      document.querySelector("#attack.area").innerHTML = data;
    })
    .catch(error => console.log("Error loading attack-items: ", error)),

    fetch("/wiki/wiki-item/magic.html")
    .then(response => response.text())
    .then(data => {
      document.querySelector("#magic.area").innerHTML = data;
    })
    .catch(error => console.log("Error loading magic-items: ", error)),

    fetch("/wiki/wiki-item/tank.html")
    .then(response => response.text())
    .then(data => {
      document.querySelector("#tank.area").innerHTML = data;
    })
    .catch(error => console.log("Error loading tank-items: ", error)),

    fetch("/wiki/wiki-item/boots.html")
    .then(response => response.text())
    .then(data => {
      document.querySelector("#boots.area").innerHTML = data;
    })
    .catch(error => console.log("Error loading boots-items: ", error)),

    fetch("/wiki/wiki-item/jungle.html")
    .then(response => response.text())
    .then(data => {
      document.querySelector("#jungle.area").innerHTML = data;
    })
    .catch(error => console.log("Error loading jungle-items: ", error)),

    fetch("/wiki/wiki-item/support.html")
    .then(response => response.text())
    .then(data => {
      document.querySelector("#support.area").innerHTML = data;
    })
    .catch(error => console.log("Error loading support-items: ", error))
  ]

  Promise.all(fetchCmds)
    .catch(error => console.log("Error loading items' data:", error));
}

function fixItemHeight() {
  const menu = document.querySelector("#categories.item"),
        dataShow = menu.nextElementSibling;

  dataShow.style.height = menu.offsetHeight + "px";
}

function enableItemCategory() {
  const titles = document.querySelectorAll("#categories.item>.category");

  titles.forEach((title) => {
    const currentCategory = document.querySelector("#" + title.id + ".area");

    title.addEventListener("click", () => {
      const categories = document.querySelectorAll("#overflow-list.item>.area");

      categories.forEach(category => {
        category.style.display = "none";
      })
      currentCategory.style.display = "flex";
    })
  })
}

function attachItemTooltip() {
  const items = document.querySelectorAll("img.item");

  items.forEach((item) => {
    const tooltip = item.parentElement.querySelector(".tooltip");

    item.addEventListener("mousemove", (e) => {
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

    item.addEventListener("mouseleave", () => {
      tooltip.style.display = "none";
    })
  })
}

//Setup the UI for Summoner Spells category

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

//Main cmds to execute

document.addEventListener("DOMContentLoaded", loadData);