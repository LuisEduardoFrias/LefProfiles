import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RouterHome from "./2_views/router_home";
import ErrorPage from "./2_views/pages/error_page/error_page";
import HomePage from "./2_views/pages/home_page/home_page";

// import ControllerSkill from "./3_controllers/controller_skill";
// import ControllerReference from "./3_controllers/controller_reference";
// import ControllerStudie from "./3_controllers/controller_studie";
// import ControllerProject from "./3_controllers/controller_project";
// import ControllerExperience from "./3_controllers/controller_experience";

import ViewSkillsPage from "./2_views/pages/skills_page/view_skills_page";
import ListSkillsPage from "./2_views/pages/skills_page/list_skills_page";
import AddSkillsPage from "./2_views/pages/skills_page/add_skills_page";

import ViewReferencesPage from "./2_views/pages/reference_page/view_references_page";
import ListReferencesPage from "./2_views/pages/reference_page/list_references_page";
import AddReferencesPage from "./2_views/pages/reference_page/add_references_page";

import ViewProjectsPage from "./2_views/pages/project_page/view_projects_page";
import ListProjectsPage from "./2_views/pages/project_page/list_projects_page";
import AddProjectsPage from "./2_views/pages/project_page/add_projects_page";

import ViewExperiencesPage from "./2_views/pages/experience_page/view_experiences_page";
import ListExperiencesPage from "./2_views/pages/experience_page/list_experiences_page";
import AddExperiencesPage from "./2_views/pages/experience_page/add_experiences_page";

import ViewStudiesPage from "./2_views/pages/studie_page/view_studies_page";
import ListStudiesPage from "./2_views/pages/studie_page/list_studies_page";
import AddStudiesPage from "./2_views/pages/studie_page/add_studies_page";

//const basename = process.env.NODE_ENV === 'production' ? '/LefProfiles' : '/';
const basename = '/LefProfiles';

// ////////////// skill
// const SkillView = () :JSX.Element => {           
//   const controllerSkill = new ControllerSkill({});
//   controllerSkill.componentDidMount();
//   return(controllerSkill.Views());
// };
// const SkillList = () :JSX.Element => {           
//   const controllerSkill = new ControllerSkill({});
//   controllerSkill.componentDidMount();
//   return controllerSkill.List();
// };
// const SkillAdd = () :JSX.Element => {           
//   const controllerSkill = new ControllerSkill({});
//   controllerSkill.componentDidMount();
//   return controllerSkill.Add();
// };
// ////////////// reference
// const ReferenceView = () :JSX.Element => {           
//   const ControllerReference = new ControllerReference({});
//   ControllerReference.componentDidMount();
//   return ControllerReference.Views();
// };
// const ReferenceAdd = () :JSX.Element => {           
//   const ControllerReference = new ControllerReference({});
//   ControllerReference.componentDidMount();
//   return ControllerReference.Add();
// };
// const ReferenceList = () :JSX.Element => {           
//   const ControllerReference = new ControllerReference({});
//   ControllerReference.componentDidMount();
//   return ControllerReference.List();
// };
// ////////////// studie
// const StudieView = () :JSX.Element => {           
//   const ControllerStudie = new ControllerStudie({});
//   ControllerStudie.componentDidMount();
//   return ControllerStudie.Views();
// };
// const StudieAdd = () :JSX.Element => {           
//   const ControllerStudie = new ControllerStudie({});
//   ControllerStudie.componentDidMount();
//   return ControllerStudie.Add();
// };
// const StudieList = () :JSX.Element => {           
//   const ControllerStudie = new ControllerStudie({});
//   ControllerStudie.componentDidMount();
//   return ControllerStudie.List();
// };
// ////////////// project
// const ProjectView = () :JSX.Element => {           
//   const ControllerProject = new ControllerProject({});
//   ControllerProject.componentDidMount();
//   return ControllerProject.Views();
// };
// const ProjectAdd = () :JSX.Element => {           
//   const ControllerProject = new ControllerProject({});
//   ControllerProject.componentDidMount();
//   return ControllerProject.Add();
// };
// const ProjectList = () :JSX.Element => {           
//   const ControllerProject = new ControllerProject({});
//   ControllerProject.componentDidMount();
//   return ControllerProject.List();
// };
// ////////////// experience
// const ExperienceView = () :JSX.Element => {           
//   const ControllerExperience = new ControllerExperience({});
//   ControllerExperience.componentDidMount();
//   return ControllerExperience.Views();
// };
// const ExperienceAdd = () :JSX.Element => {           
//   const ControllerExperience = new ControllerExperience({});
//   ControllerExperience.componentDidMount();
//   return ControllerExperience.Add();
// };
// const ExperienceList = () :JSX.Element => {           
//   const ControllerExperience = new ControllerExperience({});
//   ControllerExperience.componentDidMount();
//   return ControllerExperience.List();
// };
////////////// 
////////////// 
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
        element: <ViewSkillsPage />,
      },
     {
        path: "/skill/add",
        element: <AddSkillsPage />,
      },
     {
        path: "/skill/list",
        element: <ListSkillsPage />,
      },
      /////////////////////
      ////////////// reference
     {
        path: "/reference/view",
        element: <ViewReferencesPage />,
      },
     {
        path: "/reference/add",
        element: <AddReferencesPage />,
      },
     {
        path: "/reference/list",
        element: <ListReferencesPage />,
      },
      /////////////////////
      ////////////// studie
     {
        path: "/studie/view",
        element: <ViewStudiesPage />,
      },
     {
        path: "/studie/add",
        element: <AddStudiesPage />,
      },
     {
        path: "/studie/list",
        element: <ListStudiesPage />,
      },
      /////////////////////
      ////////////// project
     {
        path: "/project/view",
        element: <ViewProjectsPage />,
      },
     {
        path: "/project/add",
        element: <AddProjectsPage />,
      },
     {
        path: "/project/list",
        element: <ListProjectsPage />,
      },
      /////////////////////
      ////////////// experience
     {
        path: "/experience/view",
        element: <ViewExperiencesPage />,
      },
     {
        path: "/experience/add",
        element: <AddExperiencesPage />,
      },
     {
        path: "/experience/list",
        element: <ListExperiencesPage />,
     },
    ]
  },
 ], { basename }
);

export default function App() : JSX.Element {
  return (<RouterProvider router={router} />);
}