import IReference from "../../../1_models/reference"

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
      </div>
    )
}