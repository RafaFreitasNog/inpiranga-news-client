import { Fragment, useContext } from 'react';
import { IoLogOutSharp, IoPersonOutline, IoHeartOutline } from "react-icons/io5";
import { Context } from '../../Contexts/AuthContext';
import './style.css'

function DropdownMenu(props) {

  const { handleLogout } = useContext(Context)

  return ( 
    <Fragment>
      <div className='dropdown-menu-conteiner'>
        <button className='dropdown-button' ><IoPersonOutline className='dropdown-button-icon' /><p className='small dropdown-button-text'>Profile</p></button>
        <button className='dropdown-button' ><IoHeartOutline className='dropdown-button-icon' /><p className='small dropdown-button-text'>Favorites</p></button>
        <button className='dropdown-button dropdown-button-logout' onClick={handleLogout}> <IoLogOutSharp className='dropdown-button-icon'/> <p className='small bold dropdown-button-text'>Logout</p></button>
      </div>
    </Fragment>
   );
}

export default DropdownMenu;