import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss'],
})
export class MapaComponent implements OnInit {

  latitud: number = 0;
  longitud: number = 0; 

  map: mapboxgl.Map | undefined;
  style = 'mapbox://styles/mapbox/streets-v11';

  constructor() { }

  ngOnInit() {
    this.obtenerUbicacion();
  }

  async obtenerUbicacion(){
    try {
      const ubicacion = await Geolocation.getCurrentPosition();
      this.latitud = ubicacion.coords.latitude;
      this.longitud = ubicacion.coords.longitude;

      // Inicializar el mapa después de obtener la ubicación
      this.iniciarMapa();
    } catch (error) {
      console.error('Error al obtener la ubicación', error);
      // Si ocurre un error, puedes usar coordenadas predeterminadas o mostrar un mensaje de error
    }
  }

  iniciarMapa() {
    this.map = new mapboxgl.Map({
      accessToken: environment.mapbox.accessToken,
      container: 'map',
      style: this.style,
      zoom: 13,
      center: [this.longitud, this.latitud]
    });
  }
}
