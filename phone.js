const phone_button = document.getElementById("phone_button");
const phone_menu_bg = document.getElementById("phone_menu_bg");

//const buttons_arr = document.querySelectorAll(".navbar_buttons")

const buttons = document.getElementById("navbar_buttons");
const barcode = document.getElementById("barcode")

let state = false;

phone_button.addEventListener("click", () => {
    if (state) {
        buttons.style.top = "0vh";
        buttons.style.display="none";
        buttons.style.flexDirection = "row";
        phone_menu_bg.style.display="none";
        phone_button.textContent = "|||"

        for (let button of buttons.children) {
            console.log("HELLO");
            button.style.width = "9.4vw";
            button.style.height = "3.7vw";
            button.style.fontSize = "1.65vw"
        }

    } else {
        buttons.style.top = "20vh";
        buttons.style.display = "flex";
        buttons.style.flexDirection = "column";
        phone_menu_bg.style.display="block";
        phone_button.textContent = "XX"

        for (let button of buttons.children) {
            console.log("HELLO");
            button.style.width = "20vw";
            button.style.height = "7.4vw";
            button.style.fontSize = "3.5vw"
        }
    }
    state = !state;
});