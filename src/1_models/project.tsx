
export default interface IProject {
  Key: string;
  Tittle:string;
  Description:string;
  Tegnologys:string[];
  Repositorys:string[];
  
}

export class Project implements IProject {
  Key: string;
  Tittle:string;
  Description:string;
  Tegnologys:string[];
  Repositorys:string[];
  
  constructor(Key:string,
  Tittle:string,
  Description:string,
  Tegnologys:string[],
  Repositorys:string[]) {
    this.Key = Key;
    this.Tittle = Tittle;
    this.Description = Description;
    this.Tegnologys = Tegnologys;
    this.Repositorys = Repositorys;
  }
}