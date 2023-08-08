
export interface IInputProps {
  key: number;
  tittle?:string;
  type?: "text" | "date" | "textarea";
  name: string;
  value?: string |  number;
  placeholder?: string;
  className: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
}

export default function Input(props: IInputProps) {
  return (
    <div className="container-input" key={props.key} > 
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