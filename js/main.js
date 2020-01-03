const nav = document.querySelector("nav");
const hamburger = document.querySelector(".hamburger");
const alertIcon = document.querySelector(".icon-bell-o");
const alertIconLight = document.querySelector(".alert-icon-light");
const mqMedium = window.matchMedia("(min-width: 768px)");
let notificationAmount = document.querySelector(".notification-number");
let parent = document.querySelector(".dropdown-content");
const createDiv = document.createElement('div');


window.onload = () => {
    // displays number of notifications in alert box
    notificationAmount.innerHTML = parent.childElementCount.toString();
    // toggles classes to hamburger and nav - allows mobile functions
    hamburger.addEventListener("click", function() {
        hamburgerMenu(); });
    // shaking alert green icon
    alertIcon.onmouseover = () => {
        alertIconLight.classList.toggle("shake"); };
    // Functions
    displayChart();
    mediaQMedium();
    NotificationPopUpBox();
    alertBox();
    chartFilter();
    messageSent();
    bodyOnLoad();
};
// --------------------- Functions ---------------------- //
hamburgerMenu = () => {
    // toggles class to hamburger, nav and palette theme picker. Mobile only use.
    hamburger.classList.toggle("is-active");
    nav.classList.toggle("menu-expanded");
};

mediaQMedium = () => {
    const header = document.querySelector("header");
    const mainContent = document.querySelector(".main-content");
    let headerNavItems = nav.getElementsByTagName("ul")[1];
    let titleSearch = document.querySelector(".page-title-search-bar");
    let mobileOnly = document.querySelectorAll(".mobile");
    if (mqMedium.matches) {
        // ---------  affects on screen sizes 768px and up -------- //
        headerNavItems.classList.remove("navigation-items-2");
        headerNavItems.classList.add("header-navigation-items");
        header.appendChild(headerNavItems);
        mainContent.insertBefore(titleSearch, mainContent.firstChild);
        for (let i = 0; i < mobileOnly.length; i++) {
            // removes all elements with class: "mobile"
            mobileOnly[i].remove() }}};

alertBox = () => {
    let close = document.querySelector(".close");
    close.addEventListener("click", () => {
        alertGoAway();
    })
};
alertGoAway = () => {
    let alertMessageBox = document.querySelector(".alert-message-container");
    // hides alert message box
    let mainContent = document.querySelector('.main-content');
    const mqLarge = window.matchMedia("(min-width: 1024px)");
    alertMessageBox.style.display = "none";
    // adjusts the grid height for traffic, daily traffic and mobile user
    if (mqMedium.matches) {mainContent.style.gridTemplateRows = "58px 290px 250px 190px minmax(450px, auto) 1fr"
    } if (mqLarge.matches) {mainContent.style.gridTemplateRows = "58px 390px 400px 190px minmax(450px, auto) 1fr"}
};

NotificationPopUpBox = () => {
    let popUpBox = document.querySelector(".alert-pop-up");
    // opens notification notification pop-up box
    alertIcon.addEventListener("click", () => {
        popUpBox.classList.toggle("pop-up-active") });
    // Clear selected notification(s) upon check mark click
    let notification = document.querySelectorAll(".notification-content");
    let viewed = document.querySelectorAll(".notification-icon");
    for (let i = 0; i < notification.length; i++) {
        viewed[i].addEventListener("click", () => {
            notification[i].remove();
            // Displays amount of notifications in alert box on every notification clear
            notificationAmount.innerHTML = parent.childElementCount.toString();
            // if the li's = 0, "such empty" message is inserted into DOM and displayed
            if (parent.childElementCount === 0) {
                createDiv.innerHTML = "<div class=\"empty-notification\"><div class=\"empty-icon-container\"><svg class=\"empty-icon\"><use xlink:href=\"sprite/sprite.svg#icon-frown\"/></svg></div><p class=\"empty-message\">Wow, such empty</p></div>\n";
                popUpBox.insertBefore(createDiv, popUpBox.children[1]);
                // bell light and alert message box is hidden
                alertIconLight.style.display = "none";
                alertGoAway();
            }
        })
    }
    // closes notification box upon "close" button click
    let close = document.querySelector(".alert-pop-up-close");
    close.addEventListener("click", () => {
        popUpBox.classList.toggle("pop-up-active")});
};

messageSent = () => {
    let messageSendButton = document.querySelector(".message-user-submit-button");
    messageSendButton.addEventListener('click', e=> {
        let userName = document.querySelector(".autocomplete-input");
        let userMessage = document.querySelector("#user_message");
        let bothEmpty = () => {
            alert("Both fields are empty. Please fill them out");
            userName.classList.add("empty-content");
            userMessage.classList.add("empty-content");
        };
        let sent = () => {
            alert('message sent');
            userName.classList.remove("empty-content");
            userMessage.classList.remove("empty-content");
            userName.value = "";
            userMessage.value = "";
        };
            if (userName.value === "" && userMessage.value === "") {
                bothEmpty()
            } else if (userName.value === "") {
                alert("Please select a user");
                userName.classList.add("empty-content");
                userMessage.classList.remove("empty-content");
            } else if (userMessage.value === "") {
                alert("Please write a message");
                userMessage.classList.add("empty-content");
                userName.classList.remove("empty-content");
            } else {
                sent();
            }
    });
};

// --------- autocomplete
let searchableUsers = ["Victoria Chamber", "Dale Byrd", "Dawn Wood", "Dan Oliver", "Michael Scott", "Sam Darbeh", "Justin Roiland", "Barney Stinson"];
!function(p){p.fn.autocomplete=function(o){var h=-1,n=[];return o=p.extend({hints:[],placeholder:"Search",width:200,height:16,showButton:!0,buttonText:"Search",onSubmit:function(t){},onBlur:function(){}},o),this.each(function(){var t=p("<div></div>").addClass("autocomplete-container").css("height",2*o.height),l=p('<input type="text" autocomplete="off" name="query">').attr("placeholder",o.placeholder).addClass("autocomplete-input").css({width:o.width,height:o.height});o.showButton&&l.css("border-radius","3px 0 0 3px");var e=p("<div></div>").addClass("proposal-box").css("width",o.width+18).css("top",l.height()+20),a=p("<ul></ul>").addClass("proposal-list");if(e.append(a),l.keydown(function(t){switch(t.which){case 38:t.preventDefault(),p("ul.proposal-list li").removeClass("selected"),0<=h-1?p("ul.proposal-list li:eq("+--h+")").addClass("selected"):h=-1;break;case 40:t.preventDefault(),h+1<n.length&&(p("ul.proposal-list li").removeClass("selected"),p("ul.proposal-list li:eq("+ ++h+")").addClass("selected"));break;case 13:if(-1<h){var e=p("ul.proposal-list li:eq("+h+")").html();l.val(e)}h=-1,a.empty(),o.onSubmit(l.val());break;case 27:h=-1,a.empty(),l.val("")}}),l.bind("paste keyup",function(t){if(13!=t.which&&27!=t.which&&38!=t.which&&40!=t.which&&(n=[],h=-1,a.empty(),""!=l.val())){var e="^"+l.val()+".*";for(var i in a.empty(),o.hints)if(o.hints[i].match(e)){n.push(o.hints[i]);var s=p("<li></li>").html(o.hints[i]).addClass("proposal").click(function(){l.val(p(this).html()),a.empty(),o.onSubmit(l.val())}).mouseenter(function(){p(this).addClass("selected")}).mouseleave(function(){p(this).removeClass("selected")});a.append(s)}}}),l.blur(function(t){h=-1,o.onBlur()}),t.append(l),t.append(e),o.showButton){var i=p("<div></div>").addClass("autocomplete-button").html(o.buttonText).css({height:o.height+2,"line-height":o.height+"px"}).click(function(){a.empty(),o.onSubmit(l.val())});t.append(i)}p(this).append(t),o.showButton&&t.css("width",o.width+i.width()+50)}),this}}(jQuery);
$(document).ready( () =>{
    $('#search-user-label').autocomplete({
        hints: searchableUsers,
        showButton: false,
    });
});

// ---------- Local storage
// sets values for local storage
bodyOnLoad = () => {
    if (localStorage.getItem("email") === "true") {
        document.querySelector("#email-toggle").checked = true;
    }
    if (localStorage.getItem("public") === "true") {
        document.querySelector("#profile-toggle").checked = true;
    }
    if (localStorage.getItem("timezone") != null) {
        document.querySelector("#timezone").value = localStorage.getItem("timezone");
    }
};
document.querySelector(".settings-submit-button").addEventListener("click", () => {
    localStorage.setItem("email", document.querySelector("#email-toggle").checked);
    localStorage.setItem("public", document.querySelector("#profile-toggle").checked);
    localStorage.setItem("timezone", document.querySelector("#timezone").value);
});
document.querySelector(".settings-cancel-button").addEventListener("click", function(){
    localStorage.removeItem("email");
    localStorage.removeItem("public");
    localStorage.removeItem("timezone");
    document.querySelector("#email-toggle").checked = false;
    document.querySelector("#profile-toggle").checked = false;
    document.querySelector("#timezone").value = 0;
});
// Charts
// ----------------------------------------  LINE GRAPHS ------------------------------------------------------
let trafficLineGraph = document.querySelector('#traffic-chart');
// WEEKLY (DEFAULT)
let trafficLineWeekly =  {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
        backgroundColor: "rgba(145, 147, 217, 0.40)",
        borderCapStyle: "square",
        borderColor: "rgba(145, 147, 217, 0.60)",
        lineTension: 0,
        pointBackgroundColor: "#FFFFFF",
        pointBorderColor: "#7477bf",
        pointHoverBackgroundColor: '#7477bf',
        pointBorderWidth: 2,
        pointRadius: 3,
        data: [750, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750, 2250] }]
};
// HOURLY
let trafficLineHourly = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
    datasets: [
        { label: 'AM',
            borderCapStyle: "square",
            backgroundColor: "transparent",
            borderColor: "rgba(145, 147, 217, 0.60)",
            lineTension: 0,
            pointBackgroundColor: "#FFFFFF",
            pointBorderColor: "#7477bf",
            pointHoverBackgroundColor: "#7477bf",
            pointBorderWidth: 2,
            pointRadius: 2,
            data: [13, 5, 3, 0, 0, 2, 1, 2, 14, 23, 41, 59]
        }, {
            label: 'PM',
            borderCapStyle: "square",
            backgroundColor: "transparent",
            borderColor: "rgba(112, 192, 143, 0.40)",
            lineTension: 0,
            pointBackgroundColor: "#FFFFFF",
            pointBorderColor: "#81c98f",
            pointHoverBackgroundColor: "#81c98f",
            pointBorderWidth: 2,
            pointRadius: 2,
            data: [67, 51, 54, 43, 84, 68, 75, 54, 87, 68, 87, 68] }  ]
};
// DAILY
let trafficLineDaily = {
    labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
    datasets: [{
        backgroundColor: "rgba(112, 192, 143, 0.20)",
        borderCapStyle: "square",
        borderColor: "rgba(112, 192, 143, 0.60)",
        lineTension: 0,
        pointBackgroundColor: "#FFFFFF",
        pointBorderColor: "#81c98f",
        pointHoverBackgroundColor: '#81c98f',
        pointBorderWidth: 2,
        pointRadius: 3,
        data: [107, 178, 143, 214, 285, 214, 249, 178, 249, 321, 249, 321] }]
};
// MONTHLY
let trafficLineMonthly = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
        backgroundColor: "rgba(112, 184, 192, 0.20)",
        borderCapStyle: "square",
        borderColor: "rgba(112, 184, 192, 0.60)",
        lineTension: 0,
        pointBackgroundColor: "#FFFFFF",
        pointBorderColor: "#74B1BF",
        pointHoverBackgroundColor: '#74B1BF',
        pointBorderWidth: 2,
        pointRadius: 3,
        data: [39000, 65000, 52000, 78000, 104000, 78000, 91000, 65000, 91000, 117000, 91000, 117000] }]
};
// options for all line charts
let trafficLineChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: { position: 'none' },
    scales: { yAxes: [{ stacked: true,  }],}
};
// sets the data for each chart
let trafficLineChartData = trafficLineWeekly;
// ----------------------------------------  BAR GRAPH  ------------------------------------------------------
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
// ----------------------------------------  PIE GRAPH  ------------------------------------------------------
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

chartFilter = () => {
    let trafficOptions = document.querySelectorAll(".traffic-options");
    const hourlyLegend = document.querySelector(".hourly-legend-container");
    let removeHourlyLegend = () => {hourlyLegend.classList.remove("hourlyChart-is-displayed")} ;
    // Sets weekly(default traffic graph) background color to active(green)
    document.querySelector(".weekly-option").style.backgroundColor = "#81c98f";document.querySelector(".weekly-option").style.color = "white";

    for (let i = 0; i < trafficOptions.length; i++) {
        trafficOptions[i].addEventListener("click", () => {
            let backgroundUnset = () => {
                trafficOptions[0].style.backgroundColor = "white";
                trafficOptions[0].style.color = "#848484";
                trafficOptions[1].style.backgroundColor = "white";
                trafficOptions[1].style.color = "#848484";
                trafficOptions[2].style.backgroundColor = "white";
                trafficOptions[2].style.color = "#848484";
                trafficOptions[3].style.backgroundColor = "white";
                trafficOptions[3].style.color = "#848484"; };

            let setBackground = () => { trafficOptions[i].style.backgroundColor = "#81c98f"; trafficOptions[i].style.color = "white"; };
            let everything = () => { displayChart(); backgroundUnset(); setBackground(); };

            if (trafficOptions[i].innerHTML === "Hourly") {
                trafficLineChartData = trafficLineHourly;
                everything();
                hourlyLegend.classList.add("hourlyChart-is-displayed")
            } else if (trafficOptions[i].innerHTML === "Daily") {
                removeHourlyLegend();
                trafficLineChartData = trafficLineDaily;
                everything();
            } else if (trafficOptions[i].innerHTML === "Weekly") {
                removeHourlyLegend();
                trafficLineChartData = trafficLineWeekly;
                everything();
            } else if (trafficOptions[i].innerHTML === "Monthly") {
                removeHourlyLegend();
                trafficLineChartData = trafficLineMonthly;
                everything(); }
        })
    }
};

displayChart = () => {
    let trafficChart = new Chart(trafficLineGraph, {
        type: 'line',
        data: trafficLineChartData,
        options: trafficLineChartOptions
    });
};