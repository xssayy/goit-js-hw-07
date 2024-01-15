function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const changeColorBtn = document.querySelector(".change-color");
changeColorBtn.classList.add("btn");
const span = document.querySelector(".color");
changeColorBtn.addEventListener("click", () => {
  const colorValue = getRandomHexColor();
  body.style.backgroundColor = colorValue;
  span.textContent = colorValue;
});
