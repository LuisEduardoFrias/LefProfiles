// import firebase from "firebase/app";
// import "firebase/firestore";
// 
// export default class dajt {
//   private collection: firebase.firestore.CollectionReference;
// 
//   constructor() {
//     this.collection = firebase.firestore().collection("https://console.firebase.google.com/project/myprofiles-6a2dc/database/myprofiles-6a2dc-default-rtdb/data/~2F?hl=es-419");
//   }
// 
//   public async getAll(): Promise<any[]> {
//     const snapshot = await this.collection.get();
//     return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//   }
// 
//   public async create(data: any): Promise<string | null> {
//     try {
//       const docRef = await this.collection.add(data);
//       return docRef.id;
//     } catch (error) {
//       console.error("Error al crear el documento:", error);
//       return null;
//     }
//   }
// 
//   public async update(id: string, data: any): Promise<void> {
//     try {
//       await this.collection.doc(id).update(data);
//     } catch (error) {
//       console.error("Error al actualizar el documento:", error);
//     }
//   }
// 
//   public async delete(id: string): Promise<void> {
//     try {
//       await this.collection.doc(id).delete();
//     } catch (error) {
//       console.error("Error al eliminar el documento:", error);
//     }
//   }
// }