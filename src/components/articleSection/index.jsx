import { Fragment } from 'react';
import './style.css'
const moment = require('moment')

function ArticleSection(props) {

  return ( 
    <Fragment>
      <div id="article-section-conteiner" className='grid1200'>
        <div id="article-section-title-conteiner">
          <h2 className='bold'>{props.article.title}</h2>
          <h6 id='article-section-subtitle'>{props.article.subtitle}</h6>
          <p id='article-section-author-info' className='bold'>By {props.article.author[0].name}, Ipiranga News</p>
          <p id='article-section-time-info' className='small italic'>Published {moment(props.article.created_at).format('ll')}, updated {moment(props.article.created_at).fromNow()}</p>
        </div>
        <div></div>
        <div id="article-section-body-conteiner">
          <h6 id='article-section-text' className=''>{props.article.text}</h6>
        </div>
      </div>
    </Fragment>
   );
}

export default ArticleSection;