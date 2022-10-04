import { Fragment } from 'react';
import { IoPencilSharp, IoTrashSharp } from 'react-icons/io5';
import './style.css'


function EditButtons(props) {
  return ( 
    <Fragment>
      <div id='edit-delete-buttons-conteiner'>
        <button id='article-edit-button' className='article-delete-edit-buttons' onClick={props.editClick}> <IoPencilSharp className='edit-section-icons'/>edit</button>
        <button id='article-delete-button' className='article-delete-edit-buttons' onClick={props.deleteClick}> <IoTrashSharp className='edit-section-icons'/>delete</button>
      </div>
    </Fragment>
   );
}

export default EditButtons;