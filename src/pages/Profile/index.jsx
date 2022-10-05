import { Fragment } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../Components/header';
import './style.css'

function ProfilePage(props) {

  const location = useLocation()
  const { columnistId } = location.state

  console.log(columnistId);
  return ( 
    <Fragment>
      <Header/>
      <div id='profile-page-conteiner'>
        <div id='profile-page-main' className='grid1200'>
          <div id='profile-top-section' >
            <div id='profile-background-img'>
            </div>
            <div id='profile-info'>
              <div id='profile-img'></div>
              <h4 className='bold'>Raphael Freitas</h4>
              <p id='profile-email'>rafa.fritas@hotmail.com</p>
              <p className='small italic'>since 2019</p>
            </div>
          </div>
          <h6 id='profile-articles-heading' className='bold'>Articles</h6>
        </div>
      </div>
    </Fragment>
   );
}

export default ProfilePage;