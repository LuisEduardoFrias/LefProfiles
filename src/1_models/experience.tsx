
export default interface IExperience {
  Key: string;
  Company:string;
  Description:string;
  Position:string;
  Tacks:string[];
  
}

export class Experience implements IExperience {
  Key: string;
  Company:string;
  Description:string;
  Position:string;
  Tacks:string[];
  
  constructor(Key:string, 
  Company:string,
  Description:string,
  Position:string,
  Tacks:string[] ) {
    
    this.Key = Key;
    this.Company = Company;
    this.Description = Description;
    this.Position = Position;
    this.Tacks = Tacks;
  }
}