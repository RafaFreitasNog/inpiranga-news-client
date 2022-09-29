import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Article from '../Pages/Article';
import Loading from '../Pages/LoadingScreen';
import Login from '../Pages/Login';
import Menu from '../Pages/Menu';
import Register from '../Pages/Register'
import WriteArticle from '../Pages/WriteArticle';
import PrivateRoutes from './privateRoutes';

const Routing = () => (
  <Router>
    <Routes>
      <Route path='/register' element={<Register/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/loading' element={<Loading/>} />
      <Route element={<PrivateRoutes/>} >
        <Route path='/menu' element={<Menu/>} />
        <Route path='/article' element={<Article/>} />
        <Route path='/writearticle' element={<WriteArticle/>} />
      </Route>
    </Routes>
  </Router>
)

export default Routing;