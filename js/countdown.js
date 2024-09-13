// function getClock() {
//   const date = new Date();
//   console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
// }

// setInterval(getClock, 1000);

// Set the date we're counting down to
const countDownDate = new Date("September 31, 2024 23:59:59").getTime();

// Update the count down every 1 second
const x = setInterval(function () {
  // Get today's date and time
  const now = new Date().getTime();

  // Find thd distance between now and the count down date
  const distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24)); // 아마 1초마다 60초 60분 24시간
  const hours = String(
    Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  ).padStart(2, "0");
  const minutes = String(
    Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  ).padStart(2, "0");
  const seconds = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(
    2,
    "0"
  );

  // Display the result in the element with id
  const clock = document.getElementById("countdown_clock");

  clock.innerText =
    days + "d : " + hours + "h : " + minutes + "m : " + seconds + "s";

  // if the count down is finished, write some text

  if (distance < 0) {
    clearInterval(x);
    clock.innerText = "EXPRED";
  }
}, 1000);
