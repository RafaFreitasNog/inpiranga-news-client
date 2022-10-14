import { Fragment, useContext } from 'react';
import { IoLogOutSharp, IoPersonOutline, IoHeartOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { Context } from '../../Contexts/AuthContext';
import './style.css'

function DropdownMenu(props) {

  const { handleLogout, isColumnist, user } = useContext(Context);
  const navigate = useNavigate();

  function handleColumnistProfileClick() {
    navigate('/columnistprofile', { state: {columnistId: user._id} })
  }

  function handleUserProfileClick() {
    navigate('/profile', { state: {userId: user._id} })
  }

  return ( 
    <Fragment>
      <div className='dropdown-menu-conteiner'>
        { isColumnist && 
        <div>
          <button className='dropdown-button' ><IoPersonOutline className='dropdown-button-icon' /><p className='small dropdown-button-text' onClick={handleColumnistProfileClick} >Profile</p></button>
        </div>
        
        }
        { isColumnist === false && 
        <div>
          <button className='dropdown-button' ><IoPersonOutline className='dropdown-button-icon' /><p className='small dropdown-button-text' onClick={handleUserProfileClick}>Profile</p></button>
          <button className='dropdown-button' ><IoHeartOutline className='dropdown-button-icon' /><p className='small dropdown-button-text' onClick={handleUserProfileClick}>Favorites</p></button>
        </div>
        }
        <button className='dropdown-button dropdown-button-logout' onClick={handleLogout}> <IoLogOutSharp className='dropdown-button-icon'/> <p className='small bold dropdown-button-text'>Logout</p></button>
      </div>
    </Fragment>
   );
}

export default DropdownMenu;