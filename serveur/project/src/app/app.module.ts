import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BiensComponent } from './biens/biens.component';
import { BiensService } from './biens/biens.service';
import { BiensRechercheComponent } from './biens-recherche/biens-recherche.component';
import { RegisterComponent } from './register/register.component';
import { MonCompteComponent } from './mon-compte/mon-compte.component';
import { AjoutBienComponent } from './ajout-bien/ajout-bien.component';

@NgModule({
  declarations: [
    AppComponent,
    BiensComponent,
    BiensRechercheComponent,
    RegisterComponent,
    MonCompteComponent,
    AjoutBienComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [BiensService],
  bootstrap: [AppComponent]
})
export class AppModule { }
