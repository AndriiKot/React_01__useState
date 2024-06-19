"use strict";

const container = document.querySelector(".container");

const root = ReactDOM.createRoot(container);

const titleReact = <h1 className="title__React-App">React App</h1>; 

const buttonReact = <button className="btn" type="submit">React</button>

const boxReact = <div className="box__React">{titleReact}{buttonReact}</div>


root.render(boxReact);

