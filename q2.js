function addTwoNumbers(num1, num2) {
  var addedNumber = num1 + num2;
  console.log("Addition of " + num1 + " and " + num2 + " is ", addedNumber);
}

function subractTwoNumbers(num1, num2) {
  var subractedNumber = num1 - num2;
  console.log("Subract of " + num1 + " and " + num2 + " is ", subractedNumber);
}

function multiplyTwoNumbers(num1, num2) {
  var multipliedNumber = num1 * num2;
  console.log(
    "Multiply of " + num1 + " and " + num2 + " is ",
    multipliedNumber
  );
}

function divideTwoNumbers(num1, num2) {
  var dividedNumber = num1 / num2;
  console.log("Divide of " + num1 + " and " + num2 + " is ", dividedNumber);
}

// function getTwoNumbers() {
//   var num1 = prompt("Enter first number:");
//   var num2 = prompt("Enter second number:");
//   console.log("You Entered " + num1 + " and " + num2);
//   addTwoNumbers(num1, num2);
//   subractTwoNumbers(num1, num2);
//   multiplyTwoNumbers(num1, num2);
//   divideTwoNumbers(num1, num2);
// }
// getTwoNumbers();

function getTwoNumbersImproved() {
  var num1 = Number(prompt("Enter first number:"));
  var num2 = Number(prompt("Enter second number:"));
  console.log("You Entered " + num1 + " and " + num2);
  addTwoNumbers(num1, num2);
  subractTwoNumbers(num1, num2);
  multiplyTwoNumbers(num1, num2);
  divideTwoNumbers(num1, num2);
}
getTwoNumbersImproved();
