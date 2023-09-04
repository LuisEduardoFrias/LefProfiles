
import { lazy, useState, useEffect } from "react";
const LdDualRing = lazy(()=> import("../../components/ld_dual_ring/ld_dual_ring"));
import ModalWindow, { ModalType } from "../../components/modal_window/modal_window";
import dajt from "../../../4_data_access/get_data_access.tsx";

const Studie = lazy(()=> import("../../components/studie/studie"));
const Header = lazy(()=> import("../../components/header/header"));
const OptionButton = lazy(()=> import("../../components/option_button/option_button"));

import IStudie from "../../../1_models/studie"
import "./view_studie_page.css"
import "../view_page.css";

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

export default function ViewStudiesPage() : JSX.Element
{
 const [objState, setObj] = useState<IStudie[]>([]);
 const [errorState, setError] = useState(false);
 
 useEffect(()=>{
  (new dajt('Studies')).get()
  .then(arrayObj => {
   if(!arrayObj) { setError(true); }
   else { setObj(arrayObj); }
  });
 },[]);
 
 const _studis_ = objState.map(e => <Studie Key={e.Key} Tittle={e.Tittle} Url={e.Url} Institution={e.Institution} TittleImg={e.TittleImg} MoreEducation={e.MoreEducation} />)

 return (
 <>
  <Header tittle="Studies" color="" />
  <OptionButton buttons={buttons} />
  
  <div className="container-page" >
   {objState.length > 0 ? 
   ( _studis_ ) : 
   ( <LdDualRing error={errorState} errorMessage={`Not there is connection to the firedatabase.`}  /> )}
  </div>
 </>)
}