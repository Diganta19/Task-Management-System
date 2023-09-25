

import { Link,useNavigate } from "react-router-dom";


const Header = () => {
  const userAuth = localStorage.getItem("user");
  const navigate = useNavigate();
  

  const logout=()=>{
    localStorage.clear();
    navigate("/login");
  }
  
 

  return (

    <div>
      {userAuth ? <ul>
          <li onClick={logout}>Logout({JSON.parse(userAuth).name})</li>        
      </ul> 
      : 
      <ul>
        <li><Link to="/signup">Signup</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    
      }
      </div>
  )
}

export default Header
