// Grabbing all buttons and display and assigning them into variables
let display = document.querySelector(".digit-display"),
  delBtn = document.getElementById("delete-key"),
  numbers = document.querySelectorAll(".numbers"),
  operation = document.querySelectorAll(".operator"),
  decBtn = document.getElementById("decimal"),
  ansButton = document.getElementById("equals"),
  clearBtn = document.getElementById("clear-key");

// Event listeners
clearBtn.addEventListener("click", () => (display.value = ""));
delBtn.addEventListener("click", deleteInput);
ansButton.addEventListener("click", finalAnswer);
decBtn.addEventListener("click", decimalInput);

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
    return;
  }
  // Assigning retrieved numbers into variable and injecting HTML
  let input = display.value;
  let inputFinal = input + e.target.innerHTML;
  display.value = inputFinal;
}

// Delete Input
function deleteInput() {
  let input = display.value;
  let inputFinal = input.slice(0, -1);
  display.value = inputFinal;
}

// Decimal Input
function decimalInput(e) {
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

// Operation Results
function finalAnswer() {
  // Declaring variables, also splitting each character
  let displayData = display.value.split(""),
    operatorPosition,
    operation,
    firstNumber,
    lastNumber,
    answer,
    finalAnswer;

  // Loop to locate the operators used
  for (let i = 0; i < displayData.length; i++) {
    if (
      displayData[i] === "+" ||
      displayData[i] === "-" ||
      displayData[i] === "*" ||
      displayData[i] === "/"
    ) {
      // Grabbing the index of the operator used
      operatorPosition = displayData.indexOf(displayData[i]);
      // Grabbing the actual operator
      operation = displayData[i];
      // Extracting first number and placing it in front of the operator
      firstNumber = parseFloat(displayData.slice(0, operatorPosition).join(""));
      // Extracting second number and placing it after the operator
      lastNumber = parseFloat(displayData.slice(operatorPosition + 1).join(""));
    }
  }

  // Storing answer into corresponding variable
  answer = operate(operation, firstNumber, lastNumber);
  // Moving answer into new final variable
  finalAnswer = answer;
  // Displaying answer on screen
  display.value = finalAnswer;
  return answer;
}
