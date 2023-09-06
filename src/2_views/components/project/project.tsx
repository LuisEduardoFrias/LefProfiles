
import IProject from "../../../1_models/project";
import "./project.css";

export default function Reference(project: IProject) {
return (
    <div key={project.Key} className="proyect-constainer-experience" >
      <label className="proyect-tittle" >{project.Tittle}</label>
      <label className="proyect-description" >{project.Description}</label>
      
      <fieldset className="proyect-container-tegnology" >
      <legend className="proyect-tittle-group-tacks" >Tegnologys</legend>
        { project?.Tegnologys?.map((e : string, index: number) => <label key={index} className="proyect-tenology" >{e}</label>) }
      </fieldset>
      
      <fieldset className="proyect-container-repository">
      <legend>Repositorys</legend>
        { project?.Repositorys?.map((e : string, index: number) => <a key={index} className="proyect-repository" href={e} >{e}</a>) }
      </fieldset>
      
    </div>
  )
}