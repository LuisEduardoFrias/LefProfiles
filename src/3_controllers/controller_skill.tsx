
import {Skill} from "../1_models/skill";
import dajt from "../4_data_access/get_data_access.tsx";

export default class ControllerSkill
{
 private objDataBase: string = 'Skills';
 
 static Post(newSkill: Skill) : boolean {
  return (new dajt(this.objDataBase)).post(newSkill)
  .then(response => response )
  .catch(error => console.error(error) );
 }
 
 static Put(updateSkill: Skill) : boolean {
   alert("in put")
  return (new dajt(this.objDataBase)).put(updateSkill0)
  .then(response => response )
  .catch(error => console.error(error) );
 }
 
 static Delete(key: string) : boolean {
  return (new dajt(this.objDataBase)).delete(key)
  .then(response => response )
  .catch(error => console.error(error) );
 }
}