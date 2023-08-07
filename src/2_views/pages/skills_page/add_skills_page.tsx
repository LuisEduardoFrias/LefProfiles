import ISkill from "../../../1_models/skill"
import BanckButton from "../../components/back_button/back_button";

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
        <BanckButton icon="arrow_back" />
      </div>
    )
}