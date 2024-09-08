import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "../Styles/RegisterUseEffect.css";

function RegisterValidationEffect() {
  const router = useNavigate();
  const [errors, setErrors] = useState({
    name: "Name is required.",
    email: "Email is required.",
    password: "Password is required.",
    confirmPassword: "Confirm Password is required.",
  });
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
    if (
      userData.name &&
      userData.email &&
      userData.password &&
      userData.confirmPassword
    ) {
      if (userData.password !== userData.confirmPassword) {
        return toast.error("Passqword and confirm password not macthed.");
      }
      try {
        // const response = await axios.post(
        //   "http://localhost:8000/api/v1/auth/register",
        //   { userData }
        // );
        const response = {
          data: {
            success: true,
            message: "Player has Registered Successfully :)",
          },
        };
        if (response.data.success) {
          // console.log(response);
          // alert(response.data.message);
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

  useEffect(() => {
    const errors = {};
    if (userData.name) {
      errors["name"] = "";
    } else {
      errors["name"] = "**Name is required.**";
    }
    if (userData.email) {
      errors["email"] = "";
    } else {
      errors["email"] = "**Email is required.**";
    }
    if (userData.password) {
      errors["password"] = "";
    } else {
      errors["password"] = "**Password is required.**";
    }
    if (userData.confirmPassword) {
      errors["confirmPassword"] = "";
    } else {
      errors["confirmPassword"] = "**Confirm Password is required.**";
    }
    setErrors(errors);
  }, [userData]);

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
            required
          />
          {errors?.name && <p>{errors?.name}</p>}
          <br />
          <label>Email</label>
          <br />
          <input
            onChange={handleChange}
            type="email"
            placeholder="Type your email.."
            name="email"
            required
          />
          {errors?.email && <p>{errors?.email}</p>}
          <br />
          <label>Password </label>
          <br />
          <input
            onChange={handleChange}
            type="password"
            placeholder="Type your password.."
            name="password"
            required
          />
          {errors?.password && <p>{errors?.password}</p>}
          <br />
          <label>Confirm Password </label>
          <br />
          <input
            onChange={handleChange}
            type="password"
            placeholder="Confirm Password.."
            name="confirmPassword"
            required
          />
          {errors?.confirmPassword && <p>{errors?.confirmPassword}</p>}
          <br />
          {/* <input type="submit" value="Register" /> */}
          <button>Register</button>/
        </form>
      </div>
    </div>
  );
}

export default RegisterValidationEffect;
