import { useLocation } from 'react-router-dom';
import AddData from "../../components/add_data/add_data";
import IProject from "../../../1_models/project";
import ControllerProject from "../../../3_controllers/controller_project";
import { Item, InputProps, ArrayInputProps, TextareaProps } from "../../components/form/form";

export default function AddProjectsPage() : JSX.Element
{
  
  const location = useLocation();
  const _obj = location.state as IProject;
    
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
      name: "Tittle",
      reset: false,
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
  ]);
  
  const isFildsRequired = (state:any) => {
    return (!state?.Tittle || !state?.Description || !state.Tegnologys || !state.Repositorys );
  }
  
  return ( 
        <div className="container-page" >
    <AddData 
      forms={forms}
      isFildsRequired={isFildsRequired}
      tittle="Add project"
      textSubmit="send"
      post={ _obj ? ControllerProject.Put : ControllerProject.Post }
    />
    </div>
  )
}