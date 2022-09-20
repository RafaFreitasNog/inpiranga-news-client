import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login';
import Menu from './pages/Menu';
import Register from './pages/Register'

const Routing = () => (
  <Router>
    <Routes>
      <Route path='/register' element={<Register/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/menu' element={<Menu/>} />
    </Routes>
  </Router>
)

export default Routing;