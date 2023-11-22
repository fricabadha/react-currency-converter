import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const RATES: {
  [k: string]: {
    [k: string]: number;
  };
} = {
  EUR: {
    USD: 1.0864,
    GBP: 0.87225,
  },
  USD: {
    EUR: 0.9204712813,
    GBP: 0.80218283,
  },
  GBP: {
    EUR: 1.1464603038,
    USD: 1.2465986089,
  },
};

function App() {
  const [amount, setAmount] = useState(0);
  const [result, setResult] = useState(0);
  const [currencyFrom, setCurrencyFrom] = useState("EUR");
  const [currencyTo, setCurrencyTo] = useState("USD");

  return (
    <div className="box">
      <h1>Currency Convert</h1>

      <div>
        Convert from:
        <select
          className="control mt-8"
          defaultValue={currencyFrom}
          onChange={(e: any) => {
            setCurrencyFrom(e.target.value);
          }}
        >
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="USD">USD</option>
        </select>
      </div>

      <div className="mt-16">
        Convert to:
        <select
          className="control mt-8"
          defaultValue={currencyTo}
          onChange={(e: any) => {
            setCurrencyTo(e.target.value);
          }}
        >
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="USD">USD</option>
        </select>
      </div>

      <div className="mt-8">
        Amount
        <input
          className="control"
          type="text"
          onInput={(e: any) => {
            setAmount(e.target.value);
          }}
        />
      </div>

      <div className="mt-16">
        <button
          onClick={() => {
            setResult(amount * RATES[currencyFrom][currencyTo]);
            console.log(currencyFrom, currencyTo);
          }}
        >
          Convert
        </button>

        <div>Risultato: {result}</div>
      </div>
    </div>
  );
}

export default App;
