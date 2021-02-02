let seconds = 0;
let minutes = 0;
let hours = 0;

let timer;

let statusCount = true;

function formatTime(num) {
  return num >= 10 ? num : `0${num}`;
}

function counter() {
  seconds += 1;

  if (seconds >= 60) {
    seconds = 0;
    minutes += 1;
  }

  if (minutes >= 60) {
    minutes = 0;
    hours += 1;
  }

  hours > 24 ? (hours = 0) : hours;

  return `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
}

function start() {
  if (statusCount) {
    timer = setInterval(function () {
      document.querySelector(".content").innerText = counter();
      document.querySelector(".content").style.color = "green";
    }, 1000);
    statusCount = false;
  }
}

function pause() {
  if (!statusCount) {
    clearInterval(timer);
    document.querySelector(".content").style.color = "red";
    statusCount = true;
  }
}

function restart() {
  seconds = 0;
  minutes = 0;
  hours = 0;

  document.querySelector(".content").innerText = `${formatTime(
    hours
  )}:${formatTime(minutes)}:${formatTime(seconds)}`;

  document.querySelector(".content").style.color = "black";
}
