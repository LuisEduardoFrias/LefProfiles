
import IStudie from "../../../1_models/studie"
import BanckButton from "../../components/back_button/back_button";
import ViewData from "../../components/view_data/view_data";
import ControllerStudie from "../../../3_controllers/controller_studie";

interface IStudieProps {
  studies: IStudie[]
}

export default function ListStudiesPage(props: IStudieProps) : JSX.Element
{
    return (
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
    )
}