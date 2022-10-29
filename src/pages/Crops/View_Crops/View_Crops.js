import React,{useEffect, useState} from "react";
 import { useNavigate,useParams} from "react-router-dom";
import {
 CloseOutlined
  } from "@ant-design/icons";
  import { Button, Form, Input, Select } from 'antd';

import Style from '../View_Crops/View_crops.module.css'
import Service from "../../../Services";
const View=()=>{
    const [SingleUser,setSingleUser]=useState()
    const navigate = useNavigate();
    const {id} = useParams()
console.log("user",id)
  
    const FetchSingleData=()=>{
        Service.get(`crop/${id}`)
        .then(Singlearea=>{
          // console.log(Singlearea[0])
             setSingleUser(Singlearea[0])
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
<div className={Style.close}><CloseOutlined onClick={e=>navigate('/dashoard/All_Crops')}/></div>
    <h1>View Crops</h1>
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
            label={<span>planting_basin_name&nbsp;</span>}
          >
            <Select
              showSearch
              placeholder="Select a Farm "
              optionFilterProp="children"
              
              defaultValue={SingleUser.planting_basin_name}
              
            >
               
            </Select>
          </Form.Item>

        

 
        </form>
    </div>
</div>}
     
    </>
)}
export default View;
