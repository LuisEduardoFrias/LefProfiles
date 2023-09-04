
import { lazy } from "react";

import { useLocation } from 'react-router-dom';
import AddData from "../../components/add_data/add_data";
import IReference from "../../../1_models/reference";
import ControllerReference from "../../../3_controllers/controller_reference";
import { Item, InputProps, SelectProps, RadioProps, CheckProps } from "../../components/form/form";

export default function AddReferencePage() : JSX.Element
{
  const location = useLocation();
  const _obj = location.state as IReference;
  
  const forms: ( InputProps | SelectProps | RadioProps | CheckProps )[] = [];
  
  if(_obj)
  forms.push(
    {
      item : Item.input,
      name: "Key",
      value: _obj?.Key,
      reset: false,
      placeholder: "Key",
      className: "Input_Key",
    }
  );
  
  forms.push(...[
    {
      item : Item.input,
      name: "Name",
      value: _obj?.Name ?? "",
      reset: false,
      placeholder: "Name",
      className: "Input_Name",
    },
    {
      item : Item.input,
      name: "PhoneNumber",
      reset: false,
      value: _obj?.PhoneNumber ?? "",
      placeholder: "PhoneNumber",
      className: "Input_PhoneNumber",
    },
  ])
  
  const isFildsRequired = (state:any) => {
   return (!state?.Name || !state?.PhoneNumber);
  }
  
  return ( 
   <div className="container-page" >
    <AddData 
     forms={forms}
     isFildsRequired={isFildsRequired}
     tittle="Add Refecence"
     textSubmit="send"
     post={ _obj ? ControllerReference.Put : ControllerReference.Post } />
   </div>
  )
}