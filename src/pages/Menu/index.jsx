import { Fragment, useContext, useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import Header from '../../components/header';
import MenuMainSection from '../../components/menuMainSection';
import { Context } from '../../contexts/AuthContext';
import ArticleService from '../../services/article';
import './style.css'

function Menu() {

  const { auth } = useContext(Context)
  const [articlesArray, setArticlesArray] = useState([])
  
  useEffect(() => {
    async function getArticles() {
      try {
        const response = await ArticleService.getAll()
        console.log(response.data)
        setArticlesArray(response.data)
      } catch (error) {
        console.log(error);
      }
    }
    
    getArticles()
    
  }, [])
  
  if (auth === false) {
    return <Navigate to='/login' />
  }

  return ( 
    <Fragment>
      <Header/>
      <div id='menu-conteiner'>
        <MenuMainSection 
        articlesArray= {articlesArray}/>
        <Link to="/Article"><button>oi</button></Link>
      </div>
    </Fragment>
   );
}

export default Menu;