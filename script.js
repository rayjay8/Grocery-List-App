const add = document.getElementById("add");
const alert = document.getElementById("alert");
const remove = document.querySelectorAll(".remove");
const item = document.getElementById("item");
let itemValue;

let i = 0,
  j = 0;

const addItem = () => {
  const listing = document.createElement("div");
  listing.classList.add("listing");
  listing.setAttribute("id", "listing" + i++);
  const item = document.createElement("h1");
  listing.appendChild(item);
  item.setAttribute("class", "name");
  const node = document.createTextNode(itemValue);
  item.appendChild(node);
  const remove = document.createElement("button");
  remove.setAttribute("class", "remove");
  remove.setAttribute("id", "remove" + j++);
  const icon = document.createElement("i");
  icon.setAttribute("class", "fa-solid fa-xmark");
  remove.appendChild(icon);
  const element = document.getElementById("list");
  listing.appendChild(remove);
  element.appendChild(listing);

  let r = document.getElementById("remove" + j);
};

add.addEventListener("click", () => {
  itemValue = item.value;
  if (itemValue === "") {
    alert.style.visibility = "visible";
    alert.style.margin = "25px 0 25px";
    item.style.marginBottom = "0";
  } else {
    alert.style.visibility = "hidden";
    alert.style.margin = "0";
    item.style.marginBottom = "50px";
    addItem();
  }
  item.value = "";
});

const remove0 = document.getElementById("remove0");
const listing0 = document.getElementById("listing0");

remove0.addEventListener("click", () => {
  listing0.remove();
  console.log("removed");
});
