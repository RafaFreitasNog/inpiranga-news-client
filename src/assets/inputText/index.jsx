import { Fragment } from 'react';
import './style.css'

function InputText(props) {
  return ( 
    <Fragment>
      <div className='input-text-asset-conteiner'>
        <label className='input-text-label' htmlFor='email'>{props.label}</label>
        <input className='input-field' type={props.type} placeholder={props.placeholder} name="email" 
        onChange={(e) => props.updateFunction(e.target.value)}/>
      </div>
    </Fragment>
   );
}

export default InputText;