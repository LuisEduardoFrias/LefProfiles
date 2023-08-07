
import {useNavigate} from "react-router-dom";
import Icon from '@mui/material/Icon';

import "./back_button.css";

interface BackButtonProps {
  name?:string,
  icon?:string,
}

export default function BackButton(props:BackButtonProps) : JSX.Element {
	const navigate = useNavigate();
	return ( <button type="button" onClick={() => navigate(-1) }>{
	  props.icon ? <Icon>{props.icon}</Icon> : props.name ?? "back"
	}</button> )
}