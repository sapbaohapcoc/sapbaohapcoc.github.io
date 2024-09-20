function loadIndex() {
    const index_List = document.getElementById("index-list");
    const headers = document.querySelectorAll("h2, h3, h4");

    headers.forEach(header => {
        const id = header.id || header.textContent.trim().toLowerCase().replace(/\s+/g, '-');
        header.id = id;

        const a = document.createElement("a");
        a.href = `#${id}`;
        a.textContent = header.textContent;
        a.className = header.tagName.toLowerCase();
        index_List.appendChild(a);
    })
}

function toggleIndex() {
    const indexMenu = document.querySelector("#index-list");
    indexMenu.style.display = indexMenu.style.display === "flex" ? "none" : "flex";
}

document.addEventListener("DOMContentLoaded", loadIndex);