
import "./select.css";

export type Option = {
  value: string;
  text: string;
}

export interface ISelectProps {
  key: number;
  tittle?:string; 
  name: string;
  options?: Option[];
  className: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function Select(props: ISelectProps) {
  return(
    <div className="container-select" key={props.key} >
      <label>{props.tittle}</label> 
      <select name={props.name} className={props.className} onChange={props.onChange} >
        <option key="0" value={"undefined"} >select {props.tittle}</option>
        { props?.options?.map((opcion: Option, index: number) => (
          <option key={index} value={opcion.value}>
            {opcion.text}
          </option>
        ))}
      </select>
    </div>
  )
}