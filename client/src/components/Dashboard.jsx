
import axios from 'axios';
import { useState } from 'react';
import Todos from './Todos'

// import Todos from './Todos'
import { useParams } from 'react-router';

const Dashboard = () => {
  const {id} = useParams();
      const [values,setValues] =useState({
        uid:id,
        title:'',
        des:'',
      }) 

      const handelInput =(e)=>{
        setValues(prev =>({...prev,[e.target.name]:[e.target.value]}))
      }

    const backendHandel = async(values) =>{
     axios.post('http://localhost:5000/addTodo',values).then(res => console.log(res)).catch(err => console.log(err))
   }


    const handelSubmit = (e) =>{
      e.preventDefault();
      backendHandel(values);
    }


  return (
    <>
      <h3>Add a Todo</h3>
   <form onSubmit={handelSubmit}>
      <div >
      <label htmlFor="title" >Todo Title</label>
      <input type="text"  name="title" onChange={handelInput}  id="title"  />
      </div>
      <div >
      <label htmlFor="des" >Description</label>
      <input type="text" name="des"  onChange={handelInput}  id="desc"/>
      </div>
      <button type="submit">Add Todo</button>
    </form>
      
       <Todos /> 
    </>
  )
}

export default Dashboard
