import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { Context } from '../../contexts/AuthContext';
import './style.css'

function Article(props) {

  const { auth } = useContext(Context)

  if (auth === false) {
    return <Navigate to='/login' />
  }  

  return ( 
    <h1>Hello, Article</h1>
   );
}

export default Article;