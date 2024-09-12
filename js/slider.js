const sliderWrap = document.getElementById("alltime_product_wrap");
let slides = document.getElementById("alltime_product_slider");
const slideItem = document.querySelectorAll(".slide_item");
let slideCount = slideItem.length;
const slideMargin = 40;

let currentIdx = 0; // 현재 인덱스 값

const preBtn = document.querySelector(".pre-btn");
const nextBtn = document.querySelector(".next-btn");

makeClone();

function makeClone() {
  for (let i = 0; i < slideCount; i++) {
    // i 는 매개변수. slideItem[0~4]>> 슬라이드 아이템 수가 5개니까 인덱스값은 0부터 4까지로 5개를 만들어 주면 되니까. 그리고 i는 1씩 증가한다는 뜻.
    //a.cloneNode(), a.cloneNode(true) > true는 a의 자식요소까지 복제하겠다
    let cloneSlide = slideItem[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    slides.appendChild(cloneSlide);
  }
  for (let i = slideCount - 1; i >= 0; i--) {
    //prepend 는 요소의 앞에 요소를 추가하는 것. 그러므로 인덱스값 4부터 차례대로 들어가야 합니다.
    let cloneSlide = slideItem[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    slides.prepend(cloneSlide);
  }

  setTimeout(function () {
    slides.classList.add("animated");
  }, 100);

  // if (sliderWrap.clientWidth < 1200) {
  //   slides.style.transform = `translateX(-${50}%)`;
  // } else if (sliderWrap.clientWidth >= 1200) {
  //   slides.style.transform = `translateX(-${33.333}%)`;
  // }
}

slides.style.left =
  -(slideItem[0].clientWidth + slideMargin) * slideCount + "px";

console.log(slides.clientWidth);

// console.log(slides.clientWidth);

nextBtn.addEventListener("click", function () {
  moveSlide(currentIdx + 1);
});

preBtn.addEventListener("click", function () {
  moveSlide(currentIdx - 1);
});

function moveSlide(num) {
  // 이 함수가 실행될 때 일어나는 일들은 괄호 안과 같다
  currentIdx = num; // 매개변수 num은 currentIdx 즉 현재 인덱스를 의미하며
  slides.style.left = -num * (slideItem[0].clientWidth + slideMargin) + "px"; //이 함수가 시작될 때 슬라이드의 left 값은 바뀌는데 slideItem(li)의 넓이 + slideMargin(40px) 더한 값의 -값이다.

  if (currentIdx == slideCount || currentIdx == -slideCount) {
    setTimeout(function () {
      slides.style.left = "-2000px";
      currentIdx = 0;
    }, 500);
    setTimeout(function () {
      slides.classList.remove("animated");
    }, 300);
    setTimeout(function () {
      slides.classList.add("animated");
    }, 600);
  }

  console.log(currentIdx, slideCount);
}

console.log(slideCount);
