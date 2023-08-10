
import { useState } from "react";
import Icon from '@mui/material/Icon';
import "./array_input.css"

enum Direction {
  row,
  column
}

export interface IArrayInputProps {
  key: number;
  tittle:string;
  name: string;
  direction?: Direction;
  placeholder?: string;
  className: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input(props: IArrayInputProps) {
  
  const [state, setState] = useState<string[]>([""])
  
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
  
  const addInput = (event: any) => {
    setState((prevState:any) => { return [...prevState, ""]; });
  }
  
  return (
    <div className="container-input" style={{...getContainerInput()}} key={props.key} > 
      <div>
        <label> {props.tittle} </label> 
        <button type="button" onClick={addInput}>
          <Icon>add</Icon>
        </button>
        {state.map((text, index) => 
          <input
            name={props.name}
//             value={text}
            placeholder={props?.placeholder}
            className={props.className}
            onChange={props.onChange} />
        )}
      </div>
    </div>
  )
}