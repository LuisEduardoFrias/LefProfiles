
import ViewSkillsPage from "../2_views/pages/skills_page/view_skills_page";

import ListSkillsPage from "../2_views/pages/skills_page/list_skills_page";

import AddSkillsPage from "../2_views/pages/skills_page/add_skills_page";

import {Skill} from "../1_models/skill";

import daj from "../4_data_access/data_access.js";

export default class ControllerSkill {

 skills : Skill[];
 
  constructor() {
    this.skills = [];
    this.skills = daj.get(new Skill("","","",0)) ?? [];
 }
 
  Views() : JSX.Element {
    return <ViewSkillsPage skills={this.skills} />
  }
  
  Add() : JSX.Element {
    return <AddSkillsPage />
  }
  
  List() : JSX.Element {
    return <ListSkillsPage skills={this.skills} />
  }
  
  static Delete(key: string) : boolean {
    return daj.delete(new Skill("", "", "", 0), key);
  }
  
  static Post(newSkill: Skill) : boolean {
    return daj.post(new Skill("", newSkill.Name, newSkill.UrlImage, newSkill.Experience));
  }
  
  static Put(skill: Skill) : boolean {
    return daj.put(new Skill(skill.Key, skill.Name, skill.UrlImage,
    skill.Experience));
  }
}