"use strict";

const container = document.querySelector(".container");

const root = ReactDOM.createRoot(container);
const buttonReact = React.createElement(
  "button",
  {
    className: "btn",
    type: "submit",
    onClick: () => {
      console.log("clicked");
    }
  },
  "React"
);

container.append(buttonReact);
root.render(buttonReact);

console.log(buttonReact);
