const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const greetings = document.querySelector(".greetings");

const HIDDEN_CLASSNAME = "hidden";

function onSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem("username", username);
  paint(username);
}

function paint(name) {
  greetings.classList.remove(HIDDEN_CLASSNAME);
  greetings.innerText = `hello ${name}`;
}

const savedUserName = localStorage.getItem("username");

if (savedUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onSubmit);
} else {
  paint(savedUserName);
}
