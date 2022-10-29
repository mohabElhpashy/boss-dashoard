import Style from '../Add_Farms/Add_Farm.module.css';
 
import { useNavigate,useParams} from "react-router-dom";
import {CloseOutlined} from "@ant-design/icons";
import { Button, Form, Input, Select } from 'antd';

import Service from "../../../Services";
import { useEffect, useState } from 'react';

const Add_areas=()=>{
    const [SingleUser,setSingleUser]=useState({})
    const navigate = useNavigate();
    const {id} = useParams()
console.log("user",id)
  
    const FetchSingleData=()=>{
        Service.get(`farm/${id}`)
        .then(Singlefarm=>{
            console.log("Singlearea",Singlefarm)
            setSingleUser(Singlefarm)
        })
    }
useEffect(()=>{
FetchSingleData()
},[])
return(
    <>
    {SingleUser.area_name&&
    <div className={Style.Main}>
    <div data-aos="fade-bottom" className={Style.Form}>
        {/* <span icon={<CloseOutlined style={{ color: "#3e79f7" }} />}
></span> */}
<div className={Style.close}><CloseOutlined onClick={e=>navigate('/dashoard/All_Farms')}/></div>
    <h1>View Farm</h1>
    <form  
    
        >
        <div className={Style.textField}>
        <input
        //  {...register("name",{required:'this is required'})} 
        value={SingleUser?.name}
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
          
        >
        
        </Select>
      </Form.Item>

    

    {/* <input value={"Create"} type="submit"/> */}

    </form>
    </div>
</div>}
     
    </>
   
)
}

export default Add_areas