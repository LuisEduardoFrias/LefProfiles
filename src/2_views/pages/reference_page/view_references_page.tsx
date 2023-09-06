
import { lazy, useState, useEffect } from "react";
const LdDualRing = lazy(()=> import("../../components/ld_dual_ring/ld_dual_ring"));
import ModalWindow, { ModalType } from "../../components/modal_window/modal_window";
import Dajt from "../../../4_data_access/get_data_access.tsx";

import Reference from "../../components/reference/reference";

import Header from "../../components/header/header";
import OptionButton from "../../components/option_button/option_button";

import IReference from "../../../1_models/reference"
import "./view_reference_page.css"
import "../view_page.css";

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

export default function ViewReferencesPage() : JSX.Element
{
 const [objState, setObj] = useState<IReference[]>([]);
 const [errorState, setError] = useState(false);
 
 useEffect(()=>{
  (new Dajt('References')).get()
  .then((arrayObj: IReference[]) => {
   if(!arrayObj) { setError(true); }
   else { setObj(arrayObj); }
  });
 },[]);
 
 const _references_ = objState.map((e: IReference,index) => Reference(e, index));
 
 return (
 <>
  <Header tittle="Reference" color="" />
  <OptionButton buttons={buttons} />

  <div className="container-page" >
   {objState.length > 0 ? 
   ( _references_ ) : 
   ( <LdDualRing error={errorState} errorMessage={`Not there is connection to the firedatabase.`}  /> )}
  </div>
 </>)
}