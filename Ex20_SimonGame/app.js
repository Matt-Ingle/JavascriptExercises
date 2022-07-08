const topLeft = document.getElementById("topLeft");
const topRight = document.getElementById("topRight");
const bottomLeft = document.getElementById("bottomLeft");
const bottomRight = document.getElementById("bottomRight");
const startButton = document.getElementById("startButton");

const SPEED = 150;
let clickEnabled = false;

const panels = [
  topLeft,
  topRight,
  bottomLeft,
  bottomRight
];

// -------------------------------------------------------
function getRandomPanel() {

  const randomNumber = Math.floor(Math.random() * panels.length);
  return panels[randomNumber];  
}

// -------------------------------------------------------
function flash(element) {
  return new Promise(resolve => {
    element.classList.add("active");
    setTimeout(() => {
      element.classList.remove("active");
      setTimeout(() => {
        resolve();
      }, SPEED);
    }, SPEED);
  });
}

// -------------------------------------------------------
function onPanelClicked(e) {
  e.preventDefault();  
}

// -------------------------------------------------------
async function flashSequnce(sequence) {
  panels.forEach(p => p.classList.remove("click-enabled"));
  for (const panel of sequence) {
    await flash(panel);
  }
  panels.forEach(p => p.classList.add("click-enabled"));
}

// -------------------------------------------------------
async function initialize() {
  const sequence = [ topRight, bottomRight, bottomLeft, topLeft ];
  flashSequnce(sequence);
  
}

startButton.addEventListener('click', () => {
  initialize();
});

// Add an event listener to each of the panels
panels.forEach(panel => {
  panel.addEventListener('click', onPanelClicked);
});


initialize();

