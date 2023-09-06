
import {Reference} from "../1_models/reference";
import Dajt from "../4_data_access/get_data_access.tsx";

export default class ControllerReference {
 
 static objDataBase: string = 'References';
 
 static Post(newReference: Reference) : boolean {
   try {
    const response = (new Dajt(ControllerReference.objDataBase)).post(newReference);
     return response;
   } catch (error) {
     console.error(error);
     return false;
   }
 }
 
 static Put(updateReference: Reference) : boolean {
   try {
    const response = (new Dajt(ControllerReference.objDataBase)).update(updateReference);
     return response;
   } catch (error) {
     console.error(error);
     return false;
   }
 }
 
 static Delete(key: string) : boolean {
   try {
    const response = (new Dajt(ControllerReference.objDataBase)).delete(key);
     return response;
   } catch (error) {
     console.error(error);
     return false;
   }
 }
}