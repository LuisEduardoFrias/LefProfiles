
import IReferenece from "../../../1_models/reference";
import "./reference.css";

export default function Referenece(reference: IReferenece, index: number) {
  return (
    <div key={index} className="constainer-reference" >
      <label className="name" >{reference.Name}</label>
      <label className="phone" >{reference.PhoneNumber}</label>
    </div>
  )
}