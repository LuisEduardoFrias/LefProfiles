import { useState } from "react";

import "./check.css";

export type _Check = {
  value: string;
  text: string;
};

enum Direction {
  row,
  column
}

export interface ICheckProps {
  key: number;
  name: string;
  tittle: string;
  direction?: Direction;
  checks: _Check[];
  className: string;
  onChange: (event: any) => void;
}

export default function Check(props: ICheckProps) {
  
  const [checkOption, setCheckOption] = useState<string[]>([]);

  const handleOptionChange = ( event: React.ChangeEvent<HTMLInputElement> ) => {
    
    setCheckOption((prevState: string[]) => {
      const posState : string[] = prevState;
      if(event.target.checked) {
        posState.push(`${event.target.value}`)
        return posState;
      } else {
        const index = posState.indexOf(`${event.target.value}`);
        
        if (index !== -1) {
          posState.splice(index, 1);
        }

        return posState;
      }
    });

    props.onChange({
      target: {
        name: props.name,
        value: checkOption,
     },
    });
  };
  
  const containerCheckStyle = () : any => 
  { 
    if(props?.direction === Direction.row)
      return {flexDirection: "row"};
    else
      return {flexDirection: "column"};
  };
  
  return (
    <div key={props.key} className="container-check-conten">
      <label>{props.tittle}</label>
      <div className="container-check" style={{...containerCheckStyle()}} >
        
        {props.checks.map((ele: _Check, index: number): JSX.Element => (
          <div key={index} className="container-option-check">
            <input
              className={props.className}
              onChange={handleOptionChange}
              type="checkbox"
              name={index.toString()}
              value={ele.value}
            />
            <label>{ele.text}</label>
          </div>
        ))}
      </div>
    </div>
  );
}