import { useContext, useEffect } from 'react';
import { useState } from 'react';
import { Fragment } from 'react';
import { IoBookmark, IoBookmarkOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import EditButtons from '../../Assets/editButtons';
import { Context } from '../../Contexts/AuthContext';
import ArticleService from '../../Services/article';
import './style.css'
const moment = require('moment')

function ArticleSection(props) {

  const navigate = useNavigate();
  const { user, addFavorite, removeFavorite } = useContext(Context);
  const [isFavorite, setIsFavorite] = useState(false);

  function handleEditButtonClick() {
    navigate('/editarticle', { state: { articleId: props.article._id } });
  }

  async function handleDeleteButtonClick() {
    try {
      const response = await ArticleService.delete(props.article._id)
      console.log(response);
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  }

  function handleAddFavClick() {
    addFavorite(props.article._id)
    setIsFavorite(true)
  }
  function handleRemoveFavClick() {
    removeFavorite(props.article._id)
    setIsFavorite(false)
  }
  function handleColumnistClick() {
    navigate(`/columnistpage/${props.article.author[0]._id}`)
  }

  useEffect(() => {
    if (user.columnist === false) {
      if (user.favorites.includes(props.article._id)) {
        setIsFavorite(true)
      }
    }
  }, [user, props])

  return ( 
    <Fragment>
      <div id="article-section-conteiner" className='grid1200'>
        <div id="article-section-title-conteiner">
          <h2 className='bold'>{props.article.title}</h2>
          <h6 id='article-section-subtitle'>{props.article.subtitle}</h6>
          <div id='article-section-info-icons'>
            <div id='article-section-info-conteiner'>
              <p id='article-section-author-info' className='bold'>
                By <span 
                        onClick={handleColumnistClick}
                        id='columnist-profile-link'>
                        {props.article.author[0].name}</span>, Ipiranga News</p>
              <p id='article-section-time-info' className='small italic'>Published {moment(props.article.created_at).format('ll')}, updated {moment(props.article.updated_at).fromNow()}</p>
            </div>
            { props.isOwner && <EditButtons 
                                deleteClick={handleDeleteButtonClick} 
                                editClick={handleEditButtonClick}  /> }
            { (user.columnist === false && isFavorite) && 
            <IoBookmark id='article-fav-icon-marked'  onClick={handleRemoveFavClick} /> }
            { (user.columnist === false && isFavorite === false) &&
             <IoBookmarkOutline id='article-fav-icon-unmarked'  onClick={handleAddFavClick} /> }
          </div>
        </div>
        <div></div>
        <div id="article-section-body-conteiner">
          <div dangerouslySetInnerHTML={{__html: props.article.text}} id="article-section-text" />
        </div>
      </div>
    </Fragment>
   );
}

export default ArticleSection;