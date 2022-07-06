const gridDiv = document.getElementById('grid');
const runningDisplay = document.getElementById('runningDisplay');

const SPEED = 300; // how fast the moves, in milliseconds
const width = 20;
const MOVE_RIGHT = 1;
const MOVE_LEFT = -1;
const MOVE_UP = -width;
const MOVE_DOWN = width;

let gridSquares = [];
let currentX = MOVE_RIGHT;  // Ball's direction in x-direction (left/right)
let currentY = MOVE_DOWN;   // Ball's direction in y-direction (up/down)
let ballPos = 42;     // Ball is initially in cell #42
let interval = null;  // If interval is non-null, we're "ticking"

let currentDirection = MOVE_RIGHT + MOVE_DOWN;

for (let i = 0; i < width * width; i++) {
  const newDiv = document.createElement('div');
  gridDiv.appendChild(newDiv);
  gridSquares.push(newDiv);
}

function onTick() {
  // hit bottom wall
  if (ballPos + currentDirection >= (width*width) && currentDirection == MOVE_DOWN) {
    
    return;
  }

  // hit top wall 
  if (ballPos + currentDirection < 0 && currentDirection == MOVE_UP) {
    return;
  }

  // hit left wall
  if (ballPos % width === 0 && currentDirection === MOVE_LEFT) {
    return;
  }

  // hit right wall
  if (ballPos % width === width - 1 && currentDirection === MOVE_RIGHT) {
    return;
  }

  gridSquares[ballPos].classList.remove("ball");
  ballPos += currentDirection;
  gridSquares[ballPos].classList.add("ball");
}

document.addEventListener('keyup', (e) => {
  if (e.code === "Enter") {
    if (interval) {
      clearInterval(interval);
      interval = null;
      runningDisplay.innerText = "Stopped";
    } else {
      interval = setInterval(onTick, SPEED);
      runningDisplay.innerText = "Running";
    }
  }
});