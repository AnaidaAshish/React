import { useState } from "react";
// import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "../Styles/RegisterValidations.css";
function Registervalidations() {
  const router = useNavigate();
  const [formError, setFormError] = useState({});
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  console.log(userData, "userData");
  function handleChange(event) {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const errors = validateErrors();
    console.log(errors, "Check");

    if (Object.keys(errors).length == 0) {
      if (
        userData.name &&
        userData.email &&
        userData.password &&
        userData.confirmPassword
      ) {
        if (userData.password !== userData.confirmPassword) {
          return toast.error("Password and confirm password do not match!!");
        }
        try {
          const response = {
            data: { success: true, message: "Registered succesfulyy." },
          };
          if (response.data.success) {
            alert(response.data.message);
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
    } else {
      setFormError(errors);
    }
  }

  const validateErrors = () => {
    const errors = {};
    // if(!userData.name){
    //   errors.name = "Name is required"
    // }
    switch (1) {
      case 1:
        !userData.name && (errors.name = "Name is required");
      case 1:
        !userData.email && (errors.email = "Email is required");
      case 1:
        !userData.password && (errors.password = "Password is required");
      case 1:
        !userData.confirmPassword &&
          (errors.confirmPassword = "ConfirmPassword is required");
      default:
    }
    return errors;
  };
  return (
    <div className="parent">
      <div className="validationSection">
        <h1>Register with Validations</h1>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <br />
          <input
            onChange={handleChange}
            type="text"
            placeholder="Type your name.."
            name="name"
            // required
          />
          {formError?.name && <p>{formError?.name}</p>}
          <br />
          <label>Email</label>
          <br />
          <input
            onChange={handleChange}
            type="email"
            placeholder="Type your email.."
            name="email"
            // required
          />
          {formError?.email && <p>{formError?.email}</p>}
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
          {formError?.password && <p>{formError?.password}</p>}
          <br />
          <label>Confirm Password </label>
          <br />
          <input
            onChange={handleChange}
            type="password"
            placeholder="Confirm your password.."
            name="confirmPassword"
            // required
          />
          {formError?.confirmPassword && <p>{formError?.confirmPassword}</p>}
          <br />
          {/* <input type="submit" value="Register" /> */}
          <button>Register</button>
        </form>
      </div>
    </div>
  );
}
export default Registervalidations;
