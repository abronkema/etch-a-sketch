const mainContainer = document.querySelector(".container");

function createGrid(number) {
  for (i = 1; i <= number; i++) {
    const newBlock = document.createElement("div");
    let newDiv = mainContainer.appendChild(newBlock);
    newDiv.className = "block";
    // TODO - Remove helpful innerText
    newBlock.innerText = i;
  }
}
