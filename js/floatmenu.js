document.addEventListener("DOMContentLoaded", function () {
  const index_List = document.getElementById("index-list");
  const headers = document.querySelectorAll("h2, h3, h4");

  headers.forEach((header) => {
    const id =
      header.id || header.textContent.trim().toLowerCase().replace(/\s+/g, "-");
    header.id = id;
    const a = document.createElement("a");
    a.href = `#${id}`;
    a.className = header.tagName.toLowerCase();
    a.textContent = header.textContent;
    index_List.appendChild(a);
  });
});
