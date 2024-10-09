const heroList = document.querySelector(".hero-list"),
      itemList = document.querySelector(".item-list"),
      spellList = document.querySelector(".spell-list");

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