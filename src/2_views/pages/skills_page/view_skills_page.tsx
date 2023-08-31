
import { lazy, Suspense } from "react";
const LdDualRing = lazy(()=> import("../../components/ld_dual_ring/ld_dual_ring"));

const Skill = lazy(()=> import("../../components/skill/skill"));
const Porcentage = lazy(()=> import( "../../components/porcentage/porcentage"));
const Header = lazy(()=> import("../../components/header/header"));
const OptionButton = lazy(()=> import("../../components/option_button/option_button"));

import ISkill from "../../../1_models/skill"
import "./view_skills_page.css"
import "../view_page.css";

interface ISkillProps {
  skills: ISkill[]
}

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
  
export default function ViewSkillsPage(props: ISkillProps) : JSX.Element
{
    return (
    	<>
        <Suspense fallback={<LdDualRing error={false} />} >
          <Header tittle="Skills" color="" />
          <OptionButton buttons={buttons} />
        </Suspense>
        
        <div className="container-page" >
      
          <div className="container-card" >
            <Suspense fallback={<LdDualRing error={false} />} >
              {props.skills.map(e => <Skill Key={e.Key} Name={e.Name}
              UrlImage={e.UrlImage} Experience={e.Experience} />)}
            </Suspense>
          </div>
        
          <br />
          <label>Levers</label>
         
          <div className="container-range" >
            <Suspense fallback={<LdDualRing error={false} />} >
              {props.skills?.map((e) => <Porcentage index={Number(e.Key)} value={e.Experience} direction="row" tittle={e.Name} />)}
            </Suspense>
          </div>
        </div>
      </>
    )
}