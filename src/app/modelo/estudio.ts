import { EntidadEducativa } from "./entidad-educativa";
import { Persona } from "./persona";
import { TipoEstudio } from "./tipo-estudio";

export class Estudio {
    id? : number;
    nombre! : String;
    anioInicioCursado! : Date;
    terminado! : boolean;
    tipoEstudio! : TipoEstudio;
    entidadEducativa! : EntidadEducativa;
    persona! : Persona;
}
