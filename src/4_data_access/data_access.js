
// import data from "./data.json";

export default class daj {
  
  //
  // get
  //
  static get(obj) {
    return Reflect.get(data, `${obj.constructor.name}s`);
  }
  
  //
  // post
  //
  static post(obj) {
   
    const pro = Reflect.get(data, `${obj.constructor.name}s`);

    if (pro === undefined) {
      
      if (!Reflect.set(obj, "Key", 1)) return false;

      return Reflect.set(data, `${obj.constructor.name}s`, obj);
    }
 
    if (!Reflect.set(obj, "Key", pro.length + 1)) return false;
 
    pro.push(obj);
    
    return Reflect.set(data, `${obj.constructor.name}s`, pro);
  }
  
  //
  // put
  //
  static put(obj) {
    
    let newPro = [...Reflect.get(data, `${obj.constructor.name}s`)];
    
    const index = newPro.findIndex((e) => e.Key === obj.Key);
 
    newPro[index] = {
      ...newPro[index],
      ...obj,
    };

    Reflect.set(data, `${obj.constructor.name}s`, newPro);
    
    return true
  }
  
  //
  // delete
  //
  static delete(obj, Key) {
    const pro = Reflect.get(data, `${obj.constructor.name}s`);

    if (pro === undefined) return false;
 
    const index = pro.findIndex((e) => e.Key === Key);

    if (index > -1) {
      pro.splice(index, 1);
    } else {
      return false;
    }
    
    return Reflect.set(data, `${obj.constructor.name}s`, pro);
  }
}

const data = JSON.parse(`{
  "Skills": [
   { 
      "Key": "1", 
      "Name": "C shart", 
      "UrlImage": "csharp.png", 
      "Experience": 74
   },
   {
      "Key": "2",
      "Name": "Node", 
      "UrlImage": "nodejs2.png", 
      "Experience": 35
   },
   {
      "Key": "3",
      "Name": "Java script", 
      "UrlImage": "javascript.png", 
      "Experience": 40
   },
   { 
      "Key": "4", 
      "Name": "Oracle PL", 
      "UrlImage": "oracle.png",
      "Experience": 30
   },
   { 
      "Key": "5", 
      "Name": "Sql server",
      "UrlImage": "https://seeklogo.com/images/M/microsoft-sql-server-logo-96AF49E2B3-seeklogo.com.png", 
      "Experience": 40 
   },
   { 
      "Key":  "6", 
      "Name": "React", 
      "UrlImage": "react.png", 
      "Experience": 50 
   },
   { 
      "Key":  "7", 
      "Name": "Html", 
      "UrlImage": "html.png",
      "Experience": 70 },
   { 
      "Key": "8", 
      "Name": "Css", 
      "UrlImage": "css.png",
      "Experience": 50 },
   { 
      "Key": "9", 
      "Name": "Type Script", 
      "UrlImage": "typescript.png",
      "Experience": 70
   },
   { 
      "Key": "10",
      "Name": "Boot Strap", 
      "UrlImage": "bootstrap.png", 
      "Experience": 30
   },
   { 
      "Key":  "11", 
      "Name": "Express", 
      "UrlImage": "express.png",
      "Experience": 40
   },
   {
      "Key": "12",
      "Name": "Git", 
      "UrlImage": "git.png",
      "Experience": 50 
   },
   { 
      "Key": "13",
      "Name": "GitHub", 
      "UrlImage": "github.png",
      "Experience": 60
    }
  ],
  "Experiences": [
    {
      "Key": "1",
      "Company": "Rancom Vitrinas y Decoraciones SRL",
      "Description": "Ramco vitrinas y decorasiones es una empresa de fabricacion de mobiliarios, en especifico para comercio.",
      "Position": "Analista de costos",
      "Tacks": [
        "Ayudante de ensamblado",
        "Encargado de ensamblado",
        "Encargado área modular",
        "Analista de costos"
      ]
    },
    {
      "Key": "2",
      "Company": "EC Mobiliario Creativo SRL",
      "Description": "EC Mobiliario Creativo es una empresa de fabricacion de mobiliarios en general.",
      "Position": "Ebanista",
      "Tacks": [
        "Ensamblado",
        "Ebanista"
      ]
    },
    {
      "Key": "3",
      "Company": "Tegnología y Sistema Computarizado SRL",
      "Description": "Tecnosis es una compañia de servicios de sistemas infomáticos.",
      "Position": "Desarrollador",
      "Tacks": [
        "Migrarcion del sistema de facturacíon y ventas con contabilidad, cobol a c#.",
        "User las ternilias winforms, as.net core api 3.1, Sql server, Entity Framework core.",
        "Creacion de inferfaces para comunicar aplicacion en cobol con sistema de verifone carNet y visaNet."
      ]
    },
    {
      "Key": "4",
      "Company": "Aloe Software",
      "Description": "Aloe software es una empresa dedicada al desarrollo y gestión software, infraestructura tecnológica y servicios informáticos, asi como cualquier otra actividad del entorno de TI.",
      "Position": "Desarrollador de software",
      "Tacks": [
        "Migrar ´sistema de operaciones´ en delphy 5 a .net 5 y react.",
        "Desarrollar software de calidad, enfocado en las metodologias agiles.",
        "Trabajar con metodologia de trabajo Scrum."
      ]
    }
  ],
  "Projects": [
    {
      "Key": "1",
      "Tittle": "Tridente SC",
      "Description": "Administrador de tienda de celulares.",
      "Tegnologys": [
        "WinForms",
        "Sql Server",
        "Entity Framework",
        "SignalR",
        "Asp.net Core"
      ],
      "Repositorys": []
    },
    {
      "Key": "2",
      "Tittle": "ARS Afiliados",
      "Description": "Sistema de afiliados",
      "Tegnologys": [
        "Angular 11",
        "Asp.Net Core Api 3.1",
        "Ado.net",
        "Entity Framework",
        "Sql Server",
        "Identity",
        "Bootstrap",
        "Madia-Type vnd"
      ],
      "Repositorys": [
        "https://github.com/LuisEduardoFrias/Back-End",
        "https://github.com/LuisEduardoFrias/front-end-ars-afiliados"
      ]
    },
    {
      "Key": "3",
      "Tittle": "PokeSite",
      "Description": "Guía de pokemones",
      "Tegnologys": [
        "Angular 11",
        "Asp.Net Core Api 3.1",
        "Bootstrap"
      ],
      "Repositorys": []
    },
    {
      "Key": "4",
      "Tittle": "DSRG",
      "Description": "Generador de reporte de la estructura tu base de datos.",
      "Tegnologys": [
        "WindowsForms",
        "Telerik report",
        "SpreadsheetLight - Excel"
      ],
      "Repositorys": [
        "https://github.com/LuisEduardoFrias/DSRG"
      ]
    }
  ],
  "Studies": [
    {
      "Key": "1",
      "Tittle": "Técnico Superior en Desarrollo del Software",
      "Institution": "Instituto Técnico Superior Comunitario (ITSC)",
      "TittleImg": "diploma_ITSC.jpg",
      "MoreEducation": [
        {
          "Tittle": "Desarrollando Aplicaciones en Angular 10 y ASP.NET Core 5",
          "Institution": "udemy",
          "Url": "https://www.udemy.com/course/desarrollando-aplicaciones-en-angular-y-aspnet-core/",
          "TittleImg": ""
        },
        {
          "Tittle": "Entity Framework Core y SQL Server / MySQL",
          "Institution": "udemy",
          "Url": "https://www.udemy.com/course-dashboard-redirect/?course_id=3072640",
          "TittleImg": ""
        },
        {
          "Tittle": "Creación de API web Restful con ASP.NET Core 3.1",
          "Institution": "udemy",
          "Url": "https://www.udemy.com/course-dashboard-redirect/?course_id=2156664",
          "TittleImg": ""
        },
        {
          "Tittle": "Introducción a la concurrencia en C # - Async y Paralelismo",
          "Institution": "udemy",
          "Url": "https://www.udemy.com/course-dashboard-redirect/?course_id=3401576",
          "TittleImg": ""
        },
        {
          "Tittle": "Introducción a la inyección SQL",
          "Institution": "udemy",
          "Url": "https://www.udemy.com/course-dashboard-redirect/?course_id=2908130",
          "TittleImg": ""
        },
        {
          "Tittle": "Diseño y programación orientados a objetos en C #",
          "Institution": "udemy",
          "Url": "https://www.udemy.com/course-dashboard-redirect/?course_id=2442390",
          "TittleImg": ""
        },
        {
          "Tittle": "Desarrollando Aplicaciones en Angular 10 y ASP.NET Core 5",
          "Institution": "udemy",
          "Url": "https://www.udemy.com/course-dashboard-redirect/?course_id=3548864",
          "TittleImg": ""
        },
        {
          "Tittle": "React: De cero a experto (Hooks y MERN)",
          "Institution": "udemy",
          "Url": "https://www.udemy.com/course-dashboard-redirect/?course_id=3096364",
          "TittleImg": ""
        }
      ]
    }
  ],
  "References": [
    {
      "Key": "1",
      "Name": "Ing. José Manuel Tejeda",
      "PhoneNumber": "809-436-7126"
    },
    {
      "Key": "2",
      "Name": "Lic. Jairo Esteban Lora Mejía",
      "PhoneNumber": "829-983-1386"
    },
    {
      "Key": "3",
      "Name": "Ing. Julio Angel Florentino",
      "PhoneNumber": "829-854-7130"
    }
  ]
}`);