// import Skill from "../../components/skill/skill";
// import Porcentage from "../../components/porcentage/porcentage";
import Header from "../../components/header/header";
import OptionButton from "../../components/option_button/option_button";
// 
 import IStudie from "../../../1_models/studie"
// import "./view_skills_page.css"

interface IStudieProps {
  studies: IStudie[]
}

export default function ViewStudiesPage(props: IStudieProps) : JSX.Element
{
    return (
    <>
    
      <Header tittle="Studies" color="" />
{//    <OptionButton buttons={[{Name:"+/-"},{Name:"+"}]} />
}
     
      <div className="container-page" >
      view studie
      </div>
    </>
    )
}