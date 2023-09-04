
import {Studie} from "../1_models/studie";
import daj from "../4_data_access/data_access.js";

export default class ControllerStudies {

 private objDataBase: string = 'Studies';
 
 static Post(newStudie: Studie) : boolean {
  return (new dajt(objDataBase)).post(newStudie)
  .then(response => response )
  .catch(error => console.error(error) );
 }
 
 static Put(updateStudie: Studie) : boolean {
  return (new dajt(objDataBase)).put(updateStudie)
  .then(response => response )
  .catch(error => console.error(error) );
 }
 
 static Delete(key: string) : boolean {
  return (new dajt(objDataBase)).delete(key)
  .then(response => response )
  .catch(error => console.error(error) );
 }
}