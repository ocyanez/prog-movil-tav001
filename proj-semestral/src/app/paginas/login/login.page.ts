import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from 'src/app/componenetes/header/header.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports:[IonicModule,FormsModule,HeaderComponent]
})
export class LoginPage implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
  usuario:string = "";
  password:string = "";
  mensaje: string = "";

  iniciar_sesion(){
    if (this.usuario == "" || this.password== ""){
        this.mensaje = " Todos los campos deben ser llenados "
    }
    else{
      this.mensaje = " ";
      this.route.navigate(['/home']);
    }

  };

}
