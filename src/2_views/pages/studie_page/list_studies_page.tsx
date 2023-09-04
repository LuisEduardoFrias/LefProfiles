
import { useState, useEffect, lazy } from "react";
const LdDualRing = lazy(()=> import("../../components/ld_dual_ring/ld_dual_ring"));
import dajt from "../../../4_data_access/get_data_access.tsx";

const BanckButton = lazy(()=> import("../../components/back_button/back_button"));
const ViewData = lazy(()=> import("../../components/view_data/view_data"));
import IStudie from "../../../1_models/studie"
import ControllerStudie from "../../../3_controllers/controller_studie";

export default function ListStudiesPage() : JSX.Element
{
 const [objState, setObj] = useState<IStudie[]>([]);
 
 useEffect(()=>{
  new dajt('Skills').get()
  .then(arrayObj => {
   setObj(arrayObj);
  })
  .catch(error => {
   console.error(error);
  })
 },[]);
 
 const _studie_ = <ViewData
 tableName={"Studies"}
 dataSource={objState} 
 urlEdit={"/studies/add"}
 hiddenColumn={[0]}
 custonHeader={["","NOMBRE","URL","PORCENTAJE"]}
 onDelete={(event:any)=>{return ControllerStudie.Delete(event?.obj.Key)}} >
  <BanckButton icon="arrow_back" />
 </ViewData>

 return (
  <div className="container-page" >
   <div style={{padding:"15px 15px"}}>
    {objState.length > 0 ? 
    ( _studie_ ) : 
    ( <LdDualRing error={false} /> )}
   </div>
  </div>
 )
}