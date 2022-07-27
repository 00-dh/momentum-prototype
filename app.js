const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const greeting = document.querySelector("#greeting");

const USERNAME_KEY = "username";
const hidden_className = "hidden";

function submitForm(event) {
  event.preventDefault();
  loginForm.classList.add(hidden_className);
  const userName = loginInput.value;
  localStorage.setItem(USERNAME_KEY, userName);
  greeting.innerText = `hello ${userName}`;
  greeting.classList.remove(hidden_className);
}

function paintGreeting(username) {
  greeting.innerText = `hello ${username}`;
  greeting.classList.remove(hidden_className);
}

loginForm.addEventListener("submit", submitForm);

const savedUserName = localStorage.getItem(USERNAME_KEY);

console.log(savedUserName);

if (savedUserName === null) {
  loginForm.classList.remove(hidden_className);
} else {
  paintGreeting(savedUserName);
}
