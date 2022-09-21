import { Domicilio } from './domicilio';

export class EntidadEducativa {
  id?: number;
  nombre!: String;
  telefono!: String;
  email!: String;
  urlLogo!: String;
  domicilio!: Domicilio;
}
