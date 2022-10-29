import Style from '../Add_Farms/Add_Farm.module.css';
import {message} from "antd"; 
import {useForm} from 'react-hook-form' 
import { useNavigate} from "react-router-dom";
import {CloseOutlined} from "@ant-design/icons";
import {  Form , Select } from 'antd';

import Service from "../../../Services";
import { useEffect, useState } from 'react';

const Add_areas=()=>{
    const { Option } = Select;

    const navigate = useNavigate();

    const { handleSubmit} =useForm({
        defaultValues:{
            name:"",
            area_id:""
            // email:"",
            // Phone:"",
            // FavPlayer:""

        }
    });
    const [postObject,setPostObject]=useState({
name:"",
area_id:""
    })
    const[area_id_all,setarea_id_all]=useState([])
    const Fetchdata=()=>{
        Service.get("areas")
        .then(res=>
            setarea_id_all(res.record)
            )
    }
    useEffect(()=>{
        Fetchdata()
    },[])
return(
    <>
     <div className={Style.Main}>
        <div data-aos="fade-bottom" className={Style.Form}>
            {/* <span icon={<CloseOutlined style={{ color: "#3e79f7" }} />}
></span> */}
<div className={Style.close}><CloseOutlined onClick={e=>navigate('/dashoard/All_Farms')}/></div>
        <h1>Create Farm</h1>
        <form   onSubmit={handleSubmit((data)=>
        // console.log("data",postObject)
            Service.post('create/farms',postObject)
            .then(res=>
                {
                    message.success({ content: "Farm Created!",  duration: 2 });

                    navigate('/dashoard/All_Farms')

                })
                

            )}>
            <div className={Style.textField}>
            <input
            onChange={e=> setPostObject({ ...postObject, name: e.target.value })            }
            //  {...register("name",{required:'this is required'})} 
              placeholder="Name"
             />
        {/* <p>{errors.name?.message}</p> */}

            </div>
        
            <Form.Item
            name="Farm"
            required
            label={<span>Area&nbsp;</span>}
          >
            <Select
              showSearch
              placeholder="Select a Farm"
              optionFilterProp="children"
               onChange={(e) =>
               setPostObject({ ...postObject, area_id: e })
              }
              value={postObject.area_id}
              
            >
              {area_id_all?.map((element) => (
                <Option value={element.id}>{element?.area_name}</Option>
              ))}
            </Select>
          </Form.Item>

        

        <input value={"Create"} type="submit"/>

        </form>
        </div>
    </div>
    </>
   
)
}

export default Add_areas