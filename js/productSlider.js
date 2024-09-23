const productSlider = () => {
  const sldieButton = document.querySelectorAll(".btn");
  const imageList = document.getElementById("alltime_product_slider");
  const slideList = document.querySelectorAll("#alltime_product_slider li");
  const margin = 40;
  console.log(slideList); // 모든 li 요소가 선택되며 0, 1, 2, 3, 4로 나타난다.
  console.log(sldieButton);
  console.log(imageList);

  sldieButton.forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.id === "pre-btn" ? -1 : 1;
      const scrollAmount = (slideList[0].clientWidth + margin) * direction;
      imageList.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    });
  });
};

window.addEventListener("load", productSlider);
