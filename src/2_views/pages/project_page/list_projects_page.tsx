
import IProject from "../../../1_models/project"
import BanckButton from "../../components/back_button/back_button";
import ViewData from "../../components/view_data/view_data";
import ControllerProject from "../../../3_controllers/controller_project";

interface IProjectProps {
  projects: IProject[]
}

export default function ListProjectPage(props: IProjectProps) : JSX.Element
{
    return (
      <div style={{padding:"15px 15px"}}>
        <ViewData
        tableName={"Projects"}
        dataSource={props.projects} 
        urlEdit={"/projects/add"}
        hiddenColumn={[0]}
        custonHeader={["KEY","TITULO","DESCRICCION","TEGNOLOGIAS", "REPOSITORIOS"]}
        onDelete={(event:any)=>{return ControllerProject.Delete(event?.obj.Key)}}
        >
          <BanckButton icon="arrow_back" />
        </ViewData>
      </div>
    )
}