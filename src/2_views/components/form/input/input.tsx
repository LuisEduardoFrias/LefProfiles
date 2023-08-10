
import "./input.css"

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
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
}

export default function Input(props: IInputProps) {
  
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
        value={props?.value}
        placeholder={props?.placeholder}
        className={props.className}
        onChange={props.onChange}
        readOnly={props?.readOnly} />
    </div>
  )
}