/* eslint-disable react/prop-types */
import { useState } from 'react'

const AddTodo = ({addTodo}) => {
    const [title,setTitle] = useState();
    const [desc,setDesc] = useState();

    const handelTitleChange = (e)=>{
    
      setTitle(e.target.value);
    }

    const handelDescChange=(e) =>{
      
      setDesc(e.target.value)
    }

    const handelSubmit =(e)=>{
      e.preventDefault();
      addTodo(title,desc);
      setDesc('');
      setTitle('');
    }

  return (
    <div >
    <h3>Add a Todo</h3>
  <form onSubmit={handelSubmit}>
<div >
<label htmlFor="title" >Todo Title</label>
<input type="text" onChange={handelTitleChange}  id="title"  />
</div>
<div >
<label htmlFor="desc" >Description</label>
<input type="text" onChange={handelDescChange}  id="desc"/>
</div>

<button type="submit">Add Todo</button>
</form>
</div>
  )
}

export default AddTodo
