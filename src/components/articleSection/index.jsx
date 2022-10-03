import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import EditButtons from '../../Assets/editButtons';
import ArticleService from '../../Services/article';
import './style.css'
const moment = require('moment')

function ArticleSection(props) {

  const navigate = useNavigate();

  async function handleDeleteButtonClick() {
    try {
      const response = await ArticleService.delete(props.article._id)
      console.log(response);
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  }

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
            { props.isOwner && <EditButtons deleteClick={handleDeleteButtonClick} /> }
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