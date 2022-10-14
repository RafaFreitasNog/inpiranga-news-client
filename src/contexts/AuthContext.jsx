import { createContext, useEffect, useState } from "react";
import Loading from "../Pages/LoadingScreen";
import Api from "../Services/api";
import ColumnistService from "../Services/columnist";
import UserService from "../Services/user";

const Context = createContext();

function AuthProvider({ children }) {

  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(true);
  const [isColumnist, setIsColumnist] = useState(false);


  async function handleLogin(email, password, isColumnist) {
    if (isColumnist) {
      try {
        const response = await ColumnistService.login({
          email: email,
          password: password
        })
        // put in localStorage
        localStorage.setItem("in-token", JSON.stringify(response.data.token))
        localStorage.setItem("in-user", JSON.stringify(response.data.columnist))
        // set default header
        Api.defaults.headers.authtoken = `${response.data.token}`;
        // set states
        setUser(response.data.columnist)
        setIsColumnist(response.data.columnist.columnist)
        setAuth(true)
      } catch (error) {
        return error
      }
    } else {
      try {
        const response = await UserService.login({
          email: email,
          password: password
        })
        // put in localStorage
        localStorage.setItem("in-token", JSON.stringify(response.data.token))
        localStorage.setItem("in-user", JSON.stringify(response.data.user))
        // set default header
        Api.defaults.headers.authtoken = `${response.data.token}`;
        // set states
        setUser(response.data.user)
        setIsColumnist(response.data.user.columnist)
        setAuth(true)
      } catch (error) {
        return error
      }
    }
  }

  function handleLogout() {
    setAuth(false)
    localStorage.removeItem("in-token")
    localStorage.removeItem("in-user")
    Api.defaults.headers.authtoken = undefined
  }

  async function addFavorite(articleId) {
    const response = await UserService.addFavorite(articleId)
    console.log(response);
  }
  
  async function removeFavorite(articleId) {
    const response = await UserService.removeFavorite(articleId)
    console.log(response);
  }

  async function revalidateToken(user) {
    if (user.columnist) {        
      try {
        const response = await ColumnistService.revalidate()
        console.log(response);
        setUser(response.data)
        setIsColumnist(response.data.columnist)
        localStorage.setItem("in-user", JSON.stringify(response.data))
      } catch (error) {
        console.log(error);
        handleLogout()
      }
    } else {
      try {
        const response = await UserService.revalidate()
        console.log(response);
        setUser(response.data)
        setIsColumnist(response.data.columnist)
        localStorage.setItem("in-user", JSON.stringify(response.data))
      } catch (error) {
        console.log(error);
        handleLogout()
      }
    }
    setAuth(true)
  }

  useEffect(() => {
    // rehidrate
    
    const token = localStorage.getItem('in-token')
    const userInStorage = JSON.parse(localStorage.getItem('in-user'))
    
    if (token && userInStorage) {
      Api.defaults.headers.authtoken = `${JSON.parse(token)}`
      revalidateToken(userInStorage)
    }
    
    setLoading(false)
  }, []);

  
  if (loading) {
    return <Loading/>
  }

  return (
    <Context.Provider value={{ auth, handleLogin, handleLogout, addFavorite, removeFavorite, loading, user, isColumnist }}>
      {children}
    </Context.Provider>
  )
}

export { Context, AuthProvider }
