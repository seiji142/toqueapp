import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Conexion } from "../modelo/conexion";


@Injectable({
    providedIn: 'root'
})
export class ServiceConexion {

    constructor(private http: HttpClient) { }

    Url = 'http://127.0.0.1:8000/prueba/conexiones'

    //Url = AppEndpoints.API_END_POINT + AppEndpoints.EMPRESAS;

    getConexiones() {
        return this.http.get<Conexion[]>(this.Url);
    }


}
