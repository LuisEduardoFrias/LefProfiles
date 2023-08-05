
import IReferenece from "../../../1_models/project";
import "./project.css";

export default function Reference(project: IReferenece) {
  return (
    <div className="proyect-constainer-experience" >
      <label className="proyect-tittle" >{project.Tittle}</label>
      <label className="proyect-description" >{project.Description}</label>
      
      <fieldset className="proyect-container-tegnology" >
      <legend className="proyect-tittle-group-tacks" >Tegnologys</legend>
        { project.Tegnologys.map(e => 
        <label className="proyect-tenology" >{e}</label>) }
      </fieldset>
      
      <fieldset className="proyect-container-repository">
      <legend>Repositorys</legend>
        { project.Repositorys.map(e => 
        <a className="proyect-repository" href={e} >{e}</a>) }
      </fieldset>
      
    </div>
  )
}