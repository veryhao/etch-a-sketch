const grid = document.querySelector(".grid");
createGrid(16);

const squares = document.querySelectorAll(".col");
const btnReset = document.querySelector(".btn-reset");

btnReset.addEventListener("click", () => {
  for (const square of squares) {
    square.style.backgroundColor = "white";
  }
});

for (const square of squares) {
  square.addEventListener("mouseover", () => {
    square.style.backgroundColor = "black";
  });
}

function createGrid(size) {
  for (let i = 0; i < size; i++) {
    row = document.createElement("div");
    row.className = "row";
    for (let i = 0; i < size; i++) {
      col = document.createElement("div");
      col.className = "col";
      row.appendChild(col);
    }
    grid.appendChild(row);
  }

  const squares = document.querySelectorAll(".col");
  for (const square of squares) {
    dimensions = 500 / size;
    square.style.height = `${dimensions}px`;
    square.style.width = `${dimensions}px`;
  }
}
