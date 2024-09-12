const navHolder = document.getElementById('main_nav_holder');
const mainNav = document.getElementById('main_nav');
const logoHolder = document.getElementById('bulgarianrose_logo');
const bulgarianLogo = document.querySelector('#bulgarianrose_logo a');

// function changeLogoPosition() {
//   if(navHolder.clientWidth < '800px') {
//     let newLogo = bulgarianLogo.cloneNode(true);
//     newLogo.classList.add('cloned_logo');
//     navHolder.appendChild(newLogo);
//   } 
  
//   console.log(newLogo);
// }


// navHolder.addEventListener('load', changeLogoPosition);

// const body = document.getElementsByTagName('body')[0];

// window.onresize = function(event) {
//   const newLogo = bulgarianLogo.cloneNode(true);
//   let innerWidth = window.innerWidth;
//   innerWidth <= '800px' ? navHolder.appendChild(newLogo): navHolder.removeChild;
// }

const hamburgerBtnHolder = document.querySelectorAll('.hamburger_menu');
const hamburgerBtn = document.querySelectorAll('.hamburger_menu a');
const asideNavi = document.getElementById('aside_nav');
const mainPage = document.getElementById('main');
let mainPageWidth = mainPage.clientWidth;

function occurAside() {  
  asideNavi.classList.toggle('active');
  asideNavi.classList.toggle('mobile_nav');
}

hamburgerBtnHolder[0].addEventListener('click', occurAside);
hamburgerBtnHolder[1].addEventListener('click', occurAside);

console.log(mainPageWidth);