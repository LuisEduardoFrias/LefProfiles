
import ViewStudiesPage from "../2_views/pages/studie_page/view_studies_page";

import ListStudiesPage from "../2_views/pages/studie_page/list_studies_page";

import AddStudiesPage from "../2_views/pages/studie_page/add_studies_page";

import {Studie} from "../1_models/studie";

import daj from "../4_data_access/data_access.js";

export default class ControllerStudies {

  studies : Studie[];
 
  constructor() {
    this.studies = [];
    this.studies = daj.get(new Studie("","","","","",[])) ?? [];
  }
 
  Views() : JSX.Element {
  
    return <ViewStudiesPage studies={this.studies} />
  }
  
  Add() : JSX.Element {

    return <AddStudiesPage studies={this.studies} />
  }
  
  List() : JSX.Element {

    return <ListStudiesPage studies={this.studies} />
  }
  
  Delete(key: string) : void {
  
  }
  
  Post(newStudie: Studie) : void {
    // daj.postAsync(newSkill);
  }
  
}