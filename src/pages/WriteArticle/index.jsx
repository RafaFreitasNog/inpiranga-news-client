import { Fragment, useState } from 'react';
import Header from '../../Components/header';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { CKEditor } from '@ckeditor/ckeditor5-react'
import './style.css'
import ArticleService from '../../Services/article';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import CategoriesService from '../../Services/categories';
import { useContext } from 'react';
import { Context } from '../../Contexts/AuthContext';

function WriteArticle() {

  const { loading } = useContext(Context)
  const [fetching, setFetching] = useState(true);
  const [categories, setCategories] = useState('');
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [text, setText] = useState('');
  const navigate = useNavigate();

  function handleCategoryChange(value) {
    setCategory(value)
  }
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
        text: text,
        category: category
      })
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await CategoriesService.getAll()
        setCategories(response.data)
      } catch (error) {
        console.log(error)
      }
      setFetching(false)
    }

    if (loading === false) {
      fetchData()
    }
  }, [loading]);

  return ( 
    <Fragment>
      <Header/>
      {fetching ? <p>loading...</p> : 
      <div id='write-form-conteiner' className='grid1200'>
        <h3 id='write-page-title' className='bold'>White Your Article</h3>
        <div id='write-title-input-conteiner' className='write-page-divs'>
          <h6 className='write-page-text'>Categorie</h6>
          <select name='categories' id='write-page-categories-select' onChange={(e) => {handleCategoryChange(e.target.value)}}>
            <option value="">Select a category...</option>
            {categories.map((element) => 
              <option key={element._id} value={element._id}>{element.name}</option>
            )}
          </select>
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
      }
    </Fragment>
   );
}

export default WriteArticle;