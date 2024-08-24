import { useState } from "react";
import("../Styles/Counter.css");
function Counter() {
  const [counter, setCounter] = useState(0);
  // console.log("counter",counter)

  function Increment() {
    setCounter(counter + 1);
  }
  function Decrement() {
    // setCounter(counter - 1)
    if (counter > 0) {
       setCounter(counter - 1);
    }
    
  }
  function resetToZero() {
    setCounter(0);
  }
  return (
    <div className="counterButtons">
      <h1> Counter: {counter}</h1>
      <button onClick={Increment}>+</button>
      <button onClick={Decrement}>-</button>
      <button onClick={resetToZero}>Reset</button>
    </div>
  );
}
export default Counter;
