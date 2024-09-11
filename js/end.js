document.addEventListener("DOMContentLoaded", () => {
    fetch("/partials/end.html")
      .then((response) => response.text())
      .then((data) => {
        document.getElementById("end-placeholder").innerHTML = data;
      });
  });
  