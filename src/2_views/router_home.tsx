import { Outlet } from "react-router-dom";
import Profile from "./components/profile/profile";
import NavBar, { IOption } from "./components/nav_bar/nav_bar";

import "./router_home.css"

const menus : IOption[] = [
  {
    name:"Home",
    icon:"production_quantity_limits",
    href:"/",
    isLoad: false,
    sub: []
  },
  {
    name:"Skills",
    icon:"production_quantity_limits",
    href:"#",
    isLoad: false,
    sub: [
      {
        name:"List Skill",
        href: "/skill/list",
        isLoad: false,
        sub: []
      },
      {
        name:"Views Skill",
        href: "/skill/view",
        isLoad: false,
        sub: []
      },
      {
        name:"Add Skill",
        href: "/skill/add",
        isLoad: false,
        sub: []
      }
    ]
  },
  {
    name:"Proyects",
    icon:"supervised_user_circle",
    href:"#",
    isLoad: false,
    sub: [
      {
        name:"List Proyects",
        href: "/proyect/view",
        isLoad: false,
        sub: []
      },
      {
        name:"Add Proyects",
        href: "/proyect/add",
        isLoad: false,
        sub: []
      }
    ]
  },
  {
    name:"Experience",
    icon:"file_open",
    href:"/buy/add",
    isLoad: false,
    sub: [
      {
        name:"List Experience",
        href: "/experience/view",
        isLoad: false,
        sub: []
      },
      {
        name:"Add Experience",
        href: "/experience/add",
        isLoad: false,
        sub: []
      }
    ]
  },
  {
    name:"Referenece",
    icon:"view_timeline",
    href:"/bill/view",
    isLoad: false,
    sub: [
      {
        name:"List Referenece",
        href: "/reference/view",
        isLoad: false,
        sub: []
      },
      {
        name:"Add Referenece",
        href: "/referenece/add",
        isLoad: false,
        sub: []
      }
    ]
  },
  {
    name:"Education",
    icon:"view_timeline",
    href:"/bill/view",
    isLoad: false,
    sub: [
      {
        name:"List Education",
        href: "/education/view",
        isLoad: false,
        sub: []
      },
      {
        name:"Add Education",
        href: "/education/add",
        isLoad: false,
        sub: []
      }
    ]
  }
]

export default function RouterHome() : JSX.Element {
  
  return (
    <div className="layout">
      <header>
        <Profile />
      </header>
      <nav>
        <NavBar menus={menus} />
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}