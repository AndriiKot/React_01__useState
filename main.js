"use strict";

const container = document.querySelector(".container");

const root = ReactDOM.createRoot(container);
const buttonReact = React.createElement("button", {
    className: "btn",
}, "React");

container.append(buttonReact);
root.render(buttonReact);


console.log(buttonReact);