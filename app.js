const mainContainer = document.querySelector(".container");

function createGrid(number) {
  for (i = 0; i < number; i++) {
    const newBlock = document.createElement("div");
    let newDiv = mainContainer.appendChild(newBlock);
    newDiv.className = "block";
  }
}
