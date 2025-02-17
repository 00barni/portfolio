const phone_button = document.getElementById("phone_button");
const phone_menu_bg = document.getElementById("phone_menu_bg");

const buttons = document.querySelectorAll(".navbar_buttons");

let state = false;

phone_button.addEventListener("click", () => {
    buttons.forEach(button => {
        if (state) {
            button.style.display="none";
            phone_menu_bg.style.display="none";
        } else {
            button.style.display = "block";
            phone_menu_bg.style.display="block";
        }
    });
    state = !state;
});