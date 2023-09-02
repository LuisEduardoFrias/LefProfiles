
import React, { lazy } from "react";

import ViewSkillsPage from "../2_views/pages/skills_page/view_skills_page";

import ListSkillsPage from "../2_views/pages/skills_page/list_skills_page";

import AddSkillsPage from "../2_views/pages/skills_page/add_skills_page";

const LdDualRing = lazy(()=> import("../2_views/components/ld_dual_ring/ld_dual_ring"));

import {Skill} from "../1_models/skill";

import daj from "../4_data_access/data_access.js";
import dajt from "../4_data_access/get_data_access.tsx";

export default class ControllerSkill extends React.Component {

 instanciaDajt: dajt;
 
 constructor(props) {
   super(props);
   this.instanciaDajt = new dajt();
   this.state = [];
 }
 
 componentDidMount() {
  this.setState( this.instanciaDajt.get('Skills')
  .then(arrayObj => {
    this.forceUpdate();
    return arrayObj;
  })
  .catch(error => {
   console.error(error);
  }));

  alert(this.state)
 }
 
 Views(): JSX.Element {
  return (
   <>
    {this.state.length > 0 ? 
    ( <ViewSkillsPage skills={this.state} /> ) : 
    ( <LdDualRing error={false} /> )}
   </>)
 }
 
 Add() : JSX.Element {
  return <AddSkillsPage />
 }
 
 List() : JSX.Element {
  return (
   <>
    {this.state.length > 0 ? 
    ( <ListSkillsPage skills={this.state} /> ) : 
    ( <LdDualRing error={false} /> )}
   </>
  );
 }
 
 static Post(newSkill: Skill) : boolean {
   return daj.post(new Skill("", newSkill.Name, newSkill.UrlImage, newSkill.Experience));
 }
 
 static Put(skill: Skill) : boolean {
   return daj.put(new Skill(skill.Key, skill.Name, skill.UrlImage, skill.Experience));
 }
 
 static Delete(key: string) : boolean {
    return daj.delete(new Skill("", "", "", 0), key);
 }
}