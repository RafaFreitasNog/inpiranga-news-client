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


  async function handleLogin(email, password, isColumnist) {
    if (isColumnist) {
      try {
        const response = await ColumnistService.login({
          email: email,
          password: password
        })
        localStorage.setItem("in-token", JSON.stringify(response.data.token))
        localStorage.setItem("in-user", JSON.stringify(response.data.columnist))
        Api.defaults.headers.authtoken = `${response.data.token}`;
        setUser(response.data.columnist)
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
        localStorage.setItem("in-token", JSON.stringify(response.data.token))
        localStorage.setItem("in-user", JSON.stringify(response.data.user))
        Api.defaults.headers.authtoken = `${response.data.token}`;
        setUser(response.data.user)
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

  useEffect(() => {
    //console.log(auth, loading);
    const token = localStorage.getItem('in-token')
    setUser(JSON.parse(localStorage.getItem('in-user')))
    
    if (token) {
      Api.defaults.headers.authtoken = `${JSON.parse(token)}`
      setAuth(true)
    }
    setLoading(false)
  }, []);

  
  if (loading) {
    return <Loading/>
  }

  return (
    <Context.Provider value={{ auth, handleLogin, handleLogout, loading, user }}>
      {children}
    </Context.Provider>
  )
}

export { Context, AuthProvider }
