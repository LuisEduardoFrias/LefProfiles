
import { useState, useEffect, lazy } from "react";
const LdDualRing = lazy(()=> import("../../components/ld_dual_ring/ld_dual_ring"));
import dajt from "../../../4_data_access/get_data_access.tsx";

import IExperience from "../../../1_models/experience"
import BanckButton from "../../components/back_button/back_button";
import ViewData from "../../components/view_data/view_data";
import ControllerExperience from "../../../3_controllers/controller_experience";

export default function ListExperiencesPage() : JSX.Element
{
 const [objState, setObj] = useState<IExperience[]>([]);
 
 useEffect(()=>{
  new dajt('Skills').get()
  .then(arrayObj => {
   setObj(arrayObj);
  })
  .catch(error => {
   console.error(error);
  })
 },[]);
 
 const _experience_ = <ViewData
 tableName={"Experiences"}
 dataSource={objState} 
 urlEdit={"/experiences/add"}
 hiddenColumn={[0]}
 custonHeader={["KEY","COMPAÑIA","DESCRICCION","POSICION","TAREAS"]}
 onDelete={(event:any)=>{return ControllerExperience.Delete(event?.obj.Key)}} >
   <BanckButton icon="arrow_back" />
 </ViewData>
 
 return (
  <div className="container-page" >
   <div style={{padding:"15px 15px"}}>
    {objState.length > 0 ? 
    ( _experience_ ) : 
    ( <LdDualRing error={false} /> )}
   </div>
  </div>
 )
}