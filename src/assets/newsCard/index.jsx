import { Fragment } from 'react';
import './style.css'
import { IoNewspaperSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

function NewsCard(props) {

  return ( 
    <Fragment>
      <div className='news-card-conteiner' onClick={() => props.handleCardClick(props.id)}>
        <div className='news-card-label-conteiner'>
          <p className='small upper bold'>{props.category[0].name}</p>
        </div>
        <div className='news-card-title-conteiner'>
          <h5 className='bold news-card-text news-card-title' ><IoNewspaperSharp className='news-title-icon'/>{props.title}</h5>
        </div>
        <div className='news-card-subtitle-conteiner'>
          <p className='news-card-subtitle'>{props.subtitle}</p>
        </div>
        <Link className='news-card-author-conteiner'>
          <p className='news-card-author small italic bold'>~ {props.author[0].name}</p>
        </Link>
      </div>
    </Fragment>
   );
}

export default NewsCard;