import React from "react";
import "./App.css";
import { connect } from "react-redux";
import Expense from "./pages/Expense";

function App() {
  return (
    <div className="App">
      <Expense />
    </div>
  );
}

export default App;
