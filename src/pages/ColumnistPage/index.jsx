import moment from 'moment';
import { useContext } from 'react';
import { useState } from 'react';
import { Fragment, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ProfileNewsCard from '../../Assets/profileNewsCard';
import Header from '../../Components/header';
import { Context } from '../../Contexts/AuthContext';
import ArticleService from '../../Services/article';
import ColumnistService from '../../Services/columnist';
import './style.css'

function ColumnistPage(props) {

  const navigate = useNavigate();
  const { columnistId } = useParams();

  const { loading, user } = useContext(Context);

  const [pageUser, setPageUser] = useState();
  const [articles, setArticles] = useState();
  const [isOwner, setIsOwner] = useState(false);
  const [fetching, setFetching] = useState(true);

  function HandleCardClick(id) {
    navigate(`/article/${id}`)
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const getUser = await ColumnistService.getOne(columnistId)
        const getArticles = await ArticleService.getWrittenBy(columnistId)
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
  }, [columnistId, loading, user]);

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
              <h6 id='profile-articles-heading' className='bold'>Articles</h6>
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

export default ColumnistPage;