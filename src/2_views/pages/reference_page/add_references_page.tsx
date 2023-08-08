import IReference from "../../../1_models/reference"
import BanckButton from "../../components/back_button/back_button";
import Form, { Item, IFormElement, IState} from "../../components/form/form";
import { IInputProps } from "../../components/form/input/input";
import { ISelectProps } from "../../components/form/select/select";
import { IRadioProps } from "../../components/form/radio/radio";

interface IReferenceProps {
  references: IReference[]
}

export default function AddReferencePage(props: IReferenceProps) : JSX.Element
{
  
  const forms: (ISelectProps | IRadioProps | IInputProps)[] = [
    {
      item : Item.input,
      name: "Name",
      placeholder: "Name",
      className: "Input_Name",
    },
    {
      item : Item.input,
      name: "PhoneNumbee",
      placeholder: "PhoneNumber",
      className: "Input_PhoneNumber",
    },
    {
      item : Item.radio,
      name: "PhoneNumbee",
      className: "Input_PhoneNumber",
    }
  ]
  
  function submit(state: IState, setState: any ) {
    alert(JSON.stringify(state))
  };
  
    return (
      <Form // initState={}
        forms={forms}
        tittle="References"
        textSubmit="send"
        submit={submit} />
    )
}