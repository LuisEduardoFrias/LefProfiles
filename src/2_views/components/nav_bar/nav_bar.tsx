import { Link } from "react-router-dom";
import Icon from '@mui/material/Icon';

import "./nav_bar.css";

export interface IOption {
  name: string;
  icon?: string;
  href: string;
  isLoad: boolean;
  sub: IOption[]
}

interface INavBarProps {
  menus: IOption[]
}

export default function NavBar(props: INavBarProps) : JSX.Element {
  return (
    <nav className="contontainer-menu">
      <ul className="first-list">
        { props.menus.map((e: IOption, i: Number) : JSX.Element => e.sub.length !== 0 ? OptionSub(e, i) : Option(e, `option-${i}`) )}
      </ul>
    </nav>
  )
}

//----------------------------------

const openSubMenu = (classElement: string) : void => {

  if(classElement) {
    const ele: any = document.querySelector(`#${classElement}`);
    const icon: any = document.querySelector(`#icon-${classElement}`);
  
    ele.style.display !== "none" ?
    icon.innerHTML = "chevron_right" :
    icon.innerHTML = "expand_more";
  
    ele.style.display === "none" ?
    ele.style.display = "block" :
    closeSubMenu(classElement);
  }
}

const closeSubMenu = (classElement: string) : void => {
  if(classElement) {
    const ele: any = document.querySelector(`#${classElement}`);
  
    if(ele) ele.style.display = "none";
  }
}

//----------------------------------

function a(menuOp: IOption, subMenuList: string ) : JSX.Element {
    return (
    <li className="menu-item li-item" onClick={event => closeSubMenu(subMenuList)} >
      <a href={menuOp.href} className={ menuOp.icon ? "links" : "link-item" }>
        { menuOp.icon ? 
        <span className="menu-icon">
          <Icon>{menuOp.icon}</Icon>
        </span>    
        : null }
        <span className="menu-title">{menuOp.name}</span>
      </a>
    </li>)
}

function link(menuOp: IOption, subMenuList: string) : JSX.Element {
  return (
  <li className="menu-item li-item" onClick={event => closeSubMenu(subMenuList)} >
    <Link to={menuOp.href} className={ menuOp.icon ? "links" : "link-item" }>
      { menuOp.icon ? 
      <span className="menu-icon">
        <Icon>{menuOp.icon}</Icon>
      </span>    
      : null }
      <span className="menu-title">{menuOp.name}</span>
    </Link>
  </li>)
}

function Option(menuOp: IOption, subMenuList: string) : JSX.Element {
  return menuOp.isLoad ? a(menuOp, subMenuList) : link(menuOp, subMenuList);
}

function OptionSub(menuOp: IOption, index : Number) : JSX.Element {

 const subMenuList: string = 
    `sub-menu-${menuOp.name}-${index}`.replace(/\s+/g, '')  
 
  return( 
  <li className="menu-item" >
  
    <div className="first-option-menu" onClick={event => openSubMenu(subMenuList)} >
    
      <div className="container-tittle-icon" >
      
        { menuOp.icon ? 
          <span className="menu-icon">
            <Icon>{menuOp.icon}</Icon>
          </span>    
        : null }
       
        <span className="menu-title" >{menuOp.name}</span>
      </div>
      
      <Icon id={`icon-${subMenuList}`}>chevron_right</Icon>

    </div>
    
    <div style={{display:"none"}} id={subMenuList} className="sub-menu-list slide-rotate-ver-left">
    
      <ul className="secondari-list" >
        { menuOp.sub?.map( (ele: IOption, i: Number) : JSX.Element =>
        ele.sub.length !== 0 ? OptionSub(ele, i) : Option(ele, subMenuList) )}
      </ul>
      
      <hr />
      
    </div>
    
  </li>)
}