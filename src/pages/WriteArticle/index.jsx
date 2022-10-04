import { Fragment, useState } from 'react';
import Header from '../../Components/header';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { CKEditor } from '@ckeditor/ckeditor5-react'
import './style.css'
import ArticleService from '../../Services/article';
import { useNavigate } from 'react-router-dom';

function WriteArticle() {

  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [text, setText] = useState('');
  const navigate = useNavigate();

  function handleTitleChange(value) {
    setTitle(value)
  }
  function handleSubtitleChange(value) {
    setSubtitle(value)
  }
  function handleTextChange(e, editor) {
    setText(editor.getData())
  }

  async function handleSubmit() {
    try {
      const response = await ArticleService.post({
        title: title,
        subtitle: subtitle,
        text: text
      })
      navigate('/')
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  return ( 
    <Fragment>
      <Header/>
      <div id='write-form-conteiner' className='grid1200'>
        <h3 id='write-page-title'>White Your Article!</h3>
        <div id='write-title-input-conteiner' className='write-page-divs'>
          <h6 className='write-page-text'>Title</h6>
          <textarea name="title-input" className="write-article-textarea" onChange={(e) => {handleTitleChange(e.target.value)}}></textarea>
          <h6 className='write-page-text'>Subtitle</h6>
          <textarea name="subtitle-input" className="write-article-textarea" onChange={(e) => {handleSubtitleChange(e.target.value)}}></textarea>
          <h6 className='write-page-text'>Text</h6>
        </div>
        <div className='write-page-divs'>

        </div>
        <div id="ck-editor-conteiner" className='write-page-divs'>
          <CKEditor 
            editor={ Editor }
            onChange={handleTextChange}
            />
        </div>
        <button id='write-page-submit-button' onClick={handleSubmit}>post article</button>
      </div>
    </Fragment>
   );
}

export default WriteArticle;