
import { initializeApp } from 'firebase/app';
import firebase from 'firebase/compat/app';
import { getDatabase, ref, set, child, get } from "firebase/database";
import 'firebase/compat/database';
import 'firebase/database';

export const firebaseConfig = {
   apiKey: "AIzaSyB1HA-j6DlFqROs8laaZQJyip6szDmxcNg",
   authDomain: "myprofiles-6a2dc.firebaseapp.com",
   databaseURL: "https://myprofiles-6a2dc-default-rtdb.firebaseio.com",
   projectId: "myprofiles-6a2dc",
   storageBucket: "myprofiles-6a2dc.appspot.com",
   messagingSenderId: "569992263021",
   appId: "1:569992263021:web:600def6dbe70d18d319664"
};

interface Generic {
 Key: string;
}

export default class Dajt {
 
  _database: any;
  _obj: string;
  
  constructor(obj: string) {
    firebase.initializeApp(firebaseConfig);
    this._database = getDatabase();
    this._obj = obj;
  }
  
  get(): any {
    return get(child(ref(this._database), `${this._obj}/`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        return false;
      }
    }).catch((error) => {
      console.error(error);
      return false;
    })
  }
  
  post<T extends Generic>(newObj: T): boolean {
    (async () => {
      return await this.get()
      .then(async (arrayObj: any[]) => {
        newObj.Key = arrayObj.length.toString();
        return await set(ref(this._database, `${this._obj}/${arrayObj.length}`), newObj);
      });
    })();
    return true;
  }

  update<T>(updateObj: T): boolean {
    const opcional = updateObj;
    return false;
  }
  
  delete(key: string): boolean {
    const opcional = key;
    return false;
  }
}