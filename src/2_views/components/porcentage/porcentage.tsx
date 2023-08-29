
import "./porcentage.css";

interface IPorcentageProps {
  index: number,
  value: number,
  tittle?: string,
  direction: "row" | "column",
}

const porcentageBaseStyle : React.CSSProperties = {
  position: "relative",
  display: "flex",
  width: "200px",
}

const PorcentageColumnStyle : React.CSSProperties = {
  ...porcentageBaseStyle,
  alignItems: "center",
  flexDirection: "row",
  gap: "5px",
  
}

const PorcentageRowStyle : React.CSSProperties = {
  ...porcentageBaseStyle,
  justifyContent: "center",
  alignItems: "start",
  flexDirection: "column",
  gap: "2px",
  
}

const LabelStyle : React.CSSProperties = {
  margin:"0px 0px",
}

export default function Porcentage(props: IPorcentageProps) {
  return (
  <div key={props.index} style={props.direction === "column" ? PorcentageColumnStyle : PorcentageRowStyle} >
    {props.tittle ? <label style={LabelStyle} >{props.tittle}</label> : null }
    <input type="range" style={{backgroundSize: `${props.value}% 100%` }}  className="porcentage" />
    <label className="label-porcentage">{props.value}%</label>
  </div>)
}