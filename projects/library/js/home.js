const searchForm = document.getElementById("search");
const catalogGrid = document.getElementById("catalog-grid");

// const xmlhttp = new XMLHttpRequest();
// xmlhttp.onload = function() {
//     const books = JSON.parse(xmlhttp.responseText);
//     const catalogGrid = document.getElementById("catalog-grid");
//     for (let book of books)
//     {
//         const catalogItem = document.createElement("DIV");
//         const catalogItemTitle = document.createElement("H3");
//         catalogItemTitle.innerHTML = book.title;
//         const catalogItemByline = document.createElement("P");
//         catalogItemByline.innerHTML = `By ${book.author_first_name} ${book.author_last_name}`;
//         catalogItem.appendChild(catalogItemTitle);
//         catalogItem.appendChild(catalogItemByline);
//         catalogGrid.appendChild(catalogItem);
//     }
// }
// xmlhttp.open("GET", "../search.php?query=SELECT * FROM Books");
// xmlhttp.send();

// const xmlhttp = SendXMLHttpRequest(() => {
//     const books = JSON.parse(xmlhttp.responseText);
//     const catalogGrid = document.getElementById("catalog-grid");
//     for (let book of books)
//     {
//         const catalogItem = document.createElement("DIV");
//         const catalogItemTitle = document.createElement("H3");
//         catalogItemTitle.innerHTML = book.title;
//         const catalogItemByline = document.createElement("P");
//         catalogItemByline.innerHTML = `By ${book.author_first_name} ${book.author_last_name}`;
//         catalogItem.appendChild(catalogItemTitle);
//         catalogItem.appendChild(catalogItemByline);
//         catalogGrid.appendChild(catalogItem);
//     }
// }, "../search.php?query=SELECT * FROM Books");

searchForm.addEventListener('click', (e) => {
    catalogGrid.innerHTML = "";
    if (e.target.id === "search-btn") {
        const searchBar = document.getElementById("search-bar");
        const searchStr = `'%25${searchBar.value}%25'`;
        let url = "../search.php?query=SELECT * FROM Books WHERE title LIKE " + searchStr;
        const xmlhttp = SendXMLHttpRequest(() => {
            const books = JSON.parse(xmlhttp.responseText);
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
        }, url);
    }
});

function SendXMLHttpRequest(func, url)
{
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = func;
    xmlhttp.open("GET", url);
    xmlhttp.send();
    return xmlhttp;
}