import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Context } from "../contexts/AuthContext";

const PrivateRoutes = () => {
  const { auth } = useContext(Context)
  return(
    auth ? <Outlet/> : <Navigate to="/login" />
  )
}

export default PrivateRoutes;