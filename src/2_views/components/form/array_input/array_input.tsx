
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
  onChange: (event: any) => void;
}

export default function Input(props: IArrayInputProps) {
  
  const [state, setState] = useState<string[]>([""])
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => 
  {
    const { value, dataset } = event.target;
    const index = parseInt(dataset.key!, 10);
    
    setState((prevState) => {
      const newState = [...prevState];
      newState[index] = value;
      return newState;
    });
    
    props.onChange({
      target: {
        name: props.name,
        value: state.filter((e) => e !== ""),
      },
    });
  };
  
  const addInput = (event: any) => {
    setState((prevState:any) => { return [...prevState, ""]; });
  }
  
  const remodeInput = (index: number) => {
    const newState = state.filter((_, i) => i !== index);
    setState(newState);
  }
  
  return (
    <div className="container-arrayinput" key={props.key}>
      <label className="tittle-arrayinput"> {`${props.tittle} : ${state.length}`} </label> 
      
      <button className="button-arrayinput" type="button" onClick={addInput}>
        <Icon>add</Icon>
      </button>
      
      <div className="inputs-arrayinput">
        {state.map((text, index) => 
          <div className="unitinput-arrayinput">
            <input
              data-key={index}
              id="input-arrayinput"
              name={props.name}
              value={state[index]}
              placeholder={props?.placeholder}
              className={props.className}
              onChange={handleChange}
            />
            
            { index >= 1 ? 
              <button className="button-arrayinput" type="button"
              onClick={(event:any) => remodeInput(index)}>
                <Icon>remove</Icon>
              </button> : null
            }
          </div>
        )}
      </div>
    </div>
  )
}