const imageElements = document.querySelectorAll("#gallery img"); // Select all images inside #gallery
const images = Array.from(imageElements).map(img => img.src);
let index = 0;
const current_img = document.getElementById("current_img");
const prev_button = document.getElementById("prev");
const next_button = document.getElementById("next");
current_img.src = images[index];

prev_button.addEventListener("click", () => {
    index = (index-1+images.length) % images.length
    current_img.src = images[index];
})
next_button.addEventListener("click", () => {
    index = (index+1+images.length) % images.length
    current_img.src = images[index];
})

imageElements.forEach(element => {
    element.addEventListener("click", () => {
        current_img.src = element.src;
        index = images.indexOf(element.src)
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0;
    })
});