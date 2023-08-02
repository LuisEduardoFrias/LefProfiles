import ISkill from "../../../1_models/skill"

interface ISkillProps {
  skills: ISkill[]
}

export default function AddSkillsPage(props: ISkillProps) : JSX.Element
{
    return (
      <div>
        <input placeholder="nombre" />
        <input placeholder="value" />
        <input placeholder="conten" />
      </div>
    )
}