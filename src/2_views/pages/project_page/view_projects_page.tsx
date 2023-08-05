// import Skill from "../../components/skill/skill";
// import Porcentage from "../../components/porcentage/porcentage";
import Header from "../../components/header/header";
import OptionButton from "../../components/option_button/option_button";
// 
 import IProject from "../../../1_models/project"
// import "./view_skills_page.css"

interface IProjectProps {
  projects: IProject[]
}

export default function ViewProjectsPage(props: IProjectProps) : JSX.Element
{
    return (
    <>
    
      <Header tittle="Projects" color="" />
{//    <OptionButton buttons={[{Name:"+/-"},{Name:"+"}]} />
}
     
      <div className="container-page" >
       view projects
      </div>
    </>
    )
}