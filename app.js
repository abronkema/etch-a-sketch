const mainContainer = document.querySelector(".container");

function createGrid(number) {
  // gridSize should be the number of rows and number of columns
  // for each number, create a row
  // for each row, create a block
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
