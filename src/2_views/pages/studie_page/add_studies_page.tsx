import IStudie from "../../../1_models/studie"
import BanckButton from "../../components/back_button/back_button";

export default function AddStudiesPage() : JSX.Element
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