"use strict";

const container = document.querySelector(".container");

const root = ReactDOM.createRoot(container);

const titleReact = <h1 className="title__React-App">React App</h1>; 
const buttonReact = <button className="btn" type="submit">React</button>

// const buttonReact = React.createElement(
//   "button",
//   {
//     className: "btn",
//     type: "submit",
//     onClick: () => {
//       console.log("clicked");
//     },
//   },
//   "React"
// );

// const boxReact = React.createElement(
//   "div",
//   {
//     className: "box__React",
//   },
//   [titleReact, buttonReact]
// );

// root.render(boxReact);

console.log(titleReact, buttonReact);
