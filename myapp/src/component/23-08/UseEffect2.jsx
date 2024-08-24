import { useEffect, useState } from "react";

function UseEffect2() {
  const [counter, setCounter] = useState(1);
  function Increment() {
    setCounter(counter + 1);
  }
  useEffect(() => {
    console.log("Inside Empty Dependency");
  }, []);
  return (
    <div>
      <h1>Counter : {counter}</h1>
      <button onClick={Increment}>+</button>
    </div>
  );
}

export default UseEffect2;
