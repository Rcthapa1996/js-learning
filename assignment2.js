// // console.log("Document load", document.body.onload);
// console.log("Hello... start");
// document.body.onload = loaded;
// console.log("Hello... start onload after");
// function loaded() {
//   console.log("Document is loaded.....");
// }
console.log("Hello... after function defined");

console.log(document.body);
document.body.onload = addElement;
console.log("Hello... after function defined");

function addElement() {
  // create a new div element
  const newDiv = document.createElement("div");

  // and give it some content
  const newContent = document.createTextNode("Hi there and greetings!");

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}

var QUESTIONS = [
  "Write a function that takes two numbers as parameters and returns the larger of the two.",
  "Write a program that prompts the user to enter two numbers and then displays the result of adding, subtracting, multiplying, and dividing the two numbers.",
  "Create a program that prompts the user to enter a number and then displays whether that number is positive, negative, or zero.",
  "Write a function that takes three numbers as input and returns their average.",
  "Create a program that asks the user to enter a number and then displays whether that number is even or odd.",
  "Write a function that takes a number as input and returns true if it is a multiple of 3 and false otherwise.",
  "Write a program that prompts the user to enter their age and then displays a message that says whether they are a child (under 18), an adult (18-64), or a senior (65 and older).",
  "Create a function that takes a number as input and returns the square of that number.",
  "Create a function that takes two numbers as input and returns the remainder when the larger number is divided by the smaller number.",
  "Write a function that takes a number as input and returns the sum of all the numbers from 1 to that number.",
  "Write a program that prompts the user to enter a number and then displays the sum of all the even numbers from 1 to that number.",
  "Write a function that takes a number as input and returns true if it is a prime number and false otherwise.",
  "Create a program that asks the user to enter a number and then displays the factorial of that number (using the formula n! = n * (n-1) * (n-2) * ... * 1).",
  "Create a program that prompts the user to enter a temperature in Celsius and then displays the temperature in Fahrenheit (using the formula F = C * 9/5 + 32).",
  "Create a program that asks the user to enter a year and then displays whether that year is a leap year or not (using the rule that a year is a leap year if it is divisible by 4 but not divisible by 100, unless it is also divisible by 400).",
];
function questionDescription(questionNumber) {
  console.log("Question", questionNumber, " : ", QUESTIONS[questionNumber - 1]);
}

function question1() {
  function getLargerNumber(num1, num2) {
    var largerNumber = num1 > num2 ? num1 : num2;
    console.log(
      "Larger Number of " + num1 + " and " + num2 + " is " + largerNumber
    );
  }
  getLargerNumber(10, 20);
  getLargerNumber(30, 20);
}

function question2() {
  function addTwoNumbers(num1, num2) {
    var addedNumber = num1 + num2;
    console.log("Addition of " + num1 + " and " + num2 + " is ", addedNumber);
  }

  function subractTwoNumbers(num1, num2) {
    var subractedNumber = num1 - num2;
    console.log(
      "Subract of " + num1 + " and " + num2 + " is ",
      subractedNumber
    );
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
}

function question3() {
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
}

function question4() {
  function getAverageOfThreeNumber(num1, num2, num3) {
    var average = (num1 + num2 + num3) / 3;
    console.log(
      "Average of " + num1 + ", " + num2 + " and " + num3 + " is " + average
    );
  }
  var number1 = Number(prompt("Enter first number for average:"));
  var number2 = Number(prompt("Enter second number for average:"));
  var number3 = Number(prompt("Enter third number for average:"));
  getAverageOfThreeNumber(number1, number2, number3);
}

function question5() {
  function checkOddOrEven() {
    if (num % 2 === 0) {
      console.log("You Entered Even Number");
    } else {
      console.log("You Entered Odd Number");
    }
  }
  var num = Number(prompt("Enter a number to check odd or even:"));
  checkOddOrEven();
}

function question6() {
  function checkMultipleOfThree() {
    if (num % 3 === 0) {
      console.log(num + " is Multiple of Three");
    } else {
      console.log(num + " is not Multiple of Three");
    }
  }
  var num = Number(prompt("Enter a number to check Multiple of Three:"));
  checkMultipleOfThree();
}

function question7() {
  function checkAge() {
    if (age < 0) {
      console.log("You are not human");
    } else if (age < 18) {
      console.log("You are Child");
    } else if (age < 65) {
      console.log("You are Adult");
    } else {
      console.log("You are Senior");
    }
  }
  var age = Number(prompt("Enter Your age:"));
  checkAge();
}

function question8() {
  function squareOfNumber(num) {
    var square = num * num;
    console.log("Square of ", num, " is ", square);
  }
  var number = Number(prompt("Enter a number for Square:"));
  squareOfNumber(number);
}

function question9() {
  function getReminder(num1, num2) {
    var largerNumber = num1 > num2 ? num1 : num2;
    var smallerNumber = num1 < num2 ? num1 : num2;
    var reminder = largerNumber % smallerNumber;
    console.log(
      "Larger Number is ",
      largerNumber,
      " and Smaller Number is ",
      smallerNumber,
      " and Reminder of LargerNumber % SmallerNumber is ",
      reminder
    );
  }
  var number1 = Number(prompt("Enter first Number to check Reminder:"));
  var number2 = Number(prompt("Enter second Number to check Reminder:"));
  getReminder(number1, number2);
}

function question10() {
  function sumOfNaturalNumber(num) {
    var sum = 0;
    for (var i = 1; i <= num; i++) {
      sum += i;
    }
    console.log("Sum of all number from 1 to ", num, " is ", sum);
  }
  var number = Number(prompt("Enter a number for sum of natural number:"));
  sumOfNaturalNumber(number);
}

function question11() {
  function sumOfNaturalNumber(num) {
    var sum = 0;
    for (var i = 1; i <= num; i++) {
      if (i % 2 === 0) {
        sum += i;
      }
    }
    console.log("Sum of all even number from 1 to ", num, " is ", sum);
  }
  var number = Number(
    prompt("Enter a number for get all sum of even number from 1 to n:")
  );
  sumOfNaturalNumber(number);
}

function question12() {
  function checkPrime(num) {
    var isPrime = false;
    for (var i = 2; i * i < num; i++) {
      if (num % i == 0) {
        isPrime = true;
        break;
      }
    }
    if (isPrime) {
      console.log("You Entered Prime Number");
    } else {
      console.log("You Entered not Prime Number");
    }
  }
  var number = Number(
    prompt("Enter a number to check Prime number or Not Prime number:")
  );
  checkPrime(number);
}

function question13() {
  function factorialOf(num) {
    var factorial = 1;
    for (var i = 1; i <= num; i++) {
      factorial *= i;
    }
    console.log("Factorial of ", num, " is ", factorial);
  }
  var number = Number(prompt("Enter a number to get Factorial:"));
  factorialOf(number);
}

function question14() {
  // Celsius and then displays the temperature in Fahrenheit (using the formula F = C * 9/5 + 32)
  function celsiusToFahrenheit(celsius) {
    var fahrenheit = (celsius * 9) / 5 + 32;
    console.log(celsius, "c is equals to ", fahrenheit, "f");
  }
  var celsius = Number(prompt("Enter Temperature in Celsius:"));
  celsiusToFahrenheit(celsius);
}
function question15() {
  function checkLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400) {
      console.log(year, " is Leap Year");
    } else {
      console.log(year, " is not Leap Year");
    }
  }
  var year = Number(prompt("Enter a year to check leap year:"));
  checkLeapYear(year);
}

function questionNumberInput() {
  do {
    var questionNumber = parseInt(prompt("Enter Question Number:"));
  } while (questionNumber < 1 || questionNumber > QUESTIONS.length);
  questionDescription(questionNumber);

  if (questionNumber === 1) {
    question1();
  } else if (questionNumber === 2) {
    question2();
  } else if (questionNumber === 3) {
    question3();
  } else if (questionNumber === 4) {
    question4();
  } else if (questionNumber === 5) {
    question5();
  } else if (questionNumber === 6) {
    question6();
  } else if (questionNumber === 7) {
    question7();
  } else if (questionNumber === 8) {
    question8();
  } else if (questionNumber === 9) {
    question9();
  } else if (questionNumber === 10) {
    question10();
  } else if (questionNumber === 11) {
    question11();
  } else if (questionNumber === 12) {
    question12();
  } else if (questionNumber === 13) {
    question13();
  } else if (questionNumber === 14) {
    question14();
  } else if (questionNumber === 15) {
    question15();
  }
}
// questionNumberInput();

// function collectRent(property) {
//   var rent = 0;
//   if (property === 1) {
//     rent = 5000;
//   } else if (property === 2) {
//     rent = 1000;
//   } else if (property === 3) {
//     rent = 1500;
//   } else if (property === 4) {
//     rent = 2000;
//   } else if (property === 5) {
//     rent = 2500;
//   }
//   return rent;
// }
// function divideRent(totalRent, totalBrothers) {
//   return totalRent / totalBrothers;
// }

// var rentOf1 = collectRent(1);
// var rentOf2 = collectRent(2);
// var rentOf3 = collectRent(3);
// var rentOf4 = collectRent(4);
// var rentOf5 = collectRent(5);
// var totalRent = rentOf1 + rentOf2 + rentOf3 + rentOf4 + rentOf5;
// var totalBrothers = 3;
// var dividedValue = divideRent(totalRent, totalBrothers);
// console.log("TdivideRent Rent per Brother: ", dividedValue);

function getGrade(percentage) {
  if (percentage < 0 || percentage > 100) return "Invalid Percentage";
  if (percentage > 90) {
    return "First";
  }
  if (percentage > 80) {
    return "Second";
  }
  if (percentage > 70) {
    return "Third";
  }
  if (percentage >= 33) {
    return "Pass";
  }
  return "Fail";
}

function getGradeWithSwitch(percentage) {
  if (percentage < 0 || percentage > 100) return "Invalid Percentage";
  switch (true) {
    case percentage > 90: {
      return "First";
    }
    case percentage > 80: {
      return "Second";
    }
    case percentage > 70: {
      return "Third";
    }
    case percentage >= 33: {
      return "Pass";
    }
    default: {
      return "Fail";
    }
  }
}
// var percentage = parseInt(prompt("Enter Percentage"));
// // var grade = getGrade(percentage);
// var grade = getGradeWithSwitch(percentage);
// console.log(grade);

function createTable() {
  var tableRow = "";
  for (var i = 1; i <= 10; i++) {
    var tableColumn = "";
    for (var j = 2; j <= 20; j++) {
      tableColumn += `<td>${j} * ${i} = ${i * j}</td>`;
    }
    tableRow += `<tr> 
         ${tableColumn}
         </tr>`;
  }
  var table = "";
  table += `<table>
    <tbody>
    ${tableRow}
    </tbody>
</table>`;
  return table;
}
// var tableOf = parseInt(prompt("Enter a number for create Table..."));
// var multiplicationTable = createTable();
// document.write(multiplicationTable);
// console.log(multiplicationTable);

function add(num1, num2) {
  return num1 + num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}

function addMultiply(num1, num2, num3) {
  return multiply(add(num1, num2), num3);
}
var result = addMultiply(2, 4, 6);
console.log(result);

function pattern(num) {
  for (var i = 0; i < num; i++) {
    var row = "";
    for (var j = 0; j <= i; j++) {
      row += "*";
    }
    console.log(row);
  }
}
pattern(5);
function pattern2(num) {
  for (var i = 0; i < num; i++) {
    var row = "";
    var totalSpace = num - i - 1;
    for (var j = 0; j < totalSpace; j++) {
      row += " ";
    }
    for (var j = 0; j < i * 2 - 1; j++) {
      row += "*";
    }
    console.log(row);
  }
}
pattern2(5);

function addStyle() {
  var style = document.createElement("style");
  var css = `
      h1 {
        background:red;
      }
  `;
  style.textContent = css;
  document.head.appendChild(style);
}
addStyle();
var heading = `<h1>Hello</h1>`;
document.write(heading);

var numbers = [1, 2, 3, 4, 5];
// var numbers = [11, 12, 13, 14, 15, 16];

var sum = 0;
numbers.forEach((val) => (sum += val));
console.log("Using ForEach ", numbers, " sum is ", sum);

var sum = 0;
function sumOf(num) {
  sum += num;
}
numbers.forEach(sumOf);
console.log("Using ForEach with function ", numbers, " sum is ", sum);

var sum = 0;
for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log("Using for loop ", numbers, " sum is ", sum);

var sum = 0;
for (var val of numbers) {
  sum += val;
}
console.log("Using for of loop ", numbers, " sum is ", sum);

var sum = 0;
for (var key in numbers) {
  sum += numbers[key];
}
console.log("Using for in loop ", numbers, " sum is ", sum);

var sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Using for reduce ", numbers, " sum is ", sum);

var blankNumbers = [];
numbers.forEach((val) => blankNumbers.push(val));
console.log("Blank Number ForEach :", blankNumbers);

var blankNumbers = [];
blankNumbers = [...numbers];
// numbers.forEach((val) => blankNumbers.push(val));
console.log("Blank Number sprade :", blankNumbers);

var blankNumbers = [];
for (var val of numbers) {
  blankNumbers.push(val);
}
console.log("Blank Number for of :", blankNumbers);

var collection = [
  ["apple", "banana"],
  ["orange", "pear"],
  ["cat", "dog"],
];

function pushItemInArray(arr, item) {
  for (var i = 0; i < item.length; i++) {
    arr.push(item[i]);
  }
}

var blankCollection = [];
for (var i = 0; i < collection.length; i++) {
  var arr = collection[i];
  pushItemInArray(blankCollection, arr);
  console.log("current array :", arr, " index :", i, blankCollection);
  // for (var j = 0; j < arr.length; j++) {
  //   blankCollection.push(arr[j]);
  // }
}
console.log(collection, blankCollection, " Blanl collection");

var arrOfObj = [
  { name: "iphone 14", price: 79000 },
  { name: "iphone 13", price: 59000 },
  { name: "iphone 12", price: 39000 },
];

for (var i = 0; i < arrOfObj.length; i++) {
  var obj = arrOfObj[i];
  // console.log(arrOfObj[i].price);
  var keys = Object.keys(obj);
  for (var j = 0; j < keys.length; j++) {
    console.log(keys[j], " = ", obj[keys[j]]);
  }
}

for (var i = 0; i < arrOfObj.length; i++) {
  var obj = arrOfObj[i];
  console.log(arrOfObj[i].price);
  // var keys = Object.keys(obj);
  // for (var j = 0; j < keys.length; j++) {
  //   console.log(keys[j], " = ", obj[keys[j]]);
  // }
}

var cars = [
  { brand: "Toyota", model: "Corolla", year: 2015 },
  { brand: "Honda", model: "Civic", year: 2018 },
  { brand: "Ford", model: "Fusion", year: 2020 },
];
console.log("using forEach with param destructing...");
cars.forEach(({ brand }) => console.log(brand));
console.log("using forEach using normal...");
cars.forEach((carDetails) => console.log(carDetails.brand));
console.log("using for loop...");
for (var i = 0; i < cars.length; i++) {
  console.log(cars[i].brand);
}
// cars.forEach((carDetails) => console.log(carDetails.brand));

var cart = [
  { item: "Shirt", price: 20, quantity: 3 },
  { item: "Pants", price: 30, quantity: 3 },
  { item: "Shoes", price: 50, quantity: 1 },
];
var totalCartPrice = cart.reduce((acc, curr) => acc + curr.price, 0);
console.log("Total Price using reduce: ", totalCartPrice);

var totalCartPrice = 0;
cart.forEach(function (item) {
  totalCartPrice += item.price;
});
console.log(
  "Total Price using forEach with annomous function: ",
  totalCartPrice
);

var totalCartPrice = 0;
var totalCart = cart.length;
for (var i = 0; i < totalCart; i++) {
  var eachCart = cart[i];

  totalCartPrice += eachCart.price * eachCart.quantity;
}
console.log("Total Price using for loop: ", totalCartPrice);

// Question 7
var intArray = [10, 20, 30, 40, 50];
var blankIntArray = [];
function doubleOf(num) {
  return num * 2;
}
intArray.forEach(function (val) {
  var double = doubleOf(val);
  blankIntArray.push(double);
});
console.log(blankIntArray);

// Question 8
var groceries = [
  { item: "apple", price: 100, type: "fruit" },
  { item: "grapes", price: 100, type: "fruit" },
  { item: "tomato", price: 100, type: "vegetables" },
  { item: "onion", price: 100, type: "vegetables" },
  { item: "mango", price: 100, type: "fruit" },
  { item: "spincach", price: 100, type: "green" },
  { item: "mint", price: 10, type: "green" },
  { item: "potato", price: 30, type: "vegetables" },
  { item: "capcicum", price: 60, type: "vegetables" },
  { item: "milk", price: 50, type: "dairy" },
];

// filter out every item on the basis of type
function filterItems(groceries, type) {
  var groceriesLength = groceries.length;
  var basket = [];
  for (var i = 0; i < groceriesLength; i++) {
    if (groceries[i].type === type) {
      basket.push(groceries[i]);
    }
  }
  return basket;
}
var filterValue = filterItems(groceries, "fruit");
console.log(filterValue);

var student = {
  firstName: "Ramchandra",
  lastname: "Thapa",
  age: 27,
};
student.age++;
student.schoolName = "Mother Memorial School";
console.log(student);

function getStar(num) {
  var col = `<div>`;
  for (var i = 0; i < num; i++) {
    var row = `<div>`;
    for (var j = num - 1; j > i; j--) {
      row += `&nbsp`;
    }
    for (var k = 0; k <= i; k++) {
      row += `*`;
    }
    row += `</div>
    `;
    col += row;
  }
  col += `</div>`;
  return col;
}
var myStar = getStar(5);
console.log(myStar);
document.write(myStar);

var products = [
  { name: "Apple", price: 0.5 },
  { name: "Banana", price: 0.3 },
  { name: "Orange", price: 0.4 },
];

var newProduce = [];
products.forEach(function (item) {
  var newItem = {};
  newItem.name = "Organic " + item.name;
  newItem.price = item.price;
  newProduce.push(newItem);
});
console.log(products);
console.log(newProduce);

var products = [
  { name: "Apple", price: 50 },
  { name: "Banana", price: 60 },
  { name: "Orange", price: 40 },
];

var newProduce = [];
products.forEach(function (item) {
  var newItem = {};
  newItem.name = "Organic " + item.name;
  newItem.price = item.price;
  newItem.discountPrice = item.price - 0.1 * item.price;
  newProduce.push(newItem);
});
console.log(products);
console.log(newProduce);

var products = [
  { name: "Pencil", quantity: 5 },
  { name: "Pen", quantity: 10 },
  { name: "Eraser", quantity: 3 },
];

var newProducts = [];

function getNewProduct(products, updateProductName) {
  var result = [];
  products.forEach(function (item) {
    var newItem = {};
    newItem.name = item.name;
    newItem.quantity = item.quantity;
    if (item.name === updateProductName) {
      newItem.quantity = 50;
    }
    result.push(newItem);
  });
  return result;
}
var updateProductName = "Pencil";
newProducts = getNewProduct(products, updateProductName);
console.log("My Original Product : ", products);
console.log("My New Product : ", newProducts);

var products = [
  { name: "Pencil", quantity: 5 },
  { name: "Pen", quantity: 10 },
  { name: "Eraser", quantity: 3 },
];
var newProducts = [];

var updateProductName = "Pencil";
products.forEach(function (item) {
  var newItem = {};
  newItem.name = item.name;
  newItem.quantity = item.quantity;
  if (item.name === updateProductName) {
    newItem.quantity = 50;
  }
  newProducts.push(newItem);
});
console.log("My Original Product : ", products);
console.log("My New Product : ", newProducts);

var numArray = [10, 20, 30, 40, 50];
var mappedArray = numArray.map(function (item) {
  return item * item;
});
console.log("Original Array:", numArray);
console.log("Mapped Array:", mappedArray);

//Question 1
var fruits = ["apple", "banana", "orange"];
// var nFruits = ["APPLE", 'BANANA', 'ORANGE'];
var capitalFruits = fruits.map(function (fruit) {
  return fruit.toUpperCase();
});
console.log("Capital Fruits: ", capitalFruits);

// Question 2
var users = [
  { name: "John", age: 30 },
  { name: "Alice", age: 25 },
  { name: "Bob", age: 40 },
];

var updatedUser = users.map(function (user) {
  var newUser = {
    name: user.name,
    age: user.age,
  };
  newUser.isAdmin = false;
  return newUser;
});
console.log("Updated User: ", updatedUser);

// Question 3
var products = [
  { name: "Apple", price: 150, inStock: true },
  { name: "Banana", price: 50, inStock: false },
  { name: "Orange", price: 40, inStock: true },
];
var availableProducts = [];
products.forEach(function (product) {
  if (product.inStock) {
    availableProducts.push(product);
  }
});
console.log("Available Product: ", availableProducts);

// Question 4
var sentence =
  "we are learning javascript map method here and will solve few given problems.";
var words = sentence.split(" ");
console.log("Words array", words);
var capitalWord = words.map(function (word) {
  var newWord = word;
  newWord[1] = "a";
  newWord = newWord[0].toUpperCase() + newWord.slice(1);
  console.log(
    newWord,
    word,
    newWord[0].toUpperCase(),
    newWord,
    newWord.charAt(0).toUpperCase() + newWord.slice(1)
  );
  return newWord;
});
console.log("capital words", capitalWord);
var capitalSentence = capitalWord.join(" ");
console.log("capitalSentence: ", capitalSentence);

// // map() questions
// // ques1: make all the string values in uppercase and push in new array
// var fruits = ['apple', 'banana', 'orange'];
// var nFruits = ['APPLE', 'BANANA', 'ORANGE'];

// // Quess2: add one more new property isAdmin to each object
// var users = [
//     { name: 'John', age: 30 },
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 40 }
// ];
// // answer:
// var updatedUsers = [
//     { name: 'John', age: 30, isAdmin: false },
//   { name: 'Alice', age: 25, isAdmin: false },
//   { name: 'Bob', age: 40, isAdmin: false }
// ];

// // ques3:
// var products = [
//     { name: 'Apple', price: 150, inStock: true },
//     { name: 'Banana', price: 50, inStock: false },
//     { name: 'Orange', price: 40, inStock: true }
//   ];
// // answer:
// var availableProducts = [
//     { name: 'Apple', price: 150, inStock: true },
//     { name: 'Orange', price: 40, inStock: true }
// ]

// // ques4: Capitalizing First Letters of Words in a Sentence:
// var sentence = "we are learning javascript map method here and will solve few given problems."
// // hint

// // ques5: calculate the total price for products in the given array
// var products = [
//     {name: "Product A", price: 10},
//     {name: "Product B", price: 20},
//     {name: "Product C", price: 15},
//   ];

// ques5: calculate the total price for products in the given array
var products = [
  { name: "Product A", price: 10 },
  { name: "Product B", price: 20 },
  { name: "Product C", price: 15 },
];

var totalPrice = 0;
products.forEach(function (product) {
  totalPrice += product.price;
});
console.log("Products: ", products);
console.log("Products Total Price: ", totalPrice);

// using Reduce
var products = [
  { name: "Product A", price: 10 },
  { name: "Product B", price: 20 },
  { name: "Product C", price: 15 },
];

var totalPrice = products.reduce((acc, { price }) => acc + price, 0);

console.log("Products: ", products);
console.log("Products Total Price: ", totalPrice);

// ques6: filtering out the duplicate values
var items = ["apple", "banana", "orange", "apple", "grape", "banana", "banana"];
// answer
// var uniqueItems = ['apple', 'banana', 'orange', 'grape'];

var uniqueItems = [];

items.forEach(function (item) {
  var existingIndex = uniqueItems.indexOf(item);
  console.log(
    "Existing index",
    existingIndex,
    " item: ",
    item,
    " unique list: ",
    uniqueItems
  );
  if (existingIndex == -1) {
    uniqueItems.push(item);
  }
});
console.log("Original Items: ", items);
console.log("Unique Items: ", uniqueItems);

var items = ["apple", "banana", "orange", "apple", "grape", "banana", "banana"];
// answer
// var uniqueItems = ['apple', 'banana', 'orange', 'grape'];

var uniqueItems = [];
var storeInObj = {};

items.forEach(function (item) {
  var isExist = storeInObj[item] !== undefined;
  if (isExist) {
    storeInObj[item]++;
  } else {
    storeInObj[item] = 1;
    uniqueItems.push(item);
  }

  console.log(
    "IsExist",
    isExist,
    "item",
    item,
    " storeInObj: ",
    storeInObj,
    " unique list: ",
    uniqueItems
  );
});
console.log("Original Items: ", items);
console.log("Unique Items: ", uniqueItems);
console.log("Unique Object: ", storeInObj);

function createListElement(listItems) {
  var list = document.createElement("ol", { class: "list-container" });

  list.appendChild(
    listItems.map((item) =>
      document.createElement("li", { class: "list-item" })
    )
  );
}

var sentenceArr = ["What", "is", "your", "name?"];
var resultArray = sentenceArr.join(" ");
console.log(resultArray, resultArray.length);

var resultArray = "";
sentenceArr.forEach(function (word, index) {
  // if(index!=)
  resultArray += word + " ";
});
console.log(resultArray, resultArray.length);

// if (resultArray === "") {
//   resultArray += " ";
// }

var nameList = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 30 },
];

var joinName = "";
nameList.forEach(function (nameItem, index) {
  if (index == 0) {
    joinName += nameItem.name;
    return;
  }
  joinName += " | " + nameItem.name;
});
console.log("Joined Name :", joinName);

document.write(`<h1>WOW MOMENTS</h1>`);
var products = [
  { name: "Product A", price: 10.99 },
  { name: "Product B", price: 19.99 },
  { name: "Product C", price: 5.99 },
];

var productList = products
  .map(function (item) {
    return `<li>${item.name} - ${item.price}</li>`;
  })
  .join("");
document.write(`<ol>${productList}</ol>`);
