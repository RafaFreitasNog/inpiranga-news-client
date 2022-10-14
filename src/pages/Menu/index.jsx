import { Fragment, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MenuMainSection from '../../Components/menuMainSection';
import { Context } from '../../Contexts/AuthContext';
import ArticleService from '../../Services/article';
import { IoAddCircleSharp } from 'react-icons/io5'
import './style.css'
import HeaderBig from '../../Components/headerBig';
import Loading from '../LoadingScreen';

function Menu() {

  const { loading, isColumnist } = useContext(Context)
  const [fetching, setFetching] = useState(true)
  const [articlesArray, setArticlesArray] = useState([])
  
  useEffect(() => {
      async function getArticles() {
        try {
          const response = await ArticleService.getAll()
          setArticlesArray(response.data)
          setFetching(false)
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
      {fetching ? (<Loading />) : 
        <Fragment>
          <HeaderBig/>
          <div id='menu-conteiner'>
            <div id='menu-hero-section' className='grid1200'>
              <div id='menu-hero'></div>
            </div>
            <MenuMainSection 
            articlesArray= {articlesArray}/>
            <div id="menu-button-section" className='grid1200'>
              <Link id='menu-button-conteiner' to="/writearticle">
                {isColumnist && <button className='menu-button-write'> <IoAddCircleSharp id='menu-add-icon' className='white'/> Write New</button> }
              </Link>
            </div>
          </div>
        </Fragment>
      }
    </Fragment>
   );
}

export default Menu;