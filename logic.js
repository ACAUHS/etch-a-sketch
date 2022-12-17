//global variables
const canvas = document.querySelector("#canvas");
const resetButton = document.querySelector('#reset')
let dimensions = 256;
//builds a grid
for (let i = 0; i < dimensions; i++) {
  const grid = document.createElement("div");
  grid.classList.add("grid");
  canvas.appendChild(grid);
}



function addColour() {
  document.querySelectorAll('.grid').forEach(grid => grid.addEventListener('dragenter', () => {
    grid.classList.add('colour')
  }))
  
  document.querySelectorAll('.grid').forEach(grid => grid.addEventListener('mousedown', () => {
    grid.classList.add('colour');
  }))
}

addColour()

function removeColour() {
  const check = canvas.getElementsByClassName('colour')
  console.log(check)
  check.classList.remove('colour')
}