import React, { useState } from "react";

export default function Functioncomponent() {
  var item = [
    { cate: "electornics", products: ["phone", "laptop", "headphones"] },
    { cate: "groceroes", products: ["banana", "flowers", "mango"] },
  ];
  const [count, setCount] = useState(0);

  // Functions to update state
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);
  return (
    <div>
      <h1> Function component</h1>
      <div>
        <h1>select option</h1>
        <select>
          {item.map((ele) => (
            <optgroup label="ele.cate">
              {ele.products.map((ele) => (
                <option>{ele}</option>
              ))}
            </optgroup>
            // <option>{ele.cate}</option>
          ))}
        </select>
      </div>

      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Counter: {count}</h1>
        <button onClick={increment} style={buttonStyle}>
          Increment
        </button>
        <button onClick={decrement} style={buttonStyle}>
          Decrement
        </button>
        <button onClick={reset} style={buttonStyle}>
          Reset
        </button>
      </div>
    </div>
  );
}

const buttonStyle = {
  margin: "10px",
  padding: "10px 20px",
  fontSize: "16px",
  cursor: "pointer",
};
