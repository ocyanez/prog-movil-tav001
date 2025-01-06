import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor() {}
  nombre : string = "";
  mensaje : string = "";

  mostrar_nombre(){
   if (this.nombre == ""){
    this.mensaje =" Error debe ingresar un nombre";
   }
   else{
    this.mensaje = " ";
   }
  }

}
