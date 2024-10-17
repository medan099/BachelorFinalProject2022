import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule, } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageComponent } from './page/page.component';
import { ContentService } from './shared/services/content.service';
import { FullpageDirective } from './shared/directives/fullpage.directive';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { ExpertiseComponent } from './expertise/expertise.component';
import { TeamComponent } from './team/team.component';
import { HistoireComponent } from './histoire/histoire.component';
import { ServicesComponent } from './services/services.component';
import { ChiffreComponent } from './chiffre/chiffre.component';
import { ValeurComponent } from './valeur/valeur.component';
import { OffreComponent } from './offre/offre.component';
import { CandidatureComponent } from './candidature/candidature.component';
import { ActualiteComponent } from './actualite/actualite.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    FullpageDirective,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    ExpertiseComponent,
    TeamComponent,
    HistoireComponent,
    ServicesComponent,
    ChiffreComponent,
    ValeurComponent,
    OffreComponent,
    CandidatureComponent,
    ActualiteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [ContentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
