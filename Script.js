function myFunction(imgs) {
    var expandImg = document.getElementById("ProfilePhoto");
    var imgText = document.getElementById("imgtext");

    expandImg.src = imgs.src;
    imgText.textContent = imgs.alt;

    expandImg.parentElement.style.display = "block";
}
