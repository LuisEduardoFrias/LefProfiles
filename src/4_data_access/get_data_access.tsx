
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

export const firebaseConfig = {
  apiKey: "AIzaSyB1HA-j6DlFqROs8laaZQJyip6szDmxcNg",
  authDomain: "myprofiles-6a2dc.firebaseapp.com",
  projectId: "myprofiles-6a2dc",
};

export default class dajt {
  private db: any;

  constructor() {
    this.db = getFirestore(initializeApp(firebaseConfig));
  }
  
  async get(obj: string) {
     const citiesCol = collection(this.db, obj);
     const citySnapshot = await getDocs(citiesCol);
     const cityList = citySnapshot.docs.map(doc => doc.data());
     return cityList;
  }
}


//
//   public async getAll(): Promise<any[]> {
//     const snapshot = await this.collection.get();
//     return snapshot.docs.map((doc: firebase.firestore.QueryDocumentSnapshot) => ({ id: doc.id,...doc.data() as any }));
//   }

//   public async create(data: any): Promise<string | null> {
//     try {
//       const docRef = await this.collection.add(data);
//       return docRef.id;
//     } catch (error) {
//       console.error("Error al crear el documento:", error);
//       return null;
//     }
//   }

//   public async update(id: string, data: any): Promise<void> {
//     try {
//       await this.collection.doc(id).update(data);
//     } catch (error) {
//       console.error("Error al actualizar el documento:", error);
//     }
//   }

//   public async delete(id: string): Promise<void> {
//     try {
//       await this.collection.doc(id).delete();
//     } catch (error) {
//       console.error("Error al eliminar el documento:", error);
//     
//   }