import { useState } from "react";
import toast from "react-hot-toast";
import "../component/Styles/Login.css"
function Login() {
  // import { useState } from "react";
  // import "../component/Styles/Register.css";
  // import toast from "react-hot-toast";
  // import {useNavigate} from "react-router-dom"

  // function Register() {
  //   const router = useNavigate
  //   const [userData, setUserData] = useState({
  //     name: "",
  //     email: "",
  //     password: "",
  //     confirmPassword: "",
  //   });
  //   console.log(userData, "UserData");
  //   function handleChange(event) {
  //     setUserData({ ...userData, [event.target.name]: event.target.value });
  //   }
  //   async function handleSubmit(event) {
  //     event.preventDefault();
  //     if (
  //       userData.name &&
  //       userData.email &&
  //       userData.password &&
  //       userData.confirmPassword
  //     ) {
  //       if (userData.password !== userData.confirmPassword) {
  //         return toast.error("Passqword and confirm password not macthed.");
  //       }
  //       try {

  //         const response = {
  //           data: { success: true, message: "Register succesfulyy comp;leted." },
  //         };
  //         if (response.data.success) {

  //           toast.success(response.data.message);
  //           router("/login");
  //         }
  //       } catch (error) {
  //         console.log(error);
  //         toast.error(error);
  //       }
  //     } else {
  //       toast.error("All fields are required.");
  //     }
  //   }

  //   return (
  //     <div className="parent">
  //       <div className="register">
  //         <h1>Register Here</h1>
  //         <form onSubmit={handleSubmit}>
  //           <label>Name</label>
  //           <br />
  //           <input
  //             onChange={handleChange}
  //             type="text"
  //             placeholder="Name...."
  //             name="name"
  //           />
  //           <br />
  //           <label>Email</label>
  //           <br />
  //           <input
  //             onChange={handleChange}
  //             type="email"
  //             placeholder="Mail id..."
  //             name="  email"
  //           />
  //           <br />
  //           <label>Password</label>
  //           <br />
  //           <input
  //             onChange={handleChange}
  //             type="password"
  //             placeholder="Password..."
  //             name="password"
  //           />
  //           <br />
  //           <label>Confirm Password</label>
  //           <br />
  //           <input
  //             onChange={handleChange}
  //             type="password"
  //             placeholder="Confirm password..."
  //             name="confirmPassword"
  //           />
  //           <br />
  //           <input type="submit" value="Register" />
  //         </form>
  //       </div>
  //     </div>
  //   );
  // }
  // export default Register;

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
          data: { success: true, message: "Player has Logged in Successfully :)" },
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

  return (
    <div className="parent">
      <div className="login">
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
