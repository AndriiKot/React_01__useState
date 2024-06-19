"use strict";

const container1 = document.querySelector(".container-1");
const container2 = document.querySelector(".container-2");

// VanillaJS
const buttonVanillaJs = document.createElement("button");
buttonVanillaJs.textContent = "Vanilla JS"; 
// or buttonVanillaJs.innerText = "Vanilla JS";

// TESTING append()

container2.append(buttonVanillaJs);
// container1.appendChild(buttonVanillaJs);

// React
const buttonReact = React.createElement("button");
console.log(buttonReact);