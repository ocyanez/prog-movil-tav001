import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor(private storage:Storage) {
    this.init_storage();
  }
  nombre : string = "";
  NombreUsuario : string = "";
  mensaje : string = "";
  async init_storage(){
    await this.storage.create();

  }

  mostrar_nombre(){
   if (this.nombre == ""){
    this.mensaje =" Error debe ingresar un nombre";
   }
   else{
    this.mensaje = " ";
   }
  }
  async ngOnInit() {
    const datosUsuario = await this.storage.get('datosUsuario');
    this.NombreUsuario = datosUsuario?.nombreUsuario
  }

}
