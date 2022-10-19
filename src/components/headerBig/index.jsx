import { Fragment, useContext, useEffect, useState } from 'react';
import './style.css'
import { IoMenuSharp, IoPersonCircleSharp, IoCaretDownOutline } from "react-icons/io5";
import { Context } from '../../Contexts/AuthContext';
import DropdownMenu from '../../Assets/dropdownMenu';
import { Link, useNavigate } from 'react-router-dom';
import CategoriesService from '../../Services/categories'

function HeaderBig(props) {

  const { user, loading } = useContext(Context);
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [categoryList, setCategoryList] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  function handleDropdownClick() {
    setDropdownOpen(!dropdownOpen)
  }

  function handleLogoClick() {
    navigate('/')
  }

  useEffect(() => {
    async function fetchData() {
      const response = await CategoriesService.getAll()
      setCategoryList(response.data);
    }
    if (loading === false) {
      fetchData()
      setName(user.name)
    }
  }, [user, loading]);

  return ( 
    <Fragment>
      <div id='header-big-conteiner'>
        <div id='header-big-content-conteiner'>
          <div id='header-big-left'>
            <div id='header-menu-conteiner'>
              <IoMenuSharp id='header-big-menu-icon' />
              <p id='header-big-menu-label' className='upper small'>Menu</p>
            </div>
          </div>
          <div id='header-big-center'>
            <h3 id='header-big-logo' className='bold upper' onClick={handleLogoClick}>Ipiranga News</h3>
          </div>
          <div id='header-big-right'>
            <div id='header-big-profile-conteiner' onClick={handleDropdownClick}>
              <IoPersonCircleSharp id='header-big-profile-icon' />
              <p id='header-big-profile-label' className='upper small'>{name}</p>
              <IoCaretDownOutline id='header-big-dropdown-icon'/>
            </div>
          </div>
        </div>
        {dropdownOpen && <DropdownMenu/> }
      </div>
      <div id='header-categories-section'>
        {categoryList.map((element) => 
          <Link 
          key={element._id}
          className='header-category-conteiner'>
            <p>{element.name}</p>
          </Link>
        )}
      </div>
      <div id='header-big-blue'><p id='header-big-blue-text' className='upper white small'>assine já</p></div>
    </Fragment>
   );
}

export default HeaderBig;