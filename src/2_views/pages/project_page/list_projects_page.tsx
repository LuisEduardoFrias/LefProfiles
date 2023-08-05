
import IProject from "../../../1_models/project"

interface IProjectProps {
  projects: IProject[]
}

export default function ListProjectPage(props: IProjectProps) : JSX.Element
{
    return (
      <div>
        list project
      </div>
    )
}