import { Fragment } from 'react';
import './style.css'

function CheckboxLabel(props) {
  return ( 
    <Fragment>
      <div className='checkbox-label-conteiner'>
        <input type="checkbox" name={props.name} className="checkbox-label-input" 
        onChange={(e) => props.updateFunction(e.target.checked)}/>
        <label className='checkbox-label-label' htmlFor={props.name}>{props.label}</label>
      </div>
    </Fragment>
   );
}

export default CheckboxLabel;