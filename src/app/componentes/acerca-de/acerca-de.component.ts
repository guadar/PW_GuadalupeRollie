import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Persona } from 'src/app/modelo/persona';
import { PersonaDataService } from 'src/app/servicios/persona-data.service';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css'],
})
export class AcercaDeComponent implements OnInit, OnDestroy {
  persona: Persona = new Persona();
  private personaSubscription: Subscription | undefined;

  //constructor(private personaService:PersonaService) { }
  constructor(private personaData: PersonaDataService) {}

  ngOnInit(): void {
    /* this.personaService.getPersona().subscribe( data =>{
        console.log(data);
        this.persona=data;
    })*/
    this.personaSubscription = this.personaData.currentPerson.subscribe(
      (data) => {
        console.log('Persona en acerca de: ' + data);
        this.persona = data;
      }
    );
  }

  ngOnDestroy(): void {
    this.personaSubscription?.unsubscribe();
  }
}
