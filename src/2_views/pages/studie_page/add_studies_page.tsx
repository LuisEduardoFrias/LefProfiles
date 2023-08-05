import IStudie from "../../../1_models/studie"

interface IStudieProps {
  studies: IStudie[]
}

export default function AddStudiesPage(props: IStudieProps) : JSX.Element
{
    return (
      <div>
        <input placeholder="nombre" />
        <input placeholder="value" />
        <input placeholder="conten" />
      </div>
    )
}