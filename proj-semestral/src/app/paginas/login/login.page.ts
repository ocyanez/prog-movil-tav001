import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from 'src/app/componenetes/header/header.component';
import { Router } from '@angular/router';
// importar storage para almacenar datos
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports:[IonicModule,FormsModule,HeaderComponent]
})
export class LoginPage implements OnInit {
  // constructor para inicializar el storage y el router
  constructor(private route:Router, private storage:Storage ) { 
    this.init_storage();
  }

  // funcion para obtener datos del storage
  async ngOnInit() {
    const datosusuarios = await this.storage.get("datosUsuario");
    this.datos_nombreUsuario = datosusuarios.nombreUsuario;
    this.datos_password = datosusuarios.password;
  }
  //variables para almacenar datos del storage y del front 
  datos_nombreUsuario   =  "";
  datos_password = "";
  usuario:string = "";
  password:string = "";
  mensaje: string = "";



// crear funcion para inicializar el storage
  async init_storage(){
    await this.storage.create()
  };


// funcion para iniciar sesion
  iniciar_sesion(){
    if (this.usuario == "" || this.password== ""){
        this.mensaje = " Todos los campos deben ser llenados "
    }
    // si el usuario y la contraseña son correctos
    else if (this.usuario != this.datos_nombreUsuario || this.password != this.datos_password){
      this.mensaje = "Usuario o contraseña incorrectos"
    }
    else{
      this.mensaje = " ";
      this.route.navigate(['/home']);
    }

  };

}
