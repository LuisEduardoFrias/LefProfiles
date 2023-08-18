import { useLocation } from 'react-router-dom';
import AddData from "../../components/add_data/add_data";
import IExperience from "../../../1_models/experience";
import ControllerExperience from "../../../3_controllers/controller_experience";
import { Item, InputProps, ArrayInputProps, TextareaProps, Direction } from "../../components/form/form";

export default function AddExperiencePage() : JSX.Element
{
  const location = useLocation();
  const _obj = location.state as IExperience;
    
  const forms: ( InputProps | ArrayInputProps | TextareaProps )[] = [];
  
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
      name: "Company",
      reset: false,
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
      reset: false,
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
  ]);
  
  const isFildsRequired = (state:any) => {
    return (!state?.Company || !state?.Description || !state.Position || !state.Tacks );
  }
  
  return ( 
    <AddData 
      forms={forms}
      isFildsRequired={isFildsRequired}
      tittle="Add Experience"
      textSubmit="send"
      post={ _obj ? ControllerExperience.Put : ControllerExperience.Post }
    />
  )
}