//useRef hook stops the component from re-rendering and stores the value in JS's memory and when the component renders(because of a state) shows us the latest value of the Counter.It won't show us the value each and everytime the value of counter increases but when a state changes and renders the component then the useRef shows us the updated valu.

import React, { useRef, useState } from "react";

const UseRef = () => {
  const [counter, setCounter] = useState(0);
  console.log("Component has Rendered!!");

  const counterRef = useRef(100);
  console.log(counterRef.current, "counterRef");

  function Increment() {
    counterRef.current++;
    console.log(counterRef.current, "Inside Counter Ref");
  }
  return (
    <div>
      <h1>UseRef</h1>
      <h2>Counter = {counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <h2>Counter Ref Counter = {counterRef.current}</h2>
      <button onClick={Increment}>Add</button>
    </div>
  );
};

export default UseRef;
