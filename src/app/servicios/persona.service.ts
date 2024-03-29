import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL='http://localhost:8080/persona/';

  constructor(private http:HttpClient) { }

  public getPersona():Observable<persona>{
    //15:25
    return this.http.get<persona>(this.URL+'perfil');
  }
}
