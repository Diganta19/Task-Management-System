/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import Validation from './LoginValidation';
import axios from 'axios'
import {Button} from "@mui/material"
const Login = () => {
  // const [email,setEmail] = useState("");
  // const [password,setPassword] = useState("");
  const navigate = useNavigate();

  const[values,setValues] = useState({
    email:'',
    password:''
  })
 
  const [errors,setErrors] = useState({});

  const handelInput =(e)=>{
    setValues(prev =>({...prev,[e.target.name]:[e.target.value]}))
  }
  const [user,setUser] = useState({
    id:'',
    name:'',
    password:'',
    email:'',
  });
  
  const backendHandel =async(values)=>{
    let result = await fetch('http://localhost:5000/login',{
      method:'post',
      body:JSON.stringify(values),
      headers:{
        'Content-Type':'application/json'
      },
    });
    result = await result.json();
    if(result === "fail"){
      navigate('/login');
    }else{
   localStorage.setItem("user",JSON.stringify(result[0]));
   navigate(`/dash/${result[0].id}`)
  }
}

  const submitForm = async (e) =>{
    e.preventDefault();
    setErrors(Validation(values));
    if( errors.email === "" && errors.password === "" ){  
     await backendHandel(values);
     }
  
  }
  return (
    <div>
      <h2 className='display-4 mb-5'>Welcome to Task Management System</h2>
      <h2 className='display-5'>Login</h2>
<div className='mt-5 card shadow-lg p-3 mb-5 bg-body-tertiary rounded'>
      <form action="" onSubmit={submitForm}>
      <div className="mb-3">
        <label className='form-label'>Email:</label>
        <input className='form-control' type='email' placeholder='Email' name='email' id='email' onChange={handelInput}/>
        {errors.email && <span className='form-text'>{errors.email}</span>}
      </div>
      <div className="mb-3">
        <label className='form-label'>Password:</label>
        <input className='form-control' type='password' placeholder='Password' name='password' id="password"  onChange={handelInput}/>
        {errors.password && <span className='form-text'>{errors.password}</span>}
        </div>
        <button className="btn btn-outline-primary btn-lg" >Submit</button>

        <p className='mt-3'>Not a user yet?<NavLink to="/signup">SignUp</NavLink></p>
      </form>
      </div>
    </div>

  )
}

export default Login
