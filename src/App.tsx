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
        element: new ControllerSkill().Views(),
      },
     {
        path: "/skill/add",
        element: new ControllerSkill().Add(),
      },
     {
        path: "/skill/list",
        element: new ControllerSkill().List(),
      },
      /////////////////////
      ////////////// reference
     {
        path: "/reference/view",
        element: new ControllerReference().Views(),
      },
     {
        path: "/reference/add",
        element: new ControllerReference().Add(),
      },
     {
        path: "/reference/list",
        element: new ControllerReference().List(),
      },
      /////////////////////
      ////////////// studie
     {
        path: "/studie/view",
        element: new ControllerStudie().Views(),
      },
     {
        path: "/studie/add",
        element: new ControllerStudie().Add(),
      },
     {
        path: "/studie/list",
        element: new ControllerStudie().List(),
      },
      /////////////////////
      ////////////// project
     {
        path: "/project/view",
        element: new ControllerProject().Views(),
      },
     {
        path: "/project/add",
        element: new ControllerProject().Add(),
      },
     {
        path: "/project/list",
        element: new ControllerProject().List(),
      },
      /////////////////////
      ////////////// experience
     {
        path: "/experience/view",
        element: new ControllerExperience().Views(),
      },
     {
        path: "/experience/add",
        element: new ControllerExperience().Add(),
      },
     {
        path: "/experience/list",
        element: new ControllerExperience().List(),
      },
    ]
  },
 ]
, { basename }
);

export default function App() : JSX.Element {
  return (<RouterProvider router={router} />);
}