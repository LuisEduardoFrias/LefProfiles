
import ViewProjectsPage from "../2_views/pages/project_page/view_projects_page";

import ListProjectsPage from "../2_views/pages/project_page/list_projects_page";

import AddProjectsPage from "../2_views/pages/project_page/add_projects_page";

import {Project} from "../1_models/project";

import daj from "../4_data_access/data_access.js";

export default class ControllerProject {

 project : Project[];
 
  constructor() {
    this.project = [];
    this.project = daj.get(new Project("","","",[],[])) ?? [];
  }
 
  Views() : JSX.Element {
    return <ViewProjectsPage projects={this.project} />
  }
  
  Add() : JSX.Element {
    return <AddProjectsPage />
  }
  
  List() : JSX.Element {
    return <ListProjectsPage projects={this.project} />
  }
  
  static Delete(key: string) : boolean {
    return true;
  }
  
  static Post(newProject: Project) : boolean {
   return daj.post(new Project("", 
   newProject.Tittle, 
   newProject.Description, 
   newProject.Tegnologys, 
   newProject.Repositorys));
  }
  
}