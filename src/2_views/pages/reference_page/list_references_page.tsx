
import IReference from "../../../1_models/reference"
import BanckButton from "../../components/back_button/back_button";
import ViewData from "../../components/view_data/view_data";
import ControllerReference from "../../../3_controllers/controller_reference";

interface IReferenceProps {
  references: IReference[]
}

export default function ListReferencesPage(props: IReferenceProps) : JSX.Element
{
    return (
      <div style={{padding:"15px 15px"}}>
        <ViewData
        tableName={"Referencias"}
        dataSource={props.references} 
        urlEdit={"/reference/add"}
        // hiddenColumn={[0]}
        custonHeader={["KEY","NOMBRE","NO. CELULAR"]}
//         onEdit={(event:any)=>{new ControllerReference().Add(event?.obj as IReference)}}
        onDelete={(event:any)=>{return ControllerReference.Delete(event?.obj.Key)}}
        >
          <BanckButton icon="arrow_back" />
        </ViewData>
      </div>
    )
}