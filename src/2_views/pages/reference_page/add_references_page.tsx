
import AddData from "../../components/add_data/add_data";

import ControllerReference from "../../../3_controllers/controller_reference";
import { Item, InputProps, SelectProps, RadioProps, CheckProps } from "../../components/form/form";

export default function AddReferencePage() : JSX.Element
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
      name: "PhoneNumber",
      placeholder: "PhoneNumber",
      className: "Input_PhoneNumber",
    },
  ]
  
  const isFildsRequired = (state:any) => {
    return (!state?.Name || !state?.PhoneNumber);
  }
  
  return ( 
    <AddData 
      forms={forms}
      isFildsRequired={isFildsRequired}
      tittle="Add Refecence"
      textSubmit="send"
      post={ControllerReference.Post}
    />
  )
}