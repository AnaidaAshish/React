import { useState } from "react";
import "../component/Styles/Register.css";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom"

function Register() {
  const router = useNavigate()
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  console.log(userData, "UserData");
  function handleChange(event) {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  }
  async function handleSubmit(event) {
    event.preventDefault();
    if (
      userData.name &&
      userData.email &&
      userData.password &&
      userData.confirmPassword
    ) {
      
      if (userData.password !== userData.confirmPassword) {
        return toast.error("Password and confirm password do not match!!.");
      }
      try {
      
        const response = {
          data: { success: true, message: "Register succesfulyy comp;leted." },
        };
        if (response.data.success) {
            // alert("inside this")
          toast.success(response.data.message);
          router("/login");
          
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
      <div className="register">
        <h1>Register Here!!!</h1>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <br />
          <input
            onChange={handleChange}
            type="text"
            placeholder="Name...."
            name="name"
          />
          <br />
          <label>Email</label>
          <br />
          <input
            onChange={handleChange}
            type="email"
            placeholder="Mail id..."
            name="email"
          />
          <br />
          <label>Password</label>
          <br />
          <input
            onChange={handleChange}
            type="password"
            placeholder="Password..."
            name="password"
          />
          <br />
          <label>Confirm Password</label>
          <br />
          <input
            onChange={handleChange}
            type="password"
            placeholder="Confirm password..."
            name="confirmPassword"
          />
          <br />
          <input type="submit" value="Register" />
        </form>
      </div>
    </div>
  );
}
export default Register;
// import { useState } from "react";
// import axios from "axios";
// import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";
// import "../component/Styles/Register.css"
// function Register() {
//   const router = useNavigate();
//   const [userData, setUserData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });
//   console.log(userData, "userData");
//   function handleChange(event) {
//     // console.log(event.target.value, event.target.name, "check");
//     setUserData({ ...userData, [event.target.name]: event.target.value });
//   }

  // localhost:8000/api/v1/auth/register

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
//         // const response = await axios.post(
//         //   "http://localhost:8000/api/v1/auth/register",
//         //   { userData }
//         // );
//         const response = {
//           data: { success: true, message: "Registered succesfully." },
//         };
//         if (response.data.success) {
//           // console.log(response);
//           // alert(response.data.message);
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
//     <div className="register">
//       <h1>Register Here!!!</h1>
//       <form onSubmit={handleSubmit}>
//         <label>Name</label>
//         <br />
//         <input
//           onChange={handleChange}
//           type="text"
//           placeholder="Type your name.."
//           name="name"
//           required
//         />
//         <br />
//         <label>Email</label>
//         <br />
//         <input
//           onChange={handleChange}
//           type="email"
//           placeholder="Type your email.."
//           name="email"
//           required
//         />
//         <br />
//         <label>Password </label>
//         <br />
//         <input
//           onChange={handleChange}
//           type="password"
//           placeholder="Type your password.."
//           name="password"
//           required
//         />
//         <br />
//         <label>Confirm Password </label>
//         <br />
//         <input
//           onChange={handleChange}
//           type="password"
//           placeholder="Confirm your password.."
//           name="confirmPassword"
//           required
//         />
//         <br />
//         {/* <input type="submit" value="Register" /> */}
//         <button>Register</button>
//       </form>
//     </div>
//     </div>
//   );
// }
// export default Register;
