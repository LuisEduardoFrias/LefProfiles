import IProject from "../../../1_models/project"
import BanckButton from "../../components/back_button/back_button";

interface IProjectProps {
  projects: IProject[]
}

export default function AddProjectsPage() : JSX.Element
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