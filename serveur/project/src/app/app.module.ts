import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BiensComponent } from './recherche/biens/biens.component';
import { BiensService } from './services/biens.service';
import { BiensRechercheComponent } from './biens-recherche/biens-recherche.component';
import { MonCompteComponent } from './mon-compte/mon-compte.component';
import { AjoutBienComponent } from './ajout-bien/ajout-bien.component';
import { AuthComponent } from './auth/auth.component';
import { ConnexionComponent } from './auth/connexion/connexion.component';
import { RegisterComponent } from './auth/register/register.component';
import { HeaderComponent } from './header/header.component';
import { CompteComponent } from './auth/compte/compte.component';
import { AccueilComponent } from './accueil/accueil.component';
import { RechercheComponent } from './recherche/recherche.component';
import { ServicesComponent } from './recherche/services/services.component';
import { BiensDescriptifComponent } from './recherche/biens-descriptif/biens-descriptif.component';
import { ServicesDescriptifComponent } from './recherche/services-descriptif/services-descriptif.component';
import { BiensCompteComponent } from './recherche/biens-compte/biens-compte.component';

@NgModule({
  declarations: [
    AppComponent,
    BiensComponent,
    BiensRechercheComponent,
    MonCompteComponent,
    AjoutBienComponent,
    AuthComponent,
    ConnexionComponent,
    RegisterComponent,
    HeaderComponent,
    CompteComponent,
    AccueilComponent,
    RechercheComponent,
    ServicesComponent,
    BiensDescriptifComponent,
    ServicesDescriptifComponent,
    BiensCompteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [BiensService],
  bootstrap: [AppComponent]
})
export class AppModule { }
