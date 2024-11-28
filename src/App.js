import { useState } from "react";
import "./App.css";
import Counter from "./Components/Counter/Counter";

const counterList = [
  {name :"Counter A" , id : 'A'},
  {name :"Counter B" , id : 'B'},
  {name :"Counter C" , id : 'C'},
  ];
function App() {
  const [toggle, setToggle] = useState(0);
  const handleToggle = () => {
    setToggle((state) => (state+1)%counterList.length);
  };
  const obj = counterList[toggle];

 
  
  return (
    <div className="App">
      <button onClick={handleToggle}>Toggle</button>
        <Counter name={obj.name} key={obj.id} />
      
    </div>
  );
}

export default App;
