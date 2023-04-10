function printAllEven(from, to) {
  console.log("We are printing all Even number from " + from + " to " + to);
  for (var i = from; i <= to; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
}
printAllEven(1, 100);

function printAllOdd(from, to) {
  console.log("We are printing all Odd number from " + from + " to " + to);
  for (var i = from; i <= to; i++) {
    if (i % 2 != 0) {
      console.log(i);
    }
  }
}
printAllOdd(1, 100);
