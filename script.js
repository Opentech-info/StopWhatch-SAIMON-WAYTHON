let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let timer = null;

function updateDisplay() {
  document.getElementById("mainTime").textContent =
    String(minutes).padStart(2, "0") + ":" + String(seconds).padStart(2, "0");

  document.getElementById("msTime").textContent =
    "." + String(milliseconds).padStart(2, "0");
}

function startTimer() {
  if (timer !== null) return;

  timer = setInterval(() => {
    milliseconds++;

    if (milliseconds === 100) {
      milliseconds = 0;
      seconds++;
    }

    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }

    updateDisplay();
  }, 10);
}

function stopTimer() {
  clearInterval(timer);
  timer = null;
}

function resetTimer() {
  stopTimer();
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  updateDisplay();
}
