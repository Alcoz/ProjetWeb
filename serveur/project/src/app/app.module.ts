import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BiensComponent } from './biens/biens.component';
import { BiensService } from './biens/biens.service';
import { BiensRechercheComponent } from './biens-recherche/biens-recherche.component';

@NgModule({
  declarations: [
    AppComponent,
    BiensComponent,
    BiensRechercheComponent
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
