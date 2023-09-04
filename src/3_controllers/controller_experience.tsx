
import {Experience} from "../1_models/experience";
import daj from "../4_data_access/data_access.js";

export default class ControllerExperience {
 
 private objDataBase: string = 'Experiences';
 
 static Post(newExperience: Experience) : boolean {
  return (new dajt(objDataBase)).post(newExperience)
  .then(response => response )
  .catch(error => console.error(error) );
 }
 
 static Put(updateExperience: Experience) : boolean {
  return (new dajt(objDataBase)).put(updateExperience)
  .then(response => response )
  .catch(error => console.error(error) );
 }
 
 static Delete(key: string) : boolean {
  return (new dajt(objDataBase)).delete(key)
  .then(response => response )
  .catch(error => console.error(error) );
 }
}