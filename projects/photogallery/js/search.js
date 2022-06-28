let searchBar = document.getElementById("search");

searchBar.addEventListener("keyup", () => {
    let input = searchBar.value.toLowerCase(); // gets a non case-sensitive string in the search bar
    let images = document.getElementsByClassName("gallery-thumbnail");

    for (let image of images)
    {
        let imageCaption = image.parentNode.getAttribute("data-caption").toLowerCase(); // gets a non case-senstive caption from the image
        if (!imageCaption.includes(input)) // if the input is not included in the caption
        {
            image.parentNode.style.display = "none";
        }
        else 
        {
            image.parentNode.removeAttribute("style");
        }
    }
});