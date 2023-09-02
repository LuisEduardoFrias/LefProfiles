import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//import ApiC from './callApi';

import RouterHome from "./2_views/router_home";
import ErrorPage from "./2_views/pages/error_page/error_page";
import HomePage from "./2_views/pages/home_page/home_page";

import ControllerSkill from "./3_controllers/controller_skill";
import ControllerReference from "./3_controllers/controller_reference";
import ControllerStudie from "./3_controllers/controller_studie";
import ControllerProject from "./3_controllers/controller_project";
import ControllerExperience from "./3_controllers/controller_experience";

//const basename = process.env.NODE_ENV === 'production' ? '/LefProfiles' : '/';

const basename = '/LefProfiles';

const SkillView = () :JSX.Element => {           
  const controllerSkill = new ControllerSkill();
  controllerSkill.componentDidMount();
  return(controllerSkill.Views());
};
const SkillList = () :JSX.Element => {           
  const controllerSkill = new ControllerSkill();
  controllerSkill.componentDidMount();
  return controllerSkill.List();
};
const SkillAdd = () :JSX.Element => {           
  const controllerSkill = new ControllerSkill();
  controllerSkill.componentDidMount();
  return controllerSkill.Add();
};

const router = createBrowserRouter(
 [
  {
    path: "/",
    element: <RouterHome />,
    errorElement: <ErrorPage />,
    children: [
     {
        path: "/",
        element: <HomePage/>,
      },
      /////////////////////
      ////////////// skill
     {
        path: "/skill/view",
        element: <SkillView />,
      },
     {
        path: "/skill/add",
        element: <SkillAdd />
      },
     {
        path: "/skill/list",
        element: <SkillList />
      },
      /////////////////////
      ////////////// reference
     {
        path: "/reference/view",
        element: () => {
          const ControllerReference = new ControllerReference();
          ControllerReference.componentDidMount();
          return ControllerReference.Views();
        },
      },
     {
        path: "/reference/add",
        element: () => {
          const ControllerReference = new ControllerReference();
          ControllerReference.componentDidMount();
          return ControllerReference.Add();
        },
      },
     {
        path: "/reference/list",
        element: () => {
          const ControllerReference = new ControllerReference();
          ControllerReference.componentDidMount();
          return ControllerReference.List();
        },
      },
      /////////////////////
      ////////////// studie
     {
        path: "/studie/view",
        element: () => {
          const ControllerStudie = new ControllerStudie();
          ControllerStudie.componentDidMount();
          return ControllerStudie.Views();
        },
      },
     {
        path: "/studie/add",
        element: () => {
          const ControllerStudie = new ControllerStudie();
          ControllerStudie.componentDidMount();
          return ControllerStudie.Add();
        },
      },
     {
        path: "/studie/list",
        element: () => {
          const ControllerStudie = new ControllerStudie();
          ControllerStudie.componentDidMount();
          return ControllerStudie.List();
        },
      },
      /////////////////////
      ////////////// project
     {
        path: "/project/view",
        element: () => {
          const ControllerProject = new ControllerProject();
          ControllerProject.componentDidMount();
          return ControllerProject.Views();
        },
      },
     {
        path: "/project/add",
        element: () => {
          const ControllerProject = new ControllerProject();
          ControllerProject.componentDidMount();
          return ControllerProject.Add();
        },
      },
     {
        path: "/project/list",
        element: () => {
          const ControllerProject = new ControllerProject();
          ControllerProject.componentDidMount();
          return ControllerProject.List();
        },
      },
      /////////////////////
      ////////////// experience
     {
        path: "/experience/view",
        element: () => {
          const ControllerExperience = new ControllerExperience();
          ControllerExperience.componentDidMount();
          return ControllerExperience.Views();
        },
      },
     {
        path: "/experience/add",
        element: () => {
          const ControllerExperience = new ControllerExperience();
          ControllerExperience.componentDidMount();
          return ControllerExperience.Add();
        },
      },
     {
        path: "/experience/list",
        element: () => {
          const ControllerExperience = new ControllerExperience();
          ControllerExperience.componentDidMount();
          return ControllerExperience.List();
        },
      },
    ]
  },
 ] 
 , { basename }
);


export default function App() : JSX.Element {
  return (<RouterProvider router={router} />);
}