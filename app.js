const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const greeting = document.querySelector("#greeting");

function submitForm(event) {
  const hidden_className = "hidden";

  event.preventDefault();
  loginForm.classList.add(hidden_className);
  const userName = loginInput.value;
  console.log(userName);
  greeting.innerText = `hello ${userName}`;
  greeting.classList.remove(hidden_className);
}

loginForm.addEventListener("submit", submitForm);
