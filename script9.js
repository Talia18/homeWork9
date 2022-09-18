// let overallPrice = 0;

// function click1() {
//   overallPrice = overallPrice + 3;
// }

// function click2() {
//   overallPrice = overallPrice + 4;
// }

// function click3() {
//   overallPrice = overallPrice + 7;
// }

// function click4() {
//   overallPrice = overallPrice + 2;
// }

// function showOverAllPreice() {
//   alert("המחיר של העגלה שלך עד כה: " + overallPrice);
// }

// function resetAll() {
//   overallPrice = 0;
// }

let products = [
  [1, "עגבניה", 3],
  [2, "מלפפון", 4],
  [3, "מנגו", 7],
  [4, "חסה", 2],
];

let shoppingCart = [];

function addClick(productID) {
  shoppingCart.push(products[productID - 1]);
  renderCart();
}
function renderCart() {
  document.getElementById("shoppingCart").innerHTML = "";
  for (let i = 0; i < shoppingCart.length; i++) {
    let productHTML = document.createElement("div");
    let productDescription = document.createTextNode(
      shoppingCart[i][1] + " עולה " + shoppingCart[i][2] + ' ש"ח'
    );
    let removeBtn = document.createElement("button");

    removeBtn.setAttribute(
      "onclick",
      "removeProduct(" + shoppingCart[i][0] + ")"
    );
    removeBtn.textContent = "הסר מוצר";
    productHTML.appendChild(productDescription);
    productHTML.appendChild(removeBtn);

    document.getElementById("shoppingCart").appendChild(productHTML);
  }
}
function removeProduct(product) {
  let j = 0;
  for (let i = 0; i < shoppingCart.length && j < 1; i++) {
    if (shoppingCart[i][0] == product) {
      shoppingCart.splice(i, 1);
      renderCart();
      j++;
    }
  }
}
