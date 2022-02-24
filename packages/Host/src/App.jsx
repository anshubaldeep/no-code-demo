import React, { useState } from "react";
import ReactDOM from "react-dom";
import Counter from 'Counter/Counter';
import Header from 'Header/Header';
import Todo from 'Todo/Todo';
import "./index.css";
import { StoreProvider } from "store/store";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";



const App = () =>{
  return (
    <>
    <StoreProvider>
    <Header/>
      <BrowserRouter>
        <div className="container">
        <div style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
          <Link to="/counter">Counter</Link> |{" "}
          <Link to="/todo">Todo</Link>
        </div>
          <Routes>
            <Route path="counter" element={<Counter />} />
            <Route path="todo" element={<Todo />} />
          </Routes>
        </div>
      </BrowserRouter>
    </StoreProvider>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
