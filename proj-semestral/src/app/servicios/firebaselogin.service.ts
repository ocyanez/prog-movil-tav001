import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

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


}
