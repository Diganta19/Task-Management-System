/* eslint-disable no-unused-vars */
import  { useState } from 'react'
import Validation from './SignupValidation';
import {useNavigate} from "react-router-dom";
import axios from 'axios'

const Signup = () => {
  
    
  const[values,setValues] = useState({
    name:'',
    email:'',
    password:''
  })



  const [errors,setErrors] = useState({});
  const navigate  = useNavigate();



  const handelInput =(e)=>{
    setValues(prev =>({...prev,[e.target.name]:[e.target.value]}))
  }

    async function backendHandel(values){
      axios.post('http://localhost:5000/signup' , values)
      .then(res =>{navigate("/login")})
      .catch(err => console.log(err))
    }

    const signupSubmit=(e)=>{
        e.preventDefault();
        
       setErrors(Validation(values));
       if(errors.name === "" && errors.email === "" && errors.password === "" ){  
        backendHandel(values);
       }
    }
    
    return (
    <div>
      <form action='' onSubmit={signupSubmit}>
        <input placeholder='Name' type ="text" id='name' name='name'  onChange={handelInput}/>
        {errors.name && <span>{errors.name}</span>}
        <input placeholder='Email' id='email' name='email' type= "email"  onChange={handelInput}/>
        {errors.email && <span>{errors.email}</span>}
        <input placeholder='Password' id='Password' name='password' type="password"  onChange={handelInput}/>
        {errors.password && <span>{errors.password}</span>}
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Signup
