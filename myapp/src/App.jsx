import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './component/Home';
import Login from './component/Login';
import Not_found from './component/Not_Found';
import Register from './component/Register';
import Navbar from './component/21-08/Nabvar';
import Counter from './component/21-08/Counter';
import UseEffect1 from './component/23-08/UseEffect1';
import UseEffect2 from './component/23-08/UseEffect2';
import UseEffect3 from './component/23-08/UseEffect3';
import UseEffect4 from './component/23-08/UseEffect4';
import UseParams from './component/24-08/UseParams';
import PropDrilling from './component/24-08/PropDrilling';
import { useState } from 'react';
import Mapping from './component/24-08/Mapping';
import Mapping2 from './component/24-08/Mapping2';
import TerneryOperator from './component/25-08/TernaryOperator';
import Todo from './component/25-08/Todo';
import { StyledComponents } from './component/25-08/StyledComponents';



function App() {
  const [productName,setproductName] = useState (["Laptop","Mobile","TV","Mouse"])
  const [counter,setCounter] = useState(1)
  function Increment(){
    setCounter(counter + 1)
  }
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/'element ={<Home/>}></Route>
      <Route path='/login'element ={<Login/>}></Route>
      <Route path='*'element ={<Not_found/>}></Route>  
      <Route path='/register' element ={<Register/>}></Route>    
      <Route path='/counter' element = {<Counter/>}></Route>
      <Route path='/useeffect1' element = {<UseEffect1/>}></Route>
      <Route path='/useeffect2' element ={<UseEffect2/>}></Route>
      <Route path='/useeffect3' element ={<UseEffect3/> }></Route>
      <Route path='/useeffect4' element={<UseEffect4/>}></Route>
      <Route path='/product/:id' element = {<UseParams/>}></Route>
      <Route path='/propdrilling' element = {<PropDrilling  productNames={["Laptop","Mobile","TV","Mouse"]}
      color = {"Black"}
      counter = {counter}
      Increment = {Increment}
      />}></Route>
      <Route path='/mapping' element={<Mapping productName={productName} />}></Route>
      <Route path='/mapping2' element={<Mapping2/>}></Route>
      <Route path='/ternaryoperator' element={<TerneryOperator/>}></Route>
      <Route path='/todo' element={<Todo/>}></Route>
      <Route path='/styled-components' element={<StyledComponents/>}></Route>
    </Routes>
    </>
  );
}

export default App;