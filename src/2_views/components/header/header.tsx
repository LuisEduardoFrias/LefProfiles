
import "./header.css";

interface IHeaderProps {
  tittle:string;
  color:string;
}

export default function Header(props: IHeaderProps): JSX.Element {
  return (
  <>
    <br />
    <div className="header" style={{color:props.color}} >
      <label>{props.tittle}</label>
    </div>
  </>)
}