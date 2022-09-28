const screen = document.querySelector(".screen");

const timer = () => {
  let hours = new Date().getHours();
  let minute = new Date().getMinutes();
  let second = new Date().getSeconds();
  let session = "AM";

  if (hours == 0) {
    hours = 12;
  }

  if (hours > 12) {
    hours = hours - 12;
    session = "PM";
  }

  screen.innerText = `${hours < 10 ? "0" + hours : hours}:${
    minute < 10 ? "0" + minute : minute
  }:${second < 10 ? "0" + second : second} ${session}`;
};

setInterval(timer, 1000);
