
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h2>Welcome to TMS</h2>
      <button><Link to="/login">User</Link></button>
      <button><Link to="/admin">Admin</Link></button>
    </div>
  )
}

export default Home
