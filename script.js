// Grabbing all buttons and display and assigning them into variables
let display = document.querySelector(".digit-display"),
  delBtn = document.getElementById("delete-key"),
  numbers = document.querySelectorAll(".numbers"),
  operation = document.querySelectorAll(".operator"),
  decBtn = document.getElementById("decimal"),
  ansButton = document.getElementById("equals");

//Base operation functions
add = (num1, num2) => num1 + num2;

subtract = (num1, num2) => num1 - num2;

multiply = (num1, num2) => num1 * num2;

divide = (num1, num2) => num1 / num2;

function operate(operator, num1, num2) {
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
    default:
      return "Error :(";
  }
}
