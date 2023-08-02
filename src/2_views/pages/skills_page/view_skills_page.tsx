import Skill from "../../components/skill/skill";
import ISkill from "../../../1_models/skill"

interface ISkillProps {
  skills: ISkill[]
}

export default function ViewSkillsPage(props: ISkillProps) : JSX.Element
{
    return (
      <div>
        {props.skills.map(e => Skill(e))}
      </div>
    )
}