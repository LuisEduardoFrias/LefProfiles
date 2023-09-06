
import { useState, useEffect, lazy } from "react";
const LdDualRing = lazy(()=> import("../../components/ld_dual_ring/ld_dual_ring"));
import Dajt from "../../../4_data_access/get_data_access.tsx";

import ISkill from "../../../1_models/skill";
import BanckButton from "../../components/back_button/back_button";
import ViewData from "../../components/view_data/view_data";
import ControllerSkill from "../../../3_controllers/controller_skill";

export default function ListSkillsPage() : JSX.Element
{
 const [skillState, setSkill] = useState<ISkill[]>([]);
 
 useEffect(()=>{
  new Dajt('Skills').get()
  .then((arrayObj: ISkill[]) => {
   setSkill(arrayObj);
  })
  .catch((error: any) => {
   console.error(error);
  })
 },[]);
 
 const _viewdata_ = <ViewData 
 tableName={"Skill"}
 dataSource={skillState}
 urlEdit={"/skill/add"}
 hiddenColumn={[1]}
 custonHeader={["PORCENTAJE","","NOMBRE","URL"]}
 onDelete={(event:any)=>{ 
  return ControllerSkill.Delete(event?.obj.Key)}
 }>
  <BanckButton icon="arrow_back" />
 </ViewData>
 
 return (
  <div className="container-page" >
   <div style={{padding:"15px 15px"}}>
    {skillState.length > 0 ? 
    ( _viewdata_ ) : 
    ( <LdDualRing error={false} /> )}
   </div>
  </div>
 )
}