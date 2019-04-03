import React from "react";
import "./App.css";
import NumberButton from "./components/ButtonComponents/NumberButton.js";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay.js";
import ActionButton from "./components/ButtonComponents/ActionButton.js";
const App = () => {
  return (
    <div className="bigBox">
      <div className="calc">
        <CalculatorDisplay style="display" text="0" />
      </div>
      <div className="calc">
        <ActionButton buttonStyle="clearButton" text="clear" />
        <ActionButton buttonStyle="actionButton" text="&#215;" />
      </div>
      <div className="calc">
        <NumberButton buttonStyle="numButton" text="7" />
        <NumberButton buttonStyle="numButton" text="8" />
        <NumberButton buttonStyle="numButton" text="9" />
        <ActionButton buttonStyle="actionButton" text="&#247;" />
      </div>
      <div className="calc">
        <NumberButton buttonStyle="numButton" text="4" />
        <NumberButton buttonStyle="numButton" text="5" />
        <NumberButton buttonStyle="numButton" text="6" />
        <ActionButton buttonStyle="actionButton" text="&#45;" />
      </div>
      <div className="calc">
        <NumberButton buttonStyle="numButton" text="1" />
        <NumberButton buttonStyle="numButton" text="2" />
        <NumberButton buttonStyle="numButton" text="3" />
        <ActionButton buttonStyle="actionButton" text="&#43;" />
      </div>
      <div className="calc">
        <ActionButton buttonStyle="numButton0" text="0" />
        <ActionButton buttonStyle="actionButton" text="=" />
      </div>
    </div>
  );
};

export default App;
