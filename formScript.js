// // var formFields = [
// //   { label: "Name", type: "text", name: "name", placeHolder: "Enter Name" },
// //   { label: "Email", type: "email", name: "email", placeHolder: "Enter Email" },
// //   {
// //     label: "Password",
// //     type: "password",
// //     name: "password",
// //     placeHolder: "Enter Password",
// //   },
// //   {
// //     label: "Confirm Password",
// //     type: "password",
// //     name: "confirmPassword",
// //     placeHolder: "Enter Confirm Password",
// //   },
// // ];

// // var inputHtml = formFields
// //   .map(function (formItem) {
// //     // return formItem.name;
// //     return `<div>
// //               <label>${formItem.label}</label>
// //               <input type="${formItem.type}" placeholder="${formItem.placeHolder}"></input>
// //             </div>
// //             `;
// //     // return `<input type=${formItem.type} name=${formItem.name} placeholder=${formItem.name}>`;
// //   })
// //   .join("");
// // console.log(inputHtml);
// // document.write(`<form>${inputHtml}</form>`);

// // function getInputElement(input) {
// //   return `<input type=${input.type} name=${input.name} placeholder=${input.name}>`;
// // }

// // function getLabelElement(label, id) {
// //   return `<label for=${id}>${label} </label>`;
// // }

// // function getSubmitBtnElement() {
// //   return `<button type="submit">Submit</button>`;
// // }

// // function getFormElement(formFields) {
// //   var formElementTpl = "<form>";
// //   formElementTpl += formFields
// //     .map(function (data) {
// //       return `<div>${getLabelElement(
// //         data.label
// //       )} ${getInputElement(data)}</div>`;
// //     })
// //     .join("");
// //   formElementTpl += getSubmitBtnElement();
// //   formElementTpl += "</form>";
// //   return formElementTpl;
// // }

// // var formElement = getFormElement(formFields);
// // // document.write(formElement);

// // formFields = [
// //   {
// //     label: "Gender",
// //     options: [
// //       { value: "male", label: "Male" },
// //       { value: "female", label: "Female" },
// //       { value: "other", label: "Other" },
// //     ],
// //     name: "gender",
// //   },
// //   { label: "Age", type: "number", name: "age" },
// //   { label: "Country", type: "text", name: "country" },
// // ];

// // // Add Radio Type
// // formFields.forEach(function (formItem) {
// //   if (formItem.label == "Gender") {
// //     formItem.type = "radio";
// //   }
// // });

// // function getInputElement(input) {
// //   if (input.type == "radio") {
// //     return input.options
// //       .map(function (option) {
// //         return `<div>
// //                     <input type=${
// //                       input.type
// //                     } id=${option.value} name=${input.name} value=${option.value}> ${getLabelElement(option.label, option.value)}
// //                 </div>`;
// //       })
// //       .join("");
// //   }
// //   return `<input type=${input.type} name=${input.name} placeholder=${input.name}>`;
// // }
// // function getFormElement(formFields) {
// //   var formElementTpl = "<form>";
// //   formElementTpl += formFields
// //     .map(function (data) {
// //       if (data.label == "Gender") {
// //         return `<div>${getLabelElement(data.label)} ${getInputElement(
// //           data
// //         )}</div>`;
// //       }
// //       return `<div>${getLabelElement(
// //         data.label
// //       )} ${getInputElement(data)}</div>`;
// //     })
// //     .join("");
// //   formElementTpl += getSubmitBtnElement();
// //   formElementTpl += "</form>";
// //   return formElementTpl;
// // }

// // // var formElement = getFormElement(formFields);
// // // console.log(formElement);
// // // document.write(formElement);

// // // function getInputElement(input) {
// // //   return input.type == "radio"
// // //     ? input.options
// // //         .map(function (option) {
// // //           return `<div>
// // //                 <input type=${
// // //                   input.type
// // //                 } id=${option.value} name=${input.name} value=${option.value}> ${getLabelElement(option.label, option.value)}
// // //             </div>`;
// // //         })
// // //         .join("")
// // //     : `<input type=${input.type} name=${input.name} placeholder=${input.name}>`;

// // //   if (input.type == "radio") {
// // //     return input.options
// // //       .map(function (option) {
// // //         return `<div>
// // //                     <input type=${
// // //                       input.type
// // //                     } id=${option.value} name=${input.name} value=${option.value}> ${getLabelElement(option.label, option.value)}
// // //                 </div>`;
// // //       })
// // //       .join("");
// // //   }
// // //   return `<input type=${input.type} name=${input.name} placeholder=${input.name}>`;
// // // }

// // // formFields = [
// // //   {
// // //     label: "Gender",
// // //     options: [
// // //       { value: "male", label: "Male" },
// // //       { value: "female", label: "Female" },
// // //       { value: "other", label: "Other" },
// // //     ],
// // //     name: "gender",
// // //   },
// // //   { label: "Age", type: "number", name: "age" },
// // //   { label: "Country", type: "text", name: "country" },
// // // ];

// // // formFields.forEach(function (formItem) {
// // //   if (formItem.label == "Gender") {
// // //     formItem.type = "radio";
// // //   }
// // // });
// // // function getInputElement(input) {
// // //   if (input.type == "radio") {
// // //     return input.options
// // //       .map(function (option) {
// // //         return `<div>
// // //                     <input type=${
// // //                       input.type
// // //                     } id=${option.value} name=${input.name} value=${option.value}> ${getLabelElement(option.label, option.value)}
// // //                 </div>`;
// // //       })
// // //       .join("");
// // //   }
// // //   return `<input type=${input.type} name=${input.name} placeholder=${input.name}>`;
// // // }

// // // function getInputElement(input) {
// // //   return input.label === "Gender"
// // //     ? `<input type="radio" name=${input.name}>`
// // //     : input.options
// // //         .map(function (option) {
// // //           return `<input type="radio" id=${option.value}  name=${input.name} value=${option.value}>`;
// // //         })
// // //         .join("");
// // // }

// // // function getFormElement(formFields) {
// // //   var input = `<input type={}>`;
// // //   return `<form>
// // //             ${formFields
// // //               .map(function (formItem) {
// // //                 return `<label>${formItem.label}</label> ${getInputElement}`;
// // //               })
// // //               .join("")}
// // //           </form>`;
// // // }
// // // var formElement = getFormElement(formFields);
// // // console.log(formElement);
// // // document.write(formElement);

// // // Jugal Code
// // // var formNew = formFieldsNew.map(function(item){
// // //   console.log(item.options);
// // //      if( item.name === "gender"){
// // //   var newObjectArray = item.options.map(function(item){
// // //     console.log(item);
// // //     return `<option value = ${item.value}>${item.label}</option>`;}).join('')
// // // return `<div><label>${item.label}</label><select name="${item.name}">${newObjectArray}</select></div>`;
// // //   }
// // //   else{
// // //  return `<div><label>${item.label}</label><input type=${item.type} placeholder=${item.label} name=${item.name} ></di
// // // else{
// // //  return `<div><label>${item.label}</label><input type=${item.type} placeholder=${item.label} name=${item.name} ></div>`;
// // // }}).join('')

// // // console.log(formNew);
// // //   document.write(`<form>${formNew}  <button type="submit" style="margin-top: 1rem;">Submit</button>
// // //   </form>`);

// // // Jugal code end

// // var formHTML = `
// //   <form>
// //     ${formFields
// //       .map(function (field) {
// //         return `
// //       <div>
// //         <label>${field.label}</label>
// //         ${
// //           field.options
// //             ? `
// //           <select name="${field.name}">
// //             ${field.options
// //               .map(
// //                 (option) => `
// //                 <option value="${option.value}">${option.label}</option>
// //               `
// //               )
// //               .join("")}
// //           </select>
// //         `
// //             : `<input type="${field.type}" name="${field.name}" />`
// //         }
// //       </div>
// //     `;
// //       })
// //       .join("")}
// //     <button type="submit">Submit</button>
// //   </form>
// // `;
// // document.write(formHTML);

// // // Load the PDF file using pdf.js
// // pdfjsLib.getDocument("example.pdf").promise.then(function (pdf) {
// //   // Get the total number of pages in the PDF file
// //   const numPages = pdf.numPages;
// //   let text = "";

// //   // Loop through all the pages and extract the text
// //   for (let i = 1; i <= numPages; i++) {
// //     pdf.getPage(i).then(function (page) {
// //       page.getTextContent().then(function (content) {
// //         for (let j = 0; j < content.items.length; j++) {
// //           text += content.items[j].str + " ";
// //         }
// //       });
// //     });
// //   }

// //   // Print the extracted text
// //   console.log(text);
// // });

// // var formFields = [
// //   {
// //     type: "text",
// //     name: "fullName",
// //     label: "Full Name",
// //     placeholder: "Enter your full name",
// //     required: false,
// //   },
// //   {
// //     type: "email",
// //     name: "email",
// //     label: "Email",
// //     placeholder: "Enter your email",
// //     required: false,
// //   },
// //   {
// //     type: "password",
// //     name: "password",
// //     label: "Password",
// //     placeholder: "Enter your password",
// //     required: false,
// //   },
// //   {
// //     type: "radio",
// //     name: "gender",
// //     label: "Gender",
// //     options: ["Male", "Female", "Other"],
// //     required: true,
// //   },
// //   {
// //     type: "checkbox",
// //     name: "interests",
// //     label: "Interests",
// //     options: ["Music", "Sports", "Travel", "Food"],
// //     required: false,
// //   },
// //   {
// //     type: "select",
// //     name: "country",
// //     label: "Country",
// //     options: ["USA", "Canada", "Mexico", "UK", "Australia"],
// //     required: true,
// //   },
// // ];

// // function getSelect(options) {
// //   return `<select>
// //   ${options
// //     .map(function (option) {
// //       return `<option value="${option}">${option}</option>`;
// //     })
// //     .join("")}
// // </select>`;
// // }
// // function getNotSelect(options, type, name) {
// //   return `${options
// //     .map(function (option) {
// //       return `<input type="${type}" id="${option}" name="${name}"></input>
// //               <label for="${option}">${option}</label>
// //       `;
// //     })
// //     .join("")}`;
// // }
// // function getOptionItem(item) {
// //   return item.type == "select"
// //     ? getSelect(item.options)
// //     : getNotSelect(item.options, item.type, item.name);
// // }
// // function getInput(item) {
// //   return item.options
// //     ? getOptionItem(item)
// //     : `<input type="${item.type}" placeholder="${item.placeholder}" ${
// //         item.required ? "required" : ""
// //       } ></input>`;
// // }

// // var formHTML = `<form>
// //                   ${formFields
// //                     .map(function (item) {
// //                       return `<div>
// //                                 <label>${item.label} : </label>
// //                                 ${getInput(item)}
// //                               </div>`;
// //                     })
// //                     .join("")}
// //                     <button type="Submit">Submit</button>
// // </form>
// // `;

// // console.log(formHTML);
// // document.write(formHTML);

// var formFields = [
//   {
//     label: "Gender",
//     options: [
//       {
//         value: "male",
//         label: "Male",
//       },
//       {
//         value: "female",
//         label: "Female",
//       },
//       {
//         value: "other",
//         label: "Other",
//       },
//     ],
//     name: "gender",
//   },
//   {
//     label: "Age",
//     type: "number",
//     name: "age",
//   },
//   {
//     label: "Country",
//     type: "text",
//     name: "country",
//   },
// ];

// // var newFormFiled = formFiled
// //   .map(function (item) {
// //     // console.log(item);
// //     var formItem = `<div>
// //                         <label>${item.label}</label>
// //                       ${
// //                         item.label == "Gender"
// //                           ? item.options
// //                               .map(function (opt) {
// //                                 return `
// //                                 <input type = 'radio' value = ${opt.value}>${opt.label}</input>
// //                                 `;
// //                               })
// //                               .join("")
// //                           : '<input type = "${item.type}"></input>'
// //                       }
// //                     </div>`;
// //     console.log("FormItem: ", formItem);
// //     return formItem;
// //   })
// //   .join("");
// // console.log(newFormFiled);
// // document.write(`<form>${newFormFiled}</form>`);

// // var formHTML = `
// //   <form>
// //     ${formFields
// //       .map(function (field) {
// //         return `
// //       <div>
// //         <label>${field.label}</label>
// //         ${
// //           field.options
// //             ? `
// //           <select name="${field.name}">
// //             ${field.options
// //               .map(function (option) {
// //                 return `
// //                 <option value="${option.value}">${option.label}</option>
// //               `;
// //               })
// //               .join("")}
// //           </select>
// //         `
// //             : `<input type="${field.type}" name="${field.name}" />`
// //         }
// //       </div>
// //     `;
// //       })
// //       .join("")}
// //     <button type="submit">Submit</button>
// //   </form>
// // `;
// // console.log("formHtml: ", formHTML);
// // document.write(formHTML);

var categories = [
  {
    id: 1,
    name: "Fruits",
    subcategories: [
      {
        id: 11,
        name: "Citrus",
        subcategories: [
          { id: 111, name: "Orange" },
          { id: 112, name: "Lemon" },
          { id: 113, name: "Lime" },
        ],
      },
      {
        id: 12,
        name: "Berries",
        subcategories: [
          { id: 121, name: "Strawberry" },
          { id: 122, name: "Blueberry" },
          { id: 123, name: "Raspberry" },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Vegetables",
    subcategories: [
      {
        id: 21,
        name: "Leafy greens",
        subcategories: [
          { id: 211, name: "Spinach" },
          { id: 212, name: "Kale" },
          { id: 213, name: "Arugula" },
        ],
      },
      {
        id: 22,
        name: "Root vegetables",
        subcategories: [
          { id: 221, name: "Carrot" },
          { id: 222, name: "Potato" },
          { id: 223, name: "Turnip" },
        ],
      },
    ],
  },
];

// var  categories = {
//   id: 1,
//   name: "Fruits",
//   subcategories: [
//     {
//       id: 11,
//       name: "Citrus",
//       subcategories: [
//         { id: 111, name: "Orange" },
//         { id: 112, name: "Lemon" },
//         { id: 113, name: "Lime" },
//       ],
//     },
//     {
//       id: 12,
//       name: "Berries",
//       subcategories: [
//         { id: 121, name: "Strawberry" },
//         { id: 122, name: "Blueberry" },
//         { id: 123, name: "Raspberry" },
//       ],
//     },
//   ],
// }
//   (list = [`<li>Fruits`]);

// var mainList = [
//   {
//     id: 11,
//     name: "Citrus",
//     subcategories: [
//       { id: 111, name: "Orange" },
//       { id: 112, name: "Lemon" },
//       { id: 113, name: "Lime" },
//     ],
//   },
//   {
//     id: 12,
//     name: "Berries",
//     subcategories: [
//       { id: 121, name: "Strawberry" },
//       { id: 122, name: "Blueberry" },
//       { id: 123, name: "Raspberry" },
//     ],
//   },
// ];
function nestedList(mainList) {
  var list = mainList
    .map(function (item) {
      return `<li>${item.name}
      </li>
      ${item.subcategories ? nestedList(item.subcategories) : " "}
      `;
    })
    .join("");
  return `<ul>${list}</ul>`;
}

var myList = nestedList(categories);
console.log(myList);
document.write(myList);

// function getList(categories) {
//   return categories
//     .map(function (categorie) {
//       return `<li>
//                 <div>Id: ${categorie.id}</div>
//                 <div>Name: ${categorie.name}</div>
//               </li>
//               ${
//                 categorie.subcategories
//                   ? `<ul>${getList(categorie.subcategories)}</ul>`
//                   : ""
//               }`;
//     })
//     .join("");
// }

// document.write(`<ul>${getList(categories)}</ul>`);

// // function getListImproved(categories) {
// //   if (!categories) {
// //     return "";
// //   }
// //   return `<ul>${categories
// //     .map(function (categorie) {
// //       return `<li>
// //                   <div>Id: ${categorie.id}</div>
// //                   <div>Name: ${categorie.name}</div>
// //                   ${getListImproved(categorie.subcategories)}
// //               </li>
// //               `;
// //     })
// //     .join("")}
// //     </ul>`;
// // }
// // console.log("getListImproved(categories)", getListImproved(categories));
// // document.write(`<ul>${getListImproved(categories)}</ul>`);

// var fileManager = [
//   {
//     type: "folder",
//     name: "asset",
//     icon: "folder.svg",
//     createdDate: "4 April 2023",
//     updatedDate: "4 April 2023",
//     files: [
//       {
//         type: "file",
//         name: "image1.jpeg",
//         fileTypes: "jpeg",
//         icon: "image.svg",
//         hasChange: true,
//         createdDate: "4 April 2023",
//         updatedDate: "4 April 2023",
//       },
//       {
//         type: "file",
//         name: "image2.jpeg",
//         fileTypes: "jpeg",
//         icon: "image.svg",
//         hasChange: true,
//         createdDate: "4 April 2023",
//         updatedDate: "4 April 2023",
//       },
//       {
//         type: "file",
//         name: "image3.jpeg",
//         fileTypes: "jpeg",
//         icon: "image.svg",
//         hasChange: true,
//         createdDate: "4 April 2023",
//         updatedDate: "4 April 2023",
//       },
//     ],
//   },
//   {
//     type: "file",
//     name: "index.html",
//     fileTypes: "html",
//     icon: "html.svg",
//     hasChange: true,
//     createdDate: "4 April 2023",
//     updatedDate: "4 April 2023",
//   },
//   {
//     type: "file",
//     name: "script.js",
//     fileTypes: "js",
//     icon: "javascript.svg",
//     hasChange: true,
//     createdDate: "4 April 2023",
//     updatedDate: "4 April 2023",
//   },
//   {
//     type: "file",
//     name: "style.css",
//     fileTypes: "css",
//     icon: "css.svg",
//     hasChange: true,
//     createdDate: "4 April 2023",
//     updatedDate: "4 April 2023",
//   },
// ];

// var couter = 0;
// function two(){
//     console.log('two-1');
//     counter++;
//     if(counter < 3) {
//         two();
//     }
//     console.log('two-2');
// }
// two();
// var topNum = 10;
// function logCounter(num) {
//     if(num > 0) {
//         console.log('counter..',num);
//         logCounter(--topNum);
//     }
// }
// logCounter(topNum);
// var tableOf = 2;
// function logTable(tableOf,seq){
//     console.log(tableOf*seq);
//     if(seq < 10) {
//         logTable(tableOf,++seq);
//     }
// }
// logTable(tableOf,1);

// function creatTable(num) {
//   console.log(num);
//   if (num < 5) {
//     creatTable(++num);
//     console.log(num);
//   }
// }
// creatTable(1);

// var num = 1;
// function creatTable() {
//   console.log(num);
//   if (num < 5) {
//     creatTable(++num);
//     console.log("Inside ", num);
//   }
// }
// console.log("Before CALLING");
// creatTable();
// console.log("After CALLING");

// Memory
// num =5
// "creatTable" "kya hai pata hai "
// Line: 718

// Before CALLING 1 2 3 4 5 | 5 5 5 5

// 1 2 3 4 5 5 4 3 2

// function mixture(voltage, fruits) {
//   if (voltage >= 240) {
//     console.log("Mixture Start:");
//     console.log("Start Motor:");
//     // return "Electricty Gone";
//     console.log("Wait for 5 mint:");
//     console.log("Mixture Stop:");
//     // return fruits + "Juice";
//   } else {
//     console.log("Mixture Not Started:");
//     console.log("Mixture Not Started:");
//     console.log("Mixture Not Started:");
//     console.log("Mixture Not Started:");
//     console.log("Mixture Not Started:");
//     // return "Sorry Not Juice";
//   }
// }

// var glass = mixture(240, "apple");
// // console.log(glass);

// function printMyName(name) {
//   console.log("Hello ", name);
//   console.log("printMyName End");
// }

// function hello() {
//   printMyName("Saloni");
//   console.log("hello End");
// }

// printMyName("Ram");

// hello();
// console.log("Kuch Bhi");

// line: 740
// line: 734
// Hello Saloni
// PrintMyName End
// Hello End

function factorial(num) {
  if (num == 1) {
    return 1;
  }
  return num * factorial(num - 1);
}

// var glass = factorial(6);
// console.log("glass: ", glass);

num = 6;
function factorialOf(num) {
  for (var i = 1; i < num; i++) {
    var nam = num * i;
    console.log("Nam: ", nam);
    // return nam;
  }
  // var result = num * 1 * 2 * 3 * 4 * 5 *6;
  // return result;
  // return num * num;
}
console.log(factorialOf(num));

// 778;
// hello(5);
// num = 5;
// return 5 * (4 * (3 * (2 * 1)));
