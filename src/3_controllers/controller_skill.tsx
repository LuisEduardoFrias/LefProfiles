
import ViewSkillsPage from "../2_views/pages/skills_page/view_skills_page";

import ListSkillsPage from "../2_views/pages/skills_page/list_skills_page";

import AddSkillsPage from "../2_views/pages/skills_page/add_skills_page";

import {Skill} from "../1_models/skill";

import daj from "../4_data_access/data_access.js";

const GetImage=(name: string) :any =>{ return require(`../assert/${name}`) }

export default class ControllerSkill {

 skills : Skill[];
 
  constructor() {
    this.skills = [];
    this.skills = daj.get(new Skill("","","",0)) ?? [];
    this.skills.push(new Skill("1", "C shart", GetImage("csharp.png"), 74));
   this.skills.push(new Skill("2", "Node", GetImage("nodejs2.png"), 35));
   this.skills.push(new Skill("3", "Java script", GetImage("javascript.png"), 40));
   this.skills.push(new Skill("4", "Oracle PL", GetImage("oracle.png"), 30));
   this.skills.push(new Skill("5", "Sql server", "https://seeklogo.com/images/M/microsoft-sql-server-logo-96AF49E2B3-seeklogo.com.png", 40));
   this.skills.push(new Skill("6", "React", GetImage("react.png"), 50));
   this.skills.push(new Skill("7", "Html", GetImage("html.png"), 70));
   this.skills.push(new Skill("8", "Css", GetImage("css.png"), 50));
   this.skills.push(new Skill("9", "Type Script", GetImage("typescript.png"), 70));
   this.skills.push(new Skill("10", "Boot Strap", GetImage("bootstrap.png"), 30));
   this.skills.push(new Skill("11", "Express", GetImage("express.png"), 40));
   this.skills.push(new Skill("12", "Git", GetImage("git.png"), 50));
   this.skills.push(new Skill("13", "GitHub", GetImage("github.png"), 60));
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