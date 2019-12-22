const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");
const userName = document.querySelector(".user-name");
const userProfilePic = document.querySelector(".profile-pic");
const logo = document.querySelector(".logo-container");
const header = document.querySelector("header");
const alertIcon = document.querySelector(".icon-bell-o");
const alertIconLight = document.querySelector(".alert-icon-light");
const mainContent = document.querySelector(".main-content");

hamburger.addEventListener("click", function() {
    hamburgerMenu();
});

hamburgerMenu = () => {
        hamburger.classList.toggle("is-active");
        nav.classList.toggle("menu-expanded");
};

tabletMediaQuery = () => {
    const x = window.matchMedia("(min-width: 768px)");
    let headerNavItems = nav.getElementsByTagName("ul")[1];
    let titleSearch = document.querySelector(".page-title-search-bar");
    if (x.matches) {
        headerNavItems.classList.remove("navigation-items-2");
        headerNavItems.classList.add("header-navigation-items");
        header.appendChild(headerNavItems);
        mainContent.insertBefore(titleSearch, mainContent.firstChild);
    }
};
tabletMediaQuery();

activePage = () => {
    let navElements = document.querySelectorAll("content li");
    for (var i = 0; i &lt; navElements.length; i++) {
        console.log('navElements[i]: ', navElements[i].clientHeight);
    }
        // navItems[i].addEventListener("click", () => {
        //
        //     // document.querySelectorAll("content li").classList.toggle("nav-active");
        // });
    }
};
activePage();