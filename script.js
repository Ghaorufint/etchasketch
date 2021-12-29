const container = document.getElementById("container");
const clearButton = document.getElementById("clear");
const resizeButton = document.getElementById("resize-grid");
const sizeValue = document.getElementById('sizeValue')
let currentSize = 16;

function setupGrid(size) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
        cell.addEventListener('mouseover', colorGrid);
        container.appendChild(cell);
    }

};

function setCurrentSize(newSize) {
    currentSize = newSize
  }

function changeSize(value) {
    setCurrentSize(value);
    updateSizeValue(value);
    reloadGrid();
}

function updateSizeValue(value) {
    sizeValue.innerHTML = 'current size: ' + value + ' x ' + value;
}

function reloadGrid() {
    clearGrid();
    setupGrid(currentSize);
}

function clearGrid() {
    container.innerHTML = '';
}

function colorGrid() {
    this.style.backgroundColor = "black";
}

function promptSize() {
    let size = prompt("how big do you want it? type a number between 1-64");
    updateSizeValue(size);
    changeSize(size);
    setupGrid(size);
}

clearButton.addEventListener("click", reloadGrid);
resizeButton.addEventListener("click", promptSize);
setupGrid(currentSize);