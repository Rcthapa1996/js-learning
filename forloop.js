// function tableOf(num) {
//   console.log("Table of ", num);
//   for (var i = 1; i <= 10; i++) {
//     console.log(num * i);
//   }
// }
// // tableOf(19);
// // tableOf(29);

// function tableFromTo(from, to) {
//   for (var from; from <= to; from++) {
//     tableOf(from);
//   }
// }
// tableFromTo(1, 10);

function tableOf(num) {
  console.log("Table of ", num);
  for (var i = 1; i <= 10; i++) {
    console.log(num + " * " + i + " = ", num * i);
  }
}
// tableOf(19);
// tableOf(29);

function tableFromTo(from, to) {
  for (var from; from <= to; from++) {
    tableOf(from);
  }
}
tableFromTo(1, 10);
