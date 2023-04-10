function checkNumber() {
  var num = Number(
    prompt("Enter a number to check Positive, Negative or Zero:")
  );
  if (num > 0) {
    console.log("You entered Positive Number");
  } else if (num < 0) {
    console.log("You entered Negative Number");
  } else {
    console.log("You entered Zero Number");
  }
}
checkNumber();
