import { useNavigate } from "react-router-dom";
import "../Styles/Navbar.css";

function Navbar() {
  const router = useNavigate();
  function redirectToHome() {
    router("/");
  }
  function redirectToLogin() {
    router("/login");
  }
  function redirectToRegister() {
    router("/register");
  }
  function redirectToCounter() {
    router("/counter");
  }

  function redirectToUseEffect1() {
    router("/useeffect1");
  }
  function redirectToUseEffect2() {
    router("/useeffect2");
  }
  function redirectToUseEffect3() {
    router("/useeffect3");
  }
  function redirectToUseEffect4() {
    router("/useeffect4");
  }

  return (
    <div className="parentDiv">
      <h1 onClick={redirectToHome}>Home</h1>
      <h1 onClick={redirectToLogin}>Login</h1>
      <h1 onClick={redirectToRegister}>Register</h1>
      <h1 onClick={redirectToCounter}>Counter</h1>
      {/* <h1 onClick={redirectToUseEffect1}>UseEffect1</h1>
      <h1 onClick={redirectToUseEffect2}>UseEffect2</h1>
      <h1 onClick={redirectToUseEffect3}>UseEffect3</h1>
      <h1 onClick={redirectToUseEffect4}>UseEffect4</h1> */}
    </div>
  );
}
export default Navbar;
