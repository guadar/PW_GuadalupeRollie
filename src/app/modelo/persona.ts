import { Empleo } from "./empleo";
import { Estudio } from "./estudio";
import { Habilidad } from "./habilidad";

export class Persona {
    id? : number;
    nombre! : string;
    apellido! : string;
    fechaNacimiento! : Date;
    telefono! : string;
    email! : string;
    sobreMi! : string;
    urlFoto! : string;
    listaEstudio! : Estudio[];
    listaEmpleos!:Empleo[];
    listaHabilidades!:Habilidad[];
}
