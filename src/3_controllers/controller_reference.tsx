
import {Reference} from "../1_models/reference";
import daj from "../4_data_access/data_access.js";

export default class ControllerReference {
 
 private objDataBase: string = 'References';
 
 static Post(newReference: Reference) : boolean {
  return (new dajt(objDataBase)).post(newReference)
  .then(response => response )
  .catch(error => console.error(error) );
 }
 
 static Put(updateReference: Reference) : boolean {
  return (new dajt(objDataBase)).put(updateReference)
  .then(response => response )
  .catch(error => console.error(error) );
 }
 
 static Delete(key: string) : boolean {
  return (new dajt(objDataBase)).delete(key)
  .then(response => response )
  .catch(error => console.error(error) );
 }
}