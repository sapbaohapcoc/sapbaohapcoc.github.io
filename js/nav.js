document.addEventListener("DOMContentLoaded", () => {
  fetch("/partials/nav.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("nav-placeholder").innerHTML = data;
    });
});
