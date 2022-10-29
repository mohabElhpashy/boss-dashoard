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
      title: "Name ",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
        title: "Email ",
        dataIndex: "email",
        key: "email",
        sorter: (a, b) => a.email.length - b.email.length,
      },
      {
        title: "Phone ",
        dataIndex: "phone",
        key: "phone",
        sorter: (a, b) => a.phone.length - b.phone.length,
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
        Service.get("engineers")
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
    
 
    pageTitle="All Eng"
    dataRender={currentList}
    coloumRender={columns}
    // isLoading={isLoading}
    // refetch={refetch}
    setRerender={setRerender}
    endPoint={"delete/engineer/"}
    // noAction={false}
        // error={error}
        addEndPoint="Create_Eng"
        Viewsingle="Singleeng"
        Editsingle="EditSingleeng"
    editEndPoint="cars/editCar"
  />

  </div>
)

}
export default AllAreas;