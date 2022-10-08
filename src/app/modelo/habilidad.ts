import { Persona } from "./persona";
import { TipoHabilidad } from "./tipo-habilidad";

export class Habilidad {
    id?:number;
    nombre!:String;
    gradoDominio!:number;
    tipoHabilidad!:TipoHabilidad;
    persona!:Persona;
}
