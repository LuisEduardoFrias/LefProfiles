import { useState } from "react";

import "./radio.css";

export type _Radio = {
  value: string;
  text: string
}

enum Direction {
  row,
  column
}

export interface IRadioProps {
  key: number;
  name: string;
  tittle: string;
  direction?: Direction;
  checked: string;
  radios: _Radio[];
  className: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Radio(props: IRadioProps) {
  const [selectedOption, setSelectedOption] = useState(props.checked);

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
    props.onChange(event);
  };
  
  const containerRadioStyle = () : any => 
  { 
    if(props?.direction === Direction.row)
      return {flexDirection: "row"};
    else
      return {flexDirection: "column"};
  };
  
  return (
    <div key={props.key} className="container-radio-conten">
      <label>{props.tittle}</label>

      <div className="container-radio" style={{...containerRadioStyle()}} >
        
        {props.radios.map((ele: _Radio, index: number) => (
          <div key={index} className="container-option-radio">
            <input
              className={props.className}
              onChange={handleOptionChange}
              type="radio"
              name={props.name}
              value={ele.value}
              checked={selectedOption === ele.value}
            />
            <label>{ele.text}</label>
          </div>
        ))}
      </div>
    </div>
  );
}