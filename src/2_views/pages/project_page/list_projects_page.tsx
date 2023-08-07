
import IProject from "../../../1_models/project"
import BanckButton from "../../components/back_button/back_button";

interface IProjectProps {
  projects: IProject[]
}

export default function ListProjectPage(props: IProjectProps) : JSX.Element
{
    return (
      <div>
        list project
        <BanckButton icon="arrow_back" />
      </div>
    )
}