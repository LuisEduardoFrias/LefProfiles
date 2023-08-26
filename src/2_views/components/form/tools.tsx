import React, { RefObject, ReactElement } from "react";

// import SearchList from "../search_list/searchList";
import Input from './input/input';
import Select from './select/select';
import Radio, { _Radio } from './radio/radio';
import Check, { _Check } from './check/check';
import Textarea from './textarea/textarea';
import ArrayInput from './array_input/array_input';
import { Item, InputProps, SelectProps, CheckProps, 
RadioProps, TextareaProps, ArrayInputProps } from './form';
import ModalWindow from "../modal_window/modal_window";

export interface IInitialState {
  name: string;
  value: string | number;
  loader: boolean;
}

 function FildsErase(formRef: RefObject<HTMLFormElement>, setResetInput: (state:boolean) => void ) 
 {
    const formElement = formRef.current;
    
    if (formElement) {
      setResetInput(true);
      formElement.reset();
    }
 }
  
export function ChildrenModify(children: ReactElement, state: any ) {
    return React.Children.map(children, (child) => 
    {
      if (child.type === ModalWindow) {
        return React.cloneElement(child, { state: state });
      }
      return child;
    });
  }

export function HandleSubmit(event: any, submit: any, state: any, setState: any, formRef: RefObject<HTMLFormElement>, setResetInput: (state:boolean) => void ) : void
  {
    event.preventDefault()
    submit(state, setState, () => FildsErase(formRef, setResetInput ))
  }
  
export function GetFormItems(ele: InputProps | SelectProps | RadioProps | CheckProps , index : number, state: any, setState: any, resetInput: boolean) : any
  {

    const HandleChange = (event: any) : void => {
      
      const { name, value } = event.target;
      const newState = { ...state };
      
      Reflect.set(newState, name, value);
      
      setState(newState)
    }
    
    const _className = `${ele.className} ${ele.item}-${index}`;
    
    if(Item.input === ele.item)
    {
      const inputEle = ele as InputProps;
      
      return (<Input
      key={index}
      tittle={inputEle.tittle}
      type={inputEle?.type}
      name={inputEle.name}
      reset={resetInput}
      value={inputEle?.value}
      direction={inputEle.direction}
      className={_className}
      onChange={HandleChange}
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
        onChange={HandleChange}
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
        onChange={HandleChange}
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
        onChange={HandleChange}
        checks={checkEle.checks} />)
    }
    else if(Item.textarea === ele.item) {
      const textareaEle = ele as TextareaProps;
      
      return (<Textarea 
        key={index}
        name={textareaEle.name}
        tittle={textareaEle.tittle}
        direction={textareaEle.direction}
        placeholder={textareaEle?.placeholder}
        className={_className}
        onChange={HandleChange} />)
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
        onChange={HandleChange} />)
    }
     
    // Item.search_list : <SearchList value={ele.value} name={ele.name} onChange={HandleChange} />
  }