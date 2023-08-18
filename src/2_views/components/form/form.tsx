
import React, { ReactElement, RefObject, useRef, useState, useEffect } from "react";

import LdDualRing from '../ld_dual_ring/ld_dual_ring';

import { IInitialState, HandleSubmit, GetFormItems, ChildrenModify } from './tools';
import { IInputProps } from './input/input';
import { ISelectProps } from './select/select';
import { IRadioProps } from './radio/radio';
import { ICheckProps } from './check/check';
import { ITextareaProps } from './textarea/textarea';
import { IArrayInputProps } from './array_input/array_input';

import Input from './input/input';
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
  element: InputProps | SelectProps | RadioProps | CheckProps;
  className: string;
}

export enum InputType {
  text = "text",
  color = "color",
  date = "date",
  datetimeLocal = "datetime local",
  email = "email",
  file = "file", 
  hidden = "hidden",
  image = "image",
  mont = "mont",
  number = "number",
  password = "password",
  range = "range",
  tel = "tel",
  url = "url",
  week = "week",
}

export type SelectProps = Omit<ISelectProps, 'onChange' | 'key' > & {
  item:Item;
};

export type InputProps = Omit<IInputProps, 'onChange' | 'key' | 'inputRef' | 'addInputRef' > & {
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

export type IState = IInitialState;

interface IFormProps {
  initState?: IInitialState;
  forms:  (InputProps | SelectProps | RadioProps) [];
  children: ReactElement;
  tittle: string;
  textSubmit: string;
  submit: (state: IInitialState, setState: any, fildsErase: () => void ) => void;
}

export default function Form(props: IFormProps)
{
  const [ formState, setFormState ] = useState({...props?.initState, loader: false});
  
  const [ resetInput, setResetInput ] = useState(false);
 
  const formRef = useRef(null);
  
  return (
    <div className="container-form" >
      <label id="label-form" >{props.tittle}</label>
      
      { formState.loader && <LdDualRing error={false} />  }
      
      <form ref={formRef} onSubmit={(event:any)=> HandleSubmit(event,
      props.submit, formState, setFormState, formRef, setResetInput )} className="form-auto" >
        <>
          { 
            props.forms.map((form: InputProps | SelectProps | RadioProps ,
            index: number ) => GetFormItems(form, index, formState, setFormState, resetInput) )
          }
          {ChildrenModify(props.children, formState)}
        </>
        <button className="submit" type="submit">
          {props.textSubmit}
        </button>
      </form>
    </div>
  )
}