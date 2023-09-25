import { useNavigate } from "react-router";

const AdminHeader = () => {
    const navigate  = useNavigate();

    const clearAdmin = ()=>{
        localStorage.clear();
        navigate("/");
    }

  return (
    <div>
        <button onClick={clearAdmin}>Logout</button>
    </div>
  )
}

export default AdminHeader
