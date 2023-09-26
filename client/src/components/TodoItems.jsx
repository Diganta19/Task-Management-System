/* eslint-disable react/prop-types */


const TodoItems = ({d}) => {
 
  return (
  <>
  <table className="table table-striped-columns">
  <tbody>
    <tr>
   
      <td>{d.title}</td>
      <td>{d.des}</td>
    </tr>
  </tbody>
  </table>

  </>
  )
}

export default TodoItems
