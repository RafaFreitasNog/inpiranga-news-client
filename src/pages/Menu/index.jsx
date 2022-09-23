import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { Context } from '../../contexts/AuthContext';
import './style.css'

function Menu() {

  const { auth } = useContext(Context)

  if (auth === false) {
    return <Navigate to='/login' />
  }

  return ( 
    <h1>Menu</h1>
   );
}

export default Menu;