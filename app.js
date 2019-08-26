const mainContainer = document.querySelector(".container");
const resetButton = document.getElementById("reset");

function createGrid(number) {
  for (row = 1; row <= number; row++) {
    const newRow = document.createElement("div");
    let newDiv = mainContainer.appendChild(newRow);
    newDiv.className = "row";
    for (block = 1; block <= number; block++) {
      const newBlock = document.createElement("div");
      let newDiv = newRow.appendChild(newBlock);
      newDiv.className = "block";
    }
  }
}

function clearGrid() {
  while (mainContainer.firstChild) {
    mainContainer.removeChild(mainContainer.firstChild);
  }
}

resetButton.addEventListener("click", function(el) {
  el = prompt("Enter grid size");
  clearGrid();
  createGrid(parseInt(el));
});
