
import {Skill} from "../1_models/skill";
import Dajt from "../4_data_access/get_data_access.tsx";

export default class ControllerSkill
{
 static objDataBase: string = 'Skills';
 
 static Post(newSkill: Skill) : boolean {
   try {
     const response = new Dajt(ControllerSkill.objDataBase).post(newSkill);
     return true;
   } catch (error) {
     console.error(error);
     return false;
   }
 }
 
 static Put(updateSkill: Skill) : boolean {
   try {
    const response = (new Dajt(ControllerSkill.objDataBase)).update(updateSkill);
     return true;
   } catch (error) {
     console.error(error);
     return false;
   }
 }
 
 static Delete(key: string) : boolean {
   try {
    const response = (new Dajt(ControllerSkill.objDataBase)).delete(key);
     return response;
   } catch (error) {
     console.error(error);
     return false;
   }
 }
}