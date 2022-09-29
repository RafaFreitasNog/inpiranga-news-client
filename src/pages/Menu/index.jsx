import { Fragment, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Components/header';
import MenuMainSection from '../../Components/menuMainSection';
import { Context } from '../../Contexts/AuthContext';
import ArticleService from '../../Services/article';
import { IoAddCircleSharp } from 'react-icons/io5'
import './style.css'

function Menu() {

  const { loading, user } = useContext(Context)
  const [articlesArray, setArticlesArray] = useState([])
  const [isColumnist, setIsColumnist] = useState(false)
  
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
      console.log(user);
      setIsColumnist(user.columnist)
    }
  }, [loading])


  return ( 
    <Fragment>
      <Header/>
      <div id='menu-conteiner'>
        <MenuMainSection 
        articlesArray= {articlesArray}/>
        <div id="menu-button-section" className='grid1200'>
          <Link id='menu-button-conteiner' to="/writearticle">
            {isColumnist && <button className='button-asset'> <IoAddCircleSharp id='menu-add-icon' /> Write New</button> }
          </Link>
        </div>
      </div>
      
    </Fragment>
   );
}

export default Menu;