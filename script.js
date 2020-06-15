// Grabbing all buttons and display and assigning them into variables
let display = document.querySelector(".digit-display"),
  delBtn = document.getElementById("delete-key"),
  numbers = document.querySelectorAll(".numbers"),
  operation = document.querySelectorAll(".operator"),
  decBtn = document.getElementById("decimal"),
  ansButton = document.getElementById("equals"),
  clearBtn = document.getElementById("clear-key");

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

// Function to extract value provided along with validation.
function getGivenValue(e) {
  // User can still make a number positive or negative, but cannot
  // put + or / in front of numbers unless performing an operation.
  if (
    (e.target.innerHTML === "*" || e.target.innerHTML === "/") &&
    display.value === ""
  ) {
    console.log("yo");
    return;
  }
  // Assigning retrieved numbers into variable and injecting HTML
  let input = display.value;
  let inputFinal = input + e.target.innerHTML;
  display.value = inputFinal;
}

// Adding an event listener for each number. Any number clicked, the info will be sent
// to getGivenValue function and processed.
numbers.forEach((number) =>
  number.addEventListener("click", (e) => getGivenValue(e))
);

// Same as above, adding an event listener to each operator and extracting the value
operation.forEach((operator) =>
  operator.addEventListener("click", (e) => getGivenValue(e))
);
