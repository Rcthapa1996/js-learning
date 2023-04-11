// var allItems = [
//   { name: "Carrot", categories: ["vegetables", "fruits", "salad"] },
//   { name: "Potato", categories: ["vegetables", "salad"] },
//   { name: "Turnip", categories: ["vegetables", "fruits"] },
// ];
var categories = [
  {
    icon: "https://cdn.zeptonow.com/production///tr:w-90,ar-500-500,pr-true,f-webp,q-80/inventory/subcategory/6a18617b-93ce-429d-af41-f516d56142dc-image_file.png",
    name: "All",
  },
  {
    icon: "https://cdn.zeptonow.com/production///tr:w-90,ar-500-500,pr-true,f-webp,q-80/inventory/subcategory/6a18617b-93ce-429d-af41-f516d56142dc-image_file.png",
    name: "Fresh Fruits",
  },
  {
    icon: "https://cdn.zeptonow.com/production///tr:w-90,ar-500-500,pr-true,f-webp,q-80/inventory/subcategory/14ce93e3-cfe8-47b1-a76a-0f54cee99389-image_file.png",
    name: "Fresh Vegetables",
  },
  {
    icon: "https://cdn.zeptonow.com/production///tr:w-90,ar-280-280,pr-true,f-webp,q-80/inventory/subcategory/1ee72135-0629-4236-b7a8-1b2521bc2146-image_file.png",
    name: "Leafy, Herbs & Seasonings",
  },
  {
    icon: "https://cdn.zeptonow.com/production///tr:w-90,ar-500-500,pr-true,f-webp,q-80/inventory/subcategory/1d42e568-90d2-446d-8046-1627699d6d1e-image_file.png",
    name: "Leaves & Flowers",
  },
  {
    icon: "https://cdn.zeptonow.com/production///tr:w-90,ar-280-280,pr-true,f-webp,q-80/inventory/subcategory/7d376d42-7865-4421-ac76-330fd5c478b8-image_file.png",
    name: "Exotic Fruits & Veggies",
  },
  {
    icon: "https://cdn.zeptonow.com/production///tr:w-90,ar-280-280,pr-true,f-webp,q-80/inventory/subcategory/5acefea5-2b32-46ae-8a7b-e773f1000ef1-image_file.png",
    name: "Cuts & Sprouts",
  },
  {
    icon: "https://cdn.zeptonow.com/production///tr:w-90,ar-280-280,pr-true,f-webp,q-80/inventory/subcategory/8a4cc612-f011-4cf8-9aa1-748f1f6d0c88-image_file.png",
    name: "Organic & Residue Free",
  },
  {
    icon: "https://cdn.zeptonow.com/production///tr:w-90,ar-600-292,pr-true,f-webp,q-80/inventory/subcategory/bcab4b25-9dc4-44a1-94df-668d7f606830-hydro_image.png",
    name: "Hydroponics & Microgreens",
  },
  {
    icon: "https://cdn.zeptonow.com/production///tr:w-90,ar-300-168,pr-true,f-webp,q-80/inventory/subcategory/fe3abb64-ba6d-417b-b9bc-5ff92a662263-Dried___Dehydrated_Fruits-removebg-preview.png",
    name: "Dried & Dehydrated Fruits",
  },
];

// function hello() {
//   console.log("Hello Saloni");
//   //   return 4;
// }

function filterByName(allItems, name) {
  var result = [];
  allItems.forEach(function (item) {
    if (item.name.toLowerCase().includes(name.toLowerCase())) {
      result.push(item);
    }
  });
  return result;
}

function addHeaderItems() {
  var inputElement = document.createElement("input");
  inputElement.type = "text";
  function changeHandler(e) {
    var result = filterByName(allItems, e.target.value);
    renderCards(result, "Searched for : " + e.target.value);
  }
  inputElement.addEventListener("change", changeHandler);
  var headerElement = document.querySelector("#header");
  headerElement.appendChild(inputElement);
}

function removeActiveClass(buttons) {
  console.log(buttons);
  buttons.forEach(function (btn) {
    btn.className = "";
  });
}

function createCategoryList(categories) {
  var containerElement = document.createElement("ul");

  var allButtons = [];
  categories.forEach(function (category) {
    var itemElement = document.createElement("li");
    allButtons.push(itemElement);

    var iconElement = document.createElement("img");
    iconElement.src = category.icon;
    iconElement.class = "icon";

    var buttonElement = document.createElement("button");
    buttonElement.innerText = category.name;
    function callFunction() {
      var result = getCategoryItems(allItems, category.name);
      //   result.forEach(function (item) {
      //     createItems(item);
      //   });
      removeActiveClass(allButtons);
      itemElement.className = "active";
      category.name == "All"
        ? renderCards(allItems, "All")
        : renderCards(result, category.name);
      //   createCategoryList(result);
    }

    // buttonElement.addEventListener("click", callFunction);
    itemElement.addEventListener("click", callFunction);

    itemElement.append(iconElement, buttonElement);

    containerElement.appendChild(itemElement);
  });

  var sideBarElement = document.querySelector("#sideBar");
  sideBarElement.appendChild(containerElement);
}

var allItems = [
  {
    id: 1,
    name: "Mango Safeda",
    price: 100,
    discount: 12,
    imageUrl:
      "https://cdn.zeptonow.com/production///tr:w-200,ar-478-522,pr-true,f-webp,q-80/inventory/product/1b9cf6b1-9a9d-41a7-ace5-0faec8e3e71f-image_file.png",
    categories: [
      "Fresh Fruits",
      "Leafy, Herbs & Seasonings",
      "Exotic Fruits & Veggies",
    ],
  },
  {
    id: 1,
    name: "Banana Baby Robusta",
    price: 100,
    discount: 15,
    imageUrl:
      "https://cdn.zeptonow.com/production///tr:w-200,ar-425-405,pr-true,f-webp,q-80/inventory/product/cb115d55-cf65-4228-80c8-b0fc0b90ae03-/tmp/20230216-1551351.jpeg",
    categories: ["Fresh Fruits", "Leafy, Herbs & Seasonings"],
  },
  {
    id: 2,
    name: "Muskmelon Kajri",
    price: 200,
    discount: 15,
    imageUrl:
      "https://cdn.zeptonow.com/production///tr:w-200,ar-1000-1000,pr-true,f-webp,q-80/inventory/product/53ea7a05-ab89-4f1d-bedc-3c95a9502a9e-Untitled-design-2022-06-05T113127.568.jpg",
    categories: ["Fresh Fruits", "Fresh Vegetables", "Exotic Fruits & Veggies"],
  },
  {
    id: 3,
    name: "Kiwi Chile Semi Ripe",
    price: 300,
    discount: 15,
    imageUrl:
      "https://cdn.zeptonow.com/production///tr:w-200,ar-540-700,pr-true,f-webp,q-80/inventory/product/fbfd1b3c-880c-4a1d-b8e9-6a426162a42c-image_file.jpeg",
    categories: ["category1", "Leafy, Herbs & Seasonings"],
  },
  {
    id: 4,
    name: "Banana Robusta Semi Ripe",
    price: 400,
    discount: 15,
    outOfStock: true,
    imageUrl:
      "https://cdn.zeptonow.com/production///tr:w-200,ar-416-299,pr-true,f-webp,q-80/inventory/product/fbb96f38-8da2-4b5f-a6ed-cc4026fa3eba-image_file.jpeg",
    categories: ["Fresh Vegetables", "Exotic Fruits & Veggies"],
  },
  {
    id: 5,
    name: "Chikoo",
    price: 500,
    imageUrl:
      "https://cdn.zeptonow.com/production///tr:w-200,ar-500-500,pr-true,f-webp,q-80/inventory/product/20903965-50c9-4b36-bb32-7ddd9175c15d-a81ee81b-14ca-470b-82a6-19a13eacf193.jpeg",
    categories: ["Fresh Fruits", "Cuts & Sprouts"],
  },
  {
    id: 3,
    name: "Apple Shimla Baby",
    price: 300,
    discount: 15,
    outOfStock: true,
    imageUrl:
      "https://cdn.zeptonow.com/production///tr:w-200,ar-900-900,pr-true,f-webp,q-80/inventory/product/e48b4c64-9140-4736-943e-5faf9cfe040f-114b9ae4-6043-42a2-ae54-8440c4b7ec0a.jpeg",
    categories: ["category1", "Leafy, Herbs & Seasonings"],
  },
  {
    id: 4,
    name: "Black Grapes",
    price: 400,
    discount: 15,
    imageUrl:
      "https://cdn.zeptonow.com/production///tr:w-200,ar-550-328,pr-true,f-webp,q-80/inventory/product/dde7afec-a679-41b4-9b16-e4563c46529a-5105d85f-3f92-4796-aca1-3afb9c5b82b0.jpeg",
    categories: ["Leaves & Flowers", "Fresh Vegetables", "Cuts & Sprouts"],
  },
  {
    id: 5,
    name: "Grapes Flame",
    price: 500,
    discount: 15,
    imageUrl:
      "https://cdn.zeptonow.com/production///tr:w-200,ar-500-432,pr-true,f-webp,q-80/inventory/product/2e1bc1b5-68fb-4252-9149-591dfabe7735-Photo.jpeg",
    categories: ["Leafy, Herbs & Seasonings", "Cuts & Sprouts"],
  },
  {
    id: 3,
    name: "Grapes Thompson Seedless",
    price: 300,
    discount: 15,
    imageUrl:
      "https://cdn.zeptonow.com/production///tr:w-200,ar-500-500,pr-true,f-webp,q-80/inventory/product/ccbd788c-8ab9-4b91-a1bd-579163a4e549-Photo.jpeg",
    categories: ["Leaves & Flowers", "Fresh Vegetables"],
  },
  {
    id: 4,
    name: "Black Grapes",
    price: 400,
    discount: 15,
    imageUrl:
      "https://cdn.zeptonow.com/production///tr:w-200,ar-550-328,pr-true,f-webp,q-80/inventory/product/fc749cea-58c8-48db-ac5e-32ed87d88336-dde7afec-a679-41b4-9b16-e4563c46529a-5105d85f-3f92-4796-aca1-3afb9c5b82b0.webp",
    categories: ["Leaves & Flowers", "Fresh Vegetables"],
  },
  {
    id: 5,
    name: "Muskmelon Semi Ripe",
    price: 500,
    discount: 15,
    imageUrl:
      "https://cdn.zeptonow.com/production///tr:w-200,ar-500-395,pr-true,f-webp,q-80/inventory/product/a1caad44-7e70-4a23-9004-daec19998c06-efb830c3-c4eb-42a1-ac75-c22f3e4ffc35.jpeg",
    categories: ["category5"],
  },
];

function getCategoryItems(allItems, categoryName) {
  var result = [];
  allItems.forEach(function (item) {
    if (item.categories.includes(categoryName)) {
      result.push(item);
    }
  });
  console.log("Result of filter Items: ", result);
  return result;
}

var result = getCategoryItems(allItems, "category1");
console.log("Filtered Data: ", result);

// - Items (div)
// - Image (img)
// - Name (p)
// - Price (p
function createItems(item) {
  var imageElement = document.createElement("img");
  imageElement.src = item.imageUrl;
  //   imageElement.width = 100;
  //   imageElement.height = 100;

  var itemNameElement = document.createElement("div");
  itemNameElement.className = "itemName";
  itemNameElement.title = item.name;
  itemNameElement.innerText = item.name;

  var footerElement = document.createElement("div");
  footerElement.className = "footer";

  var priceElement = document.createElement("p");
  priceElement.innerText = "Rs. " + item.price;
  var addBtnElement = document.createElement("button");
  addBtnElement.innerText = "Add";
  addBtnElement.className = "addBtn";

  footerElement.append(priceElement, addBtnElement);

  var cardElemet = document.createElement("div");
  cardElemet.className = "card";
  cardElemet.append(imageElement, itemNameElement, footerElement);
  return cardElemet;
  var mainContainerElement = document.querySelector("#cardContainer");
  //   console.log("Main Container : ", mainContainerElement);
  mainContainerElement.append(cardElemet);
}

function renderCards(items, header) {
  var cardContainerElement = document.querySelector("#cardContainer");

  // Remove previously Rendered Data
  cardContainerElement.innerHTML = "";
  console.log("Itemssss: ", items);

  var headerCountElement = document.createElement("h2");
  headerCountElement.innerText = `${header} (${items.length})`;
  cardContainerElement.appendChild(headerCountElement);

  var cardsElement = document.createElement("div");
  cardsElement.className = "cards";
  items.forEach(function (item) {
    var cardElement = createItems(item);
    console.log("Itemssss: ", cardElement);
    cardsElement.appendChild(cardElement);
  });
  cardContainerElement.appendChild(cardsElement);
}

function onLoadCall() {
  addHeaderItems();
  createCategoryList(categories);
  renderCards(allItems, "All");
  //   createItems(allItems[1]);
  //   createItems(allItems[2]);
  //   createItems(allItems[3]);
  //   createItems(allItems[4]);
  //   createItems(allItems[0]);
  //   createItems(allItems[1]);
  //   createItems(allItems[2]);
  //   createItems(allItems[3]);
  //   createItems(allItems[4]);
  //   createItems(allItems[0]);
  //   createItems(allItems[1]);
  //   createItems(allItems[2]);
  //   createItems(allItems[3]);
  //   createItems(allItems[4]);
}

// Var category = [“"Fruits” “Vegetables”, ”Dry Fruits”, ”Leafy”]

// var allItems = [
//   { name: "Carrot”, price:100, image:’img1.jpg”, categories: ["Vegetables", "Fruits", "Leafy"] },
//   { name: "Potato", price:100, image:’img1.jpg”, categories: ["Vegetables", "Leafy"] },
//   { name: "Turnip",  price:100, image:’img1.jpg”,categories: [“Dry Fruits, "Leafy"] },
// ];
