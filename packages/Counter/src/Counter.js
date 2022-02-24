import React from "react";
import ReactDOM from "react-dom";
import { useStore } from "store/store";
import "./index.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";


const App = ({name='dd'}) => {
  const { count, increment, clear } = useStore();

  return (
  <div className="container">
   Count is: {count}
   <br/>
   <div>
     {name}
   </div>
   <button onClick={() => increment()} style={{ marginRight: '10px' }}>
      Increment
    </button>
    <button onClick={() => clear()}>
      Clear
    </button>
  </div>
)};

export default App;