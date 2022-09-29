import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Persona } from '../modelo/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaDataService {
  private currentPersonSubject : BehaviorSubject<Persona> = new BehaviorSubject({} as Persona);
  currentPerson : Observable<Persona> = this.currentPersonSubject.asObservable();

  constructor() { }

  setCurrentPerson(persona : Persona): void{
    this.currentPersonSubject.next(persona);
  }

}
