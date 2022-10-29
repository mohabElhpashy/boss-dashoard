import Style from '../Add_Farms/Add_Farm.module.css';
 
import { useNavigate,useParams} from "react-router-dom";
import {CloseOutlined} from "@ant-design/icons";
import { Button, Form, Input, Select,message } from 'antd';

import Service from "../../../Services";
import { useEffect, useState } from 'react';
import {useForm} from 'react-hook-form' 

const Add_areas=()=>{
    const { Option } = Select;

    const [SingleUser,setSingleUser]=useState({})
    const [postObject,setPostObject]=useState({
        name:"",
        area_id:""
            })
    const navigate = useNavigate();
    const {register,handleSubmit,formState:{errors}} =useForm({
        defaultValues:{
            name:"",
            area_id:""
            // email:"",
            // Phone:"",
            // FavPlayer:""

        }
    });
    const {id} = useParams()
console.log("user",id)
  
    const FetchSingleData=()=>{
        Service.get(`farm/${id}`)
        .then(Singlefarm=>{
            console.log("Singlearea",Singlefarm)
            setSingleUser(Singlefarm)
        })
    }
    const[area_id_all,setarea_id_all]=useState([])
    const Fetchdata=()=>{
        Service.get("areas")
        .then(res=>
            setarea_id_all(res.record)
            )
    }
    
useEffect(()=>{
FetchSingleData()
Fetchdata()
},[])
return(
    <>
    {SingleUser.area_name&&
    <div className={Style.Main}>
    <div data-aos="fade-bottom" className={Style.Form}>
        {/* <span icon={<CloseOutlined style={{ color: "#3e79f7" }} />}
></span> */}
<div className={Style.close}><CloseOutlined onClick={e=>navigate('/dashoard/All_Farms')}/></div>
    <h1>Edit Farm</h1>
    <form  
     onSubmit={handleSubmit((data)=>
        // console.log("data",postObject)
            Service.put(`update/farm/${id}`,postObject)
            .then(res=>
                {
                    message.success({ content: "Farm updates!",  duration: 2 });

                    navigate('/dashoard/All_Farms')

                })
                

            )}
        >
        <div className={Style.textField}>
        <input
        //  {...register("name",{required:'this is required'})} 
        onChange={e=> setPostObject({ ...postObject, name: e.target.value })}
         defaultValue={SingleUser?.name}
          placeholder="Name"
         />
    {/* <p>{errors.name?.message}</p> */}

        </div>
    
        <Form.Item
        name="name"
        required
        label={<span>Area&nbsp;</span>}
        
        
      >
        <Select
          showSearch
          
          onSelect={"asdasdasdasd"}
          
          placeholder="Select a Farm"
          optionFilterProp="children"
          
        //   value={SingleUser&&SingleUser.name}
        //   defaultValue={SingleUser.name}
          name="name"
defaultValue={SingleUser.area_name}
onChange={(e) =>
    setPostObject({ ...postObject, area_id: e })
   }
          
        >
         {area_id_all?.map((element) => (
                <Option value={element.id}>{element?.area_name}</Option>
              ))}
        </Select>
      </Form.Item>

    

    <input value={"Update"} type="submit"/>

    </form>
    </div>
</div>}
     
    </>
   
)
}

export default Add_areas