import { AppBar, Toolbar } from "@mui/material";
import { useNavigate } from "react-router";

const AdminHeader = () => {
    const navigate  = useNavigate();

    const clearAdmin = ()=>{
        localStorage.clear();
        navigate("/");
    }

  return (
    <AppBar className="navbar bg-dark border-bottom border-body" >
       <Toolbar>
        <button className="btn btn-outline-primary btn-lg"  onClick={clearAdmin}>Logout</button>
        </Toolbar>
    </AppBar>
  )
}

export default AdminHeader
