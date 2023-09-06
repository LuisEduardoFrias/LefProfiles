
import {Project} from "../1_models/project";
import Dajt from "../4_data_access/get_data_access.tsx";

export default class ControllerProject {
 
 static objDataBase: string = 'Projects';
 
 static Post(newProject: Project) : boolean {
   try {
    const response = (new Dajt(ControllerProject.objDataBase)).post(newProject);
     return response;
   } catch (error) {
     console.error(error);
     return false;
   }
 }
 
 static Put(updateProject: Project) : boolean {
   try {
    const response = (new Dajt(ControllerProject.objDataBase)).update(updateProject);
     return response;
   } catch (error) {
     console.error(error);
     return false;
   }
 }
 
 static Delete(key: string) : boolean {
   try {
    const response = (new Dajt(ControllerProject.objDataBase)).delete(key);
     return response;
   } catch (error) {
     console.error(error);
     return false;
   }
 }
}