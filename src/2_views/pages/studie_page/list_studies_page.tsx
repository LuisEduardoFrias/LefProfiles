
import { lazy, Suspense } from "react";
const LdDualRing = lazy(()=> import("../../components/ld_dual_ring/ld_dual_ring"));
const BanckButton = lazy(()=> import("../../components/back_button/back_button"));
const ViewData = lazy(()=> import("../../components/view_data/view_data"));

import IStudie from "../../../1_models/studie"
import ControllerStudie from "../../../3_controllers/controller_studie";

interface IStudieProps {
  studies: IStudie[]
}

export default function ListStudiesPage(props: IStudieProps) : JSX.Element
{
    return (
    <div className="container-page" >
    <Suspense fallback={<LdDualRing error={false} />} >
      <div style={{padding:"15px 15px"}}>
        <ViewData
        tableName={"Studies"}
        dataSource={props.studies} 
        urlEdit={"/studies/add"}
        hiddenColumn={[0]}
        custonHeader={["","NOMBRE","URL","PORCENTAJE"]}
        onDelete={(event:any)=>{return ControllerStudie.Delete(event?.obj.Key)}}
        >
          <BanckButton icon="arrow_back" />
        </ViewData>
      </div>
    </Suspense>
    </div>
    )
}