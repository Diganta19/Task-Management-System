/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useState } from 'react';
import { NavLink } from "react-router-dom";
import Validation from './LoginValidation';
const AdminLogin = () => {
  // const [email,setEmail] = useState("");
  // const [password,setPassword] = useState("");

  const[values,setValues] = useState({
    email:'',
    password:''
  })
  const [errors,setErrors] = useState({});

  const handelInput =(e)=>{
    setValues(prev =>({...prev,[e.target.name]:[e.target.value]}))
  }


  const submitForm = (e) =>{
    e.preventDefault();
    setErrors(Validation(values));
  
  }
  return (
    <div>
      <h2>Welcome to Task Management System</h2>
      <h2>Login</h2>

      <form action="" onSubmit={submitForm}>
        <input type='email' placeholder='Email' name='email' id='email' onChange={handelInput}/>
        {errors.email && <span>{errors.email}</span>}
        <input type='password' placeholder='Password' name='password' id="password"  onChange={handelInput}/>
        {errors.password && <span>{errors.password}</span>}
        <button type='submit'>Submit</button>

        <p>Not a user yet?<NavLink to="/signup">SignUp</NavLink></p>
      </form>
    </div>
  )
}

export default AdminLogin;
