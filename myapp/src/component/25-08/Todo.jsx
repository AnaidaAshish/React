// import React, { useState } from "react";

// const Todo = () => {
//   const [todos, setTodos] = useState([]);
//   const [singleTodo, setSingleTodo] = useState("");

//   function submitTodo() {
//     setTodos([...todos, singleTodo]);
//     setSingleTodo("");
//   }

//   function handleInput(event) {
//     // console.log(event.target.value);
//     setSingleTodo(event.target.value);
//   }

//   console.log(singleTodo, "singleTodo");
//   console.log(todos, "todos");

//   return (
//     <div style={{marginLeft:"630px",
//       marginTop:"60px",
//       padding:"20px",
//       width:"300px",
//       height:"300px",
//       backgroundColor:"#d3d3d3",

//       // border:"1px solid black"
//     }}>
//       <h1 style={{fontSize:"18px"}}>Your Today's Todos ":)"</h1>
//       {todos.map((todo) => (
//         <h3>{todo}</h3>
//       ))}

//       <input
//         value={singleTodo}
//         onChange={handleInput}
//         placeholder="Type your todo here.."
//       />
//       <button onClick={submitTodo}>Submit Task</button>
//       </div>

//   );
// };

// export default Todo;

// // Steps 1 : state for [multiple todos ]
// // step 2 : state for single todo
// // Step 3 : function to add single todo into array of todos
// // Step 4 : function to  store value into state from input Element .
// // step 5 : rendering todos list
// // step 6 input and button
import React, { useState } from "react";

const Todo = () => {
  const [multipleTodos, setMutipleTodos] = useState([]);
  const [singleTodo, setSingleTodo] = useState("");

  function addSingleTodo(){
    setMutipleTodos([...multipleTodos,singleTodo]);
    setSingleTodo("");
  }
  function inputToSingleTodo(event){
    setSingleTodo(event.target.value);
  }
  console.log(singleTodo,"Single Todo")
  console.log(multipleTodos," Todo")
  return (
  <div>
    <h1>Add Your Daily Tasks</h1>
  {multipleTodos.map((singletodo)=>(
      <h3>{singletodo}</h3>
    ))}
    <input onChange={inputToSingleTodo} value={singleTodo} type="text" placeholder="Your todos..." />
    <button onClick={addSingleTodo}>Add</button>
  </div>
  );
};

export default Todo;
