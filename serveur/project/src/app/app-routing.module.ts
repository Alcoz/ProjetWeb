import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BiensRechercheComponent } from './biens-recherche/biens-recherche.component';
import { BiensComponent } from './biens/biens.component';

const routes: Routes = [
	{ path: 'accueil', component: BiensComponent },
	{ path: 'recherche', component: BiensRechercheComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
