import { Fragment } from 'react';
import './style.css'

function CategoryList() {
  return ( 
    <Fragment>
      <div className='grid1200'>
        <h6 className='list-category-title bold'>Category Title</h6>
        <div className='list-category-scroller'>
          <div className='list-category-media'></div>
          <div className='list-category-media'></div>
          <div className='list-category-media'></div>
          <div className='list-category-media'></div>
          <div className='list-category-media'></div>
          <div className='list-category-media'></div>
          <div className='list-category-media'></div>
          <div className='list-category-media'></div>
          <div className='list-category-media'></div>
          <div className='list-category-media'></div>
        </div>
      </div>
    </Fragment>
   );
}

export default CategoryList;