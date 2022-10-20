import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import NewsCard from '../../Assets/newsCard';
import './style.css'

function MenuMainSection(props) {

  const navigate = useNavigate();
  
  function HandleCardClick(id) {
    navigate(`/article/${id}`);
    //navigate(`/hello`);
    //window.location.href = `http://localhost:3000/hello/${id}`
  }

  return ( 
    <Fragment>
      <div id='menu-grid-conteiner' className='grid1200'>
        <div id='menu-main-section-title-conteiner'>
          <h5 id='menu-main-section-title' className='bold'>Latest News</h5>
        </div>
        {props.articlesArray.map((element) =>
          <NewsCard
          key={element._id}
          id={element._id}
          title={element.title}
          subtitle={element.subtitle}
          text={element.text}
          author={element.author}
          category={element.category}
          handleCardClick={HandleCardClick} />
        )}
      </div>     
    </Fragment>
   );
}

export default MenuMainSection;