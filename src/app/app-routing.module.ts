import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';

const routes: Routes = [
  {path:'persona/perfil', component:PortfolioComponent},
  {path:'login', component:LoginComponent},
  {path:'', redirectTo:'persona/perfil', pathMatch:'full'}
];
//MODIFICAR

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
