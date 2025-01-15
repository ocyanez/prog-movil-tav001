import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from 'src/app/componenetes/header/header.component';
import { Router } from '@angular/router';
// importar storage para almacenar datos
import { Storage } from '@ionic/storage-angular';
import { FirebaseloginService } from 'src/app/servicios/firebaselogin.service';
import { Geolocation } from '@capacitor/geolocation';
import { Camera,CameraResultType,CameraSource } from '@capacitor/camera';
import {defineCustomElements} from '@ionic/pwa-elements/loader'; 
defineCustomElements(window);

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports:[IonicModule,FormsModule,HeaderComponent]
})
export class LoginPage implements OnInit {
  // constructor para inicializar el storage y el router
  constructor(private route:Router, private storage:Storage,private firebase:FirebaseloginService ) { 
    this.init_storage();
    this.obtenerUbicacion();
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
  user:any



// crear funcion para inicializar el storage
  async init_storage(){
    await this.storage.create()
  };

  iniciar_sesionF(){
    this.firebase.login(this.usuario,this.password).then(res=>{
      this.firebase.obtenerDatos(this.usuario).subscribe(user=>{
        this.user = user;
        console.log(this.usuario)
        console.log("este es el correo "+this.user.data.email)
        this.storage.set("datosFirebase",{"correo":this.user.data.email})
      })
      console.log(res);
      this.route.navigate(['/home']);

    }).catch(err=>console.log(err));

  }



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
      this.storage.set("sessionID",true)
      this.route.navigate(['/home']);
    }

  };
  // funcion para obtener ubicacion
  async obtenerUbicacion(){
    const coordenadas = await Geolocation.getCurrentPosition();
    console.log("Longitud "+coordenadas.coords.longitude);
    console.log("Latitud "+coordenadas.coords.latitude);
    console.log("accuracy "+coordenadas.coords.accuracy);
    console.log("Altitud "+coordenadas.coords.altitude);
  }

  async tomarfoto(){
    const image = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });
    console.log("resultado de la camara "+ image.webPath);
  }


}
