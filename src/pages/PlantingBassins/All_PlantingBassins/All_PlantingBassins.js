import React, { useEffect,useState } from 'react';
import Service from "../../../Services";
import CustomeTable from '../../../Components/Table/CustomeTable';
import Style from "../../../pages/PlantingBassins/All_PlantingBassins/All_PlantingBassins.module.css"
const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "plantingBasins Name ",
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
const All_PlantingBassins=()=>{
    const [currentList, setCurrentList] = useState([]);
    const[ReRender,setRerender]=useState(false)

  
    const Fetchdata=()=>{
        Service.get("plantingBasins")
        .then(res=>{
          setCurrentList(res.records.data)
          console.log(res)

        }
            )
    }
    useEffect(()=>{
        Fetchdata()
    },[ReRender])
return (
  <div className={Style.Home}>
       <CustomeTable
    
 
    pageTitle="All PlantingBassins"
    dataRender={currentList}
    coloumRender={columns}
    // isLoading={isLoading}
    // refetch={refetch}
    setRerender={setRerender}
    endPoint={"delete/plantingBasin/"}
    // noAction={false}
        // error={error}
        addEndPoint="Create_PlantinfBassins"
        editEndPoint="cars/editCar"
        Viewsingle="Singleplanting"
        Editsingle="Editplanting"

  />

  </div>
)

}
export default All_PlantingBassins;