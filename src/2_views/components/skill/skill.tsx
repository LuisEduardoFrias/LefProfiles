
import ISkill from "../../../1_models/skill";
import "./skill.css";
import Img from "../img/img";

export default function Skill(skill: ISkill, index: number) {
  return (
    <div key={index} className="skill-container">
      <Img className="skill-img" src={skill.UrlImage} alt={skill.Name} />
      <label className="skill-name">{skill.Name}</label>
    </div>
  );
}