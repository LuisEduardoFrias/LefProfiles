
import IStudie from "../../../1_models/studie"
import BanckButton from "../../components/back_button/back_button";

interface IStudieProps {
  studies: IStudie[]
}

export default function ListStudiesPage(props: IStudieProps) : JSX.Element
{
    return (
      <div>
        list studies
        <BanckButton icon="arrow_back" />
      </div>
    )
}