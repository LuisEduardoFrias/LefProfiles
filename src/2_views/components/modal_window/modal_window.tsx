
import { MouseEventHandler } from 'react';
import Icon from '@mui/material/Icon';
import './modal_window.css';

export const enum ModalType {
  notification,
  warning,
  error
}

interface IModalWindowsProps {
  show:boolean,
  type: ModalType,
  tittle:string,
  state?: any,
  dialog: string,
  onClick1?: (event: any) => void,
  onClick2?: (event: any) => void,
  onClick3?: (event: any) => void,
}

export default function ModalWindow(props: IModalWindowsProps) {

  const getStyle = () => {
    return props.type === ModalType.warning ?
          {border: "10px solid #ffff0058", borderRadius: "10px 10px",
          boxShadow: "inset 0 0 10px 0px #ffff0082", } :
          props.type === ModalType.notification ?
          {border: "10px solid #005bff5c",  borderRadius: "10px 10px",
          boxShadow: "inset 0 0 10px 0px #005bff83", } :
          {border: "10px solid #ff00005d",  borderRadius: "10px 10px",
          boxShadow: "inset 0 0 10px 0px #ff000082", }
  }
  
  const _onClick = (event: any, click: any) => {
    if(click) click(event);
    
    const windows : HTMLElement | null = document.querySelector(".modal-windows");
    
    if(windows) windows.style.display = "none";
  }
  
  const getShow = () => props.show ? {display : "block"} : {display : "none"} 
  
  return (  
    <div className="modal-windows" style={{...getShow()}} >
    
      <div className="modal-content" style={{...getStyle()}} >
      
        { props.type === ModalType.warning ?
          <Icon className="icon" >warning</Icon> :
          props.type === ModalType.notification ?
          <Icon className="icon" >circle_notifications</Icon> :
          <Icon className="icon" >error</Icon>
        }
        
        <label className="tittle" >
        { props.type === ModalType.warning ? 
          "Warning" :
          props.type === ModalType.notification ?
          "Notification" :
          "Error"
        }</label>
        
        <div className="container-sub-tittle" >
          <label className="sub-tittle" >{props.tittle}</label>
          <label className="dialog" >{props.dialog}</label>
        </div>
        
        <div className="contaner-buttons" >
          { props.onClick1 ? 
          <button type="button" className="btn" onClick={(event) => _onClick({...event, state: props.state}, props.onClick1)}>
            Aceptar
          </button> : null }
        
          { props.onClick2 ? 
          <button type="button" className="btn" onClick={(event) => _onClick({...event, state: props.state}, props.onClick2)} >
            Cancelar
          </button> : null }
          
          { props.onClick3 ? 
          <button type="button" className="btn" onClick={(event) =>
            _onClick({...event, state: props.state}, props.onClick3)}>
            Okey
          </button> : null }
          
        </div>
      </div>
      
    </div>
  );
}