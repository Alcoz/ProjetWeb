import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BiensRechercheComponent } from './biens-recherche/biens-recherche.component';
import { BiensComponent } from './biens/biens.component';
import { AuthComponent } from './auth/auth.component';
import { MonCompteComponent } from './mon-compte/mon-compte.component';
import { AjoutBienComponent } from './ajout-bien/ajout-bien.component';

const routes: Routes = [
	{ path: 'accueil', component: BiensComponent },
	{ path: 'recherche', component: BiensRechercheComponent },
	{ path: 'auth', component: AuthComponent },
	{ path: 'compte', component: MonCompteComponent },
	{ path: 'compte/ajout', component: AjoutBienComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
