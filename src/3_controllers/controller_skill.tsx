
import ViewSkillsPage from "../2_views/pages/skills_page/view_skills_page";

import ListSkillsPage from "../2_views/pages/skills_page/list_skills_page";

import AddSkillsPage from "../2_views/pages/skills_page/add_skills_page";

import {Skill} from "../1_models/skill";

export default class ControllerSkill {

 skills : Skill[];
 
  constructor() {
   this.skills = [];
   this.skills.push(new Skill("1", "C shart", "", 74));
   this.skills.push(new Skill("2", "Node", "", 35));
   this.skills.push(new Skill("3", "Java script", "", 40));
   this.skills.push(new Skill("4", "Oracle PL", "", 30));
   this.skills.push(new Skill("5", "Sql server", "", 40));
   this.skills.push(new Skill("6", "React", "", 50));
   this.skills.push(new Skill("7", "Html", "", 70));
   this.skills.push(new Skill("8", "Css", "", 50));
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
  
  Delete(key: string) : void {
  
  }
  
  Post(newSkill: Skill) : void {
    // daj.postAsync(newSkill);
  }
  
}