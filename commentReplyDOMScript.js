// function beforeOnLoad() {
//   console.log("Document before onload");
//   console.log("DOM Element: ", document.body);
// }
// beforeOnLoad();

// function loadHandler() {
//   console.log("Document is loaded");
//   console.log("DOM Element: ", document);
// }

/**
 * Reply Component
 * - Header
 *   - Profile
 *   - Name
 *   - Timing
 * - Content ( Comment , Input Comment)
 * - Footer
 *   - Up Vote
 *   - Count
 *   - Down Vote
 *   - Reply
 *   - Share
 * - Reply Add
 */

// var commentData = [];

function vote(id, num) {
  var container = document.getElementById(id);
  var count = container.querySelector("#count");
  count.innerText = Number(count.innerHTML) + num;
}

var count = 1;

function createComments(parentId) {
  var currentId = "container" + count++;
  var containerElement = document.createElement("div");
  containerElement.className = "container";
  containerElement.id = currentId;

  var headerElement = document.createElement("header");
  headerElement.className = "header";

  var profileElement = document.createElement("img");
  profileElement.classList = "profile";
  profileElement.width = "30";
  profileElement.src = "./asset/Ramchandra Thapa.jpg";
  headerElement.appendChild(profileElement);

  var userNameElement = document.createElement("div");
  userNameElement.classList = "user-name";
  userNameElement.innerText = "Ramchandra Thap";
  headerElement.appendChild(userNameElement);

  var dateElement = document.createElement("div");
  dateElement.classList = "date";
  dateElement.innerText = "10th April 2023";
  headerElement.appendChild(dateElement);

  containerElement.appendChild(headerElement);

  var commentElement = document.createElement("p");
  commentElement.className = "content";
  commentElement.innerText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto aperiam vel ratione odio non modi id possimus voluptate unde consectetur quis odit nostrum enim, repellat autem illo, a inventore impedit?";

  containerElement.appendChild(commentElement);

  var footerElement = document.createElement("footer");
  footerElement.className = "footer";

  var upBtnElement = document.createElement("button");
  upBtnElement.classList = "up-down-btn";
  upBtnElement.id = "up";
  upBtnElement.innerText = "⬆️";
  upBtnElement.addEventListener("click", () => vote(currentId, 1));
  footerElement.appendChild(upBtnElement);

  var countElement = document.createElement("span");
  countElement.classList = "count";
  countElement.id = "count";
  countElement.innerText = 0;
  footerElement.appendChild(countElement);

  var downBtnElement = document.createElement("button");
  downBtnElement.classList = "up-down-btn";
  upBtnElement.id = "down";
  downBtnElement.innerText = "⬇️";
  downBtnElement.addEventListener("click", () => vote(currentId, -1));
  footerElement.appendChild(downBtnElement);

  var replyBtnElement = document.createElement("button");
  replyBtnElement.classList = "reply-btn";
  replyBtnElement.innerText = "📢 Reply";
  replyBtnElement.addEventListener("click", () => createComments(currentId));
  footerElement.appendChild(replyBtnElement);

  containerElement.appendChild(footerElement);

  var parent = document.querySelector(`#${parentId}`);
  console.log("Parent: ", parentId, "Id: ", count);
  parent
    ? parent.appendChild(containerElement)
    : document.body.appendChild(containerElement);
}
