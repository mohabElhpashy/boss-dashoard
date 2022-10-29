import Sidebar from "../Components/Sidebar/Sidebar";

import Add_Eng from '../pages/Eng/Add_Eng/Add_Eng'
import All_eng from '../pages/Eng/All_eng/All_eng'
import View_Eng from '../pages/Eng/View_eng/View_eng'
import EditUser from "../pages/Eng/Edit_eng/Edit_eng";

import All_Areaas from "../pages/Areas/All_Areas/All_Areaas";
import Create_Areas from '../pages/Areas/Add_Area/Add_Areas';
import Singlearea from '../pages/Areas/ViewAreas/ViewSingleArea';
import Edit_area from '../pages/Areas/Edit_Area/Edit_area'

import AllFarms from "../pages/Farms/All_FArms/All_Farms";
import Create_Farm from '../pages/Farms/Add_Farms/Add_Farm';
import Singlefarm from '../pages/Farms/View_Farms/Singlefarm'
import Editfarm from '../pages/Farms/Edit_Farms/Edit_Farm'


import AllCrops from "../pages/Crops/All_Crops/All_Crops";
import Create_Crop from '../pages/Crops/Add_Crops/Add_Crop';
import Single_Crops from '../pages/Crops/View_Crops/View_Crops'
import Edit_crops from '../pages/Crops/Edit_Crops/Edit_crops'

import All_PlantingBassins from "../pages/PlantingBassins/All_PlantingBassins/All_PlantingBassins";
import AddPlantingBassins  from '../pages/PlantingBassins/Add_PlantingBassins/PlantingBassins'
import Singleplanting from '../pages/PlantingBassins/ViewPlanting/ViewPlanting';
import Editplanting from '../pages/PlantingBassins/Edit_plantingBassins/Edit_planting';

import Taskken from '../pages/Taskeen/Taskeen'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

const Layout=()=>{

return (
  <div 
  // style={{display:"flex",justifyContent:"space-around",width:"100%"}}
  >

<Sidebar/>
<Routes>
{/* Areas */}
<Route path="/All_Areas" element={<All_Areaas/>}/>
<Route path="/Create_Areas" element={<Create_Areas/>}/>
<Route path="/Singlearea/:id" element={<Singlearea/>}/>
<Route path="/Editarea/:id" element={<Edit_area/>}/>



<Route path="/All_Farms" element={<AllFarms/>}/>
<Route path="/Create_Farm" element={<Create_Farm/>}/>
<Route path="/Singlefarm/:id" element={<Singlefarm/>}/>
<Route path="/Editfarm/:id" element={<Editfarm/>}/>



<Route path="/All_Crops" element={<AllCrops/>}/>
<Route path="/Create_Crops" element={<Create_Crop/>}/>
<Route path="/Singlecrops/:id" element={<Single_Crops/>}/>
<Route path="/Editcrops/:id" element={<Edit_crops/>}/>




<Route path="/All_PlantingBassins" element={<All_PlantingBassins/>}/>
<Route path="Create_PlantinfBassins" element={<AddPlantingBassins/>}/>
<Route path="/Singleplanting/:id" element={<Singleplanting/>}/>
<Route path="/Editplanting/:id" element={<Editplanting/>}/>



 <Route path="/Create_Eng" element={<Add_Eng/>}/>
 <Route path="/All_Eng" element={<All_eng/>}/>
 <Route path="/Singleeng/:id" element={<View_Eng/>}/>
 <Route path="/EditSingleeng/:id" element={<EditUser/>}/>

 <Route path="/Taskken" element={<Taskken/>}/>




</Routes>
  </div>
           
          
 )
}

export default Layout;