import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../modelo/persona';

//https://www.positronx.io/angular-httpclient-http-service/
//https://mercyjemosop.medium.com/rest-api-with-angular-e7c2ceaaace1

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  apiUrl='http://localhost:8080/persona';

  constructor(private httpClient: HttpClient) { }

  getPersona():Observable<Persona>{
    return this.httpClient.get<Persona>(this.apiUrl);
  }
}
