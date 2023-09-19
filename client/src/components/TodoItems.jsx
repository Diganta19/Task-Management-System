/* eslint-disable react/prop-types */


const TodoItems = ({todo,onDelete}) => {
  return (
    <>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button onClick={()=>{onDelete(todo)}} className="btn btn-sm btn-danger" >Delete</button>
      <hr/>
    </>
  )
}

export default TodoItems
