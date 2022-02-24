import React from "react";
import ReactDOM from "react-dom";
import { StoreProvider, useStore } from "store/store";
import "./index.css";

const App = () => {
  const {count} = useStore();
  return (
  <header style={{width: '100%', top: '0'}}>
    <div style={{backgroundColor: 'blue', color: 'white', width: '100%', textAlign: 'center', fontSize: '30px'}}>
      Count header {count}
    </div>
  </header>
)};


export default App;
