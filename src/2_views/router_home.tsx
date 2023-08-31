import { lazy, Suspense } from "react";

const Outlet = lazy(()=> import("react-router-dom").then(module => ({ default: module.Outlet})));
const Profile = lazy(()=> import("./components/profile/profile"));
const NavBar = lazy(() => import('./components/nav_bar/nav_bar'));
import { IOption } from './components/nav_bar/nav_bar';
const LdDualRing = lazy(()=> import("./components/ld_dual_ring/ld_dual_ring"));

import "./router_home.css"

let menus : IOption[] = [
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
        <Suspense fallback={<LdDualRing error={false} />} >
          <Profile />
        </Suspense >
      </header>
      <main>
        <Suspense fallback={<LdDualRing error={false} />} >
          <NavBar menus={menus} />
          <Outlet />
        </Suspense >
      </main>
    </div>
  );
}