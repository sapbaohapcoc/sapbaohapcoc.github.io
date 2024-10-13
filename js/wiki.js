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