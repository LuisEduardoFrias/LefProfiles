// import SearchList from "../search_list/searchList";
import LdDualRing from '../ld_dual_ring/ld_dual_ring';
import Input, { IInputProps } from './input/input';
import Select, { Option, ISelectProps } from './select/select';
import Radio, { _Radio, IRadioProps } from './radio/radio';

import { useState, useEffect } from "react";

import "./form.css";

export const enum Item {
  input,
  select,
  radio,
}

interface IEraceElement {
  element: Item;
  className: string;
}

export interface IFormElement {
  item : Item;
  tittle?: string;
  type?: "textarea" | "text" | "date" | undefined;
  name: string;
  placeholder?: string;
  className: string;
  value?: string | number;
  readOnly?: boolean;
  options?: Option[];
  radios?: _Radio[];
}

interface IInitialState {
  name: string;
  value: string | number;
  loader: boolean;
}

export interface IState {
  loader: boolean; 
  name?: string; 
  value?: string | number; 
}

export type SelectProps = {
  item:Item;
  
} & ISelectProps;

export type InputProps = {
  item:Item;
} & IInputProps;

export type RadioProps = {
  item:Item;
} & IRadioProps;

interface IFormProps {
  initState?: IInitialState;
  forms: (SelectProps | InputProps | RadioProps)[];
  tittle: string;
  textSubmit: string;
  submit: (state: IState, setState: any ) => void;
}

export default function Form(props: IFormProps)
{

  const [ state, setState ] = useState({...props?.initState, loader: false});
  
  //erace element value of form
  useEffect(() => {
    if(Reflect.ownKeys(state).length === 1 &&  Reflect.ownKeys(state)[0] === "loader") {
    
      // eraceElement.forEach((e: IEraceElement) => {
//         try {
//         if(e.element === Item.input) {
//           const element : any = document.querySelector(`.${e.className}`);
//           element.value = "";
//         }
//         else if(e.element === Item.select) {
//           const element : any = document.querySelector(`.${e.className}`);
//           element.selectedIndex = 0;
//         }
//         else if(e.element === Item.radio) {
//           const element : any = document.querySelectorAll(`.${e.className}`);
//           
//           element.forEach((ele: any)=> ele.checked = false)
//         }
//         }catch (err) { alert(`error: ${err}`) }
//       })
      }
  },[state])
  
  const handleChange = (event: any) : void => {
    const { name, value } = event.target;
    
    const newState = state;
    Reflect.set(newState, name, value);
    setState(newState)
  }
 
  const handleSubmit = (event: any) : void => {
    event.preventDefault()
    setState({...state, loader: true});
    props.submit(state, setState)
  }
  
  function getFormItems(ele: (SelectProps | InputProps | RadioProps)[], index : number ) : any {
    
    const _eraceClassName = `${ele.item}-${eraceElement.length}`;
    const _className = `${ele.className} ${_eraceClassName}`;
    
    eraceElement.push({element: ele.item, className: _eraceClassName });
    
    if(Item.input === ele.item) {
      return (<Input
        key={index}
        tittle={ele.tittle}
        type={ele?.type}
        name={ele.name}
        value={ele?.value}
        className={_className}
        onChange={handleChange}
        placeholder={ele?.placeholder}
        readOnly={ele?.readOnly} />)
    }
    else if(Item.select === ele.item) {
      return (<Select 
        key={index}
        tittle={ele.tittle}
        name={ele.name}
        className={_className}
        onChange={handleChange}
        options={ele.options} />)
    }
    else if(Item.radio === ele.item) {
      return (<Radio 
        key={index}
        tittle={ele.tittle}
        className={_className}
        onChange={handleChange}
        radios={ele.radios} />)
    }
     
      // Item.search_list : <SearchList value={ele.value} name={ele.name} onChange={handleChange} />
  }
  
  const elements : HTMLDivElement[] = [];
  const eraceElement : IEraceElement[] = [];
  
  return (
    <div style={{width:"100%", height:"100%"}}>
      <h1>{props.tittle}</h1>
      { state.loader && <LdDualRing error={false} />  }
      <form onSubmit={handleSubmit} className="form-auto" >
        { props.forms.map((form: ISelectProps[] | IRadioProps[] | IInputProps[], index: number ) =>
        getFormItems(form, index) ) }
        <button className="submit" type="submit">{props.textSubmit}</button>
      </form>
    </div>
  )
}