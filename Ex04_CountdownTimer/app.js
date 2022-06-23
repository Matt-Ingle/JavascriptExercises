const timeDisplay = document.getElementById("timeDisplay");
const minutesInput = document.getElementById("minutesInput");
const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");
const resetButton = document.getElementById("resetButton");

let interval;
let duration; // number of **seconds** remaining

function onTick() {
  console.log("Tick at " + new Date().toLocaleString())
}

function startCountdown() {
  duration = parseInt(timeDisplay.innerText) * 60; 
  interval = setInterval(onTick, 1000);
}

startButton.addEventListener('click', () => {
  startCountdown();
});

stopButton.addEventListener('click', () => {
  clearInterval(interval);  
})

resetButton.addEventListener('click', () => {
  clearInterval(interval);
  timeDisplay.innerText = "00:00";
});