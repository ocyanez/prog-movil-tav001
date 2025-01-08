import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  private urlApi="https://www.themealdb.com/api/json/v1/1/search.php?s="

  solicitud():Observable<any>{
    return this.http.get(this.urlApi);
    
  }
}
