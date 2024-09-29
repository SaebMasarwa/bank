import React from "react";
import "./App.css";
import State from "./components/State";
import Expenses from "./components/Expenses";

function App() {
  let myUsername: string = " Saeb Masarwa";
  return (
    <div className="App">
      <div>
        <img src="./money.jpeg" alt="" />
      </div>
      <div className="container bg-success-subtle d-flex align-items-start">
        Welcom back <span className="fw-bold">{myUsername}</span>
      </div>
      <State />
      <Expenses />
    </div>
  );
}

export default App;
