
import ISkill from "../../../1_models/skill";
import "./skill.css";

export default function Skill(skill: ISkill, index: number) {
  return (
  <div key={index} className="skill-container" style={{backgroundColor: "silver"}} >
    <img className="skill-img" src={skill.UrlImage} alt="" />
    <label className="skill-name" >{skill.Name}</label>
  </div>
  )
}