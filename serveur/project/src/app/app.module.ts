import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BiensComponent } from './recherche/biens/biens.component';
import { BiensService } from './services/biens.service';
import { BiensRechercheComponent } from './biens-recherche/biens-recherche.component';
import { AuthComponent } from './auth/auth.component';
import { ConnexionComponent } from './auth/connexion/connexion.component';
import { RegisterComponent } from './auth/register/register.component';
import { HeaderComponent } from './header/header.component';
import { CompteComponent } from './auth/compte/compte.component';
import { AccueilComponent } from './accueil/accueil.component';
import { RechercheComponent } from './recherche/recherche.component';
import { ServicesComponent } from './recherche/services/services.component';
import { BiensCompteComponent } from './recherche/biens-compte/biens-compte.component';
import { EmpruntCompteComponent } from './recherche/emprunt-compte/emprunt-compte.component';
import { DescriptifComponent } from './recherche/descriptif/descriptif.component';

@NgModule({
  declarations: [
    AppComponent,
    BiensComponent,
    BiensRechercheComponent,
    AuthComponent,
    ConnexionComponent,
    RegisterComponent,
    HeaderComponent,
    CompteComponent,
    AccueilComponent,
    RechercheComponent,
    ServicesComponent,
    BiensCompteComponent,
    EmpruntCompteComponent,
    DescriptifComponent
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
