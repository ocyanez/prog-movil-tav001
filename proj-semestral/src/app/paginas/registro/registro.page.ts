import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: false
})
export class RegistroPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  nombre:string = "";
  nombreUsuario:string = "";
  password:string = "";
  password2:string = "";
  mensaje: string = "";
  
  registrar_usuario(){
    if (this.nombre == "" || this.nombreUsuario == "" || this.password == "" || this.password2 == ""){
      this.mensaje= "Todos los campos deben ser llenados "
    }
    else{
      if (this.password != this.password2){
        this.mensaje="las contraseñas no coinciden "
      }
      else{

        this.mensaje= " "
      }

    }
  }



}
