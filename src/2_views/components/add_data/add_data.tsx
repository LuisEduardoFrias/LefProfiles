
import { useState } from "react";

import BanckButton from "../back_button/back_button";
import ModalWindow, { ModalType } from "../modal_window/modal_window";
import Form, { Item, IState, InputProps, SelectProps, RadioProps, CheckProps, Direction} from "../form/form";

import ControllerExperience from "../../../3_controllers/controller_experience";

import "./add_data.css";


interface IAddDataProps {
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
  
//    {
//       item : Item.select,
//       tittle: "clientes",
//       name: "clientes",
//       className: "select_cliente",
//       options: [
//         {
//           value: "123",
//           text: "cliente 1",
//         },
//         {
//           value: "456",
//           text: "cliente 2",
//         },
//         {
//           value: "789",
//           text: "cliente 3",
//         },
//       ]
//     },
//     {
//       item : Item.radio,
//       tittle: "Utencilio",
//       name: "Utencilio",
//       checked: "k3",
//       className: "Radio_Utencilio",
//       radios: [
//         {
//           value: "k1",
//           text: "option1",
//         },
//         {
//           value: "k2",
//           text: "option2",
//         },
//         {
//           value: "k3",
//           text: "option3",
//         },
//         {
//           value: "k4",
//           text: "option4",
//         },
//       ]
//     },
//     {
//       item : Item.check,
//       tittle: "Utencilio",
//       name: "Utencilio",
//       className: "Radio_Utencilio",
//       checks: [
//         {
//           value: "pn",
//           text: "pan",
//         },
//         {
//           value: "qs",
//           text: "queso",
//         },
//         {
//           value: "sm",
//           text: "salami",
//         },
//         {
//           value: "jt",
//           text: "jamoneta",
//         },
//       ]
//     }

  
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


  function onClick(event: any) {
    setModal((prevState)=>{return {...prevState, show: false}});
  };
  
  function submit(state: any, setState: any ) {
    
    setState((prevState: any) => { return {...prevState, loader: false}})
    
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
       onClickA: (event:any) => 
       {
          setState((prevState: any) => { return {...prevState, loader: true}});
          
          setModal((prevState)=>{return {...prevState, show: false}});
          
          setTimeout(()=>
          {
            setState((prevState: any) => { return {...prevState, loader: false}});
            
            const newState : any = state;
            delete newState.loader;
            
            if(props.post(newState)) {
              setModal2((prevState)=>{return {...prevState,
              type: ModalType.notification,
              tittle: props.notifiSendDataTittle ?? "Notificacion",
              dialog: props.notifiSendDataDialog ?? "Enviado corectamente.",
              show: true}});
            } else {
              setModal2((prevState)=>{return {...prevState,
              type: ModalType.error,
              tittle: props.errorSendDataTittle ?? "Error",
              dialog: props.errorSendDataDialog ??  "Ocurrio un error al enviar los datos.",
              show: true}});
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
        onClick3={(event:any)=> setModal2((prevState)=>{return {...prevState, show: false}})}
      />
      
      <Form // initState={}
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