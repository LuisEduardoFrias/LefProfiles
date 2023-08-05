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
`;

const StyledLink_M = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 0.5rem;
  position: relative;
`;


export default function OptionButton(props: IOptionProps) : JSX.Element {
  return(
    <div className="container-option-button" >
      { props.buttons.map(e => e.IsLoad ?
      ( <div className="btn-link" > 
          { e.Icon && <Icon>{e.Icon}</Icon> } 
          <a href={e.Href} style={{color:"white", marginInline: "0.5rem", position: "relative" }} >{e?.Name}</a> 
        </div>) : 
      ( <div className="btn-link" >
          { e.Icon && <Icon>{e.Icon}</Icon> } 
          { e?.Name ?
            <StyledLink_M to={e.Href} >{e?.Name}</StyledLink_M> :
            <StyledLink to={e.Href} ></StyledLink>
          }
        </div>)
      ) }
    </div>
  )
}