
import { lazy, Suspense } from "react";
const LdDualRing = lazy(()=> import("../../components/ld_dual_ring/ld_dual_ring"));
const Studie = lazy(()=> import("../../components/studie/studie"));
const Header = lazy(()=> import("../../components/header/header"));
const OptionButton = lazy(()=> import("../../components/option_button/option_button"));

import IStudie from "../../../1_models/studie"
import "./view_studie_page.css"
import "../view_page.css";

interface IStudieProps {
  studies: IStudie[]
}

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

export default function ViewStudiesPage(props: IStudieProps) : JSX.Element
{
    return (
    <>
      <Header tittle="Studies" color="" />
      <OptionButton buttons={buttons} />
     
      <div className="container-page" >
      <Suspense fallback={<LdDualRing error={false} />} >
        { props.studies.map(e => <Studie Key={e.Key} Tittle={e.Tittle}
        Url={e.Url} Institution={e.Institution} TittleImg={e.TittleImg}
        MoreEducation={e.MoreEducation} />) }
      </Suspense>
      </div>
      </>
    )
}