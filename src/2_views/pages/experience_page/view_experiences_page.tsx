// import Skill from "../../components/skill/skill";
// import Porcentage from "../../components/porcentage/porcentage";
import Header from "../../components/header/header";
import OptionButton from "../../components/option_button/option_button";
// 
 import IExperience from "../../../1_models/experience"
// import "./view_skills_page.css"

interface IExperienceProps {
  experiences: IExperience[]
}

export default function ViewExperiencesPage(props: IExperienceProps) : JSX.Element
{
    return (
    <>
    
      <Header tittle="Experieneces" color="" />
{//    <OptionButton buttons={[{Name:"+/-"},{Name:"+"}]} />
}
     
      <div className="container-page" >
       view experience
      </div>
    </>
    )
}