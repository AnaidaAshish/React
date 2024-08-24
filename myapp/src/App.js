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

function App() {
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
    </Routes>
    </>
  );
}

export default App;
