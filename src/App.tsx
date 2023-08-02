import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import ApiC from './callApi';

import RouterHome from "./2_views/router_home";
import ErrorPage from "./2_views/pages/error_page/error_page";

import ControllerSkill from "./3_controllers/controller_skill";
import ViewProyectsPage from "./2_views/pages/proyects_page/view_proyects_page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RouterHome />,
    errorElement: <ErrorPage />,
    children: [
     {
        path: "/",
        element: <label>home page</label>,
      },
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
     {
        path: "/proyect/view",
        element: <ViewProyectsPage proyects={[{name:"hola"}]} />,
      },
    ]
  },
]);

// const api = new ApiC('http://localhost:8000');

export default function App() : JSX.Element {
  return (<RouterProvider router={router} />);
}
