import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class FirebaseloginService {

  constructor( private fauth:AngularFireAuth) { }

  login(email:string,password:string){
    return this.fauth.signInWithEmailAndPassword(email,password);
  }

  create_user(email:string,password:string){
    return this.fauth.createUserWithEmailAndPassword(email,password);
  }


}
