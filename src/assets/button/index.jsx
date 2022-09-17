import { Fragment } from 'react';
import './style.css'

function Button(props) {
  return ( 
    <Fragment>
      <button className='button-asset'>{props.text}</button>
    </Fragment>
   );
}

export default Button;