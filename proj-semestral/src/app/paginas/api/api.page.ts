import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.page.html',
  styleUrls: ['./api.page.scss'],
  standalone: false
})
export class ApiPage implements OnInit {

  constructor(private api:ApiService) { }

  ngOnInit() {
    this.traer_datos();
  }
  datos:any[]=[];

  traer_datos(){
    this.api.solicitud().subscribe((data)=>{
      console.log(data);
      this.datos=data.meals;
    })
  }

}
