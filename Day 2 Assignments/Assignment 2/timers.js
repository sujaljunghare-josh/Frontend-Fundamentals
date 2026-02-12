// This example will count down from 10 to 0 in the console

let timeLeft = 10;

console.log("Countdown starts at:", timeLeft);

const timerId = setInterval(function () {
  timeLeft = timeLeft - 1;
  console.log("Time left:", timeLeft);

  if (timeLeft <= 0) {
    console.log("Time's up!");
    clearInterval(timerId); // stop the interval when we reach 0
  }
}, 1000); 