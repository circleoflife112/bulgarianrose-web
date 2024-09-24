const navHolder = document.getElementById("main_nav_holder");
const mainNav = document.getElementById("main_nav");
const logoHolder = document.getElementById("bulgarianrose_logo");
const bulgarianLogo = document.querySelector("#bulgarianrose_logo a");

const hamburgerBtnHolder = document.querySelectorAll(".hamburger_menu");
const hamburgerBtn = document.querySelectorAll(".hamburger_menu a");
const asideNavi = document.getElementById("aside_nav");
const mainPage = document.getElementById("main");
let mainPageWidth = mainPage.clientWidth;

function occurAside() {
  asideNavi.classList.toggle("active");
  asideNavi.classList.toggle("mobile_nav");
}

hamburgerBtnHolder[0].addEventListener("click", occurAside);
hamburgerBtnHolder[1].addEventListener("click", occurAside);

console.log(mainPageWidth);
