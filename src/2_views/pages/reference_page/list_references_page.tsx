
import { useState, useEffect, lazy } from "react";
const LdDualRing = lazy(()=> import("../../components/ld_dual_ring/ld_dual_ring"));
import dajt from "../../../4_data_access/get_data_access.tsx";

import IReference from "../../../1_models/reference"
import BanckButton from "../../components/back_button/back_button";
import ViewData from "../../components/view_data/view_data";
import ControllerReference from "../../../3_controllers/controller_reference";

export default function ListReferencesPage() : JSX.Element
{
 const [objState, setObj] = useState<IReference[]>([]);
 
 useEffect(()=>{
  new dajt('Skills').get()
  .then(arrayObj => {
   setObj(arrayObj);
  })
  .catch(error => {
   console.error(error);
  })
 },[]);
 
 const _reference_ = <ViewData
 tableName={"Referencias"}
 dataSource={objState} 
 urlEdit={"/reference/add"}
 // hiddenColumn={[0]}
 custonHeader={["KEY","NOMBRE","NO. CELULAR"]}
 //onEdit={(event:any)=>{new ControllerReference().Add(event?.obj as IReference)}}
 onDelete={(event:any)=>{return ControllerReference.Delete(event?.obj.Key)}} >
  <BanckButton icon="arrow_back" />
 </ViewData>

 return (
  <div className="container-page" >
   <div style={{padding:"15px 15px"}}>
    {objState.length > 0 ? 
    ( _reference_ ) : 
    ( <LdDualRing error={false} /> )}
   </div>
  </div>
 )
}