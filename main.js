"use strict";

const container = document.querySelector(".container");

const root = ReactDOM.createRoot(container);

<h1 className="title__React-App">React App</h1>;

function App() {
  return (
    <div className="box__React">
      <h1 className="title__React-App">React App</h1>
      <button
        className="btn"
        type="submit"
        onClick={() => console.log("Clicked!")}
      >
        React
      </button>
    </div>
  );
}

root.render(App());
