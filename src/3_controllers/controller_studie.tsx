
import {Studie} from "../1_models/studie";
import Dajt from "../4_data_access/get_data_access.tsx";

export default class ControllerStudies {

 static objDataBase: string = 'Studies';
 
 static Post(newStudie: Studie) : boolean {
   try {
    const response = (new Dajt(ControllerStudies.objDataBase)).post(newStudie);
     return response;
   } catch (error) {
     console.error(error);
     return false;
   }
 }
 
 static Put(updateStudie: Studie) : boolean {
   try {
    const response = (new Dajt(ControllerStudies.objDataBase)).update(updateStudie);
     return response;
   } catch (error) {
     console.error(error);
     return false;
   }
 }
 
 static Delete(key: string) : boolean {
   try {
    const response = (new Dajt(ControllerStudies.objDataBase)).delete(key);
     return response;
   } catch (error) {
     console.error(error);
     return false;
   }
 }
}