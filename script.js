const container = document.querySelector(".container");

let n = 16;
const grid = [];

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

