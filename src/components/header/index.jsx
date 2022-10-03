import { Fragment, useContext, useEffect, useState } from 'react';
import './style.css'
import { IoMenuSharp, IoPersonCircleSharp, IoCaretDownOutline } from "react-icons/io5";
import { Context } from '../../Contexts/AuthContext';
import DropdownMenu from '../../Assets/dropdownMenu';
import { useNavigate } from 'react-router-dom';

function Header(props) {

  const { user, loading } = useContext(Context);
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  function handleDropdownClick() {
    setDropdownOpen(!dropdownOpen)
  }

  function handleLogoClick() {
    navigate('/')
  }

  useEffect(() => {
    if (loading === false) {
      setName(user.name)
    }
  }, [user, loading]);

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
            <h5 id='header-logo' className='bold white upper' onClick={handleLogoClick}>Ipiranga News</h5>
          </div>
          <div id='header-right'>
            <div id='header-profile-conteiner' onClick={handleDropdownClick}>
              <IoPersonCircleSharp id='header-profile-icon' className='white'/>
              <p id='header-profile-label' className='upper small white'>{name}</p>
              <IoCaretDownOutline id='header-dropdown-icon' className='white'/>
            </div>
          </div>
        </div>
        {dropdownOpen && <DropdownMenu/> }
      </div>
    </Fragment>
   );
}

export default Header;