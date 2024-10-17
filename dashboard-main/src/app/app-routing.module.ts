import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { GererCandidatureComponent } from './gerer-candidature/gerer-candidature.component';
import { ChatComponent } from './chat/chat.component';
import { GererReclamationComponent } from './gerer-reclamation/gerer-reclamation.component';
import { GererActualiteComponent } from './gerer-actualite/gerer-actualite.component';
import { GererEvenementComponent } from './gerer-evenement/gerer-evenement.component';
import { UserListComponent } from './user-list/user-list.component';
import { GererOffreComponent } from './gerer-offre/gerer-offre.component';
import { ProjetsComponent } from './projets/projets.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'employees', component: UserListComponent },
  { path: 'board', component: BoardAdminComponent },
  { path: 'sidebar', component: SidebarComponent },
  { path: 'projets', component: ProjetsComponent },
  { path: 'gerer-candidature', component: GererCandidatureComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'gerer-reclamation', component: GererReclamationComponent },
  { path: 'gerer-actualite', component: GererActualiteComponent },
  { path: 'gerer-evenement', component: GererEvenementComponent },
  { path: 'gerer-offre', component: GererOffreComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
