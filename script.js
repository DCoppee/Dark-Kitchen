let carteVege = document.getElementById("carte-végé");
let cartes = document.getElementById("cartes");
let div = document.createElement("div");
div.setAttribute("class", "newDiv");

document.getElementById("v-plat-1").addEventListener("click", vege1);
document.getElementById("v-plat-2").addEventListener("click", vege2);
document.getElementById("v-plat-3").addEventListener("click", vege3);
// document.getElementById("v-plat-1").addEventListener("click", sucre1);
// document.getElementById("v-plat-1").addEventListener("click", sucre2);
// document.getElementById("v-plat-1").addEventListener("click", sucre3);
// document.getElementById("v-plat-1").addEventListener("click", bouffe1);
// document.getElementById("v-plat-1").addEventListener("click", bouffe2);
// document.getElementById("v-plat-1").addEventListener("click", bouffe3);

function remove() {
  cartes.replaceChild(carteVege, div);
  document.querySelector("newDiv").addEventListener("click", remove);
}

function cardCoverMobile() {
  cartes.replaceChild(div, carteVege);
  div.style.height = "23em";
  div.style.width = "100%";
  div.style.backgroundRepeat = "no-repeat";
  div.style.backgroundSize = "cover";
  div.style.marginBottom = "2em";
}

function vege1() {
  if (window.matchMedia("(max-width: 1023px)").matches) {
    cardCoverMobile();
    div.style.backgroundImage = "url(/assets/images/VEGGIE01.png)";
  } else {
  }
}

function vege2() {
  if (window.matchMedia("(max-width: 1023px)").matches) {
    cardCoverMobile();
    div.style.backgroundImage = "url(/assets/images/VEGGIE02.png)";
  } else {
  }
}

function vege3() {
  if (window.matchMedia("(max-width: 1023px)").matches) {
    cardCoverMobile();
    div.style.backgroundImage = "url(/assets/images/VEGGIE03.png)";
  } else {
  }
}
