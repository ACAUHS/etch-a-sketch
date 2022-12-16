//global variables
const canvas = document.querySelector("#canvas");

//builds a grid
for (let i = 0; i < 256; i++) {
  const grid = document.createElement("div");
  grid.classList.add("grid");
  canvas.appendChild(grid);
}
console.log(canvas)

//event listener to wait for hover

document.querySelectorAll('.grid').forEach(grid => grid.addEventListener('mouseover', () => {
  grid.classList.add('colour')
}))