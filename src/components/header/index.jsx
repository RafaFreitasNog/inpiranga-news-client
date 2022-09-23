import { Fragment } from 'react';
import './style.css'
import { IoMenuSharp, IoPersonSharp } from "react-icons/io5";

function Header(props) {
  return ( 
    <Fragment>
      <div id='header-conteiner'>
        <div id='header-content-conteiner'>
          <div id='header-left'>
            <div id='header-menu-conteiner'>
              <IoMenuSharp id='header-menu-icon' className='white' />
              <p id='header-menu-label' className='upper small white'>Menu</p>
            </div>
          </div>
          <div id='header-center'>
            <h5 className='bold white upper'>Ipiranga News</h5>
          </div>
          <div id='header-right'>
            <div id='header-profile-conteiner'>
              <IoPersonSharp id='header-profile-icon' className='white'/>
              <p id='header-profile-label' className='upper small white'>Profile</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
   );
}

export default Header;