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
      <h2 className='display-5'>Welcome to Admin Dashboard</h2>
      <table className="table table-striped-columns">
      <thead>
    <tr>
    <th scope="col">User ID</th>
      <th scope="col">Title</th>
      <th scope="col">Description</th>
    </tr>
   </thead>
   </table>
      {data && data.map((d,i)=>{
        return(<>
        <table className="table table-striped-columns">
          <tbody>
           <tr>
            <td >{d.uid}</td>
            <td>{d.title}</td>
            <td>{d.des}</td>
          </tr>
         </tbody>
        </table>
          </>
        )
      })}
    </div>
  )
}


export default AdminDash
