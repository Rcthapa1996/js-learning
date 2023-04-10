var fileManager = [
  {
    type: "folder",
    name: "asset",
    icon: "folder.svg",
    createdDate: "4 April 2023",
    updatedDate: "4 April 2023",
    files: [
      {
        type: "file",
        name: "image1.jpeg",
        fileTypes: "jpeg",
        icon: "image.svg",
        hasChange: true,
        createdDate: "4 April 2023",
        updatedDate: "4 April 2023",
      },
      {
        type: "file",
        name: "image2.jpeg",
        fileTypes: "jpeg",
        icon: "image.svg",
        hasChange: true,
        createdDate: "4 April 2023",
        updatedDate: "4 April 2023",
      },
      {
        type: "file",
        name: "image3.jpeg",
        fileTypes: "jpeg",
        icon: "image.svg",
        hasChange: true,
        createdDate: "4 April 2023",
        updatedDate: "4 April 2023",
      },
      {
        type: "folder",
        name: "thumnail",
        icon: "folder.svg",
        createdDate: "4 April 2023",
        updatedDate: "4 April 2023",
        files: [
          {
            type: "file",
            name: "image1.jpeg",
            fileTypes: "jpeg",
            icon: "image.svg",
            hasChange: true,
            createdDate: "4 April 2023",
            updatedDate: "4 April 2023",
          },
          {
            type: "file",
            name: "image2.jpeg",
            fileTypes: "jpeg",
            icon: "image.svg",
            hasChange: true,
            createdDate: "4 April 2023",
            updatedDate: "4 April 2023",
          },
          {
            type: "file",
            name: "image3.jpeg",
            fileTypes: "jpeg",
            icon: "image.svg",
            hasChange: true,
            createdDate: "4 April 2023",
            updatedDate: "4 April 2023",
          },
        ],
      },
    ],
  },
  {
    type: "file",
    name: "index.html",
    fileTypes: "html",
    icon: "html.svg",
    hasChange: true,
    createdDate: "4 April 2023",
    updatedDate: "4 April 2023",
  },
  {
    type: "file",
    name: "script.js",
    fileTypes: "js",
    icon: "javascript.svg",
    hasChange: true,
    createdDate: "4 April 2023",
    updatedDate: "4 April 2023",
  },
  {
    type: "file",
    name: "style.css",
    fileTypes: "css",
    icon: "css.svg",
    hasChange: true,
    createdDate: "4 April 2023",
    updatedDate: "4 April 2023",
  },
];

function createFileManager(fileManager) {
  return `<ul>
                ${fileManager
                  .map(function (item) {
                    return `<li>
                                ${item.name}
                                ${
                                  item.files
                                    ? createFileManager(item.files)
                                    : ""
                                }
                              </li>
                              `;
                  })
                  .join("")}
            </ul>
            `;
}

var fileManagerHTML = createFileManager(fileManager);
console.log(fileManagerHTML);
document.write(fileManagerHTML);
