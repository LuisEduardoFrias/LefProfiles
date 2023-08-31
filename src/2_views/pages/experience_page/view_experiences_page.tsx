
import { lazy, Suspense } from "react";
const LdDualRing = lazy(()=> import("../../components/ld_dual_ring/ld_dual_ring"));

const Experience = lazy(()=> import("../../components/experience/experience"));

import Header from "../../components/header/header";
import OptionButton from "../../components/option_button/option_button";

import IExperience from "../../../1_models/experience";
import "./view_experience_page.css";
import "../view_page.css";

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
    IsLoad:false,
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
        <Suspense fallback={<LdDualRing error={false} />} >
          { props.experiences.map(e => <Experience Key={e.Key}
          Company={e.Company} Description={e.Description} Position={e.Position} Tacks={e.Tacks}
          /> )}
        </Suspense>
      </div>
    </>
    )
}