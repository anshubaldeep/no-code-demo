import React from "react";
import ReactDOM from "react-dom";
import Todo from './Todo';
import "./index.css";

const App = () => (
  <div className="container">
    <Todo/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
