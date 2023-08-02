
import Icon from '@mui/material/Icon';
import "./profile.css";

export default function Profile() : JSX.Element {
  return (
  <div className="cp-profile-profile" >
    <div className="cp-profile-user-profile" >
    
      <img
      src="https://avatars.githubusercontent.com/u/54819225?s=400&u=4c4eeb2b00e4e53bc9e27ebbcd29b7fb5973f474&v=4"
      alt="Foto de 'luis e. frias'." />
      
      <div className="cp-profile-user-data" >
        <label>Luis Eduardo Frias</label>
        <label>Ing De Software</label>
      </div>
    </div>
    <div className="cp-profile-user-info" >
      <IconData 
      iconName="email" 
      label="luiseduardofrias27@gmail.com" />
        
      <IconData 
      iconName="phone_iphone" 
      label="Personal 849-228-0058" />
        
      <IconData 
      iconName="phone_iphone" 
      label="Esposa 849-356-5151" />
        
      <IconData 
      iconName="home" 
      label="El Almirante, Santo Domingo Este, Republica Dominicana" />
        
      <IconData 
      iconName="link" 
      label="linkedin, luis eduardo frias"
      link="linkedin.com/in/luis-eduardo-frias-64204b1a3" />
        
    </div>
  </div>)
}

interface IIconDataProps {
  iconName: string;
  label: string;
  link?: string;
}

const IconDataStyles : React.CSSProperties = {
  "display": "flex",
  "alignItems": "center",
  "gap": "4px"
}

function IconData(props:IIconDataProps) : JSX.Element {
  return(
  <div style={IconDataStyles} >
    <Icon>{props.iconName}</Icon>
    { props.link ? <a href={props.link}>{props.label}</a> : <label>{props.label}</label> }
  </div>)
}