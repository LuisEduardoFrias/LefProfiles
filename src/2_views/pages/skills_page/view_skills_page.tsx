import Skill from "../../components/skill/skill";
import Porcentage from "../../components/porcentage/porcentage";
import Header from "../../components/header/header";
import OptionButton from "../../components/option_button/option_button";

import ISkill from "../../../1_models/skill"
import "./view_skills_page.css"

interface ISkillProps {
  skills: ISkill[]
}

const buttons = [
  {
//     Name:"add",
    Icon: "add",
    IsLoad:false,
    Href:"string",
  },
  {
//     Name:"edit",
    Icon: "edit_note",
    IsLoad:true,
    Href:"string",
  },
  {
//     Name:"delete",
    Icon: "delete_forever",
    IsLoad:false,
    Href:"string",
  },
  ]
  
export default function ViewSkillsPage(props: ISkillProps) : JSX.Element
{
    return (
    <>
    
      <Header tittle="Skills" color="" />
      <OptionButton buttons={buttons} />

     
      <div className="container-page" >
      
        <div className="container-card" >
          {props.skills.map(e => Skill(e))}
        </div>
        
        <br />
        <label>Levers</label>
        
        <div className="container-range" >
          {props.skills.map(e => <Porcentage value={e.Experience} direction="row" tittle={e.Name} />)}
        </div>
        
      </div>
    </>
    )
}