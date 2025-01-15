import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable,map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseloginService {

  constructor( private fauth:AngularFireAuth, private firestore: AngularFirestore) { }

  login(email:string,password:string){
    return this.fauth.signInWithEmailAndPassword(email,password);
  }

  async create_user(email:string,password:string,name:string){
    const createuser = await this.fauth.createUserWithEmailAndPassword(email,password);
    const uid = createuser.user?.uid;
    if(uid){
      const user ={
        uid:uid,
        email:email,
        role:"user",
        nombre:name
      };
      this.firestore.collection('users').doc(uid).set(user);
    }

  }

  logout(){
    return this.fauth.signOut();
  }


    //Funcion para obtener datos de un usuario basado por su correo electronico
    obtenerDatos(username: string): Observable<any> {
      return this.firestore.collection('users', ref => ref.where('email', '==', username))
        .snapshotChanges()
        .pipe(
          map(actions => {
            return actions.map(action => {
              const data = action.payload.doc.data();
              const id = action.payload.doc.id;
              return { id, data };
            })[0]; 
          })
        );
    }


}
