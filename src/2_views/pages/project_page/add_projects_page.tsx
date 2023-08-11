
import AddData from "../../components/add_data/add_data";

import ControllerProject from "../../../3_controllers/controller_project";
import { Item, InputProps, SelectProps, RadioProps, CheckProps, Direction } from "../../components/form/form";

export default function AddProjectsPage() : JSX.Element
{
  const forms: ( InputProps | SelectProps | RadioProps | CheckProps )[] = [
    {
      item : Item.input,
      name: "Tittle",
      placeholder: "Tittle",
      className: "Input_Tittle",
    },
    {
      item : Item.textarea,
      name: "Description",
      placeholder: "Description",
      className: "Input_Description",
    },
    {
      item : Item.arrayinput,
      tittle: "Tegnologys",
      name: "Tegnologys",
      placeholder: "Tegnology",
      className: "Input_Tegnologys",
    },
    {
      item : Item.arrayinput,
      tittle: "Repositorys",
      name: "Repositorys",
      placeholder: "Repository",
      className: "Input_Repositorys",
    },
  ]
  
  const isFildsRequired = (state:any) => {
    return (!state?.Tittle || !state?.Description || !state.Tegnologys || !state.Repositorys );
  }
  
  return ( 
    <AddData 
      forms={forms}
      isFildsRequired={isFildsRequired}
      tittle="Add project"
      textSubmit="send"
      post={ControllerProject.Post}
    />
  )
}