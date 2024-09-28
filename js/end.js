function loadEnd() {
  fetch("/html/partials/end.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("end-placeholder").innerHTML = data;
    })
    .catch((error) => console.error("Error loading footer:", error));
}

document.addEventListener("DOMContentLoaded", loadEnd);