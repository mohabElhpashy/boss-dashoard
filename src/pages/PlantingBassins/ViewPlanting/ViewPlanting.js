import React,{useEffect, useState} from "react";
 import { useNavigate,useParams} from "react-router-dom";
import {
 CloseOutlined
  } from "@ant-design/icons";
  import { Button, Form, Input, Select } from 'antd';

import Style from '../ViewPlanting/ViewPlanting.module.css'
import Service from "../../../Services";
const View=()=>{
    const [SingleUser,setSingleUser]=useState()
    const navigate = useNavigate();
    const {id} = useParams()
console.log("user",id)
  
    const FetchSingleData=()=>{
        Service.get(`plantingBasin/${id}`)
        .then(Singlearea=>{
             setSingleUser(Singlearea.records)
        })
    }
useEffect(()=>{
FetchSingleData()
},[])
return(
    <>
    {SingleUser&&
    <div className={Style.Main}>
    <div data-aos="fade-bottom" className={Style.Form}>
        {/* <span icon={<CloseOutlined style={{ color: "#3e79f7" }} />}
></span> */}
<div className={Style.close}><CloseOutlined onClick={e=>navigate('/dashoard/All_PlantingBassins')}/></div>
    <h1>View plantingBasins</h1>
    <form   
     >
            <div className={Style.textField}>
            <input
            value={SingleUser?.name}
            // onChange={e=> setPostObject({ ...postObject, name: e.target.value })            }
            //  {...register("name",{required:'this is required'})} 
              placeholder="PlantingBassins"
             />
        {/* <p>{errors.name?.message}</p> */}

            </div>
            <Form.Item name={"description_en"} label="Descritpion">
              <Input.TextArea
               
                placeholder="Please enter your Description"
                defaultValue={SingleUser?.description}
                readOnly
              />
            </Form.Item>

            <Form.Item
            name="agency_id"
            required
            label={<span>Farms&nbsp;</span>}
          >
            <Select
              showSearch
              placeholder="Select a Farm "
              optionFilterProp="children"
              
              defaultValue={SingleUser.farm_name}
              
            >
               
            </Select>
          </Form.Item>

        

        <input value={"Create"} type="submit"/>

        </form>
    </div>
</div>}
     
    </>
)}
export default View;
