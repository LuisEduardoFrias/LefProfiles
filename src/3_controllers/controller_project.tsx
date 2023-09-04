
import {Project} from "../1_models/project";
import daj from "../4_data_access/data_access.js";

export default class ControllerProject {
 
 private objDataBase: string = 'Projects';
 
 static Post(newProject: Project) : boolean {
  return (new dajt(objDataBase)).post(newProject)
  .then(response => response )
  .catch(error => console.error(error) );
 }
 
 static Put(updateProject: Project) : boolean {
  return (new dajt(objDataBase)).put(updateProject)
  .then(response => response )
  .catch(error => console.error(error) );
 }
 
 static Delete(key: string) : boolean {
  return (new dajt(objDataBase)).delete(key)
  .then(response => response )
  .catch(error => console.error(error) );
 }
}