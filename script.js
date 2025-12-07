const container = document.querySelector(".container");

const grid = [];

function applyGrid(n) {
  for (let i = 0; i < n; i++) {
    grid[i] = [];
    const row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < n; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      row.appendChild(cell);
      grid[i][j] = cell;
    }
    container.appendChild(row);
  }
}

let n = 16;
applyGrid(n);

const randomColor = () => `hsl(${Math.random() * 360}, 100%, 50%)`;

container.addEventListener('mouseover', (e) => {
  // Find the closest element with the `cell` class from the event target
  const cell = e.target.closest('.cell');
  // If the click wasn't inside a cell, ignore it
  if (!cell || !container.contains(cell)) return;

  cell.style.backgroundColor = randomColor();
});

const reset = document.querySelector("#reset");

reset.addEventListener("click", (e) => {
  grid.forEach((row) => {
    row.forEach((cell) => {
      cell.style.backgroundColor = "white";
    });
  });
});

const change = document.querySelector("#change");

change.addEventListener("click", (e) => {
  do {
    n = parseInt(prompt("Number of squares per side (max. 100):"));
  } while (n <= 0 || n > 100);
  container.replaceChildren();
  grid.length = 0;
  applyGrid(n);
});
