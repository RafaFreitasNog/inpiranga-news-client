import { Fragment } from 'react';
import './style.css'

function Button(props) {
  return ( 
    <Fragment>
      <button style={{
        width: `${props.width}`,
        backgroundColor: `${props.color}`}} className='button-asset'>{props.text}</button>
    </Fragment>
   );
}

export default Button;