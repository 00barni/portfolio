let logos = [
    "sources/logo.ico",
    "sources/logo2.ico",
    "sources/logo3.ico",
    "sources/logo4.ico",
    "sources/logo5.ico",
    "sources/logo6.ico",
    "sources/logo7.ico"
];

let checkPathName = (window.location.pathname === "/portfolio/" || window.location.pathname === "/portfolio/index.html")

function getRandom() {
    const randomIndex = Math.floor(Math.random() * logos.length);
    return logos[randomIndex];
}

let intervalId; // A változó, amivel nyomon követhetjük az intervallumot

function changeLogoEverySecond() {
    if (checkPathName) {
        // Ha index.html-en vagyunk, folyamatosan változik a logó
        if (!intervalId) {
            intervalId = setInterval(function() {
                let selectedLogo = getRandom();
                document.querySelector("link[rel='shortcut icon']").setAttribute("href", selectedLogo);
            }, 1500); // 1500 ms = 1,5 másodperc
        }
    } else {
        // Ha nem index.html-en vagyunk, várunk egy percet inaktivitásra
        if (!intervalId) {
            intervalId = setInterval(function() {
                if (idleTime >= maxIdleTime) {
                    let selectedLogo = getRandom();
                    document.querySelector("link[rel='shortcut icon']").setAttribute("href", selectedLogo);
                }
            }, 1500); // 1,5 másodpercenként változtatjuk a logót
        }
    }
}

let idleTime = 0;
const maxIdleTime = 60; // 60 másodperc (1 perc)

function resetIdleTimer() {
    idleTime = 0; // Ha van interakció, visszaállítjuk a számlálót
    if (checkPathName) {
        // Ha nem index.html-en vagyunk, visszaállítjuk az alap logót (kék)
        document.querySelector("link[rel='shortcut icon']").setAttribute("href", "sources/logo.ico");
    }
}

function checkIdleTime() {
    if (checkPathName) {
        idleTime++;
        if (idleTime >= maxIdleTime) {
            changeLogoEverySecond();
        }
    }
}

// Figyeljük a felhasználói interakciókat
window.onload = function() {
    setInterval(checkIdleTime, 1000); // 1 másodpercenként ellenőrizzük a tétlenséget
    
    // Ha van interakció, akkor visszaállítjuk a tétlenségi időt
    document.addEventListener('mousemove', resetIdleTimer);
    document.addEventListener('keydown', resetIdleTimer);
    document.addEventListener('click', resetIdleTimer);
};

changeLogoEverySecond();
