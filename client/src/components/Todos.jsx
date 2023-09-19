/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useEffect, useState } from 'react'
import TodoItems from './TodoItems'
import { useParams } from 'react-router';



const Todos = () => {

    const [todos,setTodos] = useState();
    const {uid} = useParams();

    const backendHandel = async(uid)=>{
      let result = await fetch('http://localhost:5000/todo',{
        method:'post',
        body:JSON.stringify(uid),
        headers:{
          'Content-Type':'application/json'
        },
      });
      result = await result.json();
      if(result === "fail"){
        console.log("fail");
      }else{
        setTodos(JSON.stringify(result));
      }

    }

   useEffect(()=>{
      backendHandel(uid);
   },[uid])

  return (
    <div>
       {/* {todos.length===0?"No Todos": 
     todos.map((todo)=>{
      return(  <TodoItems todo={todo} key={todo.sno} />
                 
      )
     })} */}
     
    
     
    </div>
  )
}

export default Todos
