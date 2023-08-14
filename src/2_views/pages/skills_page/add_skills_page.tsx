
import AddData from "../../components/add_data/add_data";
import { useLocation } from 'react-router-dom';
import ISkill from "../../../1_models/skill";
import ControllerSkill from "../../../3_controllers/controller_skill";
import { Item, InputProps, SelectProps, RadioProps, CheckProps, Direction } from "../../components/form/form";

export default function AddSkillsPage() : JSX.Element
{
  
  const location = useLocation();
  const _obj = location.state as ISkill;
  
  const forms: ( InputProps | SelectProps | RadioProps | CheckProps )[] = [];
  
  if(_obj)
  forms.push(
    {
      item : Item.input,
      name: "Key",
      value: _obj?.Key,
      placeholder: "Key",
      className: "Input_Key",
    }
  );
  
  forms.push(...[
    {
      item : Item.input,
      name: "Name",
      value: props?.Name ?? "",
      placeholder: "Name",
      className: "Input_Name",
    },
    {
      item : Item.input,
      name: "UrlImage",
      value: props?.UrlImage ?? "",
      placeholder: "UrlImage",
      className: "Input_UrlImage",
    },
    {
      item : Item.input,
      type: "number",
      name: "Experience",
      value: props?.Experience ?? "",
      placeholder: "Experience",
      className: "Input_Experience",
    },
  ]);

  const isFildsRequired = (state:any) => {
    return (!state?.Name || !state?.UrlImage || !state.Experience );
  }
  
  return ( 
    <AddData 
      forms={forms}
      isFildsRequired={isFildsRequired}
      tittle="Add Skill"
      textSubmit="send"
      post={ControllerSkill.Post}
    />
  )
}