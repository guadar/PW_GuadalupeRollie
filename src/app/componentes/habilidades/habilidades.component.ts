import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { Persona } from 'src/app/modelo/persona';
import { PersonaDataService } from 'src/app/servicios/persona-data.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit, OnDestroy {

  persona : Persona=new Persona();
  private suscripcionPersona :Subscription | undefined;

  constructor(private personaData : PersonaDataService) { }

  ngOnInit(): void {
    this.suscripcionPersona = this.personaData.currentPerson.subscribe(
      (data) => {
        console.log('PERSONA EN HABILIDAD: ' + data);
        this.persona = data;
      }
    );
  }

  ngOnDestroy(): void {
    this.suscripcionPersona?.unsubscribe();
  }

}
