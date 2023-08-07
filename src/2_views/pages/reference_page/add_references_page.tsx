import IReference from "../../../1_models/reference"
import BanckButton from "../../components/back_button/back_button";

interface IReferenceProps {
  references: IReference[]
}

export default function AddReferencePage(props: IReferenceProps) : JSX.Element
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