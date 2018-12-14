import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BiensComponent } from './biens/biens.component';
import { BiensService } from './biens/biens.service';
import { BiensRechercheComponent } from './biens-recherche/biens-recherche.component';
import { MonCompteComponent } from './mon-compte/mon-compte.component';
import { AjoutBienComponent } from './ajout-bien/ajout-bien.component';
import { AuthComponent } from './auth/auth.component';
import { ConnexionComponent } from './auth/connexion/connexion.component';
import { RegisterComponent } from './auth/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    BiensComponent,
    BiensRechercheComponent,
    MonCompteComponent,
    AjoutBienComponent,
    AuthComponent,
    ConnexionComponent,
    RegisterComponent
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
