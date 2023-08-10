
import AddData from "../../components/add_data/add_data";

import ControllerExperience from "../../../3_controllers/controller_experience";
import { Item, InputProps, SelectProps, RadioProps, CheckProps, Direction } from "../../components/form/form";

export default function AddExperiencePage() : JSX.Element
{
  const forms: ( InputProps | SelectProps | RadioProps | CheckProps )[] = [
    {
      item : Item.input,
      name: "Company",
      placeholder: "Company",
      className: "Input_Company",
    },
    {
      item : Item.textarea,
      name: "Description",
      placeholder: "Description",
      className: "Input_Description",
    },
    {
      item : Item.input,
      name: "Position",
      placeholder: "Position",
      className: "Input_Position",
    },
    {
      item : Item.arrayinput,
      tittle: "Tacks",
      name: "Tacks",
      placeholder: "Tacks",
      className: "Input_Tacks",
    },
  ]
  
  const isFildsRequired = (state:any) => {
    return (!state?.Company || !state?.Description || !state.Position);
  }
  
  return ( 
    <AddData 
      forms={forms}
      isFildsRequired={isFildsRequired}
      tittle="Add Experience"
      textSubmit="send"
      post={ControllerExperience.Post}
    />
  )
}