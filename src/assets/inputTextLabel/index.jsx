import { Fragment } from 'react';
import './style.css'

function InputTextLabel(props) {
  return ( 
    <Fragment>
      <div className='inputtextlabel-conteiner'>
        <label className='inputtextlabel-label' htmlFor={props.type}>{props.label}</label>
        <input className='inputtextlabel-field' type={props.type} placeholder={props.placeholder} name={props.type}
        onChange={(e) => props.updateFunction(e.target.value)}/>
      </div>
    </Fragment>
   );
}

export default InputTextLabel;