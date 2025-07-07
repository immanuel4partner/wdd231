const navBotton = document.querySelector("#ham-btn");
const navBar = document.querySelector("#nav-bar");

navBotton.addEventListener("click", () => {
    navBotton.classList.toggle("show");
    navBar.classList.toggle("show");
});
