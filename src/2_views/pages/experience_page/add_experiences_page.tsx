import IExperience from "../../../1_models/experience"

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
      </div>
    )
}