function loadNavbar() {
    fetch("/html/partials/navbar.html")
        .then((response) => response.text())
        .then((data) => {
            document.getElementById('navbar').innerHTML = data;
        })
        .catch((error) => {console.error('Error loading navigation bar: ', error)});
}

document.addEventListener('DOMContentLoaded', loadNavbar());