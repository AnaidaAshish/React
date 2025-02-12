import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Login from "./component/Login";
import Not_found from "./component/Not_Found";
import Navbar from "./component/21-08/Nabvar";
import Counter from "./component/21-08/Counter";
import UseEffect1 from "./component/23-08/UseEffect1";
import UseEffect2 from "./component/23-08/UseEffect2";
import UseEffect3 from "./component/23-08/UseEffect3";
import UseEffect4 from "./component/23-08/UseEffect4";
import UseParams from "./component/24-08/UseParams";
import PropDrilling from "./component/24-08/PropDrilling";
import { useState } from "react";
import Mapping from "./component/24-08/Mapping";
import Mapping2 from "./component/24-08/Mapping2";
import TerneryOperator from "./component/25-08/TernaryOperator";
import Todo from "./component/25-08/Todo";
import { StyledComponents } from "./component/25-08/StyledComponents";
import DynamicStyling from "./component/29-08/DynamicStyling";
import Registervalidation from "./component/31-08/Registervalidation";
import Register from "./component/Register";
import RegistervalidationUseEffect from "./component/31-08/RegistervalidationUseEffect";
import UseReducer from "./component/01-09/UseReducer";
import UseContext from "./component/03-09/UseContext";
import UseMemo from "./component/05-09(Context)/UseMemo";
import Memo from "./component/10-09(Memo)/Memo";
import UseCallBack from "./component/12-09/UseCallBack";
import UseRef from "./component/15/09/UseRef";
import AllProducts from "./component/14-09/AllProducts";
import ReduxCounter from "./component/19-09/ReduxCounter";
import Weather from "./component/Weather/index"
import CreateProduct from "./component/E-commerce/CreateProduct";
import Viewproducts from "./component/E-commerce/Viewproducts";
import Product from "./component/E-commerce/Product";


function App() {
  const [productName, setproductName] = useState([
    "Laptop",
    "Mobile",
    "TV",
    "Mouse",
  ]);
  const [counter, setCounter] = useState(1);
  function Increment() {
    setCounter(counter + 1);
  }
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Home />}></Route> */}
        <Route path="/login" element={<Login />}></Route>
        <Route path="*" element={<Not_found />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/counter" element={<Counter />}></Route>
        <Route path="/useeffect1" element={<UseEffect1 />}></Route>
        <Route path="/useeffect2" element={<UseEffect2 />}></Route>
        <Route path="/useeffect3" element={<UseEffect3 />}></Route>
        <Route path="/useeffect4" element={<UseEffect4 />}></Route>
        {/* <Route path="/product/:id" element={<UseParams />}></Route> */}
        <Route
          path="/propdrilling"
          element={
            <PropDrilling
              productNames={["Laptop", "Mobile", "TV", "Mouse"]}
              color={"Black"}
              counter={counter}
              Increment={Increment}
            />
          }
        ></Route>
        <Route
          path="/mapping"
          element={<Mapping productName={productName} />}
        ></Route>
        <Route path="/mapping2" element={<Mapping2 />}></Route>
        <Route path="/ternaryoperator" element={<TerneryOperator />}></Route>
        <Route path="/todo" element={<Todo />}></Route>
        <Route path="/styled-components" element={<StyledComponents />}></Route>
        <Route path="/dynamic-styling" element={<DynamicStyling />}></Route>
        <Route
          path="/register-validation"
          element={<Registervalidation />}
        ></Route>
        <Route
          path="/register-validation-useEffect"
          element={<RegistervalidationUseEffect />}
        ></Route>
        <Route path="/use-reducer" element={<UseReducer />}></Route>
        <Route path="/use-context" element={<UseContext />}></Route>
        <Route path="/use-memo" element={<UseMemo />}></Route>
        <Route path="/memo" element={<Memo />}></Route>
        <Route path="/use-callback" element={<UseCallBack/>}></Route>
        <Route path="/all-products" element={<AllProducts/>}></Route>
        <Route path="/use-ref" element={<UseRef/>}></Route>
        <Route path="/redux" element={<ReduxCounter/>}></Route>
        <Route path="/weather" element={<Weather/>}></Route>

          <Route path="/create-product" element={<CreateProduct/>}/>   
          <Route path="/" element = {<Viewproducts/>}/>
          <Route path="/product/:productId" element={<Product/>}/>
      </Routes>
    </div>
  );
}

export default App;
