
import ISkill from "../../../1_models/skill";
import "./skill.css";

export default function Skill(skill: ISkill, index: number) {
  return (
  <div key={index} className="skill-container"  >
    <img className="skill-img" src={ skill.UrlImage.search("http") === -1 ? require(`../../../assert/${skill.UrlImage}`) : skill.UrlImage}  alt={skill.Name} />
    <label className="skill-name" >{skill.Name}</label>
  </div>
  )
}