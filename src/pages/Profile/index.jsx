import moment from 'moment';
import { useContext } from 'react';
import { useState } from 'react';
import { Fragment, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ProfileNewsCard from '../../Assets/profileNewsCard';
import Header from '../../Components/header';
import { Context } from '../../Contexts/AuthContext';
import ArticleService from '../../Services/article';
import UserService from '../../Services/user';
import './style.css'

function ProfilePage(props) {

  const navigate = useNavigate();
  const location = useLocation();
  const { userId } = location.state

  const { loading, user } = useContext(Context);

  const [pageUser, setPageUser] = useState();
  const [articles, setArticles] = useState();
  const [isOwner, setIsOwner] = useState(false);
  const [fetching, setFetching] = useState(true);

  function HandleCardClick(id) {
    navigate('/article', { state: { articleId: id } });
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const getUser = await UserService.getOne(userId)
        const getArticles = await UserService.getFavorites()
        setPageUser(getUser.data)
        setArticles(getArticles.data)
        if (user._id === getUser.data._id) {
          setIsOwner(true)
        }
        setFetching(false)
      } catch (error) {
        console.log(error)
      }
    }
    if (loading === false) {
      fetchData()
    }
  }, [userId, loading, user]);

  return ( 
    <Fragment>
      <Header/>
      {fetching ? <p>loading...</p> :
      <div>
        <div id='profile-page-conteiner'>
          <div id='profile-page-main' className='grid1200'>
            <div id='profile-top-section' >
              <div id='profile-background-img'>
              </div>
              <div id='profile-info'>
                <div id='profile-img'></div>
                <h4 className='bold'>{pageUser.name}</h4>
                <p id='profile-email'>{pageUser.email}</p>
                <p className='small italic'>since {moment(pageUser.created_at).format('L')}</p>
              </div>
            </div>
            <div id='profile-articles-section'>
              <h6 id='profile-articles-heading' className='bold'>Favorites</h6>
              <div id='profile-articles-conteiner'>
                {articles.map((element) =>
                  <ProfileNewsCard 
                  key={element._id}
                  id={element._id}
                  subtitle={element.subtitle}
                  title={element.title} 
                  handleCardClick={HandleCardClick} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>}
    </Fragment>
   );
}

export default ProfilePage;