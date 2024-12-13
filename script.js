var image = document.getElementById("imageItem");

function imagereset() {
  // image.setAttribute("width","28%");
  image.classList.toggle("imgclass");
}

function highlight() {
  listItem.style.color = "Red";
  listItem.style.fontWeight = "bold";
}

function reset() {
  listItem.style.color = "Black";
  listItem.style.fontWeight = "normal";
}
