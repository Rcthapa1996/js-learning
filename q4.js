function getAverageOfThreeNumber() {
  var num1 = Number(prompt("Enter first number for average:"));
  var num2 = Number(prompt("Enter second number for average:"));
  var num3 = Number(prompt("Enter third number for average:"));
  var average = (num1 + num2 + num3) / 3;
  console.log(
    "Average of " + num1 + ", " + num2 + " and " + num3 + " is " + average
  );
}
getAverageOfThreeNumber();
