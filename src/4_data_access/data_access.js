
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