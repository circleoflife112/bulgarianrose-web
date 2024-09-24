const productSlider = () => {
  const sldieButton = document.querySelectorAll(".btn");
  const sliderWrap = document.getElementById("alltime_product");
  const imageList = document.getElementById("alltime_product_slider");
  const slideList = document.querySelectorAll("#alltime_product_slider li");
  const margin = 40;

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
