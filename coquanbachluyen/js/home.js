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

const imgs = document.querySelectorAll(".hero, .weapon, .item");

imgs.forEach(img => {
  const tooltip = img.nextElementSibling;

  img.addEventListener("mousemove", (e) => {
    tooltip.style.display = "flex";

    const screenWidth = window.innerWidth,
          tooltipWidth = 500,
          spacetoRight = screenWidth - e.pageX;

    if (spacetoRight < tooltipWidth) {
      tooltip.style.right = `${screenWidth - e.pageX + 10}px`
    } else {
      tooltip.style.left = `${e.pageX + 10}px`;
    }
    tooltip.style.top = `${e.pageY - 67}px`;
  });

  img.addEventListener("mouseleave", () => {
    tooltip.style.display = "none";
  })
})
