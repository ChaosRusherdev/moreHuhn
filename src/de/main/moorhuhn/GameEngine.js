const image = document.getElementById("image");

let isDragging = false;
let offsetX, offsetY;

image.addEventListener("mousedown", (e) => {
    isDragging = true;
    offsetX = e.clientX - image.getBoundingClientRect().left;
    offsetY = e.clientY - image.getBoundingClientRect().top;
});

image.addEventListener("click", () => {
    alert("Image Clicked!");
});
