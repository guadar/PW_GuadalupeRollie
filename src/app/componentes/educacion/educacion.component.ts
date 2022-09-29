import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { Persona } from 'src/app/modelo/persona';
import { PersonaDataService } from 'src/app/servicios/persona-data.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit, OnDestroy{
  
  persona : Persona = new Persona();
  private suscripcionPersona :Subscription | undefined;

  constructor(private personaData: PersonaDataService) {}

  ngOnInit(): void {
    this.suscripcionPersona = this.personaData.currentPerson.subscribe(
      (data) => {
        console.log('PERSONA EN EDUCACION: ' + data);
        this.persona = data;
      }
    );
  }

  ngOnDestroy(): void {
    this.suscripcionPersona?.unsubscribe();
  }

}
