import{j as t,a as e}from"./index-562f4963.js";function l(a){return t.jsxs("div",{className:"education-container_education",children:[t.jsxs("div",{className:"education-container-last-tittle",children:[t.jsx("label",{className:"education-tittle",children:a.Tittle}),t.jsx("label",{className:"education-institution",children:a.Institution}),t.jsx(e,{className:"education-img-tittle",src:a.TittleImg,alt:"Imagen de titulo."})]}),t.jsx("div",{className:"education-container-sub-tittle",children:a.MoreEducation.map((i,s)=>t.jsxs("div",{className:"education-container-sub-education",children:[t.jsx("label",{className:"education-sub-tittle",children:i.Tittle}),t.jsx("div",{className:"education-contaiber-institution",children:i.Url!==""?t.jsx("a",{href:i.Url,className:"education-sub-institution-link",children:i.Institution}):t.jsx("label",{className:"education-sub-institution",children:i.Institution})}),i.TittleImg!==""?t.jsx(e,{className:"education-img-sub-tittle",src:i.TittleImg,alt:"Imagen de titulo."}):null]},s))})]})}export{l as default};
