import { Fragment } from 'react';
import DivisionLine from '../../assets/divisionLine';
import NewsCard from '../../assets/newsCard';
import './style.css'

function MenuMainSection(props) {
  return ( 
    <Fragment>
      <div id='menu-grid-conteiner' className='grid1200'>
        <div id='menu-main-section-title-conteiner'>
          <h5 id='menu-main-section-title' className='bold'>Latest News</h5>
        </div>
        <NewsCard/>
        <NewsCard/>
        <NewsCard/>
        <NewsCard/>
        <NewsCard/>
        <NewsCard/>
        <DivisionLine text="show more"/>
      </div>     
    </Fragment>
   );
}

export default MenuMainSection;