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
      <h2 className='display-5'>Signup</h2>
    <div  className='mt-5 card shadow-lg p-3 mb-5 bg-body-tertiary rounded'>
      <form action='' onSubmit={signupSubmit}>
      <div className="mb-3">
        <label className='form-label'>Name:</label>
          <input className='form-control' placeholder='Name' type ="text" id='name' name='name'  onChange={handelInput}/>
          {errors.name && <span className='form-text'>{errors.name}</span>}
          </div>

          <div className="mb-3">
          <label className='form-label'>Email:</label>
          <input className='form-control' placeholder='Email' id='email' name='email' type= "email"  onChange={handelInput}/>
          {errors.email && <span className='form-text'>{errors.email}</span>}
          </div>

          <div className="mb-3">
          <label className='form-label'>Password:</label>
          <input  className='form-control' placeholder='Password' id='Password' name='password' type="password"  onChange={handelInput}/>
          {errors.password && <span className='form-text'>{errors.password}</span>}
      </div>

      <button className="btn btn-outline-primary btn-lg">Submit</button>
      </form>
    </div>
    </div>

  )
}

export default Signup
