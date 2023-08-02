
export default interface ISkill {
  Key: string;
  Name:string;
  UrlImage: string;
}

export class Skill implements ISkill {
  Key: string;
  Name:string;
  UrlImage: string;
  constructor(Key:string, Name: string, UrlImage: string) {
    this.Key = Key;
    this.Name = Name;
    this.UrlImage = UrlImage;
  }
}