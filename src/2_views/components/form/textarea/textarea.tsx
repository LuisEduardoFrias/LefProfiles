
import "./textarea.css"

enum Direction {
  row,
  column
}

export interface ITextareaProps {
  key: number;
  tittle?:string;
  name: string;
  direction?: Direction;
  value?: string |  number;
  placeholder?: string;
  className: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  readOnly?: boolean;
}

export default function Textarea(props: ITextareaProps) {
  
  const getContainerTextarea= () => {
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
    <div className="container-input" style={{...getContainerTextarea()}} key={props.key} > 
      <label> {props?.tittle} </label> 
      <textarea
        name={props.name}
        value={props?.value}
        className={props.className}
        onChange={props.onChange}
        placeholder={props.placeholder}
        readOnly={props?.readOnly} >
      </textarea>
    </div>
  )
}