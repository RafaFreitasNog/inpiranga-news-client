import { Fragment } from 'react';
import './style.css'

function Loading(props) {
  return ( 
    <Fragment>
      <div id='loading-screen-conteiner'>
        <h3 className='bold white'>Ipiranga News Loading</h3>
      </div>
    </Fragment>
   );
}

export default Loading;