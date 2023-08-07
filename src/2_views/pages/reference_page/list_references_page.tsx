
import IReference from "../../../1_models/reference"
import BanckButton from "../../components/back_button/back_button";

interface IReferenceProps {
  references: IReference[]
}

export default function ListReferencesPage(props: IReferenceProps) : JSX.Element
{
    return (
      <div>
        list reference
        <BanckButton icon="arrow_back" />
      </div>
    )
}