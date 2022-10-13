import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Article from '../Pages/Article';
import EditArticle from '../Pages/EditArticle';
import Loading from '../Pages/LoadingScreen';
import Login from '../Pages/Login';
import Menu from '../Pages/Menu';
import Register from '../Pages/Register'
import WriteArticle from '../Pages/WriteArticle';
import PrivateRoutes from './privateRoutes';
import ColumnistPage from '../Pages/ColumnistPage';
import ProfilePage from '../Pages/Profile';

const Routing = () => (
  <Router>
    <Routes>
      <Route path='/register' element={<Register/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/loading' element={<Loading/>} />
      <Route element={<PrivateRoutes/>} >
        <Route path='/' element={<Menu/>} />
        <Route path='/article' element={<Article/>} />
        <Route path='/writearticle' element={<WriteArticle/>} />
        <Route path='/editarticle' element={<EditArticle/>} />
        <Route path='/columnistprofile' element={<ColumnistPage/>} />
        <Route path='/profile' element={<ProfilePage/>} />
      </Route>
    </Routes>
  </Router>
)

export default Routing;