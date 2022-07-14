const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
    const books = JSON.parse(xmlhttp.responseText);
    const catalogGrid = document.getElementById("catalog-grid");
    for (let book of books)
    {
        const catalogItem = document.createElement("DIV");
        const catalogItemTitle = document.createElement("H3");
        catalogItemTitle.innerHTML = book.title;
        const catalogItemByline = document.createElement("P");
        catalogItemByline.innerHTML = `By ${book.author_first_name} ${book.author_last_name}`;
        catalogItem.appendChild(catalogItemTitle);
        catalogItem.appendChild(catalogItemByline);
        catalogGrid.appendChild(catalogItem);
    }
}
xmlhttp.open("GET", "search.php?query=SELECT * FROM Books");
xmlhttp.send();