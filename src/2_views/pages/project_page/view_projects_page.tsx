import Project from "../../components/project/project";

import Header from "../../components/header/header";
import OptionButton from "../../components/option_button/option_button";

import IProject from "../../../1_models/project"
import "./view_project_page.css"
import "../view_page.css";

interface IProjectProps {
  projects: IProject[]
}

const buttons = [
  {
    Icon: "add",
    IsLoad:false,
    Href:"/project/add",
  },
  {
    Icon: "edit_note",
    IsLoad:false,
    Href: "/project/list",
  },
  {
    Icon: "delete_forever",
    IsLoad:false,
    Href: "/project/list",
  },
]

export default function ViewProjectsPage(props: IProjectProps) : JSX.Element
{
    return (
    <>
      <Header tittle="Projects" color="" />
      <OptionButton buttons={buttons} />
     
      <div className="container-page" >
        { props.projects.map((e,index) => Project(e,index)) }
      </div>
    </>
    )
}