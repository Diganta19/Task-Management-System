
import {Route,Routes} from "react-router";

import PrivateRouter from "./components/PrivateRouter";
import './App.css'
import Login from './components/Login';
import Signup from './components/Signup';
import { BrowserRouter } from 'react-router-dom';
import Dashboard from './components/Dashboard';

function App() {


  return (
    <BrowserRouter> 
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/signup" element={<Signup/>}/>
       <Route exact path="/dash/:id" element={<PrivateRouter isSigned="false"><Dashboard/></PrivateRouter>}/>
     </Routes>
    </BrowserRouter>
    
  )
}

export default App
