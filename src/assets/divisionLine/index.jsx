import { Fragment } from 'react';
import './style.css'

function DivisionLine(props) {
  return ( 
    <Fragment>
      <div className='line-asset-conteiner'>
        <hr className='line-asset' />
        <p className='small line line-asset-text'>{props.text}</p>
        <hr className='line-asset' />
      </div>
    </Fragment>
   );
}

export default DivisionLine;