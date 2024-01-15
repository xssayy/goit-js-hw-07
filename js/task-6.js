function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}
const controlsBox = document.querySelector(`#controls`);
controlsBox.classList.add(`controls-box`);
const input = document.querySelector(`[type="number"]`);
input.classList.add(`item-with-border`);
const createBtn = document.querySelector(`button[data-create]`);
createBtn.classList.add(`btn`);
const destroyBtn = document.querySelector(`button[data-destroy]`);
destroyBtn.classList.add(`btn`, `destroy-btn`);
const container = document.querySelector(`#boxes`);
container.classList.add("boxes-container");

createBtn.addEventListener("click", () => {
  createBoxes(input.value);
});

destroyBtn.addEventListener("click", () => {
  destroyBoxes();
});

function createBoxes(amount) {
  if (amount < 1 || amount > 100) {
    return;
  }
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    container.append(box);
  }
}

function destroyBoxes() {
  container.innerHTML = "";
}

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// const input = document.querySelector("input");
// const createButton = document.querySelector("[data-create]");
// const destroyButton = document.querySelector("[data-destroy]");
// const boxesContainer = document.getElementById("boxes");

// createButton.addEventListener("click", () => createBoxes(input.value));
// destroyButton.addEventListener("click", destroyBoxes);

// function createBoxes(amount) {
//   if (amount < 1 || amount > 100) {
//     alert("Please enter a number between 1 and 100");
//     return;
//   }

//   for (let i = 0; i < amount; i++) {
//     const box = document.createElement("div");
//     box.classList.add("box");
//     box.style.width = `${30 + i * 10}px`;
//     box.style.height = `${30 + i * 10}px`;
//     box.style.backgroundColor = getRandomHexColor();
//     boxesContainer.append(box);
//   }

//
//   input.value = "";
// }

// function destroyBoxes() {
//   boxesContainer.innerHTML = "";
// }
