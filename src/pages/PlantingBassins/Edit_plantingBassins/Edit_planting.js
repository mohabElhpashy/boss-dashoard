import React,{useEffect, useState} from "react";
 import { useNavigate,useParams} from "react-router-dom";
import {
 CloseOutlined
  } from "@ant-design/icons";
  import { Button, Form, Input, Select,message } from 'antd';

import Style from '../ViewPlanting/ViewPlanting.module.css'
import Service from "../../../Services";
import {useForm} from 'react-hook-form' 

const View=()=>{
    const { Option } = Select;

    const [postObject,setPostObject]=useState({
        name:"",
        description:"",
        farm_id:""
            })
    const [SingleUser,setSingleUser]=useState()
    const {register,handleSubmit,formState:{errors}} =useForm({
        defaultValues:{
            name:"",
            area_id:""
            // email:"",
            // Phone:"",
            // FavPlayer:""

        }
    });
    const navigate = useNavigate();
    const {id} = useParams()
console.log("user",id)
const [currentList, setCurrentList] = useState([]);

    const FetchSingleData=()=>{
        Service.get(`plantingBasin/${id}`)
        .then(Singlearea=>{
             setSingleUser(Singlearea.records)
        })
    }

    const FetchData=()=>{
        Service.get(`farms`)
        .then(res=>
            setCurrentList(res.records)
             )
    }
useEffect(()=>{
FetchSingleData()
FetchData()
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
     onSubmit={handleSubmit((data)=>
        // console.log("data",postObject)
            Service.put(`update/plantingBasin/${id}`,postObject)
            .then(res=>
                {
                    message.success({ content: "Farm updates!",  duration: 2 });

                    navigate('/dashoard/All_PlantingBassins')

                })
                

            )}
     >
            <div className={Style.textField}>
            <input
            defaultValue={SingleUser?.name}

            onChange={e=> setPostObject({ ...postObject, name: e.target.value })            }
            //  {...register("name",{required:'this is required'})} 
              placeholder="PlantingBassins"
             />
        {/* <p>{errors.name?.message}</p> */}

            </div>
            <Form.Item name={"description_en"} label="Descritpion">
              <Input.TextArea
               
                placeholder="Please enter your Description"
                defaultValue={SingleUser?.description}
                onChange={e=> setPostObject({ ...postObject, description: e.target.value })            }
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
              onChange={(e) =>
                setPostObject({ ...postObject, farm_id: e })
               }
              
            >
               {currentList?.map((element) => (
                <Option value={element.id}>{element?.name}</Option>
              ))}
            </Select>
          </Form.Item>

        

        <input value={"Update"} type="submit"/>

        </form>
    </div>
</div>}
     
    </>
)}
export default View;
