// rows for grid-template-rows and columns for grid-template-columns
function addStyle(rows, columns) {
  // create style element, so that we can use these class .container and .item in when we created container element using function createItemsHtml() and function createContainerHtml()
  var style = document.createElement("style");
  // using css variable for css style
  var css = `
        * {
            box-sizing:border-box;   
        }
        .container {
            background:#ddd;
            height:100vh;
            width:100vw;
            padding:10px;
            display:grid;
            grid-template-columns: repeat(${rows}, 1fr);
            grid-template-rows: repeat(${columns}, 1fr);
            gap: 10px;
        }
        .container .item {
            background: #bbb;
            background-image:url("https://picsum.photos/id/2/200/300");
            background-size: 100% 100%;
        }
    `;
  // add css template inside style element
  style.textContent = css;
  // add style element inside document head tag
  document.head.appendChild(style);
}

// creating ItemsHtml function which take number of Items for create total items and return simple items html
function createItemsHtml(numberOfItems) {
  // initially items should be empty, so that in for loop we add one by one each `<div class="item">${i}</div>` in items
  var items = "";
  for (var i = 1; i <= numberOfItems; i++) {
    items += `<div class="item">${i}</div>`;
  }
  // returning all item like
  // `<div class="item">1</div>
  //  <div class="item">2</div>
  //  <div class="item">3</div>
  //  <div class="item">4</div>
  //  <div class="item">5</div>`
  return items;
}

// creating function which take itemsHtml which we created using above function createItemsHtml(numberOfItems) by passing total numberOfItems;
// this will return containerHtml so that we can add this function return value i.e. container in html
function createContainerHtml(itemsHtml) {
  var container = `
        <div class="container">
            ${itemsHtml}
        </div>
    `;
  return container;
}

// this is just for extract extra same syntax for user input this will take str which will show in prompt for user input and retun user entered number
function userInput(str) {
  return parseInt(prompt(str));
}

// calling above userInput() function which is same as
// var rows = parseInt(prompt(str));
var rows = userInput("Enter rows: ");
var columns = userInput("Enter columns: ");
// adding style based on user input rows and columns; you can see in head of body by doing inspect element in browser
addStyle(rows, columns);

// same as above userInput will ask user to enter number of items to create total grid items and return number which numberOfItems variable will store it
var numberOfItems = userInput("Enter a Number of Items: ");
// passing numberOfItems to createItemsHtml() function so that it will return all the item div and we can use it and add inside container
// it will return like  <div class="item">1</div><div class="item">2</div><div class="item">3</div>
var itemsHtml = createItemsHtml(numberOfItems);
// now we are passing itemsHtml value to createContainerHtml() function and it will return container like
//  <div class="container">
//      <div class="item">1</div><div class="item">2</div><div class="item">3</div>
//  </div>
var container = createContainerHtml(itemsHtml);

// now finally we add container inside html using document.write() method
document.write(container);
