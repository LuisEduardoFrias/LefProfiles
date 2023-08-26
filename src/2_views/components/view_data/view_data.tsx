
import { useNavigate } from 'react-router-dom';
import "./view_data.css";
import { ReactElement } from "react";
import ModalWindow, {ModalType} from "../modal_window/modal_window";
import { useState, useEffect } from "react";

type ObjBtn = {
  edit:string,
  delete:string,
}

export enum Languaje {
  es,
  en,
}

interface IViewDataProps<T extends object> {
  tableName?: string;
  dataSource: T[];
  urlEdit?: string;
  onDelete: (event: any) => boolean;
  onEdit?: (event: any) => void;
  children: ReactElement;
  rowsPerPage?: number;
  languaje?: Languaje;
  hiddenColumn?: number[];
  custonHeader?: string[];
}

export default function ViewData<T extends object>(props: IViewDataProps<T>) {
  
  const navigate = useNavigate();
  const defaultRowsPerPage = 10; 
  
  const [dataSource, setDataSoure] = useState(props.dataSource);
  const [show, setShow] = useState(false);
  const [itemsPerPage] = useState(defaultRowsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const [pagesNum, setPagesNum] = useState(1);
  const [paginatedData, setPaginatedData] = useState<T[]>([]);
  
  useEffect(() => {

    const calculatedPagesNum = Math.ceil(dataSource.length / itemsPerPage);
    
    setPagesNum(calculatedPagesNum);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    
    setPaginatedData(dataSource.slice(startIndex, endIndex));
    
    setDataSoure(dataSource);
    
  }, [dataSource, itemsPerPage, currentPage]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const _hiddenColumn: number[] = props.hiddenColumn ?? [];
  
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < pagesNum) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const headers: string[] = dataSource.length > 0 ?
    [...Reflect?.ownKeys(dataSource[0]).map((key) => key.toString())] : [];
 
  const Es: ObjBtn = {edit: "EDITAR", delete: "ELIMINAR"};
  const En: ObjBtn = {edit: "EDIT", delete: "DELETE"};
  
  const headersButton = (languaje: Languaje | undefined
  , typeButton: 'edit' | 'delete'): string => {
    if(languaje === Languaje.es)
      return Es[typeButton];
    else if(languaje === Languaje.en)
      return En[typeButton];
    
    return En[typeButton];
  };

  const rows: T[] = paginatedData;

  let SelectROW = "";
  window.addEventListener("click",function(event) {
    if (`${event.target}` !== '[object HTMLTableCellElement]') 
    {
      if(SelectROW !== "")
      document.querySelector(SelectROW)?.classList.remove("selected");
    }
  });
  
  function changeColor(row: any): void {
    
    const selectedRows = document.getElementsByClassName("selected");
    
    for (let i = 0; i < selectedRows.length; i++) {
      selectedRows[i].classList.remove("selected");
    }
    
    SelectROW = "#"+row;
    document.querySelector("#"+row)?.classList.add("selected");
  }
  
  const ishidden = (index: number): boolean => !_hiddenColumn.includes(index) ;

  return (
    <div className="container-table">

      <ModalWindow 
        show={show}
        setShow={setShow}
        type={ModalType.error}
        tittle={props.languaje === Languaje.es ? "Eliminar registro." : "Delete record." }
        dialog={props.languaje === Languaje.es ? "No se ha podido eliminar este registro." : "This record could not be deleted." }
        onClick3={(_: any) => {}}/>
        
      { dataSource.length !== 0 ?
      
      <table className="table-viewData">
       {props?.tableName !== null ? (
          <caption
            style={{
              fontSize: "40px",
              fontWeight: "bold",
              textAlign: "center",
              margin: "auto",
              marginBottom: "10px",
            }}
          >
            <div style={{display:"flex",}} >
              {props.children}
              <label style={{margin:"auto"}}> {props?.tableName} </label>
            </div>
          </caption>
        ) : null}

        <thead className="thead-viewData">
          <tr className="tr-viewData">
            
            {
              headers.map((textHead, index) => ishidden(index) ? 
                  <th key={index}
                  className="td-viewData">{
                    props.custonHeader ?
                    props.custonHeader[index]:
                    textHead.toUpperCase()
                  }</th> :
                  null
                
              )
            }
            
            <th className="td-viewData column-edit" style={{width:"110px"}}
              >{headersButton(props.languaje, "edit")}</th>
            <th className="td-viewData column-delete" style={{width:"110px"}}
            >{headersButton(props.languaje, "delete")}</th>
          </tr>
        </thead>

        <tbody className="tbody-viewData">
          {rows.map((obj, index) => (
            <tr
              id={"tr-viewData-"+index}
              key={index}
              style={{ borderBottom: "1px solid blue" }}
              className="tr-viewData"
              onClick={() => changeColor("tr-viewData-"+index)}
            >
              {
                headers?.map((header, index) => 
                  ishidden(index) ?
                    <td key={index} className="td-viewData">{Reflect.get(obj as any, header)}</td> :
                    null
                )
              }
              <td className="td-viewData btn-edit column-edit">
                <button onClick={(event:any)=> 
                {
                  props.onEdit ? 
                  props.onEdit({...event,obj: rows[index]}) :
                  navigate(props.urlEdit || "", { state: rows[index] })
                }}
                >{headersButton(props.languaje, "edit")}</button>
              </td>

              <td className="td-viewData btn-delete column-delete">
                <button onClick={(event:any)=> {
                  if (props.onDelete({ ...event, obj: rows[index] })) 
                  {  
                    const newData = dataSource.filter((_, i) => i !== index);
                    setDataSoure(newData);
                  } else {
                    setShow(true);
                  }
                }}>
                {headersButton(props.languaje, "delete")}</button>
              </td>
            </tr>
          ))}
        </tbody>

        <tfoot>
          <tr className="tr-viewData">
            <td colSpan={headers.length + 2} className="td-viewData">
              <div className="foot-container-btn-viewData">
                <button className="footBtn-viewData" onClick={handlePreviousPage}>
                  &laquo;
                </button>

                {Array.from({ length: pagesNum }, (_, index) => (
                  <button
                    className={`footBtn-viewData ${currentPage === index + 1 ? "active" : ""}`}
                    key={index}
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </button>
                ))}

                <button className="footBtn-viewData" onClick={handleNextPage}>
                  &raquo;
                </button>
              </div>
            </td>
          </tr>
        </tfoot>
      </table> :
      <>
       {props?.tableName !== null ? (
          <div style={{display:"flex",}} >
          {props.children}
          <caption
            style={{
              fontSize: "40px",
              fontWeight: "bold",
              textAlign: "center",
              margin: "auto",
              marginBottom: "10px",
            }}
          >
            {props?.tableName}
          </caption>
          </div>
        ) : null}
          
      <label>{ props.languaje === Languaje.es ? "No hay datos para mostrar." : "No data to display."} </label> 
      
      </>
      }
    </div>
  );
}