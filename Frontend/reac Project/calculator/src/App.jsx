

import { useState } from "react"
import "./style.css"

export default function App() {

  const [input, setInput] = useState("")



  const handleClick = (value) => {
  const operators = ["+", "-", "*", "/", "%"];

  const lastChar = input.slice(-1);

  // Don't allow operator as first character
  if (input === "" && operators.includes(value)) {
    return;
  }

  // Prevent ++, --, **, //, %%
  if (operators.includes(lastChar) && operators.includes(value)) {
    return;
  }

  // Prevent multiple dots in the current number
  if (value === ".") {
    const parts = input.split(/[+\-*/%]/);
    const currentNumber = parts[parts.length - 1];

    if (currentNumber.includes(".")) {
      return;
    }
  }

  setInput((prev) => prev + value);
};



  const handleClear = () => {
    setInput("");
  }


  const handleDelete = () => {
    setInput((prev) => prev.slice(0,-1));
  }



  const handleCalculate = ()=>{
    try {
      setInput(eval(input).toString());
    }catch (error) {
        setInput("Error");
    }
    
  }

  return <>
    <div className="calculator-container">

      <div className="calculator">
        <div className="display" >{input || "0"}</div>

        <div className="buttons">
          <button className="btn control" onClick={handleClear}>C</button>
          <button className="btn control" onClick={handleDelete}>DEL</button>
          <button className="btn operator" onClick={() => handleClick("%")}>%</button>
          <button className="btn operator" onClick={() => handleClick("/")}>/</button>

          <button className="btn" onClick={() => handleClick("7")}>7</button>
          <button className="btn" onClick={() => handleClick("8")}>8</button>
          <button className="btn" onClick={() => handleClick("9")}>9</button>
          <button className="btn operator"onClick={() => handleClick("*")}>x</button>

          <button className="btn" onClick={() => handleClick("4")}>4</button>
          <button className="btn" onClick={() => handleClick("5")}>5</button>
          <button className="btn" onClick={() => handleClick("6")}>6</button>
          <button className="btn operator" onClick={() => handleClick("-")}>-</button>

          <button className="btn" onClick={() => handleClick("1")}>1</button>
          <button className="btn" onClick={() => handleClick("2")}>2</button>
          <button className="btn" onClick={() => handleClick("3")}>3</button>
          <button className="btn operator" onClick={() => handleClick("+")}>+</button>

          <button className="btn zero" onClick={() => handleClick("0")}>0</button>

          <button className="btn" onClick={() => handleClick(".")}>.</button>

          <button className="btn equals" onClick={handleCalculate}>=</button>









        </div>
      </div>

    </div>
  </>
}; 