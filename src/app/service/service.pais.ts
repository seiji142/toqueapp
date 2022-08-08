import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pais } from 'src/app/Modelo/pais';
//import { AppEndpoints } from 'src/app/app-endpoints';

@Injectable({
  providedIn: 'root'
})
export class ServicePais {

  constructor(private http: HttpClient) { }

  Url = 'http://127.0.0.1:8000/prueba/paises'

  //Url = AppEndpoints.API_END_POINT + AppEndpoints.EMPRESAS;

  getPaises() {
    return this.http.get<Pais[]>(this.Url);
  }

}
