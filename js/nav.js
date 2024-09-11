function loadNav() {
  fetch("/html/partials/nav.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("nav-placeholder").innerHTML = data;
    })
    .catch((error) => console.error("Error loading navigation:", error));
}

function toggleMenu() {
  const dropdownMenu = document.querySelector(".dropdown-menu");
  dropdownMenu.style.display =
    dropdownMenu.style.display === "flex" ? "none" : "flex";
}

// Load the navigation bar when the page loads
document.addEventListener("DOMContentLoaded", loadNav);