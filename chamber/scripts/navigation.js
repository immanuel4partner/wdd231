// scripts/navigation.js

document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.querySelector("#menu-button");
    const navBar = document.querySelector("#nav-bar");

    if (menuBtn && navBar) {
        menuBtn.addEventListener("click", () => {
            navBar.classList.toggle("show");

            const expanded = menuBtn.getAttribute("aria-expanded") === "true" || false;
            menuBtn.setAttribute("aria-expanded", !expanded);
        });
    }
});
