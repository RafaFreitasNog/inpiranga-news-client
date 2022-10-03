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
          <div id='article-section-info-icons'>
            <div id='article-section-info-conteiner'>
              <p id='article-section-author-info' className='bold'>By {props.article.author[0].name}, Ipiranga News</p>
              <p id='article-section-time-info' className='small italic'>Published {moment(props.article.created_at).format('ll')}, updated {moment(props.article.created_at).fromNow()}</p>
            </div>
            { props.isOwner && <p>Yours</p>}
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