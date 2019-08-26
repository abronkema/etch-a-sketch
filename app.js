const mainContainer = document.querySelector(".container");

function createGrid(number) {
  let gridSize = number * number;
  for (i = 1; i <= gridSize; i++) {
    const newBlock = document.createElement("div");
    let newDiv = mainContainer.appendChild(newBlock);
    newDiv.className = "block";
    // TODO - Remove helpful innerText
    newBlock.innerText = i;
  }
}
