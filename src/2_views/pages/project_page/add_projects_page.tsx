import IProject from "../../../1_models/project"

interface IProjectProps {
  projects: IProject[]
}

export default function AddProjectsPage(props: IProjectProps) : JSX.Element
{
    return (
      <div>
        <input placeholder="nombre" />
        <input placeholder="value" />
        <input placeholder="conten" />
      </div>
    )
}