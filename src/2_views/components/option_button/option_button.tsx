import { Link } from "react-router-dom";
import Icon from '@mui/material/Icon';
import styled from "styled-components";

import "./option_button.css";

type button = {
  Name?:string,
  Icon?: string,
  IsLoad:boolean,
  Href:string,
}

interface IOptionProps {
  buttons: button[],
}

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  position: relative;
  user-select: none;
`;

const StyledLinkM = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 0.5rem;
  position: relative;
  user-select: none;
`;

const StyleA : React.CSSProperties = {
  color:"white", 
  position: "relative",
  userSelect: "none",
}

const StyleA_M : React.CSSProperties = {
  color:"white", 
  marginInline: "0.5rem",
  position: "relative",
  userSelect: "none",
}

export default function OptionButton(props: IOptionProps) : JSX.Element {
  return(
    <ul className="container-option-button" >
      { props.buttons.map(e => e.IsLoad ?
      ( <li className="btn-link" > 
          <a href={e.Href} style={ e.Name ? StyleA_M : StyleA } >
          { e.Icon && <Icon>{e.Icon}</Icon> } 
          {e?.Name}</a> 
        </li>) : 
      ( <li className="btn-link" >
          { e?.Name ?
            <StyledLinkM to={e.Href} >
              { e.Icon && <Icon>{e.Icon}</Icon> } 
              {e?.Name}
            </StyledLinkM> :
            <StyledLink to={e.Href} >
              { e.Icon && <Icon>{e.Icon}</Icon> } 
            </StyledLink>
          }
        </li>)
      ) }
    </ul>
  )
}