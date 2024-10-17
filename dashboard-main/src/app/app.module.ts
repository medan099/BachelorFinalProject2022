import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { RouterModule } from '@angular/router';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { SidebarComponent } from './sidebar/sidebar.component';
import { GererCandidatureComponent } from './gerer-candidature/gerer-candidature.component';
import { ChatComponent } from './chat/chat.component';
import { GererReclamationComponent } from './gerer-reclamation/gerer-reclamation.component';
import { GererActualiteComponent } from './gerer-actualite/gerer-actualite.component';
import { GererEvenementComponent } from './gerer-evenement/gerer-evenement.component';
import { UserListComponent } from './user-list/user-list.component';
import { GererOffreComponent } from './gerer-offre/gerer-offre.component';
import { ProjetsComponent } from './projets/projets.component';
import { CalendarModule, DatePickerModule, TimePickerModule, DateRangePickerModule, DateTimePickerModule } from '@syncfusion/ej2-angular-calendars';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    SidebarComponent,
    GererCandidatureComponent,
    ChatComponent,
    GererReclamationComponent,
    GererActualiteComponent,
    GererEvenementComponent,
    UserListComponent,
    GererOffreComponent,
    ProjetsComponent

  ],
  imports: [
    RouterModule,
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CalendarModule, 
    DatePickerModule, 
    TimePickerModule, 
    DateRangePickerModule, 
    DateTimePickerModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
