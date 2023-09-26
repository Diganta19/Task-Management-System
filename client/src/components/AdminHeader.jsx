import { AppBar, Toolbar } from "@mui/material";
import { useLocation, useNavigate } from "react-router";

const AdminHeader = () => {
    const navigate  = useNavigate();
    const location = useLocation();

    const clearAdmin = ()=>{
        localStorage.clear();
        navigate("/");
    }

    const handleClick = ()=>{
      if(location.pathname === '/admindash'){

        navigate("/manage");
      }else{
        navigate("/admindash")
      }
    }

  return (
    <AppBar className="navbar bg-dark border-bottom border-body" >
       <Toolbar>
        <div>

        <button className="btn btn-outline-primary btn-lg"  onClick={clearAdmin}>Logout</button>
        </div>
        <div>
          <button className="btn btn-outline-primary btn-lg" onClick={handleClick}>{location.pathname === "/admindash" ? "Manage" : "Dashboard"}</button>
        </div>
        </Toolbar>
    </AppBar>
  )
}

export default AdminHeader
