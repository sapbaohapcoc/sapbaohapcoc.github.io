const heroList = document.querySelector(".hero-list"),
      weaponList = document.querySelector(".weapon-list"),
      itemList = document.querySelector(".item-list");

function toggleHero() {
  heroList.style.display = "flex";
  weaponList.style.display = "none";
  itemList.style.display = "none"
}

function toggleWeapon() {
  weaponList.style.display = "flex";
  heroList.style.display = "none";
  itemList.style.display = "none"
}

function toggleItem() {
  itemList.style.display = "flex";
  heroList.style.display = "none";
  weaponList.style.display = "none"
}
