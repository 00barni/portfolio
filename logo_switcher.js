let logos = [
    "sources/logo.ico",
    "sources/logo2.ico",
    "sources/logo3.ico",
    "sources/logo4.ico",
    "sources/logo5.ico",
    "sources/logo6.ico",
    "sources/logo7.ico"
];

function getRandom() {
    return logos[Math.floor(Math.random() * logos.length)];
}

let intervalId = null; // Nyomon követjük az intervallumot
let idleTime = 0;
const maxIdleTime = 33; // 60 másodperc (1 perc)

function isIndexPage() {
    return window.location.pathname === "/" || window.location.pathname === "/portfolio/" || window.location.pathname.endsWith("index.html");
}

function startLogoRotation() {
    if (!intervalId) {
        intervalId = setInterval(() => {
            let selectedLogo = getRandom();
            document.querySelector("link[rel='shortcut icon']").setAttribute("href", selectedLogo);
        }, 1500);
    }
}

function stopLogoRotation() {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    }
}

function changeLogoLogic() {
    if (isIndexPage()) {
        // Ha az index.html oldalon vagyunk, folyamatosan változik a logó
        startLogoRotation();
    } else {
        // Más oldalakon várunk 1 percet, mielőtt a logó elkezd változni
        stopLogoRotation(); // Biztosítjuk, hogy nincs futó intervallum
        document.querySelector("link[rel='shortcut icon']").setAttribute("href", "sources/logo.ico"); // Kék logó
    }
}

function resetIdleTimer() {
    idleTime = 0;
    if (!isIndexPage()) {
        stopLogoRotation();
        document.querySelector("link[rel='shortcut icon']").setAttribute("href", "sources/logo.ico");
    }
}

function checkIdleTime() {
    if (!isIndexPage()) {
        idleTime++;
        if (idleTime >= maxIdleTime) {
            startLogoRotation();
        }
    }
}

// Figyeljük a felhasználói interakciókat
window.onload = function() {
    setInterval(checkIdleTime, 1000); // 1 másodpercenként ellenőrizzük az inaktivitást

    document.addEventListener('mousemove', resetIdleTimer);
    document.addEventListener('keydown', resetIdleTimer);
    document.addEventListener('click', resetIdleTimer);

    changeLogoLogic(); // Betöltéskor azonnal meghívjuk a megfelelő logikát
};
