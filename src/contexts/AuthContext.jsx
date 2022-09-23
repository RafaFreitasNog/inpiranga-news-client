import { createContext, useState } from "react";
import ColumnistService from "../services/columnist";
import UserService from "../services/user";

const Context = createContext();

function AuthProvider({ children }) {

  const [auth, setAuth] = useState(false);
  
  console.log(auth)

  async function handleLogin(email, password, isColumnist) {
    if (isColumnist) {
      try {
        const response = await ColumnistService.login({
          email: email,
          password: password
        })
        console.log(response);
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
        console.log(response);
        setAuth(true)
      } catch (error) {
        return error
      }
    }
  }

  return (
    <Context.Provider value={{ auth, handleLogin }}>
      {children}
    </Context.Provider>
  )
}

export { Context, AuthProvider }
