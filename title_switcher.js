const title = document.title;

let showDefault = true;

function updateTitle() {
    if (showDefault) {
        document.title = "barniartworks";
        setTimeout(updateTitle, 1500); // "barniartworks" 1 mp-ig marad
    } else {
        document.title = title
        setTimeout(updateTitle, 3000);
    }
    showDefault = !showDefault;
}

updateTitle();