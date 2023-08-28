import { Outlet } from "react-router-dom";
import Profile from "./components/profile/profile";
import NavBar, { IOption } from "./components/nav_bar/nav_bar";

import "./router_home.css"

const menus : IOption[] = [
  {
    name:"Home",
    icon:"home",
    href:"/",
    isLoad: false,
    sub: []
  },
  {
    name:"Skill",
    href: "/skill/view",
    icon:"checklist_rtl",
    isLoad: false,
    sub: []
  },
  {
    name:"Projects",
    icon:"folder_copy",
    href:"/project/view",
    isLoad: false,
    sub: []
  },
  {
    name:"Experience",
    icon:"work",
    href:"/experience/view",
    isLoad: false,
    sub: []
  },
  {
    name:"Referenece",
    icon:"supervised_user_circle",
    href: "/reference/view",
    isLoad: false,
    sub: []
  },
  {
    name:"Studie",
    icon:"menu_book",
    href:"/studie/view",
    isLoad: false,
    sub: []
  }
]

export default function RouterHome() : JSX.Element {
  
  return (
    <div className="layout">
      <header>
        <Profile />
      </header>
      <main>
        <NavBar menus={menus} />
        <Outlet />
      </main>
    </div>
  );
}