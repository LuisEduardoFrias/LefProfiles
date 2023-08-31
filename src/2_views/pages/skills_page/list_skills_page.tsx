
import { lazy, Suspense } from "react";
const LdDualRing = lazy(()=> import("../../components/ld_dual_ring/ld_dual_ring"));

import ISkill from "../../../1_models/skill"
import BanckButton from "../../components/back_button/back_button";
import ViewData from "../../components/view_data/view_data";
import ControllerSkill from "../../../3_controllers/controller_skill";

interface ISkillProps {
  skills: ISkill[]
}

export default function ListSkillsPage(props: ISkillProps) : JSX.Element
{
    return (
    <div className="container-page" >
    <Suspense fallback={<LdDualRing error={false} />} >
      <div style={{padding:"15px 15px"}}>
        <ViewData
        tableName={"Skill"}
        dataSource={props.skills} 
        urlEdit={"/skill/add"}
        hiddenColumn={[0]}
        custonHeader={["","NOMBRE","URL","PORCENTAJE"]}
        onDelete={(event:any)=>{return ControllerSkill.Delete(event?.obj.Key)}}
        >
          <BanckButton icon="arrow_back" />
        </ViewData>
      </div>
    </Suspense>
    </div>
    )
}