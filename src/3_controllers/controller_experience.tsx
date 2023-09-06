
import {Experience} from "../1_models/experience";
import Dajt from "../4_data_access/get_data_access.tsx";

export default class ControllerExperience {
 
 static objDataBase: string = 'Experiences';
 
 static Post(newExperience: Experience) : boolean {
   try {
    const response = (new Dajt(ControllerExperience.objDataBase)).post(newExperience);
     return response;
   } catch (error) {
     console.error(error);
     return false;
   }
 }
 
 static Put(updateExperience: Experience) : boolean {
   try {
    const response = (new Dajt(ControllerExperience.objDataBase)).update(updateExperience);
     return response;
   } catch (error) {
     console.error(error);
     return false;
   }
 }
 
 static Delete(key: string) : boolean {
   try {
    const response = (new Dajt(ControllerExperience.objDataBase)).delete(key);
     return response;
   } catch (error) {
     console.error(error);
     return false;
   }
 }
}