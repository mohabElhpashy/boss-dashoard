import React,{useEffect, useState} from "react";
 import { useNavigate,useParams} from "react-router-dom";
import {
 CloseOutlined
  } from "@ant-design/icons";
  import { Button, Form, Input, Select,message } from 'antd';

import Style from '../Edit_Crops/Edit_crops.module.css'
import Service from "../../../Services";
import {useForm} from 'react-hook-form' 

const View=()=>{
    const { Option } = Select;

    const [postObject,setPostObject]=useState({
        name:"",
        description:"",
        planting_basin_id:""
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
        Service.get(`crop/${id}`)
        .then(Singlearea=>{
            // console.log(Singlearea[0])
               setSingleUser(Singlearea[0])
          })
        }

    const FetchData=()=>{
        Service.get(`plantingBasins`)
        .then(res=>
            setCurrentList(res.records.data)
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
<div className={Style.close}><CloseOutlined onClick={e=>navigate('/dashoard/All_Crops')}/></div>
    <h1>Edit Crops</h1>
    <form   
     onSubmit={handleSubmit((data)=>
        // console.log("data",postObject)
            Service.put(`update/crops/${id}`,postObject)
            .then(res=>
                {
                    message.success({ content: "Crop updated!",  duration: 2 });

                    navigate('/dashoard/All_Crops')

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
            label={<span>Planting Bassins &nbsp;</span>}
          >
            <Select
              showSearch
              placeholder="Select a Farm "
              optionFilterProp="children"
              
              defaultValue={SingleUser.planting_basin_name}
              onChange={(e) =>
                setPostObject({ ...postObject, planting_basin_id: e })
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
