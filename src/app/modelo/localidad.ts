import { Provincia } from './provincia';

export class Localidad {
  id?: number;
  nombre!: String;
  provincia!: Provincia;
}
