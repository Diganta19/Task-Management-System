import { AppBar, Toolbar } from "@mui/material";
import { Link,useNavigate } from "react-router-dom";


const Header = () => {
  const userAuth = localStorage.getItem("user");
  const navigate = useNavigate();
  

  const logout=()=>{
    localStorage.clear();
    navigate("/login");
  }
  
 

  return (
    <AppBar className="navbar bg-dark border-bottom border-body" >
      <Toolbar>
      {userAuth ? <>
          <button className="btn btn-outline-primary btn-lg"   onClick={logout}>Logout({JSON.parse(userAuth).name})</button>        
      </> 
      : 
      <>
        <Link to="/signup"><button className=" mr-3 btn btn-outline-primary btn-lg" color="inherit"   >Signup</button></Link>
       
        <Link to="/login"><button  className="btn btn-outline-primary btn-lg" color="inherit"   >Login</button></Link>
      </>
    
      }
      </Toolbar>
      </AppBar>
   
  )
}

export default Header
