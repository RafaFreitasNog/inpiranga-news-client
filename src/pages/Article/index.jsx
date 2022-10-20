import { Fragment, useContext, useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import ArticleSection from '../../Components/articleSection';
import Header from '../../Components/header';
import { Context } from '../../Contexts/AuthContext';
import ArticleService from '../../Services/article';
import './style.css'

function Article(props) {

  //const { state } = useLocation();
  //const { articleId } = state
  const { articleId } = useParams()
  const { loading, user } = useContext(Context)
  const [article, setArticle] = useState()
  const [articleLoaded, setArticleLoaded] = useState(false)
  const [isOwner, setIsOwner] = useState(false)

  useEffect(() => {
    async function getArticle() {
      try {
        const response = await ArticleService.getOne(articleId)
        setArticle(response.data[0])
        // check if it is owner
        const articleAuthorId = response.data[0].author[0]._id
        const userId = user._id
        if (articleAuthorId === userId) {
          setIsOwner(true)
        }
      } catch (error) {
        console.log(error);
      }
      setArticleLoaded(true)
    }
    
    if (loading === false) {
      getArticle()
    }
  }, [loading, articleId, user]);

  return ( 
    <Fragment>
      <Header/>
      {articleLoaded && 
      <ArticleSection
      article={article}
      isOwner={isOwner}/> }
    </Fragment>
   );
  }
  
  export default Article;