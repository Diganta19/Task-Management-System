/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import Validation from './AdminVerification';

const AdminLogin = () => {
  // const [email,setEmail] = useState("");
  // const [password,setPassword] = useState("");

  const[values,setValues] = useState({
    email:'',
    password:''
  })
  
  const [errors,setErrors] = useState({});
  const navigate = useNavigate();

  const handelInput =(e)=>{
    setValues(prev =>({...prev,[e.target.name]:[e.target.value]}))
  }


  const submitForm = (e) =>{
    e.preventDefault();
    setErrors(Validation(values));
    // if( errors.email === "" && errors.password === "" ){  
      navigate("/admindash");
  // }
}

  return (
    <div>
      <h2>Welcome to Task Management System</h2>
      <h2>Login</h2>

      <form action="" onSubmit={submitForm}>
        <input type='email' placeholder='Email' name='aemail' id='email' onChange={handelInput}/>
       
        <input type='password' placeholder='Password' name='apassword' id="password"  onChange={handelInput}/>
    
        <button type='submit'>Submit</button>

        
      </form>
    </div>
  )
}


export default AdminLogin;
