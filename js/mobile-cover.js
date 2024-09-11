function loadCover() {
  fetch("/html/misc/mobile-cover.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("mobile-cover").innerHTML = data;
    })
}

// Load the navigation bar when the page loads
document.addEventListener("DOMContentLoaded", loadCover);
