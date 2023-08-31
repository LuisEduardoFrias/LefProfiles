
import { lazy, Suspense } from "react";
const LdDualRing = lazy(()=> import("../../components/ld_dual_ring/ld_dual_ring"));

const Project = lazy(()=> import("../../components/project/project"));

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
        <Suspense fallback={<LdDualRing error={false} />} >
          { props.projects.map(e => <Project Key={e.Key} Tittle={e.Tittle} Description={e.Description} Tegnologys={e.Tegnologys} Repositorys={e.Repositorys} />) }
        </Suspense>
      </div>
    </>
    )
}