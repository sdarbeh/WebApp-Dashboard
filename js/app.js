const nav = document.querySelector("nav");
const hamburger = document.querySelector(".hamburger");
const alertIcon = document.querySelector(".icon-bell-o");
const alertIconLight = document.querySelector(".alert-icon-light");

alertIcon.onmouseover = () => {
    alertIconLight.classList.toggle("shake");
};

hamburger.addEventListener("click", function() {
    hamburgerMenu();
});


// -------- Functions
tabletMediaQuery = () => {
    const x = window.matchMedia("(min-width: 768px)");
    const header = document.querySelector("header");
    const mainContent = document.querySelector(".main-content");
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
}; alertBox();

trafficFilterFocus = () => {
    let options = document.querySelectorAll(".traffic-options");
    for (let i = 0; i < options.length; i++) {
        options[i].addEventListener("click", ()=> {
            options[i].classList.toggle("filter-active");
        })
    }
}; trafficFilterFocus();

popUpBox = () => {
    let popUpBox = document.querySelector(".alert-pop-up");
    let parent = document.querySelector(".dropdown-content");
    let notification = document.querySelectorAll(".notification-content");
    let viewed = document.querySelectorAll(".notification-icon");
    let close = document.querySelector(".alert-pop-up-close");
    let notificationAmount = document.querySelector(".notification-numbe");

    alertIcon.addEventListener("click", () => {
        popUpBox.classList.toggle("pop-up-active")
    });
    for (let i = 0; i < notification.length; i++) {
        viewed[i].addEventListener("click", () => {
            notification[i].remove();
            // notificationAmount.innerHTML = parent.children.length;
            console.log(parent.childElementCount);
            if (parent.childElementCount === 0) {
                let div = document.createElement('div');
                div.innerHTML = "    <div class=\"empty-notification\"><div class=\"empty-icon-container\"><svg class=\"empty-icon\"><use xlink:href=\"sprite/sprite.svg#icon-frown\"/></svg></div><p class=\"empty-message\">Wow, such empty</p></div>\n";
                popUpBox.insertBefore(div, popUpBox.children[1]);
                alertIconLight.style.display = "none";
            }
        })}
    close.addEventListener("click", () => {
        popUpBox.classList.toggle("pop-up-active")
    })
}; popUpBox();

// Charts
let lineGraph = document.querySelector('#traffic-chart').getContext('2d');
let trafficLine = new Chart(lineGraph, {
    type: 'line',
    data: {
        labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
        datasets: [{
            label: 'Hourly',
            backgroundColor: "rgba(145, 147, 217, 0.40)",
            borderCapStyle: "square",
            borderColor: "rgba(145, 147, 217, 0.60)",
            lineTension: 0,
            pointBackgroundColor: "#FFFFFF",
            pointBorderColor: "#7477bf",
            pointHoverBackgroundColor: '#7477bf',
            pointBorderWidth: 2,
            pointRadius: 4,
            data: [750, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750, 2250] }]},
    options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: { position: 'none' },
        scales: { yAxes: [{ stacked: true,  }], }} });

let BarChart = document.querySelector('#daily-traffic-chart').getContext('2d');
let DailyTrafficChart = new Chart(BarChart, {
    type: 'bar',
    data:  {
        labels: ['S','M', 'T', 'W', 'T', 'F', 'S'],
        datasets: [{
            label: 'Daily Traffic',
            backgroundColor: '#7477bf',
            hoverBackgroundColor: "#4d4b72",
            data: [50, 100, 175, 125, 275, 200, 100] }] },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: { position: 'none' },
        scales: {
            yAxes: [{ stacked: true,  }], } } });

let pieGraph = document.querySelector('#mobile-users-chart').getContext('2d');
let mobileUserChart = new Chart(pieGraph, {
    type: 'doughnut',
    data:  {
        labels: ['Phones','Tablets','Desktop'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: ['#81c98f', '#74B1BF','#7477bf'],
            data: [18,15,75],
            borderWidth: 0, }] },
    options: {
        legend: { position: 'right', },
        responsive: true,
        maintainAspectRatio: false, } });
Chart.defaults.global.defaultFontColor='#BEBEBE';