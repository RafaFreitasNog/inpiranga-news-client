import { Fragment, useContext, useEffect, useState } from 'react';
import Header from '../../components/header';
import MenuMainSection from '../../components/menuMainSection';
import { Context } from '../../contexts/AuthContext';
import ArticleService from '../../services/article';
import './style.css'

function Menu() {

  const { loading } = useContext(Context)
  const [articlesArray, setArticlesArray] = useState([])
  
  useEffect(() => {
    async function getArticles() {
      try {
        const response = await ArticleService.getAll()
        setArticlesArray(response.data)
      } catch (error) {
        console.log(error);
      }
    }
    if (loading === false) {
      getArticles()
    }
  }, [loading])

  return ( 
    <Fragment>
      <Header/>
      <div id='menu-conteiner'>
        <MenuMainSection 
        articlesArray= {articlesArray}/>
      </div>
    </Fragment>
   );
}

export default Menu;