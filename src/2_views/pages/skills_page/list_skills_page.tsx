
import ISkill from "../../../1_models/skill"
import BanckButton from "../../components/back_button/back_button";

interface ISkillProps {
  skills: ISkill[]
}

export default function ListSkillsPage(props: ISkillProps) : JSX.Element
{
    return (
      <div>
        {props.skills.map(e => <div><label>{e.Name}</label></div> )}
        <BanckButton icon="arrow_back" />
      </div>
    )
}