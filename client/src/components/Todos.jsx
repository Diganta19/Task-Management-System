/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useEffect, useState } from 'react'
import TodoItems from './TodoItems'
import { useParams } from 'react-router';
import axios from 'axios';



const  Todos = ({data}) => {
 
 
    

   
  //  const onDelete = async (sno) => {
  //   try {
  //     const response = await axios.delete(`http://localhost:5000/todos/${sno}`);
  //     if (response.status === 200) {
     
  //       console.log('Todo deleted successfully');
  //       setTodo((prevTodos) => prevTodos.filter((todo) => todo.sno !== sno));
  //     } else {
  //       console.error('Error deleting todo:', response.data.error);
  //     }
  //   } catch (error) {
  //     console.error('Error deleting todo:', error);
  //   }
  // };


  

  return (
     <>
       {
        data.map((r,i)=>{
         return( <TodoItems key = {i} d={r}/>)
        })
       }
   </>
  )
}

export default Todos
