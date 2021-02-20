var accItem = document.getElementsByClassName("item");
var accHD = document.getElementsByClassName("labelItem");

for (i = 0; i < accHD.length; i++) {
  accHD[i].addEventListener("click", toggleItem, false);
}

function toggleItem() {
  var itemClass = this.parentNode.className;
  for (i = 0; i < accItem.length; i++) {
    accItem[i].className = "item collapse";
  }
  if (itemClass == "item collapse") {
    this.parentNode.className = "item default";
  }
}