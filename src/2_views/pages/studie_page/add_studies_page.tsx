import IStudie from "../../../1_models/studie"
import BanckButton from "../../components/back_button/back_button";

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
        <BanckButton icon="arrow_back" />
      </div>
    )
}