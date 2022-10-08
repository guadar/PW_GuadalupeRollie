import { Persona } from './persona';
import { TipoEmpleo } from './tipo-empleo';

export class Empleo {
  id?: number;
  nombreEmpresa!: String;
  fechaInicio!: Date;
  fechaFin!: Date;
  trabajoActual!: boolean;
  descripcion!: String;

  tipoEmpleo!: TipoEmpleo;
  persona!: Persona;
}
