import AddData from "../../components/add_data/add_data";

import ControllerSkill from "../../../3_controllers/controller_skill";
import { Item, InputProps, SelectProps, RadioProps, CheckProps, Direction } from "../../components/form/form";

export default function AddSkillsPage() : JSX.Element
{
  
  const forms: ( InputProps | SelectProps | RadioProps | CheckProps )[] = [
    {
      item : Item.input,
      name: "Name",
      placeholder: "Name",
      className: "Input_Name",
    },
    {
      item : Item.input,
      name: "UrlImage",
      placeholder: "UrlImage",
      className: "Input_UrlImage",
    },
    {
      item : Item.input,
      type: "number",
      name: "Experience",
      placeholder: "Experience",
      className: "Input_Experience",
    },
  ]

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