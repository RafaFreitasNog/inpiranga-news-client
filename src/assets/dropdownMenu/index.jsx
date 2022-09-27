import { Fragment } from 'react';
import { IoLogOutSharp } from "react-icons/io5";
import './style.css'

function DropdownMenu(props) {
  return ( 
    <Fragment>
      <div className='dropdown-menu-conteiner'>
        <button className='dropdown-button'> <IoLogOutSharp id='logout-icon'/> <p className='small bold'>Logout</p></button>
      </div>
    </Fragment>
   );
}

export default DropdownMenu;