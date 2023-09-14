import { useState } from 'react';
import { NavLink } from "react-router-dom";

const Login = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");



  const submitForm = (e) =>{
    e.preventDefault()
    console.log(email);
    console.log(password);
  }
  return (
    <div>
      <h2>Welcome to Task Management System</h2>
      <h2>Login</h2>

      <form onSubmit={submitForm}>
        <input type='email' placeholder='Email' value={email} name='email' id='email' onChange={(e)=>setEmail(e.target.value)}/>
        <input type='password' placeholder='Password' value={password} id="password"  name="password" onChange={(e)=>setPassword(e.target.value)}/>
        <button type='submit'>Submit</button>

        <p>Not a user yet?<NavLink to="/signup">SignUp</NavLink></p>
      </form>
    </div>
  )
}

export default Login
