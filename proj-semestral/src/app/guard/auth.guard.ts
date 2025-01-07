import { Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import {Storage} from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})

export class authGuard {
  constructor(private storage:Storage, private route:Router ){}

  canActivate : CanActivateFn = async(route,state)=>{
    const sessionActive = await this.storage.get("sessionID");
    if (sessionActive ){
      return this.route.createUrlTree(['/home']); 
      
    }
    else{
      return false;
    }
  }
}