import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { Increment,Decrement,Reset } from '../redux/action';
const ReduxCounter = () => {

  const counter = useSelector((state)=>state.counter.counter);
  const dispatch = useDispatch();

  const AddCounter =()=>{
    dispatch(Increment())
  }
  const MinusCounter=()=>{
    dispatch(Decrement())
  }
  const ResetCounter=()=>{
    dispatch(Reset())
  }
  return (
    <div>
      <h1>ReduxCounter</h1>
      <h3>Counter : {counter}</h3>
      <button onClick={AddCounter}>+</button>
      <button onClick={MinusCounter}>-</button>
      <button onClick={ResetCounter}>RESET</button>
    </div>
  )
}

export default ReduxCounter