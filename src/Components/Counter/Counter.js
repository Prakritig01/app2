import React, { useEffect, useState } from "react";
import "./Counter.css";

const Counter = ({ name }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Counter created!");
    return () => console.log("Counter Destroyed!");
  }, []);

  const increment = () => setCount((prev) => prev + 1);
  const reset = () => setCount(0);
  return (
    <div>
      <div className="counter">count :{count}</div>
      <div className="name">{name}</div>
      <button onClick={increment}>Increment</button>
      <button onClick={reset}>Reset</button>
      <div className="message">{count > 10 ? "Threshold reached !!!" : ""}</div>
    </div>
  );
};

export default Counter;
