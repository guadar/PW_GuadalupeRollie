import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/servicios/token.service';


@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
isLogged = false;
  constructor(private router : Router, private tokenService: TokenService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }

  }

  login(){
    this.router.navigate(['/login']);
  }

  onLogout():void{
    console.log("ESTA LOGEADO en logout???: " + this.isLogged);
    this.tokenService.logOut();
    console.log("ESTA LOGEADO en logout???: " + this.isLogged);
    //this.isLogged=false;
    window.location.reload();
  }

}
