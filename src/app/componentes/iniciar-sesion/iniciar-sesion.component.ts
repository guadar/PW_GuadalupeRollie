import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
//import { Router } from '@angular/router';

//https://blog.nubecolectiva.com/crear-un-formulario-con-angular-7-y-bootstrap-4-validacion-parte-2-final/
//https://angular.io/guide/form-validation

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {
  fGLogin : FormGroup;
  //constructor(private formBuilder:FormBuilder, private autenticacionService:AutenticacionService, private ruta:Router) { 
  constructor(private formBuilder:FormBuilder){ 
      this.fGLogin=this.formBuilder.group({
        email : ['', [Validators.required, Validators.email]],
        password : ['', [Validators.required, Validators.minLength(8)]]
      });
  }

  ngOnInit(): void {
  }

  get Email(){
    return this.fGLogin.get('email');
  }

  get Password(){
    return this.fGLogin.get('password');
  }

 
 /* onEnviar(event:Event){
    this.autenticacionService.IniciarSesion(this.form.value).subscribe(data=>{
      console.log("DATA: " + JSON.stringify(data));
      this.ruta.navigate(['/portfolio']);
    }
      )
  }*/

}
