const DEFAULT_SIZE = 16;

let currentSize = DEFAULT_SIZE;

const grid = document.querySelector(".grid");
const btnClear = document.querySelector(".btn-clear");
const btnSize = document.querySelectorAll(".size-btns-wrapper > button");

btnClear.addEventListener("click", reloadGrid);

for (const btn of btnSize) {
  btn.addEventListener("click", () => {
    currentSize = btn.value;
    reloadGrid();
  });
}

let mouseDown = false;
addEventListener("mousedown", () => (mouseDown = true));
addEventListener("mouseup", () => (mouseDown = false));

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
    dimensions = grid.clientHeight / size;
    square.style.height = `${dimensions}px`;
    square.style.width = `${dimensions}px`;
    square.style.opacity = 0;
    square.addEventListener("mousedown", updatePixel);
    square.addEventListener("mouseover", updatePixel);
  }
}

function updatePixel(e) {
  if (e.type === "mouseover" && !mouseDown) return;
  if (e.target.style.opacity < 1) {
    e.target.style.backgroundColor = "black";
    pixelOpacity = +e.target.style.opacity;
    pixelOpacity += 0.1;
    e.target.style.opacity = pixelOpacity;
  }
}

function reloadGrid() {
  grid.innerHTML = "";
  createGrid(currentSize);
}

window.addEventListener("load", createGrid(currentSize));
