import Reference from "../../components/reference/reference";

import Header from "../../components/header/header";
import OptionButton from "../../components/option_button/option_button";

import IReference from "../../../1_models/reference"
import "./view_reference_page.css"

interface IReferenceProps {
  references: IReference[]
}

const buttons = [
  {
    Icon: "add",
    IsLoad:false,
    Href:"/reference/add",
  },
  {
    Icon: "edit_note",
    IsLoad:false,
    Href: "/reference/list",
  },
  {
    Icon: "delete_forever",
    IsLoad:false,
    Href: "/reference/list",
  },
]

export default function ViewReferencesPage(props: IReferenceProps) : JSX.Element
{
    return (
    <>
      <Header tittle="Reference" color="" />
      <OptionButton buttons={buttons} />

      <div className="container-page" >
        {props.references.map(e => Reference(e))}
      </div>
    </>
    )
}