const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const loginBtn = document.querySelector(".login-form button");

function onLoginSubmit(event) {
  event.preventDefault();
  console.log(loginInput.value);
}

loginForm.addEventListener("submit", onLoginSubmit);
