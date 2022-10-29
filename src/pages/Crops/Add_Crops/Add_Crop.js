import Style from '../Add_Crops/Add_Crop.module.css';
import {message} from "antd"; 
import {useForm} from 'react-hook-form' 
import { useNavigate} from "react-router-dom";
import {CloseOutlined} from "@ant-design/icons";
import { Button, Form, Input, Select } from 'antd';

import Service from "../../../Services";
import { useEffect, useState } from 'react';

const Add_areas=()=>{
    const { Option } = Select;

    const navigate = useNavigate();

    const [currentList, setCurrentList] = useState([]);
    const {register,handleSubmit,formState:{errors}} =useForm({
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
        description:"",
        planting_basin_id:""
            })
  
    const Fetchdata=()=>{
        Service.get("plantingBasins")
        .then(res=>
           setCurrentList(res.records.data)
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
<div className={Style.close}><CloseOutlined onClick={e=>navigate('/dashoard/All_Crops')}/></div>
        <h1>Create Crops  </h1>
        <form   onSubmit={handleSubmit((data)=>
        // console.log("data",postObject)
            Service.post('create/crops',postObject)
            .then(res=>
                {
                    message.success({ content: "Crops Created!",  duration: 2 });

                    navigate('/dashoard/All_Crops')

                })
                

            )}>
            <div className={Style.textField}>
            <input
            onChange={e=> setPostObject({ ...postObject, name: e.target.value })            }
            //  {...register("name",{required:'this is required'})} 
              placeholder="crops"
             />
        {/* <p>{errors.name?.message}</p> */}

            </div>
            <Form.Item name={"description_en"} label="Descritpion">
              <Input.TextArea
                onChange={(e) =>
                  setPostObject({
                    ...postObject,
                    description: e.target.value,
                  })
                }
                placeholder="Please enter your Description"
                value={postObject.description}
              />
            </Form.Item>

            <Form.Item
            name="agency_id"
            required
            label={<span>PlantingBassins&nbsp;</span>}
          >
            <Select
              showSearch
              placeholder="Select a Farm "
              optionFilterProp="children"
               onChange={(e) =>
               setPostObject({ ...postObject, planting_basin_id: e })
              }
              value={postObject.farm_id}
              
            >
              {currentList?.map((element) => (
                <Option value={element.id}>{element?.name}</Option>
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