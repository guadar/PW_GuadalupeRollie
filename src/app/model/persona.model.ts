export class persona{
    id?:number;
    nombre: String;
    apellido: String;
    urlFoto: String;

    constructor(nombre: String, apellido:String, imagen:String){
        this.nombre=nombre;
        this.apellido=apellido;
        this.urlFoto=imagen;
    }
}