
export default interface ISkill {
  Key: string;
  Name:string;
  UrlImage: string;
  Experience: number;
}

export class Skill implements ISkill {
  Key: string;
  Name:string;
  UrlImage: string;
  Experience: number;
  constructor(Key:string, Name: string, UrlImage: string, Experience: number,) {
    this.Key = Key;
    this.Name = Name;
    this.UrlImage = UrlImage;
    this.Experience = Experience;
  }
}