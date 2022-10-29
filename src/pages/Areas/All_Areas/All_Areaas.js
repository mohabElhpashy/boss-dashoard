import React, { useEffect,useState } from 'react';
import Service from "../../../Services";
import CustomeTable from '../../../Components/Table/CustomeTable';
import Style from "../../Areas/All_Areas/All_Areas.module.css"
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
      title: "Engineers",
      render:(text, Obj)=> ( Obj.assign_areas.map(ele=>
      <span className={Style.eggggg}>
        {ele.engineer.name}</span>)),
        
       sorter: (a, b) => a.area_name.length - b.area_name.length,
    },

    // {
    //     title: "Area Image",
    //     dataIndex: "area_photo",
    //     key: "area_photo",
    //     sorter: (a, b) => a.area_photo.length - b.area_photo.length,
    //   }

       
 
    

  ];
const AllAreas=()=>{
    const [currentList, setCurrentList] = useState([]);
    const[ReRender,setRerender]=useState(false)

  
    const Fetchdata=()=>{
        Service.get("areas")
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
    
 
    pageTitle="All Areas"
    dataRender={currentList}
    coloumRender={columns}
    // isLoading={isLoading}
    // refetch={refetch}
    setRerender={setRerender}
    endPoint={"delete/area/"}
    Editsingle="Editarea"

    // noAction={false}
        // error={error}
    addEndPoint="Create_Areas"
    Viewsingle="Singlearea"
    editEndPoint="cars/editCar"
  />

  </div>
)

}
export default AllAreas;