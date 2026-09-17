const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const menuOverlay = document.getElementById("menuOverlay");
const menuClose = document.getElementById("menuClose");



/* =========================================================
   OPEN MENU
========================================================= */

function openMenu() {

    mobileMenu.classList.add("active");
    menuOverlay.classList.add("active");

    menuToggle.setAttribute("aria-expanded", "true");

    document.body.classList.add("menu-open");
}



/* =========================================================
   CLOSE MENU
========================================================= */

function closeMenu() {

    mobileMenu.classList.remove("active");
    menuOverlay.classList.remove("active");

    menuToggle.setAttribute("aria-expanded", "false");

    document.body.classList.remove("menu-open");
}



/* =========================================================
   HAMBURGER
========================================================= */

menuToggle.addEventListener("click", function () {

    if (mobileMenu.classList.contains("active")) {
        closeMenu();
    } else {
        openMenu();
    }

});



/* =========================================================
   X CLOSE BUTTON
========================================================= */

menuClose.addEventListener("click", closeMenu);



/* =========================================================
   DARK OVERLAY CLOSE
========================================================= */

menuOverlay.addEventListener("click", closeMenu);



/* =========================================================
   CLOSE AFTER CLICKING MENU LINK
========================================================= */

const mobileLinks = document.querySelectorAll(".mobile-nav-link");

mobileLinks.forEach(function (link) {

    link.addEventListener("click", function () {
        closeMenu();
    });

});



/* =========================================================
   ESC KEY CLOSE
========================================================= */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {
        closeMenu();
    }

});