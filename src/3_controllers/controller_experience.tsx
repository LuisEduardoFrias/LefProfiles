
import ViewExperiencesPage from "../2_views/pages/experience_page/view_experiences_page";

import ListExperiencesPage from "../2_views/pages/experience_page/list_experiences_page";

import AddExperiencesPage from "../2_views/pages/experience_page/add_experiences_page";

import {Experience} from "../1_models/experience";

import daj from "../4_data_access/data_access.js";

export default class ControllerExperience {

 experience : Experience[];
 
  constructor() {
    this.experience = [];
    this.experience = daj.get(new Experience("","","","",[])) ?? [];
  }
 
  Views() : JSX.Element {
    return <ViewExperiencesPage experiences={this.experience} />
  }
  
  Add() : JSX.Element {
    return <AddExperiencesPage />
  }
  
  List() : JSX.Element {
    return <ListExperiencesPage experiences={this.experience} />
  }
  
  static Delete(key: string) : boolean {
    return daj.delete(new Experience("", "", "", "", []), key);
  }
  
  static Post(newExperience: Experience) : boolean {
   return daj.post(new Experience("", 
   newExperience.Company, 
   newExperience.Description, 
   newExperience.Position, 
   newExperience.Tacks));
  }
  
  static Put(experience: Experience) : boolean {
    return daj.put(new Experience(experience.Key, 
    experience.Company, 
    experience.Description, 
    experience.Position, 
    experience.Tacks));
  }
}