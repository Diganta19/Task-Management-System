/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useEffect, useState } from 'react'
import TodoItems from './TodoItems'
import { useParams } from 'react-router';
import axios from 'axios';



const Todos = () => {

    const [todos,setTodos] = useState([]);
    const {id} = useParams();
    //console.log(id);
    

    const backendHandle = async (id) => {
      axios.post(`http://localhost:5000/todos/${id}`).then(res => setTodos(res.data))
    }
   useEffect(()=>{
    backendHandle(id);
   },[id])

  return (
    <div>
    {todos.length === 0 ? "No Todos" : 
      todos.map((todo,k) => (
        <TodoItems key ={k} todo={todo}/>
      ))
    }
   
  </div>
  )
}

export default Todos
