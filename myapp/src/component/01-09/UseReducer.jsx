import React, { useReducer } from 'react'
import "../Styles/UseReducer.css"
function Reducer(state,action)
{
    switch(action.type){
      case "INCREMENT":
        return { counter : state.counter + 1};
      case "DECREMENT":
        return {counter : state.counter - 1};
      case "RESET":
        return {counter : 1000};
      default:
        return state;
    }
    // console.log(state,action)
}

const InitialState = {counter : 1000}
const UseReducer = () => {
  const[state,dispatch] = useReducer(Reducer,InitialState);
  function Increment(){
    dispatch ({type: "INCREMENT"});
  }
  function Decrement(){
    dispatch ({type: "DECREMENT"});
  }
  function Reset(){
    dispatch ({type: "RESET"});
  }
  return (
    <div className='parent'>
      <div className='reducerBody'>
      <h1>Use Reducer!!!</h1>
      <h2>Player Score Counter : {state.counter}</h2>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={Reset}>Reset</button>
      </div>
    </div>
  )
}

export default UseReducer