import { Localidad } from './localidad';

export class Domicilio {
  id?: number;
  calle!: String;
  altura!: number;
  localidad!: Localidad;
}
