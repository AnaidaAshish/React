import { useContext, useState } from "react";
import toast from "react-hot-toast";
import "../component/Styles/Login.css";
import { style } from "styled-components";
import { DarkModeContext } from "./05-09(Context)/DarkmodeContext";
function Login() {
  const { state, dispatch } = useContext(DarkModeContext);

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  console.log(userData, "userData");
  function handleChange(event) {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (userData.email && userData.password) {
      try {
        const response = {
          data: {
            success: true,
            message: "Player has Logged in Successfully :)",
          },
        };
        if (response.data.success) {
          toast.success(response.data.message);
        }
      } catch (error) {
        console.log(error);
        toast.error(error);
      }
    } else {
      toast.error("All fields are required.");
    }
  }

  const ChangeTheme = () => {
    if (state.mode == "light") {
      dispatch({ type: "DARKMODE" });
    } else {
      dispatch({ type: "LIGHTMODE" });
    }
  };
  return (
    <div className="loginparent">
    <p>Current Theme : {state.mode}</p>
      <div className="buttonTheme">
        <button onClick={ChangeTheme}>Change Theme</button>
      </div>
      <div
        style={{
          backgroundColor: state.mode == "light" ? "white" : "black",
          color: state.mode == "light" ? "black" : "white",
        }}
        className="login"
      >
        <h1>Login Here</h1>
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <br />
          <input
            onChange={handleChange}
            type="email"
            placeholder="Type your email.."
            name="email"
            // required
          />
          <br />
          <label>Password </label>
          <br />
          <input
            onChange={handleChange}
            type="password"
            placeholder="Type your password.."
            name="password"
            // required
          />
          <br />

          {/* <input type="submit" value="Login" /> */}
          <button>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
