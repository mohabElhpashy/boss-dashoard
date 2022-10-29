import React from "react"
import { Navigate,Outlet } from "react-router-dom"
 
const ProtectedRoutes=()=>{
    const isAuth={token:true}
    return isAuth.token?<Outlet/>:<Navigate to="/login" />
}
export default ProtectedRoutes