"use strict";

const container = document.querySelector(".container");

const root = ReactDOM.createRoot(container);

<h1 className="title__React-App">React App</h1>;

function App(props) {
  console.log(React.useState(0));
  
  return (
    <div>
      <h1>{props.title}</h1>
      <button
        className="btn"
        type="submit"
        onClick={() => console.log("Clicked!")}
      >
        {props.labeledButton}
      </button>
    </div>
  );
}

root.render(<App title="React App" labeledButton="Click me!" />);
