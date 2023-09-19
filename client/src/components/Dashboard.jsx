
import { useEffect, useState } from 'react';
import AddTodo from './AddTodo'
import Todos from './Todos'

const Dashboard = () => {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo = [];
  }else{
    initTodo = JSON.parse(localStorage.getItem('todos'));
  }
    
  const [todos,setTodos] = useState(initTodo);
  const addTodo = (title,desc)=>{
    
    let sno;
    if(todos.length===0){
      sno = 1;
    }else{
    sno = todos[todos.length-1].sno+1;
    }
    const myTodo = {
      sno:sno,
      title:title,
      desc:desc,
    }

    setTodos([...todos,myTodo]);
  }


  
  const onDelete=(todo)=>{
   
    setTodos(todos.filter((e)=>{
        return e!==todo;
    }));
    localStorage.setItem("todos",JSON.stringify(todos));
  }

  
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos])
  return (
    <>
      <AddTodo addTodo = {addTodo}></AddTodo>
      <Todos todos={todos} onDelete={onDelete}/>
    </>
  )
}

export default Dashboard
