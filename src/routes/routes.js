import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Article from '../pages/Article';
import Loading from '../pages/LoadingScreen';
import Login from '../pages/Login';
import Menu from '../pages/Menu';
import Register from '../pages/Register'

const Routing = () => (
  <Router>
    <Routes>
      <Route path='/register' element={<Register/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/menu' element={<Menu/>} />
      <Route path='/article' element={<Article/>} />
      <Route path='/loading' element={<Loading/>} />
    </Routes>
  </Router>
)

export default Routing;