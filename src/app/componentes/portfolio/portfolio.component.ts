import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/modelo/persona';
import { PersonaDataService } from 'src/app/servicios/persona-data.service';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  persona: Persona = new Persona();

  constructor(
    private personaService: PersonaService,
    private personaData: PersonaDataService
  ) {}

  ngOnInit(): void {
    this.personaService.getPersona().subscribe((data) => {
      console.log(data);
      this.persona = data;
      this.personaData.setCurrentPerson(this.persona);
    });
  }

  //https://asfo.medium.com/usando-app-initializer-en-angular-e822f3af3fb5
  //https://www.vitamindev.com/angular/how-to-initialize-a-service-on-startup/
}
