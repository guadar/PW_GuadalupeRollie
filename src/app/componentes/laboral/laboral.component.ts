import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Persona } from 'src/app/modelo/persona';
import { PersonaDataService } from 'src/app/servicios/persona-data.service';

@Component({
  selector: 'app-laboral',
  templateUrl: './laboral.component.html',
  styleUrls: ['./laboral.component.css']
})
export class LaboralComponent implements OnInit, OnDestroy {

  persona : Persona = new Persona();
  private suscripcionPersona :Subscription | undefined;

  constructor(private personaData : PersonaDataService) { }

  ngOnInit(): void {
    this.suscripcionPersona = this.personaData.currentPerson.subscribe(
      (data) => {
        console.log('PERSONA EN LABORAL: ' + data);
        this.persona = data;
      }
    );
  }


  ngOnDestroy(): void {
    this.suscripcionPersona?.unsubscribe();
  }

}
