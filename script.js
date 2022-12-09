/******************Variables*******************/
/* const menuVege = [
  "Salade de tofu aux trois vinaigrettes et frites",
    "Buddha bowl aux boulettes de faux gras, caramel et frites",
    "Burger garni aux frites, peanut butter et beignets d’oignons",
  ]

const prixVege = [
    {Prix: 12},
    {Prix: 12},
    {Prix: 12}
]

const menuSucre = [
    "Gâteau Oreo, ganache chocolat au lait et crème 100%",
    "Merveilleux du chef, cassonade-chocolat-fruits confits",
    "Gaufre de Liège à la chantilly alourdie, sauce anglaise et sucre glace",
  ]

const prixSucre = [
    {Prix: 12},
    {Prix: 12},
    {Prix: 12}
]

const menuBouffe = [
    "Pita tartiflette sans crudités, sauche riche",
   "Panini poulycroc, fromage à raclette et mayonnaise aux oeufs",
   "Pizza 3x3 (trois fromages, trois charcuteries)",
  ]

const prixBouffe = [
    {Prix: 12},
    {Prix: 12},
    {Prix: 12}
] */

let carteVege = document.getElementById("carte-vege");
let carteSucre = document.getElementById("carte-sucre");
let carteBouffe = document.getElementById("carte-bouffe");
let cartes = document.getElementById("cartes");

let divVege = document.createElement("div");
divVege.setAttribute("class", "divVege");
document.body.appendChild(divVege);

let divSucre = document.createElement("div");
divSucre.setAttribute("class", "divSucre");
document.body.appendChild(divSucre);

let divBouffe = document.createElement("div");
divBouffe.setAttribute("class", "divBouffe");
document.body.appendChild(divBouffe);

/*******************Click Events******************/

document.getElementById("v-plat-1").addEventListener("click", vege1);
document.getElementById("v-plat-2").addEventListener("click", vege2);
document.getElementById("v-plat-3").addEventListener("click", vege3);

document.getElementById("s-plat-1").addEventListener("click", sucre1);
document.getElementById("s-plat-2").addEventListener("click", sucre2);
document.getElementById("s-plat-3").addEventListener("click", sucre3);

document.getElementById("b-plat-1").addEventListener("click", bouffe1);
document.getElementById("b-plat-2").addEventListener("click", bouffe2);
document.getElementById("b-plat-3").addEventListener("click", bouffe3);

document.querySelector(".divVege").addEventListener("click", removeVege);
document.querySelector(".divSucre").addEventListener("click", removeSucre);
document.querySelector(".divBouffe").addEventListener("click", removeBouffe);

/*****************Display dishes******************/

/***********VEGE***********/

function cardCoverMobileVege() {
  cartes.replaceChild(divVege, carteVege);
  divVege.style.height = "23em";
  divVege.style.width = "100%";
  divVege.style.backgroundRepeat = "no-repeat";
  divVege.style.backgroundPosition = "center;";
  divVege.style.backgroundSize = "cover";
  divVege.style.marginBottom = "2em";
  divVege.style.position = "relative";
  divVege.style.filter = "blur(5px)";
}

function vege1() {
  if (window.matchMedia("(max-width: 1023px)").matches) {
    cardCoverMobileVege();
    divVege.style.backgroundImage = "url(/assets/images/VEGGIE01.png)";
  }
}

function vege2() {
  if (window.matchMedia("(max-width: 1023px)").matches) {
    cardCoverMobileVege();
    divVege.style.backgroundImage = "url(/assets/images/VEGGIE02.png)";
  }
}

function vege3() {
  if (window.matchMedia("(max-width: 1023px)").matches) {
    cardCoverMobileVege();
    divVege.style.backgroundImage = "url(/assets/images/VEGGIE03.png)";
  }
}

/***********SUCRE***********/

function cardCoverMobileSucre() {
  cartes.replaceChild(divSucre, carteSucre);
  divSucre.style.height = "23em";
  divSucre.style.width = "100%";
  divSucre.style.backgroundRepeat = "no-repeat";
  divVege.style.backgroundPosition = "center;";
  divSucre.style.backgroundSize = "cover";
  divSucre.style.marginBottom = "2em";
  divSucre.style.filter = "blur(5px)";
  divSucre.style.filter = "blur(5px)";
}

function sucre1() {
  if (window.matchMedia("(max-width: 1023px)").matches) {
    cardCoverMobileSucre();
    divSucre.style.backgroundImage = "url(/assets/images/SUGAR01.png)";
  }
}

function sucre2() {
  if (window.matchMedia("(max-width: 1023px)").matches) {
    cardCoverMobileSucre();
    divSucre.style.backgroundImage = "url(/assets/images/SUGAR02.png)";
  }
}

function sucre3() {
  if (window.matchMedia("(max-width: 1023px)").matches) {
    cardCoverMobileSucre();
    divSucre.style.backgroundImage = "url(/assets/images/SUGAR03.png)";
  }
}

/***********BOUFFE***********/

function cardCoverMobileBouffe() {
  cartes.replaceChild(divBouffe, carteBouffe);
  divBouffe.style.height = "23em";
  divBouffe.style.width = "100%";
  divBouffe.style.backgroundRepeat = "no-repeat";
  divVege.style.backgroundPosition = "center;";
  divBouffe.style.backgroundSize = "cover";
  divBouffe.style.marginBottom = "2em";
  divBouffe.style.filter = "blur(5px)";
  divBouffe.style.filter = "blur(5px)";
}

function bouffe1() {
  if (window.matchMedia("(max-width: 1023px)").matches) {
    cardCoverMobileBouffe();
    divBouffe.style.backgroundImage = "url(/assets/images/JUNK01.png)";
  }
}

function bouffe2() {
  if (window.matchMedia("(max-width: 1023px)").matches) {
    cardCoverMobileBouffe();
    divBouffe.style.backgroundImage = "url(/assets/images/JUNK02.png)";
  }
}

function bouffe3() {
  if (window.matchMedia("(max-width: 1023px)").matches) {
    cardCoverMobileBouffe();
    divBouffe.style.backgroundImage = "url(/assets/images/JUNK03.png)";
  }
}

/***************Undisplay*****************/

function removeVege() {
  cartes.replaceChild(carteVege, divVege);
}

function removeSucre() {
  cartes.replaceChild(carteSucre, divSucre);
}

function removeBouffe() {
  cartes.replaceChild(carteBouffe, divBouffe);
}

// open cart modal
const cart = document.querySelector("#panier-header");
const cartModalOverlay = document.querySelector(".cart-modal-overlay");

cart.addEventListener("click", () => {
  if (cartModalOverlay.style.transform === "translateX(-200%)") {
    cartModalOverlay.style.transform = "translateX(0)";
  } else {
    cartModalOverlay.style.transform = "translateX(-200%)";
  }
});
// end of open cart modal

// close cart modal
const closeBtn = document.querySelector("#close-btn");

closeBtn.addEventListener("click", () => {
  cartModalOverlay.style.transform = "translateX(-200%)";
});

cartModalOverlay.addEventListener("click", (e) => {
  if (e.target.classList.contains("cart-modal-overlay")) {
    cartModalOverlay.style.transform = "translateX(-200%)";
  }
});
// end of close cart modal

// add products to cart
const addToCart = document.getElementsByClassName("add-to-cart");
const productRow = document.getElementsByClassName("product-row");
const button1 = document.createElement("button");
divVege.appendChild(button1);
button1.classList.add(".add-to-cart");
button1.innerText = "Add to cart";

for (var i = 0; i < addToCart.length; i++) {
  button = addToCart[i];
  button.addEventListener("click", addToCartClicked);
}

function addToCartClicked(event) {
  button = event.target;
  var cartItem = button.parentElement;
  var price = cartItem.getElementsByClassName("product-price")[0].innerText;

  var imageSrc = cartItem.getElementsByClassName("product-image")[0].src;
  addItemToCart(price, imageSrc);
  updateCartPrice();
}

function addItemToCart(price, imageSrc) {
  var productRow = document.createElement("div");
  productRow.classList.add("product-row");
  var productRows = document.getElementsByClassName("product-rows")[0];
  var cartImage = document.getElementsByClassName("cart-image");

  for (var i = 0; i < cartImage.length; i++) {
    if (cartImage[i].src == imageSrc) {
      alert("This item has already been added to the cart");
      return;
    }
  }

  var cartRowItems = `
  <div class="product-row">
        <img class="cart-image" src="${imageSrc}" alt="">
        <span class ="cart-price">${price}</span>
        <input class="product-quantity" type="number" value="1">
        <button class="remove-btn">Remove</button>
        </div>
        
      `;
  productRow.innerHTML = cartRowItems;
  productRows.append(productRow);
  productRow
    .getElementsByClassName("remove-btn")[0]
    .addEventListener("click", removeItem);
  productRow
    .getElementsByClassName("product-quantity")[0]
    .addEventListener("change", changeQuantity);
  updateCartPrice();
}
// end of add products to cart

// Remove products from cart
const removeBtn = document.getElementsByClassName("remove-btn");
for (var i = 0; i < removeBtn.length; i++) {
  button = removeBtn[i];
  button.addEventListener("click", removeItem);
}

function removeItem(event) {
  btnClicked = event.target;
  btnClicked.parentElement.parentElement.remove();
  updateCartPrice();
}

// update quantity input
var quantityInput = document.getElementsByClassName("product-quantity")[0];

for (var i = 0; i < quantityInput; i++) {
  input = quantityInput[i];
  input.addEventListener("change", changeQuantity);
}

function changeQuantity(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateCartPrice();
}
// end of update quantity input

// update total price
function updateCartPrice() {
  var total = 0;
  for (var i = 0; i < productRow.length; i += 2) {
    cartRow = productRow[i];
    var priceElement = cartRow.getElementsByClassName("cart-price")[0];
    var quantityElement = cartRow.getElementsByClassName("product-quantity")[0];
    var price = parseFloat(priceElement.innerText.replace("$", ""));
    var quantity = quantityElement.value;
    total = total + price * quantity;
  }
  document.getElementsByClassName("total-price")[0].innerText = "$" + total;

  document.getElementsByClassName("cart-quantity")[0].textContent = i /= 2;
}
// end of update total price

// purchase items
const purchaseBtn = document.querySelector(".purchase-btn");

const closeCartModal = document.querySelector(".cart-modal");

purchaseBtn.addEventListener("click", purchaseBtnClicked);

function purchaseBtnClicked() {
  alert("Thank you for your purchase");
  cartModalOverlay.style.transform = "translateX(-100%)";
  var cartItems = document.getElementsByClassName("product-rows")[0];
  while (cartItems.hasChildNodes()) {
    cartItems.removeChild(cartItems.firstChild);
  }
  updateCartPrice();
}
// end of purchase items

//alert user if cart is empty
