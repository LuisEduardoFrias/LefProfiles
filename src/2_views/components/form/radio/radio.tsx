
export type _Radio = {
  name: string;
  value: string;
  text: string
}

export interface IRadioProps {
  key: number;
  tittle?: string;
  radios?: _Radio[];
  className: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Radio(props: IRadioProps) {
  return(
    <div key={props.key}>
      <p>{props.tittle}</p>
      <div>
        { props?.radios?.map((ele : _Radio, index: number) : JSX.Element => 
            <div key={index} >
              <input className={props.className} 
              onChange={props.onChange}  
              type="radio" name={ele.name} value={ele.value} />
              <label>{ele.text}</label>
            </div>
          )
        }
      </div>
    </div>
  )
}