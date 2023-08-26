import { Link } from "react-router-dom";
import { Icon } from '@mui/material';
import { Box } from '@mui/system';
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
  padding: "auto",
  userSelect: "none",
  backdropFilter: "blur(5px)",
}

const StyleA_M : React.CSSProperties = {
  color:"white", 
  marginInline: "0.5rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  userSelect: "none",
  backdropFilter: "blur(5px)",
}

export default function OptionButton(props: IOptionProps) : JSX.Element {
  return(
    <ul className="container-option-button" >
      { props.buttons.map(e => e.IsLoad ?
      ( <li className="btn-link" > 
          <Box>
            <a href={e.Href}  >
              { e.Icon && <Icon>{e.Icon}</Icon> } 
              {e?.Name}
            </a>
          </Box>
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