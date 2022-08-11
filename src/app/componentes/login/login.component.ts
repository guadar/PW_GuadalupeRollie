import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/model/login-usuario';
import { AuthService } from 'src/app/servicios/auth.service';
import { TokenService } from 'src/app/servicios/token.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLogged=false;
  islogginFail=false;
  loginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  password!:string;
  roles:string[]=[];
  errMje!:string;

  form:FormGroup;
  


  constructor(private tokenService:TokenService, private authService:AuthService, 
    private router:Router, private formBuilder:FormBuilder) {
      this.form=formBuilder.group(
        {
          cnombreUsuario:['', Validators.required],
          cpassword:['', Validators.required]
        }
      )

     }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged=true;
      this.islogginFail=false;
      this.roles=this.tokenService.getAuthorities();
    }
  }

  onLogin():void{
    console.log("LLAMA A ONLOGIN CON LOS CAMPOS con datos");
    console.log("USUARIO: " + this.nombreUsuario + " PASSWORD: " + this.password);
    this.loginUsuario=new LoginUsuario(this.nombreUsuario, this.password);
    this.authService.login(this.loginUsuario).subscribe(data=>{
        this.isLogged=true;
        this.islogginFail=false;
        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities);
        this.roles=data.authorities;
        this.router.navigate(['/persona/perfil']);
      }, err =>{
        this.isLogged=false;
        this.islogginFail=true;
        this.errMje=err.error.mensaje;
        console.log(this.errMje);
      }
    )//3:09
  }

  get cnombreUsuario(){
    return this.form.get('cnombreUsuario');
  }

  get cpassword(){
    return this.form.get('cpassword');
  }

  

}
