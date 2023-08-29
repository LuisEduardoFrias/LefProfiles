
import "./home_page.css";
import ModalWindow, { ModalType } from "../../components/modal_window/modal_window"
interface IHomeProps {
  
}

export default function HomePage(_:IHomeProps) :JSX.Element {
  return (
  <div className="container-page " >
  
    <ModalWindow show={true} type={ModalType.warning} tittle={"Informacion"} dialog={"Esta web usa el local storage."} 
    onClick3={(_)=>{}} />
  
    <label className="tittle" >Full stack developer </label>
    <p className="about" >Software Engineer with over 3+ years of experience in web and desktop-based solutions development, involved in the entire software development life cycle. Currently focused on backend development, working with a solid architecture in agile teams, incorporating tools such as C#, ASP.Net Core, React, React Native, Node, SQL, Oracle PL SQL, etc., with experience in personal and enterprise projects.</p>
    
    <p className="about" >Focused on delivering exceptional customer experiences and developing efficient and optimized code, following design patterns like Singleton, Factory, Repository, MVC, and others based on it, etc. I also have experience in consuming, building, and integrating robust RESTful and SOAP APIs.</p>

    <p className="about" >I am a responsible, innovative, passionate, and committed professional with a "get-it-done" approach. My goal is to find places where I can work with multicultural teams. Demanding at heart, perfectionist at soul, never losing sight of the project scope. I have the flexibility to adapt/leverage any new technology, focusing on the best tool to solve a specific problem.</p>

    <p className="about" >Do not hesitate to contact me.</p>
  </div>)
}
