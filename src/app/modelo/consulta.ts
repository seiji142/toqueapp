import { Conexion } from "./conexion";

export class Consulta {
    id?: number;
    fecha_consulta:Date;
    cant_dias?: number;
    precio?: number;
    contacto:String; 
    dias_total:number;
    precio_total: number;
    conexiones: [Conexion];
    
}