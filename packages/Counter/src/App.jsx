import React, { useState } from "react";
import ReactDOM from "react-dom";
import Counter from './Counter';
import "./index.css";
import { StoreProvider } from "store/store";

const App = () => {
  return (
    <StoreProvider>
      <Counter/>
    </StoreProvider>
)};
ReactDOM.render(<App />, document.getElementById("app"));
