
import IExperience from "../../../1_models/experience"
import BanckButton from "../../components/back_button/back_button";
import ViewData from "../../components/view_data/view_data";
import ControllerExperience from "../../../3_controllers/controller_experience";

interface IExperienceProps {
  experiences: IExperience[]
}

export default function ListExperiencesPage(props: IExperienceProps) : JSX.Element
{
    return (
      <div style={{padding:"15px 15px"}}>
        <ViewData
        tableName={"Experiences"}
        dataSource={props.experiences} 
        urlEdit={"/experiences/add"}
        hiddenColumn={[0]}
        custonHeader={["KEY","COMPAÑIA","DESCRICCION","POSICION","TAREAS"]}
        onDelete={(event:any)=>{return ControllerExperience.Delete(event?.obj.Key)}}
        >
          <BanckButton icon="arrow_back" />
        </ViewData>
      </div>
    )
}