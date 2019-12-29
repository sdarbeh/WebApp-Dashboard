const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");
const userName = document.querySelector(".user-name");
const userProfilePic = document.querySelector(".profile-pic");
const logo = document.querySelector(".logo-container");
const header = document.querySelector("header");
const alertIcon = document.querySelector(".icon-bell-o");
const alertIconLight = document.querySelector(".alert-icon-light");
const mainContent = document.querySelector(".main-content");


document.querySelector("#default-focus").focus();



hamburger.addEventListener("click", function() {
    hamburgerMenu();
});


// -------- Functions
tabletMediaQuery = () => {
    const x = window.matchMedia("(min-width: 768px)");
    let headerNavItems = nav.getElementsByTagName("ul")[1];
    let titleSearch = document.querySelector(".page-title-search-bar");
    let mobileOnly = document.querySelectorAll(".mobile");
    if (x.matches) {
        headerNavItems.classList.remove("navigation-items-2");
        headerNavItems.classList.add("header-navigation-items");
        header.appendChild(headerNavItems);
        mainContent.insertBefore(titleSearch, mainContent.firstChild);
        for (let i = 0; i < mobileOnly.length; i++) {
            // removes all elements with class: "mobile"
            mobileOnly[i].remove() }}};
tabletMediaQuery();

hamburgerMenu = () => {
    hamburger.classList.toggle("is-active");
    nav.classList.toggle("menu-expanded");
};

alertBox = () => {
    let close = document.querySelector(".close");
    let alertMessageBox = document.querySelector(".alert-message-container");
    close.addEventListener("click", () => {
        alertMessageBox.style.display  = "none";
    })
};   alertBox();

// Charts
let lineGraph = document.getElementById('traffic-chart').getContext('2d');
