
import { lazy, useState, useEffect } from "react";
const LdDualRing = lazy(()=> import("../../components/ld_dual_ring/ld_dual_ring"));
import ModalWindow, { ModalType } from "../../components/modal_window/modal_window";
import Dajt from "../../../4_data_access/get_data_access.tsx";

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

export default function ViewExperiencesPage() : JSX.Element
{
 const [objState, setObj] = useState<IExperience[]>([]);
 const [errorState, setError] = useState(false);
 
 useEffect(()=>{
  (new Dajt('Experiences')).get()
  .then((arrayObj: IExperience[]) => {
   if(!arrayObj) { setError(true); }
   else { setObj(arrayObj); }
  });
 },[]);
 
 const _experience_ = objState.map((e: IExperience)=> <Experience Key={e.Key} Company={e.Company} Description={e.Description} Position={e.Position} Tacks={e.Tacks} /> );
  
 return (
 <>
 <Header tittle="Experieneces" color="" />
 <OptionButton buttons={buttons} />
 
 <div className="container-page" >
   {objState.length > 0 ? 
   ( _experience_ ) : 
   ( <LdDualRing error={errorState} errorMessage={`Not there is connection to the firedatabase.`}  /> )}
 </div>
 </>)
}