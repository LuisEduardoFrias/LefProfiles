
import { lazy, Suspense } from "react";
const LdDualRing = lazy(()=> import("../../components/ld_dual_ring/ld_dual_ring"));

import AddData from "../../components/add_data/add_data";
import { useLocation } from 'react-router-dom';
import ISkill from "../../../1_models/skill";
import ControllerSkill from "../../../3_controllers/controller_skill";
import { Item, InputProps, InputType } from "../../components/form/form";

export default function AddSkillsPage() : JSX.Element
{
  
  const location = useLocation();
  const _obj = location.state as ISkill;
  
  const forms: ( InputProps )[] = [];
  
  if(_obj)
  forms.push(
    {
      item : Item.input,
      name: "Key",
      reset: false,
      value: _obj?.Key,
      placeholder: "Key",
      className: "Input_Key",
    }
  );
  
  forms.push(...[
    {
      item : Item.input,
      name: "Name",
      reset: false,
      value: _obj?.Name ?? "",
      placeholder: "Name",
      className: "Input_Name",
    },
    {
      item : Item.input,
      name: "UrlImage",
      reset: false,
      value: _obj?.UrlImage ?? "",
      placeholder: "Url image",
      className: "Input_UrlImage",
    },
    {
      item : Item.input,
      type: InputType.number,
      name: "Experience",
      reset: false,
      placeholder: "0",
      value: _obj?.Experience ?? 0,
      className: "Input_Experience",
    },
  ]);

  const isFildsRequired = (state:any) => {
    const value:boolean=  (!state.Name || !state.UrlImage || !state.Experience );
    return value;
  }
  
  return ( 
    <div className="container-page" >
      <Suspense fallback={<LdDualRing error={false} />} >
      <AddData 
      forms={forms}
      initialState={_obj}
      isFildsRequired={isFildsRequired}
      tittle="Add Skill"
      textSubmit="send"
      post={ _obj ? ControllerSkill.Put : ControllerSkill.Post }
      />
      </Suspense>
    </div>
  )
}