
export default class daj {
  //
  // get
  //
  // static async get(obj) : void {
//     
//   }
//   //
//   // post
//   //
//   static async post(obj) : void {
//     const pro = Reflect.get(dataArray, obj.constructor.name);
// 
//     if (pro === undefined) {
//       if (!Reflect.set(obj, "Key", 1)) return false;
// 
//       return Reflect.set(dataArray, obj.constructor.Name, obj);
//     }
// 
//     if (!Reflect.set(obj, "Key", pro.length + 1)) return false;
// 
//     pro.push(obj);
// 
//     Reflect.set(dataArray, obj.constructor.Name, pro);
// 
//     return true;
//   }
//   //
//   // put
//   //
//   static async put(obj) {
//     let newPro = [...Reflect.get(dataArray, obj.constructor.name)];
// 
//     const index = newPro.findIndex((e) => e.Key === obj.Key);
// 
//     newPro[index] = {
//       ...newPro[index],
//       ...obj,
//     };
// 
//     return Reflect.set(dataArray, obj.constructor.Name, newPro);
//   }
//   //
//   // delete
//   //
//   static async delete(obj, Key) {
//     const pro = Reflect.get(dataArray, obj.constructor.name);
// 
//     if (pro === undefined) return false;
// 
//     const index = pro.findIndex((e) => e.Key == Key);
// 
//     if (index > -1) {
//       pro.splice(index, 1);
//     } else {
//       return false;
//     }
//     return Reflect.set(dataArray, obj.constructor.Name, pro);
//   }
}
