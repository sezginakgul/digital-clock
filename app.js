const screen = document.querySelector(".screen");

const timer = () => {
  let hours = new Date().getHours();
  let minute = new Date().getMinutes();
  let second = new Date().getSeconds();
  screen.innerText = `${hours < 10 ? "0" + hours : hours}:${
    minute < 10 ? "0" + minute : minute
  }:${second < 10 ? "0" + second : second} ${hours >= 11 ? "PM" : "AM"}`;
};

setInterval(timer, 1000);
