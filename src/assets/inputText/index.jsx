import { Fragment } from 'react';
import './style.css'

function InputText(props) {
  return ( 
    <Fragment>
      <div id='input-text-asset-conteiner'>
        <label id='input-text-label' htmlFor='email'>{props.label}</label>
        <input type={props.type} placeholder={props.placeholder} name="email" id='input-field' />
      </div>
    </Fragment>
   );
}

export default InputText;