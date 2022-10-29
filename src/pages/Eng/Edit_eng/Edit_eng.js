import React,{useEffect, useState} from "react";
import {message} from "antd"; 
import {set, useForm} from 'react-hook-form' 
import { useNavigate,useParams} from "react-router-dom";
import {CloseOutlined} from "@ant-design/icons";
import service from "../../../Services";
import Style from '../Edit_eng/Edit_eng.module.css';
const EditUser=()=>{
    const navigate = useNavigate();
    const {id} = useParams()
    const [SingleUser,setSingleUser]=useState()


    // const {register,handleSubmit,formState:{errors}} =useForm({
    //     defaultValues:{
    //         name:SingleUser?.name,
    //         email:SingleUser?.email,
    //         Phone:SingleUser?.Phone,
    //         FavPlayer:SingleUser?.FavPlayer

    //     }
    // });
    
    const FetchSingleData=()=>{
        service.get(`engineer/${id}`)
        .then(SingleUser=>{
            setSingleUser(SingleUser.record)
        })
    }
useEffect(()=>{
    FetchSingleData()
},[])
const handelChagee=(e)=>{
    let {name,value}=e.target;
    setSingleUser({
        ...SingleUser,
        [name]:value
    })
}
const handleSubmit=(e)=>{
    e.preventDefault();

    service.put(`update/engineer/${id}`,{
        name:SingleUser.name,
     email:SingleUser.email,
     phone:SingleUser.Phone
})
    .then(res=>
        {
            message.success({ content: "Engineer Updated!",  duration: 2 });

            navigate('/dashoard/All_Eng')

        })
}
     
return (
    <div className={Style.Main}>
        <div className={Style.Form}>
             
<div className={Style.close}><CloseOutlined onClick={e=>navigate('/dashoard/All_Eng')}/></div>
        <h1>Update Engineer</h1>
        <form   
        onSubmit={(e)=>handleSubmit(e)}
            >
            <div className={Style.textField}>
            <input
                        defaultValue={SingleUser?.name}
                        onChange={handelChagee}
                        name="name"
                         placeholder="Name"/>
 
            </div>
            <div className={Style.textField}>
            <input
                        defaultValue={SingleUser?.email}

                        onChange={handelChagee}
                        name="email"

              placeholder="email"/>
             </div>
     

<div className={Style.textField}>
<input 
                        defaultValue={SingleUser?.phone}

 
onChange={handelChagee}
                        name="phone"
        placeholder="phone"/>
 </div>
       

 
       

        <input value={"Update"}  type="submit"/>

        </form>
        </div>
    </div>
   

)
}
export default EditUser;