import { Fragment } from 'react';
import './style.css'
import { IoNewspaperSharp } from "react-icons/io5";

function NewsCard(props) {
  return ( 
    <Fragment>
      <div className='news-card-conteiner'>
        <div className='news-card-title-conteiner'>
          <h5 className='bold news-card-text news-card-title' ><IoNewspaperSharp className='news-title-icon'/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit excepturi omnis explicabo blanditiis cum dolorum sunt in nemo mollitia velit, repellat quaerat ipsa minima culpa illum natus nostrum. Vero, dolores.</h5>
        </div>
        <div className='news-card-subtitle-conteiner'>
          <p className='news-card-subtitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid illum libero sed consequuntur, perspiciatis autem dicta cumque illo culpa eligendi inventore ducimus dolore, nam animi excepturi laudantium optio exercitationem. Dignissimos.</p>
        </div>
        <div className='news-card-author-conteiner'>
          <p className='news-card-author small italic bold'>~ Raphael Freitas</p>
        </div>
      </div>
    </Fragment>
   );
}

export default NewsCard;