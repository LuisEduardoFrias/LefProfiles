import Experience from "../../components/experience/experience";

import Header from "../../components/header/header";
import OptionButton from "../../components/option_button/option_button";

import IExperience from "../../../1_models/experience"
import "./view_experience_page.css"

interface IExperienceProps {
  experiences: IExperience[]
}

const buttons = [
  {
    Icon: "add",
    IsLoad:false,
    Href:"/experience/add",
  },
  {
    Icon: "edit_note",
    IsLoad:true,
    Href: "/experience/list",
  },
  {
    Icon: "delete_forever",
    IsLoad:false,
    Href: "/experience/list",
  },
]

export default function ViewExperiencesPage(props: IExperienceProps) : JSX.Element
{
    return (
    <>
    
      <Header tittle="Experieneces" color="" />
      <OptionButton buttons={buttons} />
     
      <div className="container-page" >
        { props.experiences.map(e => Experience(e)) }
      </div>
    </>
    )
}