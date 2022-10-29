import React from "react"
import { Navigate,Outlet } from "react-router-dom"
import { connect } from 'react-redux'; 
 
const ProtectedRoutes=({islogin})=>{
     let is_login= localStorage.getItem('AUTH_TOKEN')
     return is_login?<Outlet/>:<Navigate to="/" />
}

const mapStateToProps=(state)=>{
    return {
        islogin:state.Log_out.islogin,
     }
}
 
export default  connect(mapStateToProps,null) (ProtectedRoutes)