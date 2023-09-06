
export default interface IReference {
  Key: string;
  Name:string;
  PhoneNumber:string;
  
}

export class Reference implements IReference {
  Key: string;
  Name:string;
  PhoneNumber:string;
  
  constructor(Key:string, Name: string, PhoneNumber: string ) {
    this.Key = Key;
    this.Name = Name;
    this.PhoneNumber = PhoneNumber;
    
  }
}