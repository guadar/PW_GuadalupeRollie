import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { LogoArgProgComponent } from './componentes/logo-arg-prog/logo-arg-prog.component';
import { RedesSocialesComponent } from './componentes/redes-sociales/redes-sociales.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { LoginComponent } from './componentes/login/login.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { LaboralComponent } from './componentes/laboral/laboral.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
//importa componente para hacer barras de progreso circular
import { NgCircleProgressModule } from 'ng-circle-progress';
import { TituloSeccionComponent } from './componentes/compartido/titulo-seccion/titulo-seccion.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    LogoArgProgComponent,
    RedesSocialesComponent,
    BannerComponent,
    LoginComponent,
    AcercaDeComponent,
    LaboralComponent,
    EducacionComponent,
    HabilidadesComponent,
    TituloSeccionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
