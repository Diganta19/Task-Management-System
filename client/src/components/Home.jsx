
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h2>Welcome to TMS</h2>
      <Button variant="outlined"><Link to="/login">User</Link></Button>
      <Button variant="outlined"><Link to="/admin">Admin</Link></Button>
    </div>
  )
}

export default Home
