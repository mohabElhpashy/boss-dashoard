import React, { useEffect,useState } from 'react';
import Service from "../../../Services";
import CustomeTable from '../../../Components/Table/CustomeTable';
import Style from "../../Crops/All_Crops/All_Crops.module.css"
const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Crop Name ",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a.name.length - b.name.length,
    },

    {
        title: "Description",
        dataIndex: "description",
        key: "description",
        sorter: (a, b) => a.description.length - b.description.length,
      }

       
 
    

  ];
const AllCrops=()=>{
    const [currentList, setCurrentList] = useState([]);
    const[ReRender,setRerender]=useState(false)

  
    const Fetchdata=()=>{
        Service.get("crops")
        .then(res=>
           setCurrentList(res.records.data)
            )
    }
    useEffect(()=>{
        Fetchdata()
    },[ReRender])
return (
  <div className={Style.Home}>
       <CustomeTable
    
 
    pageTitle="All Crops"
    dataRender={currentList}
    coloumRender={columns}
    // isLoading={isLoading}
    // refetch={refetch}
    setRerender={setRerender}
    endPoint={"delete/crops/"}
    // noAction={false}
        // error={error}
    addEndPoint="Create_Crops"
    editEndPoint="cars/editCar"
    Viewsingle='Singlecrops'
    Editsingle='Editcrops'
  />

  </div>
)

}
export default AllCrops;