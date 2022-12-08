/******************Variables*******************/
/* const menuVege = [
  { plat: "Salade de tofu aux trois vinaigrettes et frites",
    prix: 12,
  },
  { plat: "Buddha bowl aux boulettes de faux gras, caramel et frites",
    prix: 12,
  },
  { plat: "Burger garni aux frites, peanut butter et beignets d’oignons",
    prix: 12,
  },
]
const menuSucre = [
  { plat: "Gâteau Oreo, ganache chocolat au lait et crème 100%",
    prix: 12,
  },
  { plat: "Merveilleux du chef, cassonade-chocolat-fruits confits",
    prix: 12,
  },
  { plat: "Gaufre de Liège à la chantilly alourdie, sauce anglaise et sucre glace",
    prix: 12,
  },
]
const menuBouffe = [
  { plat: "Pita tartiflette sans crudités, sauche riche",
    prix: 12,
  },
  { plat: "Panini poulycroc, fromage à raclette et mayonnaise aux oeufs",
    prix: 12,
  },
  { plat: "Pizza 3x3 (trois fromages, trois charcuteries)",
    prix: 12,
  },
] */

let carteVege = document.getElementById("carte-végé");
let carteSucre = document.getElementById("carte-sucré");
let carteBouffe = document.getElementById("carte-bouffé");
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
