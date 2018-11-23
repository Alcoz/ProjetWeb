import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BiensComponent } from './biens/biens.component';
import { BiensService } from './biens/biens.service';

@NgModule({
  declarations: [
    AppComponent,
    BiensComponent
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
