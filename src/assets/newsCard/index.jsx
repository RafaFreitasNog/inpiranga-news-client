import { Fragment } from 'react';
import './style.css'
import { IoNewspaperSharp } from "react-icons/io5";

function NewsCard(props) {
  return ( 
    <Fragment>
      <div className='news-card-conteiner'>
        <div className='news-card-title-conteiner'>
          <h5 className='bold news-card-text news-card-title' ><IoNewspaperSharp className='news-title-icon'/>{props.title}</h5>
        </div>
        <div className='news-card-subtitle-conteiner'>
          <p className='news-card-subtitle'>{props.subtitle}</p>
        </div>
        <div className='news-card-author-conteiner'>
          <p className='news-card-author small italic bold'>~ {props.author}</p>
        </div>
      </div>
    </Fragment>
   );
}

export default NewsCard;