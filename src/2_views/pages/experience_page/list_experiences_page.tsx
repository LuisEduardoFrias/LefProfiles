
import IExperience from "../../../1_models/experience"
import BanckButton from "../../components/back_button/back_button";

interface IExperienceProps {
  experiences: IExperience[]
}

export default function ListExperiencesPage(props: IExperienceProps) : JSX.Element
{
    return (
      <div>
        list experienece
        <BanckButton icon="arrow_back" />
      </div>
    )
}