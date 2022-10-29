import React, { useEffect,useState } from 'react';
import Service from "../../../Services";
import CustomeTable from '../../../Components/Table/CustomeTable';
import Style from "../../Farms/All_FArms/All_Farms.module.css"
const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Area Name ",
      dataIndex: "area_name",
      key: "area_name",
      sorter: (a, b) => a.area_name.length - b.area_name.length,
    },
    {
        title: "Farm Name ",
        dataIndex: "name",
        key: "name",
        sorter: (a, b) => a.name.length - b.name.length,
      },

    // {
    //     title: "Area Image",
    //     dataIndex: "area_photo",
    //     key: "area_photo",
    //     sorter: (a, b) => a.area_photo.length - b.area_photo.length,
    //   }

       
 
    

  ];
const AllFarms=()=>{
    const [currentList, setCurrentList] = useState([]);
    const[ReRender,setRerender]=useState(false)

  
    const Fetchdata=()=>{
        Service.get("farms")
        .then(res=>
           setCurrentList(res.records)
            )
    }
    useEffect(()=>{
        Fetchdata()
    },[ReRender])
return (
  <div className={Style.Home}>
       <CustomeTable
    
 
    pageTitle="All Farms"
    dataRender={currentList}
    coloumRender={columns}
    // isLoading={isLoading}
    // refetch={refetch}
    setRerender={setRerender}
    endPoint={"delete/farm/"}
    // noAction={false}
        // error={error}
    addEndPoint="Create_Farm"
    editEndPoint="cars/editCar"
    Viewsingle="Singlefarm"
    Editsingle="Editfarm"

  />

  </div>
)

}
export default AllFarms;