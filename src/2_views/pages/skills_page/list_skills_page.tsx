
import ISkill from "../../../1_models/skill"

interface ISkillProps {
  skills: ISkill[]
}

export default function ListSkillsPage(props: ISkillProps) : JSX.Element
{
    return (
      <div>
        {props.skills.map(e => <div><label>{e.Name}</label></div> )}
      </div>
    )
}