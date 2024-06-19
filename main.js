"use strict";

const container1 = document.querySelector(".container-1");
const container2 = document.querySelector(".container-2");


const buttonVanillaJs = document.createElement("button");
buttonVanillaJs.textContent = "Vanilla JS"; 
// or buttonVanillaJs.innerText = "Vanilla JS";

container1.appendChild(buttonVanillaJs);

