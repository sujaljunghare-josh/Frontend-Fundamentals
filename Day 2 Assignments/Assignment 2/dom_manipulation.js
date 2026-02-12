// 1) Change text of a div on button click

const messageDiv = document.getElementById("message");
const changeBtn = document.getElementById("changeBtn");

changeBtn.addEventListener("click", function () {
  messageDiv.textContent = "The text has been changed!";
});

// 2) Add a new list item dynamically

const listElement = document.getElementById("list");
const addItemBtn = document.getElementById("addItem");

addItemBtn.addEventListener("click", function () {
  const newLi = document.createElement("li");
  const itemNumber = listElement.children.length + 1;
  newLi.textContent = "Item " + itemNumber;
  listElement.appendChild(newLi);
});

// 3) Remove an element from the DOM

const removeMePara = document.getElementById("removeMe");
const removeBtn = document.getElementById("removeBtn");

removeBtn.addEventListener("click", function () {
  // remove() completely deletes the element from DOM
  removeMePara.remove();
});

// 4) Display input value on screen while typing
const inputBox = document.getElementById("inputBox");
const outputPara = document.getElementById("output");

inputBox.addEventListener("input", function () {
  // Whatever user types will immediately appear in the <p>
  outputPara.textContent = inputBox.value;
});