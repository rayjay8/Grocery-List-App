const add = document.getElementById("add");
const item = document.getElementById("item");
let itemValue;

const addItem = () => {
  const listing = document.createElement("div");
  listing.classList.add("listing");
  const item = document.createElement("h1");
  listing.appendChild(item);
  const node = document.createTextNode(itemValue);
  item.appendChild(node);
  const element = document.getElementById("list");
  element.appendChild(listing);
};

add.addEventListener("click", () => {
  itemValue = item.value;
  addItem();
  item.value = "";
  console.log(itemValue);
});
