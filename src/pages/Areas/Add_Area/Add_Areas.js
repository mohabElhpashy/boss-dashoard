import { Input } from 'antd'
import Style from '../Add_Area/Add_Area.module.css';
import {message} from "antd"; 
import {useForm} from 'react-hook-form' 
import { useNavigate} from "react-router-dom";
import {CloseOutlined} from "@ant-design/icons";
import Service from "../../../Services";

const Add_areas=()=>{
    const navigate = useNavigate();

    const {register,handleSubmit,formState:{errors}} =useForm({
        defaultValues:{
            area_name:"",
            // email:"",
            // Phone:"",
            // FavPlayer:""

        }
    });
return(
    <>
     <div className={Style.Main}>
        <div data-aos="fade-bottom" className={Style.Form}>
            {/* <span icon={<CloseOutlined style={{ color: "#3e79f7" }} />}
></span> */}
<div className={Style.close}><CloseOutlined onClick={e=>navigate('/dashoard/All_Areas')}/></div>
        <h1>Create Area</h1>
        <form   onSubmit={handleSubmit((data)=>
            Service.post('create/area',data)
            .then(res=>
                {
                    message.success({ content: "User Added!",  duration: 2 });

                    navigate('/dashoard/All_Areas')

                })
                

            )}>
            <div className={Style.textField}>
            <input
            // onChange={e=>setUserdata({name:e.target.value})}
             {...register("area_name",{required:'this is required'})}  placeholder="area_name"/>
        <p>{errors.area_name?.message}</p>

            </div>
        

        <input value={"Create"} type="submit"/>

        </form>
        </div>
    </div>
    </>
   
)
}

export default Add_areas