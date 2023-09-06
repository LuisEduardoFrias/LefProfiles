
// export default interface IMoreEducation {
//   Tittle:string;
//   Url:string;
//   Institution:string;
//   TittleImg:string;
// }

export default interface IStudie {
  Key: string;
  Tittle:string;
  Url:string;
  Institution:string;
  TittleImg:string;
  MoreEducation:IStudie[];
}

export class Studie implements IStudie {
  Key: string;
  Tittle:string;
  Url:string;
  Institution:string;
  TittleImg:string;
  MoreEducation:IStudie[];
  
  constructor(Key:string, 
  Tittle:string,
  Institution:string,
  TittleImg:string,
  Url:string,
  MoreEducation:IStudie[],
  ) {
    this.Key = Key;
    this.Tittle = Tittle;
    this.Url = Url;
    this.Institution = Institution;
    this.TittleImg = TittleImg;
    this.MoreEducation = MoreEducation;
  }
}