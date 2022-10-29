import React,{useEffect} from "react";
import {message} from "antd"; 
import {useForm} from 'react-hook-form' 
import { useNavigate} from "react-router-dom";
import { connect } from 'react-redux'; 
import {
 CloseOutlined
  } from "@ant-design/icons";
  import 'antd/dist/antd.css';
import {LOGOUT} from '../../redux/Logout/Logout_action'
//   import Aos from 'aos'
//   import "aos/dist/aos.css"
import Service from "../../Services/Services";
import Style from '../Login/Login.module.css';
const AddUser=({Login})=>{
    const navigate = useNavigate();

    const {register,handleSubmit,formState:{errors}} =useForm({
        defaultValues:{
             email:"",
             password:"",
 
        }
    });
 
    

     
return (
    <div className={Style.Main}>
        <div data-aos="fade-bottom" className={Style.Form}>
            {/* <span icon={<CloseOutlined style={{ color: "#3e79f7" }} />}
></span> */}
<div className={Style.close}>
    {/* <CloseOutlined onClick={e=>navigate('/')}/> */}
    </div>
        <h1>Log In</h1>
        <form   
        onSubmit={handleSubmit((data)=>
            Service.post('login',data)
            .then(res=>
                {
                         console.log("res",res)
                        message.success({ content: "Login Sucess  ✔",  duration: 2 });
                        localStorage.setItem('AUTH_TOKEN',res.data.authorisation.token)

                        navigate('/dashoard/All_Areas')
                     
                  
                 

                })
                .catch(error=>{
                    message.success({ content: "Login Failed ❌",  duration: 2 });

                })
                

            )}
            >
             
            <div className={Style.textField}>
            <input
            // onChange={e=>setUserdata({email:e.target.value})}

            {...register("email",{required:'this is required'})}  placeholder="email"/>
        <p>{errors.email?.message}</p>
            </div>
     

<div className={Style.textField}>
<input 
            // onChange={e=>setUserdata({Phone:e.target.value})}

{...register("password",{required:'this is required' 
        })}  placeholder="password"/>
                <p>{errors.password?.message}</p>
</div>
       

 
       

        <input  value={"Login"} type="submit"/>

        </form>
        </div>
    </div>
   

)


}
 
const mapDispatchToProps=dispatch=>{
    return{
        Login:( )=>dispatch(LOGOUT()),
 
    }
}
export default  connect(null,mapDispatchToProps) (AddUser)