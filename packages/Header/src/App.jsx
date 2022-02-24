import React from "react";
import ReactDOM from "react-dom";
import Header from './Header';
import "./index.css";
import { StoreProvider } from "store/store";

const App = () => (
  <StoreProvider>
  <Header />
  </StoreProvider>
);
ReactDOM.render(<App />, document.getElementById("app"));
