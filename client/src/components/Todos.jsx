/* eslint-disable react/prop-types */

import TodoItems from './TodoItems'

const Todos = ({todos,onDelete}) => {
    
  return (
    <div>
       {todos.length===0?"No Todos": 
     todos.map((todo)=>{
      return(  <TodoItems todo={todo} key={todo.sno} onDelete={onDelete}/>
                 
      )
     })}
    
     
    </div>
  )
}

export default Todos
