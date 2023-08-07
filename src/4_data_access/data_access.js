
import data from "./data.json";

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
   
    const pro = Reflect.get(data, obj.constructor.name);

    if (pro === undefined) {
      if (!Reflect.set(obj, "Key", 1)) return false;

      return Reflect.set(data, obj.constructor.Name, obj);
    }
 
    if (!Reflect.set(obj, "Key", pro.length + 1)) return false;
 
    pro.push(obj);

    Reflect.set(data, obj.constructor.Name, pro);
 
    return true;
  }
  
  //
  // put
  //
  static put(obj) {
    let newPro = [...Reflect.get(data, obj.constructor.name)];
 
    const index = newPro.findIndex((e) => e.Key === obj.Key);
 
    newPro[index] = {
      ...newPro[index],
      ...obj,
    };
 
    return Reflect.set(data, obj.constructor.Name, newPro);
  }
  
  //
  // delete
  //
  static delete(obj, Key) {
    const pro = Reflect.get(data, obj.constructor.name);
 
    if (pro === undefined) return false;
 
    const index = pro.findIndex((e) => e.Key === Key);

    if (index > -1) {
      pro.splice(index, 1);
    } else {
      return false;
    }
    return Reflect.set(data, obj.constructor.Name, pro);
  }
}
