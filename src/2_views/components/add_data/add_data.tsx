
import { useState } from "react";

import BanckButton from "../back_button/back_button";
import ModalWindow, { ModalType } from "../modal_window/modal_window";
import Form, { InputProps, SelectProps, RadioProps, CheckProps } from "../form/form";

import "./add_data.css";


interface IAddDataProps {
  initialState?: any;
  forms:  ( InputProps | SelectProps | RadioProps | CheckProps )[];
  isFildsRequired: (state: any) => boolean;
  tittle: string;
  textSubmit: string;
  post: (obj: any) => boolean;
  errorTittle?: string;
  errorDialog?: string;
  warningTittle?: string;
  warningDialog?: string;
  notifiSendDataTittle?: string;
  notifiSendDataDialog?: string;
  errorSendDataTittle?: string;
  errorSendDataDialog?: string;
}


type Modal = {
  show: boolean,
  type: ModalType,
  tittle: string,
  dialog: string,
  onClickA?: (event: any) => void,
  onClickB?: (event: any) => void,
  onClickC?: (event: any) => void,
}

export default function AddData(props: IAddDataProps) : JSX.Element
{
  
  const [modal, setModal] = useState<Modal>({
    show: false,
    type: ModalType.notification,
    tittle: "",
    dialog: "",
  });
  
  const [modal2, setModal2] = useState<Modal>({
    show: false,
    type: ModalType.notification,
    tittle: "",
    dialog: "",
  });

  function onClick(_: any) {
    setModal((prevState)=>{return {...prevState, show: false}});
  };
  
  function submit(state: any, setState: any, fildsErase: () => void ) {
    
    //setState((prevState: any) => { return {...prevState, loader: false}})
    
    if(props.isFildsRequired(state)) {
      
      setModal({
      show: true,
      type: ModalType.error,
      tittle: props.errorTittle ?? "Error",
      dialog: props.errorDialog ?? "Se require que algunos campos, verifique.",
      onClickC: onClick,
      })
      
    }
    else {
      
      setModal({
       show: true,
       type: ModalType.warning,
       tittle: props.warningTittle ?? "Aviso",
       dialog: props.warningDialog ?? "Enviado corectamente.",
       onClickA: (_:any) => 
       {
          setState((prevState: any) => { return {...prevState, loader: true}});
          
          setModal((prevState)=>{return {...prevState, show: false}});
          
          setTimeout(()=>
          {
            
            const newState : any = state;
            delete newState.loader;
            
            if(props.post(newState)) {
              setModal2((prevState) => { return {...prevState,
              type: ModalType.notification,
              tittle: props.notifiSendDataTittle ?? "Notificacion",
              dialog: props.notifiSendDataDialog ?? "Enviado corectamente.",
              show: true}});
              
              fildsErase();
              
              setState((prevState: any) => { return {...prevState, loader: false, erase: true}});
              
            } else {
              setModal2((prevState) => {return {...prevState,
              type: ModalType.error,
              tittle: props.errorSendDataTittle ?? "Error",
              dialog: props.errorSendDataDialog ??  "Ocurrio un error al enviar los datos.",
              show: true}});
              
              setState((prevState: any) => { return {...prevState, loader: false}});
              
            }

          }, 1000)
          
       },
       onClickB: onClick,
      })
    }
    
    setModal((prevState)=>{return {...prevState, show: true}});
  };
  
  return ( 
    <div className="container-add-references" >
    
      <ModalWindow  
        show={modal2.show}
        type={modal2.type} 
        tittle={modal2.tittle} 
        dialog={modal2.dialog}
        onClick3={(_:any)=> setModal2((prevState)=>{return {...prevState, show: false}})}
      />
      
      <Form
        initState={props?.initialState}
        forms={props.forms}
        tittle={props.tittle}
        textSubmit={props.textSubmit}
        submit={submit}
      >
      
        <ModalWindow 
          show={modal.show}
          type={modal.type} 
          tittle={modal.tittle} 
          dialog={modal.dialog}
          onClick1={modal.onClickA}
          onClick2={modal.onClickB}
          onClick3={modal.onClickC}
        />
        
      </Form>
      
      <BanckButton icon="arrow_back" />
      
    </div>
  )
}