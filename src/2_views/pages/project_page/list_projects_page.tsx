
import { useState, useEffect, lazy } from "react";
const LdDualRing = lazy(()=> import("../../components/ld_dual_ring/ld_dual_ring"));
import dajt from "../../../4_data_access/get_data_access.tsx";

import IProject from "../../../1_models/project"
import BanckButton from "../../components/back_button/back_button";
import ViewData from "../../components/view_data/view_data";
import ControllerProject from "../../../3_controllers/controller_project";

export default function ListProjectPage() : JSX.Element
{
 const [objState, setObj] = useState<IProject[]>([]);
 
 useEffect(()=>{
  new dajt('Skills').get()
  .then(arrayObj => {
   setObj(arrayObj);
  })
  .catch(error => {
   console.error(error);
  })
 },[]);
 
 const _project_ = <ViewData
 tableName={"Projects"}
 dataSource={objState} 
 urlEdit={"/projects/add"}
 hiddenColumn={[0]}
 custonHeader={["KEY","TITULO","DESCRICCION","TEGNOLOGIAS", "REPOSITORIOS"]}
 onDelete={(event:any)=>{return ControllerProject.Delete(event?.obj.Key)}} >
   <BanckButton icon="arrow_back" />
 </ViewData>
 
 return (
  <div className="container-page" >
   <div style={{padding:"15px 15px"}}>
    {objState.length > 0 ? 
    ( _project_ ) : 
    ( <LdDualRing error={false} /> )}
   </div>
  </div>
 )
}