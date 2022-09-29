import { Fragment } from 'react';
import './style.css'

function ArticleSection(props) {
  
  return ( 
    <Fragment>
      <div id="article-section-conteiner" className='grid1200'>
        <div id="article-section-title-conteiner">
          <h2 className='bold'>{props.article.title}</h2>
          <h6 id='article-section-subtitle'>{props.article.subtitle}</h6>
          <p id='article-section-author-info' className='bold'>Por {props.article.author[0].name}, Ipiranga News</p>
        </div>
        <div></div>
        <div id="article-section-body-conteiner">{}</div>
      </div>
    </Fragment>
   );
}

export default ArticleSection;