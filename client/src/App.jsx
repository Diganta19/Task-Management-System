
import {Route,Routes} from "react-router";

import PrivateRouter from "./components/PrivateRouter";
import './App.css'
import Login from './components/Login';
import Signup from './components/Signup';
import { BrowserRouter } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Home from "./components/Home";
import AdminLogin from "./components/AdminLogin";
import AdminDash from "./components/AdminDash";
import Header from "./components/Header";
import DisplayNav from "./components/DisplayNav";
import { useEffect, useState } from "react";

function App() {
  const [isSigned,setIsSigned] = useState(false);
  const [isAdminSigned,setIsAdminSigned] = useState(false);

  useEffect(()=>{
    const auth = localStorage.getItem("user");
    if(auth){
      setIsSigned(true);
    }
  },[])
  
  useEffect(()=>{
    const adminAuth = localStorage.getItem("admin");
    if(adminAuth){
      setIsAdminSigned(true);
    }
  },[])


  return (
    <BrowserRouter>
    <DisplayNav>  <Header/> </DisplayNav>
  
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/signup" element={<Signup/>}/>
       <Route exact path="/dash/:id" element={<PrivateRouter isSigned={isSigned}><Dashboard/></PrivateRouter>}/>
       <Route exact path="/login" element={<Login/>}/>
       <Route  path="/admin" element={<AdminLogin/>}/>
       <Route exact path="/admindash" element={<PrivateRouter isSigned={isAdminSigned}><AdminDash/></PrivateRouter>}/>
     </Routes>
    </BrowserRouter>
   
    
  )
}

export default App
