
import ViewSkillsPage from "../2_views/pages/skills_page/view_skills_page";

import ListSkillsPage from "../2_views/pages/skills_page/list_skills_page";

import AddSkillsPage from "../2_views/pages/skills_page/add_skills_page";

import {Skill} from "../1_models/skill";

export default class ControllerSkill {

 skills : Skill[];
 
  constructor() {
   this.skills = [];
   this.skills.push(new Skill("5", "C shart", ""));
   this.skills.push(new Skill("5", "C shart", ""));
   this.skills.push(new Skill("5", "C shart", ""));
   this.skills.push(new Skill("5", "C shart", ""));
   this.skills.push(new Skill("5", "C shart", ""));
 }
 
  Views() : JSX.Element {
  
    return <ViewSkillsPage skills={this.skills} />
  }
  
  Add() : JSX.Element {

    return <AddSkillsPage skills={this.skills} />
  }
  
  List() : JSX.Element {

    return <ListSkillsPage skills={this.skills} />
  }
  
  Delete() : void {
  
  }
  
  Post() : void {
  
  }
  
}