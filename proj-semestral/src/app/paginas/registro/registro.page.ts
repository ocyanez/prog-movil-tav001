import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: false
})
export class RegistroPage implements OnInit {

  constructor(private storage: Storage, route:Router) { 
    this.init_storage();
  }

  ngOnInit() {
  }

  nombre:string = "";
  nombreUsuario:string = "";
  password:string = "";
  password2:string = "";
  mensaje: string = "";

 async init_storage(){
   await this.storage.create()
  }
  
  registrar_usuario(){
    // validacion de campos vacios - en formulario de registro 
    if (this.nombre == "" || this.nombreUsuario == "" || this.password == "" || this.password2 == ""){
      this.mensaje= "Todos los campos deben ser llenados "
    }
    else{
      // validacion de contraseñas iguales
      if (this.password != this.password2){
        this.mensaje="las contraseñas no coinciden "
      }
      else{
        //alamcenar datos en el storage - crear el usuario  
        this.mensaje= " "
        this.storage.set("datosUsuario",{"nombre":this.nombre,"nombreUsuario":this.nombreUsuario,"password":this.password})
        
      }
    }
  }



}
