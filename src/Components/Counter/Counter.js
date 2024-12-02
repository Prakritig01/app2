import React, { useEffect, useState,useRef } from "react";
import "./Counter.css";
import backend from "../../Service/backend";

const Counter = ({ name }) => {
  const [count, setCount] = useState(0);
  const isFirstRender = useRef(true);

  useEffect(() => {
    backend.connect(name).then(prevCount => setCount(prevCount));
    return () => backend.disconnect(name);
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    backend.updateMap(count);
  }, [count]);

  const increment = () => setCount((prev) => prev + 1);
  const reset = () => setCount(0);
  const ping = () => {backend.ping("hii",name);}
  return (
    <div>
      <div className="counter">count :{count}</div>
      <div className="name">{name}</div>
      <button onClick={increment}>Increment</button>
      <button onClick={reset}>Reset</button>
      <button onClick={ping}>Ping Me!</button>
      <div className="message">{count > 10 ? "Threshold reached !!!" : ""}</div>
    </div>
  );
};

export default Counter;
