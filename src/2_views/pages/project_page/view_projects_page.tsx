
import { lazy, useState, useEffect } from "react";
const LdDualRing = lazy(()=> import("../../components/ld_dual_ring/ld_dual_ring"));
import ModalWindow, { ModalType } from "../../components/modal_window/modal_window";
import Dajt from "../../../4_data_access/get_data_access.tsx";

const Project = lazy(()=> import("../../components/project/project"));

import Header from "../../components/header/header";
import OptionButton from "../../components/option_button/option_button";

import IProject from "../../../1_models/project"
import "./view_project_page.css"
import "../view_page.css";

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

export default function ViewProjectsPage() : JSX.Element
{
 const [objState, setObj] = useState<IProject[]>([]);
 const [errorState, setError] = useState(false);
 
 useEffect(()=>{
  (new Dajt('Projects')).get()
  .then((arrayObj: IProject[]) => {
   if(!arrayObj) { setError(true); }
   else { setObj(arrayObj); }
  });
 },[]);
 
 const _project_ = objState.map((e: IProject) => (<Project Key={e.Key} Tittle={e.Tittle} Description={e.Description} Tegnologys={e.Tegnologys} Repositorys={e.Repositorys} />) );
 
 return (
 <>
  <Header tittle="Projects" color="" />
  <OptionButton buttons={buttons} />
  
  <div className="container-page" >
   {objState.length > 0 ? 
   ( _project_ ) : 
   ( <LdDualRing error={errorState} errorMessage={`Not there is connection to the firedatabase.`}  /> )}
  </div>
 </>)
}