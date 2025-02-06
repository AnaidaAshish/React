//
import React, { useMemo, useState } from "react";

const UseMemo = () => {
  const [counter, setCounter] = useState(1);
  const [todos, setTodos] = useState(["Do assignments."]);
  const AddTodo = () => {
    setTodos([...todos, "My New Todo."]);
  };

  //   const CalcuatedValueFromHeavyCalculations = HeavyCalculations(counter);
  const CalcuatedValueFromHeavyCalculations = useMemo(() => {
    HeavyCalculations(counter);
  }, [counter]);
  return (
    <div>
      {/* <h2>Heavy calculated Counter : {CalcuatedValueFromHeavyCalculations}</h2> */}
      <h1>Counter : {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      {todos.map((todo) => (
        <p>{todo}</p>
      ))}
      <button onClick={AddTodo}>Add new todo.</button>
    </div>
  );
};

function HeavyCalculations(counter) {
  console.log("calculations started.");
  for (let i = 1; i < 1000000000; i++) {
    counter += i;
  }
  return counter;
}

export default UseMemo;
