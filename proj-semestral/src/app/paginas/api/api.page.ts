import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-api',
  templateUrl: './api.page.html',
  styleUrls: ['./api.page.scss'],
  standalone: false
})
export class ApiPage implements OnInit {

  constructor(private api:ApiService , private storage:Storage) { 
    this.init_storage();
  }

  ngOnInit() {
    this.traer_datos();
    this.obtener_codigo();

  }
  datos:any[]=[];

  async traer_datos(){
    this.datos =  await this.storage.get("respuestaApi");}
    

  init_storage(){
    this.storage.create();
  }
  async obtener_codigo(){
    this.api.solicitud().subscribe(async (Response:HttpResponse<any>)=>{
      console.log("estado",Response.status)
      if(Response.status==200){
        console.log("esta bien la peticion ")
        await this.storage.set("respuestaApi",Response.body.meals)
      }
    })

  }

}
