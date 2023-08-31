
import { lazy, Suspense } from "react";
const LdDualRing = lazy(()=> import("../../components/ld_dual_ring/ld_dual_ring"));
import IStudie from "../../../1_models/studie"
import BanckButton from "../../components/back_button/back_button";

export default function AddStudiesPage() : JSX.Element
{
    return (
        <div className="container-page" >
    <Suspense fallback={<LdDualRing error={false} />} >
      <div>
        <input placeholder="nombre" />
        <input placeholder="value" />
        <input placeholder="conten" />
        <BanckButton icon="arrow_back" />
      </div>
    </Suspense>
    </div>
    )
}