
import "./input.css"
import { useState, useEffect } from "react";

enum Direction {
  row,
  column
}

export interface IInputProps {
  key: number;
  tittle?:string;
  type?: "text" | "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "image" | "month" | "number" | "password" | "range" | "tel" | "url" | "week",
  name: string;
  direction?: Direction;
  value?: string |  number;
  placeholder?: string;
  className: string;
  onChange: (event: any) => void;
  readOnly?: boolean;
}

export default function Input(props: IInputProps) {
 
  const [state, setState] = useState<string>(`${props?.value}`)
  
  useEffect(()=>{
    if(props?.value) {
    props.onChange({
      target: {
        name: props.name,
        value: state ?? props?.value
      },
    })
  };
  },[state]);
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => 
  { 
    const { value } = event.target;
    
    setState(value);
  };
  
  const getContainerInput = () => {
    if(props.tittle) {
      
      if(props?.direction === Direction.row) {
        return {
          gridTemplateRows: "1fr",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateAreas: '"label input"',
          gap: "5px",
        };
      }
      else
        return {
          gridTemplateRows: "1fr 1fr",
          gridTemplateColumns: "1fr",
          gridTemplateAreas: '"label" "input"',
        };
    } else {
      return {
        gridTemplateRows: "1fr",
        gridTemplateColumns: "1fr",
        gridTemplateAreas: '"input"',
      }
    }
  }
  
  return (
    <div className="container-input" style={{...getContainerInput()}} key={props.key} > 
      <label> {props?.tittle} </label> 
      <input
        type={props?.type}
        name={props.name}
        value={state}
        placeholder={props?.placeholder}
        className={props.className}
        onChange={handleChange}
        readOnly={props?.readOnly} />
    </div>
  )
}