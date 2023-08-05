// import Skill from "../../components/skill/skill";
// import Porcentage from "../../components/porcentage/porcentage";
import Header from "../../components/header/header";
import OptionButton from "../../components/option_button/option_button";
// 
 import IReference from "../../../1_models/reference"
// import "./view_skills_page.css"

interface IReferenceProps {
  references: IReference[]
}

export default function ViewReferencesPage(props: IReferenceProps) : JSX.Element
{
    return (
    <>
    
      <Header tittle="Reference" color="" />
{//    <OptionButton buttons={[{Name:"+/-"},{Name:"+"}]} />
}
     
      <div className="container-page" >
       view referenece
      </div>
    </>
    )
}