
import IStudie from "../../../1_models/studie"

interface IStudieProps {
  studies: IStudie[]
}

export default function ListStudiesPage(props: IStudieProps) : JSX.Element
{
    return (
      <div>
        list studies
      </div>
    )
}