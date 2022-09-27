import { Fragment, useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Header from '../../components/header';
import MenuMainSection from '../../components/menuMainSection';
import { Context } from '../../contexts/AuthContext';
import ArticleService from '../../services/article';
import './style.css'

function Menu() {

  const { auth, loading, handleLogOut } = useContext(Context)
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
  
  if (auth === false) {
    return <Navigate to='/login' />
  }

  return ( 
    <Fragment>
      <Header/>
      <div id='menu-conteiner'>
        <MenuMainSection 
        articlesArray= {articlesArray}/>
        <button onClick={handleLogOut}>oi</button>
      </div>
    </Fragment>
   );
}

export default Menu;