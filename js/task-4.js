const form = document.querySelector(".login-form");
form.addEventListener("submit", validationFoo);

const submitButton = form.querySelector(`[type="submit"]`);
submitButton.classList.add("btn");

const labelsArray = form.querySelectorAll("label");
labelsArray.forEach((label) => {
  label.classList.add("form-label");
});

const labelInputsArray = form.querySelectorAll("label input");
labelInputsArray.forEach((input) => {
  input.classList.add("item-with-border");
});

function validationFoo(event) {
  event.preventDefault();
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  if (email === "" || password === "") {
    alert(`All form fields must be filled in`);
    return;
  }
  const userData = {
    email,
    password,
  };
  console.log(userData);
  form.reset();
}
