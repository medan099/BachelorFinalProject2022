import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualiteComponent } from './actualite/actualite.component';
import { CandidatureComponent } from './candidature/candidature.component';
import { ChiffreComponent } from './chiffre/chiffre.component';
import { ContactComponent } from './contact/contact.component';
import { ExpertiseComponent } from './expertise/expertise.component';
import { HistoireComponent } from './histoire/histoire.component';
import { OffreComponent } from './offre/offre.component';
import { PageComponent } from './page/page.component';
import { ServicesComponent } from './services/services.component';
import { TeamComponent } from './team/team.component';
import { ValeurComponent } from './valeur/valeur.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: PageComponent, data: {page: 'home'}},
  {path: 'about', component: PageComponent, data: {page: 'about'}},
  {path: 'contact', component: ContactComponent, data: {page: 'contact'}},
  {path: 'expertise', component: ExpertiseComponent, data: {page: 'expertise'}},
  {path: 'services', component: ServicesComponent, data: {page: 'services'}},
  {path: 'team', component: TeamComponent, data: {page: 'team'}},
  {path: 'histoire', component: HistoireComponent, data: {page: 'histoire'}},
  {path: 'chiffre', component: ChiffreComponent, data: {page: 'chiffre'}},
  {path: 'valeur', component: ValeurComponent, data: {page: 'valeur'}},
  {path: 'offre', component: OffreComponent, data: {page: 'offre'}},
  {path: 'candidature', component: CandidatureComponent, data: {page: 'candidature'}},
  {path: 'actualite', component: ActualiteComponent, data: {page: 'actualite'}},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
