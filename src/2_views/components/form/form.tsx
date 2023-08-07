// import SearchList from "../search_list/searchList";
import LdDualRing from './ld_dual_ring/ldDualRing';

import { useState, useEffect } from "react";

interface EraceElement {
  element: string;
  className: string;
}

const enum Item {
  input,
  select,
  radio,
}

interface FormElemet {
  item : Item;
  title: string;
  type: string;
  name: string;
  placeholder: string;
  className: string;
  value: string | number;
  readOnly: boolean;
}

interface InitialState {
  name: string;
  value: string | number;
  loader: boolean;
}

interface FormProps {
  initState: InitialState;
  forms: FormElemet[];
  tittle: string;
  textSubmit: string;
  submit: (state: object, setState: (object): void => {}): void => {};
}

export default function Form(props: FormProps)
{

  const [ state, setState ] = useState({...initState, loader: false});
  
  //erace element value of form
  useEffect(() => {
    if(Reflect.ownKeys(state).length === 1 &&  Reflect.ownKeys(state)[0] === "loader") {
    
      eraceElement.forEach((e: EraceElement) => {
        if(e.element === Item.input) {
          document.querySelector(`.${e.className}`).value = "";
        }
        else if(e.element === Item.select) {
          document.querySelector(`.${e.className}`).selectedIndex = 0;
        }
        else if(e.element === Item.radio) {
          document.querySelectorAll(`.${e.className}`)
          .forEach(ele => ele.checked = false)
        }
      })
    }
  },[state])
  
  const handleChange = (event: any) => {
    const { name, value } = event.target;
    
    const newState = state;
    Reflect.set(newState, name, value);
    setState(newState)
  }
 
  const handleSubmit = (event: any) => {
    event.preventDefault()
    setState({...state, loader: true});
    submit(state, setState)
  }
  
  const getFormItems = (ele: FormElemet) : JSX.Element => {
    
    const _eraceClassName = `${ele.item}-${eraceElement.length}`;
    const _className = `${ele.className} ${_eraceClassName}`;
    
    eraceElement.push({element: ele.item, className: _eraceClassName });
    
    const _switch = {
    
      Item.input : <Input
         tittle={item.title}
         type={item?.type}
         name={item.name}
         value={item?.value}
         className={_className}
         onChange={handleChange}
         placeholder={item?.placeholder}
         readOnly={item?.readOnly} />
      
      Item.select : <Select 
         tittle={item.title}
         name={item.name}
         className={_className}
         options={ele.options} />,
      
      Item.radio : <Radio 
         tittle={item.title}
         className={_className}
         onChange={handleChange}
         radios={item.radios} />,
      
      // Item.search_list : <SearchList value={ele.value} name={ele.name} onChange={handleChange} />
    }
    
    return _switch[ele.item]
  }
  
  const elements = JSX.Element[];
  const eraceElement = EraceElement[];
  for(const item in forms) { 
    elements.push( getFormItems(forms[item]) )
  }
  
  return (
    <div style={{width:"100%", height:"100%"}}>
      <h1>{props.tittle}</h1>
      { state.loader && <LdDualRing />  }
      <form onSubmit={handleSubmit} className="form-auto">
        { elements }
        <button className="submit" type="submit">{props.textSubmit}</button>
      </form>
    </div>
  )
}