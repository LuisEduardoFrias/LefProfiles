import IExperience from "../../../1_models/experience"
import BanckButton from "../../components/back_button/back_button";

interface IExperienceProps {
  experiences: IExperience[]
}

export default function AddExperiencePage(props: IExperienceProps) : JSX.Element
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