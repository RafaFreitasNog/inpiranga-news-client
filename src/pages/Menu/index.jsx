import { Fragment, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import Header from '../../components/header';
import MenuMainSection from '../../components/menuMainSection';
import { Context } from '../../contexts/AuthContext';
import './style.css'

function Menu() {

  const { auth } = useContext(Context)
  /*
  if (auth === false) {
    return <Navigate to='/login' />
  }*/

  return ( 
    <Fragment>
      <Header/>
      <div id='menu-conteiner'>
        <MenuMainSection/>
        <MenuMainSection/>
      </div>
    </Fragment>
   );
}

export default Menu;