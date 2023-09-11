import { useState } from 'react'
import {Route,Routes} from "react-router";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login';
import Signup from './components/Signup';
import { BrowserRouter } from 'react-router-dom';

function App() {


  return (
    <BrowserRouter> 
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/signup" element={<Signup/>}/>
     </Routes>
    </BrowserRouter>
    
  )
}

export default App
