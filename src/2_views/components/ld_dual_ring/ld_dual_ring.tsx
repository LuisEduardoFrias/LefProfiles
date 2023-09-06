
import "./ld_dual_ring.css";
 
interface ILdDualRingProps {
  error: boolean;
  errorMessage?: string;
}

export default function LdDualRing(props: ILdDualRingProps) {
  return (
  <div className="container-load ">
    { !props.error ? 
      <div className="ld-dual-ring"></div> : 
      <label className="error-label">{props?.errorMessage}</label> 
    }
  </div>
  )
}