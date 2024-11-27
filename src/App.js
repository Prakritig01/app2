import { useState } from "react";
import "./App.css";
import Counter from "./Components/Counter/Counter";

function App() {
  const [toggle, setToggle] = useState(true);
  const handleToggle = () => {
    setToggle((state) => !state);
  };

  return (
    <div className="App">
      <button onClick={handleToggle}>Toggle</button>
      <Counter  name = "Counter A"/>
      {toggle && <Counter name  = "Counter B" />}
    </div>
  );
}

export default App;
