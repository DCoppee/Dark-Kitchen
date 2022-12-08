/******************Varaiables*******************/

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
  divVege.style.backgroundSize = "cover";
  divVege.style.marginBottom = "2em";
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
  } else {
  }
}

/***********SUCRE***********/

function cardCoverMobileSucre() {
  cartes.replaceChild(divSucre, carteSucre);
  divSucre.style.height = "23em";
  divSucre.style.width = "100%";
  divSucre.style.backgroundRepeat = "no-repeat";
  divSucre.style.backgroundSize = "cover";
  divSucre.style.marginBottom = "2em";
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
  divBouffe.style.backgroundSize = "cover";
  divBouffe.style.marginBottom = "2em";
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
