import React,{useEffect} from "react";
import {message} from "antd"; 
import {useForm} from 'react-hook-form' 
import { useNavigate} from "react-router-dom";
import {
 CloseOutlined
  } from "@ant-design/icons";
 
import service from "../../../Services";
import Style from '../Add_Eng/Add_Eng.module.css';
const AddUser=()=>{
    const navigate = useNavigate();

    const {register,handleSubmit,formState:{errors}} =useForm({
        defaultValues:{
            name:"",
            phone:"",
            email:"",
            password:""

        }
    });
   
    

     
return (
    <div className={Style.Main}>
        <div  className={Style.Form}>
            {/* <span icon={<CloseOutlined style={{ color: "#3e79f7" }} />}
></span> */}
<div className={Style.close}><CloseOutlined onClick={e=>navigate('/dashoard/All_Eng')}/></div>
        <h1>Add engineers</h1>
        <form   onSubmit={handleSubmit((data)=>
            service.post('create/engineer',data)
            .then(res=>
                {
                    message.success({ content: "User Added!",  duration: 2 });

                    navigate('/dashoard/All_Eng')

                })
                

            )}>
            <div className={Style.textField}>
            <input
            // onChange={e=>setUserdata({name:e.target.value})}
             {...register("name",{required:'this is required'})}  placeholder="Name"/>
        <p>{errors.name?.message}</p>

            </div>
            <div className={Style.textField}>
            <input
            // onChange={e=>setUserdata({email:e.target.value})}

            {...register("email",{required:'this is required'})}  placeholder="email"/>
        <p>{errors.email?.message}</p>
            </div>
     

<div className={Style.textField}>
<input 
            // onChange={e=>setUserdata({Phone:e.target.value})}

{...register("phone",{required:'this is required',minLength:{
            value:11,
            message:'Min length is 11'
        }})}  placeholder="phone"/>
                <p>{errors.phone?.message}</p>
</div>
       

<div className={Style.textField}>
<input 
            // onChange={e=>setUserdata({FavPlayer:e.target.value})}
type='password'
{...register("password",{required:'this is required'})}  placeholder="Favfavorite Player"/>
        <p>{errors.password?.message}</p>
</div>
       

        <input  value={"Create"} type="submit"/>

        </form>
        </div>
    </div>
   

)
}
export default AddUser;