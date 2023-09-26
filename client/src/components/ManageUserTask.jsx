import axios from "axios"
import { useState } from "react"
import AdminHeader from "./AdminHeader"


const ManageUserTask = () => {

  const [values,setValues] =useState({
    uid:'',
    title:'',
    des:'',
  }) 

  const backendHandel = () =>{
    axios.post(`http://localhost:5000/addTodo`,values).then(res=>console.log(res)).catch(err => console.log(err)).then(alert("Added"))
  }
  const handelSubmit =(e) =>{
    e.preventDefault();
    backendHandel(values);
  }

  const handelInput = (e)=>{
    setValues(prev =>({...prev,[e.target.name]:[e.target.value]}))
  }
  return (
   <>
   <AdminHeader/>
    <form className='mt-5 card shadow-lg p-3 mb-5 bg-body-tertiary rounded' onSubmit={handelSubmit}>
      <div className="mb-3">
      <label  className='form-label' htmlFor="title" >Title :</label>
      <input className='form-control' type="text"  name="title" onChange={handelInput}  id="title"  />
      </div>
      <div className="mb-3">
      <label  className='form-label'  htmlFor="des" >Description :</label>
      <input className='form-control' type="text" name="des"  onChange={handelInput}  id="desc"/>
      </div>
      <div className="mb-3">
      <label  className='form-label'  htmlFor="uid" >User ID :</label>
      <input className='form-control' type="text" name="uid"  onChange={handelInput}  id="uid"/>
      </div>
      <button className="btn btn-outline-primary btn-lg" type="submit">Add Todo</button>
    </form>
   </>
  )
}

export default ManageUserTask
