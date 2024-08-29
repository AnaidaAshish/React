import { useState } from "react";

function Register() {
  const [userData,setUserData] = useState({
    userName : "" ,
    userEmail : "",
    userPhone : '',
    userPassword : "",
    confirmPassword :""
  })
  console.log(userData,"UserData")
   function handleChange(event){
    setUserData({...userData,[event.target.name] : event.target.value})
   }
  return (
    <div>
      <h1>This is the Register Page</h1>
      <form>
        <label>Name</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input onChange={handleChange} type="text" placeholder="Enter your Name.." name="userName"/><br/>
        <label>Email</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input onChange={handleChange} type="text" placeholder="Enter you mail id here..." name="  userEmail" /><br/>
        <label>Phone</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input onChange={handleChange} type="text" placeholder="Enter your phone no.." name=" userPhone "/><br/>
        <label>Password</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input onChange={handleChange} type="password" placeholder="Enter your password..." name="userPassword"/><br/>
        <label>Confirm Password</label>&nbsp;&nbsp;&nbsp;
        <input onChange={handleChange} type="password" placeholder="Confirm your entered password" name="confirmPassword" /><br/>
        <input type="submit" value= "Register" />
      </form>
    </div>
  );
}
export default Register;
