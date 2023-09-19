/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import Validation from './LoginValidation';
import axios from 'axios'
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

export default Login
