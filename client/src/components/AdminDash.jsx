/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import { getAdminData } from "./getAdminData";
import AdminHeader from "./AdminHeader";


const AdminDash = () => {
  const[data,setData] = useState();


useEffect(()=>{
  let response = getAdminData();
  response.then(res=>setData(res.data));
},[])
 
   
  
 

  return (
    <div>
      <AdminHeader/>
      <h2>Welcome to Admin Dashboard</h2>
      {data && data.map((d,i)=>{
        return(<>
          <h4>{d.title}</h4>
          <h4>{d.des}</h4>
          <h4>{d.uid}</h4>
          <hr/>
          </>
        )
      })}
    </div>
  )
}


export default AdminDash
