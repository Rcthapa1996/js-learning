var table = document.getElementById("table");
var thead = document.createElement("thead");
var tbody = document.createElement("tbody");
// console.log(table);

// function tableOf(num) {
//   console.log("Table of ", num);
//   for (var i = 1; i <= 10; i++) {
//     console.log(num * i);
//   }
// }
// tableOf(19);
// tableOf(29);

function tableFromTo(from, to) {
  var tr = document.createElement("tr");
  for (var i = from; i <= to; i++) {
    var th = document.createElement("th");
    th.innerText = "Table of " + i;
    tr.appendChild(th);
  }
  thead.appendChild(tr);
  //   console.log(thead);

  table.appendChild(thead);
  for (var col = 1; col <= 10; col++) {
    var tr = document.createElement("tr");
    for (var row = from; row <= to; row++) {
      //   tableOf(from);
      var td = document.createElement("td");
      td.innerText = row + " * " + col + " = " + row * col;
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
    // console.log("table", tbody, tr, tr.innerText);
  }
  table.appendChild(tbody);
}
// console.log("Hello");
tableFromTo(1, 10);

// function tableOf(num) {
//     console.log("Table of ", num);
//     for (var i = 1; i <= 10; i++) {
//       console.log(num + " * " + i + " = ", num * i);
//     }
//   }
//   // tableOf(19);
//   // tableOf(29);

//   function tableFromTo(from, to) {
//     for (var from; from <= to; from++) {
//       tableOf(from);
//     }
//   }
//   tableFromTo(1, 10);
