/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */

import axios from 'axios';
import { useState } from 'react';
import Todos from './Todos'
import { useParams } from 'react-router';
import { getData } from './Api';


const diplayResults = (todos) => {

  return <Todos data={todos}/>

  
};

const Dashboard = () => {
  const {id} = useParams();
      const [values,setValues] =useState({
        uid:id,
        title:'',
        des:'',
      }) 
      const [todos,setTodos] = useState([]);
      

      const handelInput =(e)=>{
        setValues(prev =>({...prev,[e.target.name]:[e.target.value]}))
      }

    const backendDataHandel = async(values) =>{
     axios.post('http://localhost:5000/addTodo',values).then(res => console.log(res)).catch(err => console.log(err))
   }


    const handelSubmit = (e) =>{
      e.preventDefault();
      backendDataHandel(values);
    }


    const renderResults =()=>{
        getData(id).then(res=>setTodos(res.data))
       
    }

    


  return (
    <>
      <h3 className='display-5'>Add a Todo</h3>
   <form className='mt-5 card shadow-lg p-3 mb-5 bg-body-tertiary rounded' onSubmit={handelSubmit}>
      <div className="mb-3">
      <label  className='form-label' htmlFor="title" >Todo Title</label>
      <input className='form-control' type="text"  name="title" onChange={handelInput}  id="title"  />
      </div>
      <div className="mb-3">
      <label  className='form-label'  htmlFor="des" >Description</label>
      <input className='form-control' type="text" name="des"  onChange={handelInput}  id="desc"/>
      </div>
      <button className="btn btn-outline-primary btn-lg" type="submit">Add Todo</button>
    </form>
      
     <button className="btn btn-outline-primary btn-lg" onClick={renderResults}>See Tasks</button>
    {diplayResults(todos)}
    </>
  )
}

export default Dashboard
