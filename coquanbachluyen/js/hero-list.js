document.querySelectorAll(".hero").forEach((img) => {
  img.addEventListener("mouseenter", function () {
    const info = this.nextElementSibling;
    info.style.display = "flex";
    document.addEventListener("mousemove", moveInfo);
  });

  img.addEventListener("mouseleave", function () {
    const info = this.nextElementSibling;
    info.style.display = "none";
    document.removeEventListener("mousemove", moveInfo);
  });

  function moveInfo(e) {
    const info = document.querySelector('.hero-box[style*="display: flex"]');
    if (info) {
      info.style.left = e.pageX + "px";
      info.style.top = e.pageY + "px";
    }
  }
});
