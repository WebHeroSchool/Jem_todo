import React from "react";
import logo from "./logo.svg";
import "./App.css";
import * as nums from "./number";

const number = 42;
const adder = 2 + 3;
const flat = false;
const notFlat = true;
const values = [undefined, true, false, null];

// imported
const sum = nums.count * nums.length;


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p
          style={{
            color: "#800000",
            fontSize: "5vw",
            fontFamily: "Roboto, sans-serif",
          }}
        >
          Get Schwifty!
        </p>

        <p>Let's count: {nums.count} * {nums.length} = {sum}</p>
        <p>
          Happy {20}
          {number} year!
        </p>
        <p>2 + 3 = {adder}</p>
        <p>
          {flat ? "Earth is flat" : "Earth is not flat"}{" "}
          <span> {notFlat && "and that's fact"}</span>
        </p>
        <p>{values}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
