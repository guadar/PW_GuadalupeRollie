import { Estudio } from "./estudio";

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
}
