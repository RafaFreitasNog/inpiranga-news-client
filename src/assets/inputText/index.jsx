import { Fragment } from 'react';
import './style.css'

function InputText(props) {
    return ( 
    <Fragment>
      <div className='inputtext--conteiner'>
        <input className='inputtext-field' placeholder={props.placeholder} type={props.type} name={props.name} />
      </div>
    </Fragment>
   );
}

export default InputText;