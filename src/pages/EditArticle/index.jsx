import { Fragment, useEffect, useState } from 'react';
import Header from '../../Components/header';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { CKEditor } from '@ckeditor/ckeditor5-react'
import './style.css'
import ArticleService from '../../Services/article';
import { useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../Contexts/AuthContext';

function EditArticle() {

  const { state } = useLocation();
  const { articleId } = state
  const { loading } = useContext(Context)
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
      const response = await ArticleService.put(articleId, {
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

  useEffect(() => {
    async function getArticle() {
      try {
        const response = await ArticleService.getOne(articleId)
        setTitle(response.data[0].title)
        setSubtitle(response.data[0].subtitle)
        setText(response.data[0].text)
      } catch (error) {
        console.log(error)
      }
    }
    if (loading === false) {
      getArticle()
    }
  }, [loading, articleId]);

  return ( 
    <Fragment>
      <Header/>
      <div id='edit-form-conteiner' className='grid1200'>
        <h3 id='edit-page-title'>Edit Your Article!</h3>
        <div id='edit-title-input-conteiner' className='edit-page-divs'>
          <h6 className='edit-page-text'>Title</h6>
          <textarea value={title} name="title-input" className="edit-article-textarea" onChange={(e) => {handleTitleChange(e.target.value)}}></textarea>
          <h6 className='edit-page-text'>Subtitle</h6>
          <textarea value={subtitle} name="subtitle-input" className="edit-article-textarea" onChange={(e) => {handleSubtitleChange(e.target.value)}}></textarea>
          <h6 className='edit-page-text'>Text</h6>
        </div>
        <div className='edit-page-divs'>

        </div>
        <div id="ck-editor-conteiner" className='edit-page-divs'>
          <CKEditor 
            data={text}
            editor={ Editor }
            onChange={handleTextChange}
            />
        </div>
        <button id='edit-page-submit-button' onClick={handleSubmit}>confirm updates</button>
      </div>
    </Fragment>
   );
}

export default EditArticle;