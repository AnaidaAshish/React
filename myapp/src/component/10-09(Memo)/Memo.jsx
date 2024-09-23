import { useState } from "react";
import AnotherComponent from "./AnotherComponent";

function Memo() {
  const [counter, setCounter] = useState(10);
  const [counter2, setCounter2] = useState(1009990);
  function AddNumber() {
    setCounter(counter + 1);
  }
  function MinusNumber() {
    setCounter(counter - 1);
  }
  return (
    <div>
      <h1>Inside Memo Function</h1>
      <h3>Counter - {counter}</h3>
      <button onClick={AddNumber}>+</button>
      <button onClick={MinusNumber}>-</button>
      <AnotherComponent counter2={counter2} />
    </div>
  );
}
export default Memo;
