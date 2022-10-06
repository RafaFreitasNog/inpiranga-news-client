import { Fragment } from 'react';
import EditButtons from '../editButtons';
import './style.css'

function ProfileNewsCard(props) {
  return ( 
    <Fragment>
      <div className='profile-card-conteiner'>
        <div className='profile-card-title'>
          <h5 className='bold'>{props.title}</h5>
        </div>
        <div className='profile-card-subtitle'>
          <p>{props.subtitle}</p>
        </div>
        
      </div>
    </Fragment>
   );
}

export default ProfileNewsCard;