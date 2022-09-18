import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login';
import Register from './pages/Register'

const Routing = () => (
  <Router>
    <Routes>
      <Route path='/register' element={<Register/>} />
      <Route path='/' element={<Login/>} />
    </Routes>
  </Router>
)

export default Routing;