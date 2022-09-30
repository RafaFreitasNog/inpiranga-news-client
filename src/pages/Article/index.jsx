import { Fragment, useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ArticleSection from '../../Components/articleSection';
import Header from '../../Components/header';
import { Context } from '../../Contexts/AuthContext';
import ArticleService from '../../Services/article';
import './style.css'

function Article(props) {

  const { loading } = useContext(Context)
  const { state } = useLocation();
  const { articleId } = state
  const [article, setArticle] = useState()
  const [articleLoaded, setArticleLoaded] = useState(false)

  useEffect(() => {
    async function getArticle() {
      try {
        const response = await ArticleService.getOne(articleId)
        setArticle(response.data[0])
      } catch (error) {
        console.log(error);
      }
      setArticleLoaded(true)
    }
    
    if (loading === false) {
      getArticle()
    }
  }, [loading, articleId]);

  return ( 
    <Fragment>
      <Header/>
      {articleLoaded && 
      <ArticleSection
      article={article}/> }
    </Fragment>
   );
  }
  
  export default Article;