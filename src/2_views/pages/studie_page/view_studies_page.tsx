import Studie from "../../components/studie/studie";

import Header from "../../components/header/header";
import OptionButton from "../../components/option_button/option_button";

import IStudie from "../../../1_models/studie"
import "./view_studie_page.css"

interface IStudieProps {
  studies: IStudie[]
}

const buttons = [
  {
    Icon: "add",
    IsLoad:false,
    Href:"/studie/add",
  },
  {
    Icon: "edit_note",
    IsLoad:false,
    Href: "/studie/list",
  },
  {
    Icon: "delete_forever",
    IsLoad:false,
    Href: "/studie/list",
  },
]

export default function ViewStudiesPage(props: IStudieProps) : JSX.Element
{
    return (
    <>
    
      <Header tittle="Studies" color="" />
      <OptionButton buttons={buttons} />
     
      <div className="container-page" >
        { props.studies.map(e => Studie(e) ) }
      </div>
    </>
    )
}