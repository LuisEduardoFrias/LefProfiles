
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get, set, update, remove } from 'firebase/database';

export const firebaseConfig = {
  apiKey: "AIzaSyB1HA-j6DlFqROs8laaZQJyip6szDmxcNg",
  authDomain: "myprofiles-6a2dc.firebaseapp.com",
  databaseURL: "https://myprofiles-6a2dc-default-rtdb.firebaseio.com",
  projectId: "myprofiles-6a2dc",
  storageBucket: "myprofiles-6a2dc.appspot.com",
  messagingSenderId: "569992263021",
  appId: "1:569992263021:web:600def6dbe70d18d319664"
};

export default class Dajt {
  private _ref: any;

  constructor(obj: string) {
   alert("const")
   alert(this.ref)
   alert(obj)
   alert(firebaseConfig)
    this._ref = ref(getDatabase(initializeApp(firebaseConfig)), obj);
   alert(this.ref)
  }
  
  async get() {
   try {
    return await Promise.race([ get(this._ref).then((res) => res.val()), 
     new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), 10000))
    ]);
   } catch (error) {
    console.error("Error al obtener los datos:", error);
    return false;
   }
  }
  
  async post<T>(newObj: T): boolean {
    try {
   alert("alert: ")
   alert(this.ref)
   alert(newObj)
      const setter = await set(this._ref, newObj);
      alert("setter: "+setter);
      return true;
    } catch (error) {
      console.error("Error al crear el objeto:", error);
      return false;
    }
  }
  
  async update<T>(updateObj: T): boolean {
    try {
      await update(this._ref, updateObj);
      return true;
    } catch (error) {
      console.error("Error al actualizar el objeto:", error);
      return false;
    }
  }
  
  async delete(key: string): boolean {
    try {
      await remove(this._ref, key);
      return true;
    } catch (error) {
      console.error("Error al eliminar el objeto:", error);
      return false;
    }
  }
}