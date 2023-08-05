
import IStudie from "../../../1_models/studie";
import "./studie.css";

export default function Studie(studie: IStudie) {
  return (
    <div className="education-container_education" >
      <div className="education-container-last-tittle" >
        <label className="education-tittle" >{studie.Tittle}</label>
        <label className="education-institution" >{studie.Institution}</label>
        <img className="education-img-tittle" src={studie.TittleImg} alt="Imagen de titulo." />
      </div>
      {
//       <div className="education-container-sub-tittle" >
//         {studie.MoreEducation.forEach((e) => 
//           <div className="education-container-sub-education">
//             <label className="education-sub-tittle" >{e.Tittle}</label>
//             
//             <div className="education-contaiber-institution" >
//               
//               <label className="educstion-label-institution" >Institucion : </label>
// 
//               { e.Url !== "" ? 
//                <a href={e.Url}
//                className="education-sub-institution-link">{e.Institution}</a> :
//                <label className="education-sub-institution" >{e.Institution}</label>
//               }
//             </div>
//             
//             {  e.TittleImg !== "" ? 
//               <img className="education-img-sub-tittle" src={e.TittleImg} alt="Imagen de titulo." /> :
//               null
//             }
//           </div> )};
//       </div>
}
    </div> )
}