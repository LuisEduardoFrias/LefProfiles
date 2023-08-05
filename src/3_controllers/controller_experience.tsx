
import ViewExperiencesPage from "../2_views/pages/experience_page/view_experiences_page";

import ListExperiencesPage from "../2_views/pages/experience_page/list_experiences_page";

import AddExperiencesPage from "../2_views/pages/experience_page/add_experiences_page";

import {Experience} from "../1_models/experience";

export default class ControllerExperience {

 experience : Experience[];
 
  constructor() {
    this.experience = [];
  }
 
  Views() : JSX.Element {
  
    return <ViewExperiencesPage experiences={this.experience} />
  }
  
  Add() : JSX.Element {

    return <AddExperiencesPage experiences={this.experience} />
  }
  
  List() : JSX.Element {

    return <ListExperiencesPage experiences={this.experience} />
  }
  
  Delete(key: string) : void {
  
  }
  
  Post(newExperience: Experience) : void {
    // daj.postAsync(newSkill);
  }
  
}