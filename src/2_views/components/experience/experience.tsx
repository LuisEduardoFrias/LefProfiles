
import IExperience from "../../../1_models/experience";
import "./experience.css";

export default function Experience(experience: IExperience) {
  return (
    <div className="experience_constainer" >
      <label className="experience_company" >{experience.Company}</label>
      <label className="experience_description" >{experience.Description}</label>
      <label className="experience_position" >{experience.Position}</label>
      
      <fieldset className="experience-container-tacks" >
      <legend className="experience-tittle-group-tacks" >Tacks</legend>
        { experience.Tacks.map(e => 
        <label className="experience_tack" >{e}</label>) }
      </fieldset>
      
    </div>
  )
}