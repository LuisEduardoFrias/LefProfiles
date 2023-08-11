// import SearchList from "../search_list/searchList";
import React, { ReactElement } from "react";
import LdDualRing from '../ld_dual_ring/ld_dual_ring';
import Input, { IInputProps } from './input/input';
import Select, { Option, ISelectProps } from './select/select';
import Radio, { _Radio, IRadioProps } from './radio/radio';
import Check, { _Check, ICheckProps } from './check/check';
import Textarea, { ITextareaProps } from './textarea/textarea';
import ArrayInput, { IArrayInputProps } from './array_input/array_input';
import ModalWindow, { ModalType } from "../modal_window/modal_window";

import { useState, useEffect } from "react";

import "./form.css";

export const enum Item {
  input,
  select,
  radio,
  check,
  textarea,
  arrayinput,
  
}

export enum Direction {
  row,
  column
}

interface IEraceElement {
  element: Item;
  className: string;
}

// export interface IFormElement {
//   item : Item;
//   tittle?: string;
//   type?: "textarea" | "text" | "date" | undefined;
//   name: string;
//   placeholder?: string;
//   className: string;
//   value?: string | number;
//   readOnly?: boolean;
//   options?: Option[];
//   radios?: _Radio[];
// }

export type SelectProps = Omit<ISelectProps, 'onChange' | 'key' > & {
  item:Item;
};

export type InputProps = Omit<IInputProps, 'onChange' | 'key' > & {
  item: Item;
};

export type RadioProps = Omit<IRadioProps, 'onChange' | 'key' > & {
  item:Item;
};

export type CheckProps = Omit<ICheckProps, 'onChange' | 'key' > & {
  item:Item;
};

export type TextareaProps = Omit<ITextareaProps, 'onChange' | 'key' > & {
  item:Item;
};

export type ArrayInputProps = Omit<IArrayInputProps, 'onChange' | 'key' > & {
  item:Item;
};

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

interface IFormProps {
  initState?: IInitialState;
  forms:  (InputProps | SelectProps | RadioProps) [];
  children: ReactElement;
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
  
  function getFormItems(ele: InputProps | SelectProps | RadioProps | CheckProps , index : number ) : any {
    
    const _eraceClassName = `${ele.item}-${eraceElement.length}`;
    const _className = `${ele.className} ${_eraceClassName}`;
    
    eraceElement.push({element: ele.item, className: _eraceClassName });
    
    if(Item.input === ele.item) {
      const inputEle = ele as InputProps;
      
      return (<Input
        key={index}
        tittle={inputEle.tittle}
        type={inputEle?.type}
        name={inputEle.name}
        value={inputEle?.value}
        direction={inputEle.direction}
        className={_className}
        onChange={handleChange}
        placeholder={inputEle?.placeholder}
        readOnly={inputEle?.readOnly} />)
    }
    else if(Item.select === ele.item) {
      const selectEle = ele as SelectProps;
      
      return (<Select 
        key={index}
        tittle={selectEle.tittle}
        name={selectEle.name}
        className={_className}
        onChange={handleChange}
        options={selectEle.options} />)
    }
    else if(Item.radio === ele.item) {
      const radioEle = ele as RadioProps;
      
      return (<Radio 
        key={index}
        name={radioEle.name}
        checked={radioEle.checked}
        direction={radioEle.direction}
        tittle={radioEle.tittle}
        className={_className}
        onChange={handleChange}
        radios={radioEle.radios} />)
    }
    else if(Item.check === ele.item) {
      const checkEle = ele as CheckProps;
      
      return (<Check 
        key={index}
        name={checkEle.name}
        tittle={checkEle.tittle}
        direction={checkEle.direction}
        className={_className}
        onChange={handleChange}
        checks={checkEle.checks} />)
    }
    else if(Item.textarea === ele.item) {
      const textareaEle = ele as TextareaProps;
      
      return (<Textarea 
        key={index}
        name={textareaEle.name}
        tittle={textareaEle.tittle}
        direction={textareaEle.direction}
        className={_className}
        onChange={handleChange} />)
    }
    else if(Item.arrayinput === ele.item) {
      const arrayinputEle = ele as ArrayInputProps;
      
      return (<ArrayInput 
        key={index}
        name={arrayinputEle.name}
        tittle={arrayinputEle.tittle}
        direction={arrayinputEle.direction}
        placeholder={arrayinputEle?.placeholder}
        className={_className}
        onChange={handleChange} />)
    }
     
      // Item.search_list : <SearchList value={ele.value} name={ele.name} onChange={handleChange} />
  }
  
  const elements : HTMLDivElement[] = [];
  const eraceElement : IEraceElement[] = [];
  
  // Editar las propiedades del hijo
  const ChildrenModify = React.Children.map(props.children, (child) =>
  {
    if (child.type === ModalWindow) {
      return React.cloneElement(child, { state: state });
    }
    return child;
  });
 
  return (
    <div className="container-form" >
      <label id="label-form" >{props.tittle}</label>
      { state.loader && <LdDualRing error={false} />  }
      <form onSubmit={handleSubmit} className="form-auto" >
        { props.forms.map((form: InputProps | SelectProps | RadioProps , index: number ) =>
        getFormItems(form, index) ) }
        
        {ChildrenModify}
        
        <button className="submit" type="submit">{props.textSubmit}</button>
      </form>
    </div>
  )
}