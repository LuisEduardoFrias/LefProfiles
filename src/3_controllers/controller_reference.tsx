
import ViewReferencesPage from "../2_views/pages/reference_page/view_references_page";

import ListReferencesPage from "../2_views/pages/reference_page/list_references_page";

import AddReferencesPage from "../2_views/pages/reference_page/add_references_page";

import {Reference} from "../1_models/reference";

import daj from "../4_data_access/data_access.js";

export default class ControllerReference {

 reference : Reference[];
 
  constructor() {
    this.reference = [];
    this.reference = daj.get(new Reference("","","")) ?? [];
  }
 
  Views() : JSX.Element {
  
    return <ViewReferencesPage references={this.reference} />
  }
  
  Add() : JSX.Element {

    return <AddReferencesPage references={this.reference} />
  }
  
  List() : JSX.Element {

    return <ListReferencesPage references={this.reference} />
  }
  
  Delete(key: string) : void {
  
  }
  
  Post(newReference: Reference) : void {
    // daj.postAsync(newSkill);
  }
}