const input = document.querySelector(`#name-input`);
const output = document.querySelector(`#name-output`);
input.classList.add("item-with-border", "input-area");

input.addEventListener("input", (event) => {
  output.textContent =
    event.currentTarget.value.trim() === ""
      ? "Anonymous"
      : event.currentTarget.value.trim();
});
