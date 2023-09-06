
import { lazy, useState, useEffect } from "react";
const LdDualRing = lazy(()=> import("../../components/ld_dual_ring/ld_dual_ring"));
import ModalWindow, { ModalType } from "../../components/modal_window/modal_window";
import Dajt from "../../../4_data_access/get_data_access.tsx";

const Skill = lazy(()=> import("../../components/skill/skill"));
const Porcentage = lazy(()=> import( "../../components/porcentage/porcentage"));
const Header = lazy(()=> import("../../components/header/header"));
const OptionButton = lazy(()=> import("../../components/option_button/option_button"));

import ISkill from "../../../1_models/skill";
import "./view_skills_page.css";
import "../view_page.css";

const buttons = [
  {
    Icon: "add",
    IsLoad:false,
    Href:"/skill/add",
  },
  {
    Icon: "edit_note",
    IsLoad:false,
    Href: "/skill/list",
  },
  {
    Icon: "delete_forever",
    IsLoad:false,
    Href: "/skill/list",
  },
]

export default function ViewSkillsPage() : JSX.Element {
 const [skillState, setSkill] = useState<ISkill[]>([]);
 const [errorState, setError] = useState(false);
 
 useEffect(()=>{
  (new Dajt('Skills')).get()
  .then((arrayObj: ISkill[]) => {
   if(!arrayObj) { setError(true); }
   else { setSkill(arrayObj); }
  });
 },[]);
 
 const _Skills_ = skillState.map((e: ISkill) => <Skill Key={e.Key} Name={e.Name} UrlImage={e.UrlImage} Experience={e.Experience} /> );
 
 const _Porcentage_ = skillState.map((e: ISkill) => <Porcentage index={Number(e.Key)} value={e.Experience} direction="row" tittle={e.Name} />);
 
 return (
 <>
  <Header tittle="Skills" color="" />
  <OptionButton buttons={buttons} />
  
  <ModalWindow show={errorState} type={ModalType.warning} tittle={"Warning"} dialog={`Not there is connection to the firedatabase.`} 
  onClick3={(_)=>{}} />
  
  <div className="container-page" >
   <div className="container-card" >
     {skillState.length > 0 ? 
     ( _Skills_ ) : ( <LdDualRing error={errorState} errorMessage={`Not there is connection to the firedatabase.`}  /> )}
   </div>
   <br />
   {skillState.length > 0 ? 
   (<>
    <label>Levers</label>
    <div className="container-range" >
     { _Porcentage_ } 
    </div>
   </>)
   :  null }
  </div>
 </>)
}