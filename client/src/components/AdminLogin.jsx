/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useState } from 'react';
import { Link, NavLink, useNavigate } from "react-router-dom";
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
      localStorage.setItem("admin","true");
      navigate("/admindash");
  // }
}

  return (
    <div>
      <h2 className='display-4 mb-5'>Welcome to Task Management System</h2>
      <h2 className='display-5'>Admin Login</h2>
      <div className='mt-5 card shadow-lg p-3 mb-5 bg-body-tertiary rounded'>
      <form action="" onSubmit={submitForm}>
      <div className="mb-3">
      <label className='form-label'>Admin Email:</label>
        <input className='form-control' type='email' placeholder='Email' name='aemail' id='email' onChange={handelInput}/>
        </div>
        <div className="mb-3">
        <label className='form-label'>Admin Password:</label>
        <input className='form-control' type='password' placeholder='Password' name='apassword' id="password"  onChange={handelInput}/>
        </div>
    
        <button className="btn btn-outline-primary btn-lg" >Submit</button>

        
      </form>
      </div>
      <Link to="/"><p>Go back to Home Page</p></Link>
    </div>
  )
}


export default AdminLogin;
