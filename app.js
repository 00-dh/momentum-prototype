const age = parseInt(prompt("How old are you?"));

if (isNaN(age)) {
  console.log("please write a number");
} else if (age < 18) {
  console.log("You are too young");
} else if (age >= 18 && age <= 50) {
  console.log("You can drink");
}
