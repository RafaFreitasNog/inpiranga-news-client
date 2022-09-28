import { Fragment } from 'react';
import NewsCard from '../../assets/newsCard';
import './style.css'

function MenuMainSection(props) {
  return ( 
    <Fragment>
      <div id='menu-grid-conteiner' className='grid1200'>
        <div id='menu-main-section-title-conteiner'>
          <h5 id='menu-main-section-title' className='bold'>Latest News</h5>
        </div>
        {props.articlesArray.map((element) =>
          <NewsCard
          key={element._id}
          title={element.title}
          subtitle={element.subtitle}
          text={element.text}
          author={element.author[0].name} />
        )}
      </div>     
    </Fragment>
   );
}

export default MenuMainSection;