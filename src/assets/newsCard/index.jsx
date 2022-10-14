import { Fragment } from 'react';
import './style.css'
import { IoBookmark, IoBookmarkOutline, IoNewspaperSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../Contexts/AuthContext';
import { useState } from 'react';
import { useEffect } from 'react';

function NewsCard(props) {

  const { user, addFavorite, removeFavorite } = useContext(Context);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (user.columnist === false) {      
      if (user.favorites.includes(props.id)) {
        setIsFavorite(true)
    }
    }
  }, [user, props])

  function handleAddFavClick() {
    addFavorite(props.id)
    setIsFavorite(true)
  }
  function handleRemoveFavClick() {
    removeFavorite(props.id)
    setIsFavorite(false)
  }

  return ( 
    <Fragment>
      <div className='news-card-conteiner'>
        <div className='news-card-label-conteiner'>
          <p className='small upper bold'>{props.category[0].name}</p>
          { (user.columnist === false && isFavorite) && 
          <IoBookmark className='menu-fav-icon-marked' onClick={handleRemoveFavClick} /> }
          { (user.columnist === false && isFavorite === false) && 
          <IoBookmarkOutline className='menu-fav-icon-unmarked' onClick={handleAddFavClick} />}
        </div>
        <div className='news-card-title-subtitle-conteiner' onClick={() => props.handleCardClick(props.id)} >
          <div className='news-card-title-conteiner'>
            <h5 className='bold news-card-text news-card-title' ><IoNewspaperSharp className='news-title-icon'/>{props.title}</h5>
          </div>
          <div className='news-card-subtitle-conteiner'>
            <p className='news-card-subtitle'>{props.subtitle}</p>
          </div>
        </div>
        <Link className='news-card-author-conteiner'>
          <p className='news-card-author small italic bold'>~ {props.author[0].name}</p>
        </Link>
      </div>
    </Fragment>
   );
}

export default NewsCard;