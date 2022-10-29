import React,{useEffect, useState} from "react";
 import { useNavigate,useParams} from "react-router-dom";
import {
 CloseOutlined
  } from "@ant-design/icons";
import Style from '../View_eng/View_eng.module.css'
import service from "../../../Services";
const View=()=>{
    const [SingleUser,setSingleUser]=useState()
    const navigate = useNavigate();
    const {id} = useParams()
console.log("user",id)
  
    const FetchSingleData=()=>{
        service.get(`engineer/${id}`)
        .then(SingleUser=>{
            // console.log("singeluser",SingleUser.record)
            setSingleUser(SingleUser.record)
        })
    }
useEffect(()=>{
FetchSingleData()
},[])
     
return (
    <div className={Style.Main}>
        <div className={Style.Form}>
             
<div className={Style.close}><CloseOutlined onClick={e=>navigate('/dashoard/All_Eng')}/></div>
        <h1>View Engineer</h1>
        <form  >
            <div className={Style.textField}>
            <input
            value={SingleUser?.name}
              placeholder="Name"/>
 
            </div>
            <div className={Style.textField}>
            <input
             value={SingleUser?.email}

            placeholder="email"/>
             </div>
     

<div className={Style.textField}>
<input 
 
 value={SingleUser?.phone}

         placeholder="phone"/>
 </div>
       
{/* 
<div className={Style.textField}>
<input 
 value={SingleUser?.FavPlayer}

placeholder="Favfavorite Player"/>
 </div> */}
       


        </form>
        </div>
    </div>
   

)
}
export default View;