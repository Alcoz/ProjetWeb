import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BiensRechercheComponent } from './biens-recherche/biens-recherche.component';
import { BiensComponent } from './biens/biens.component';
import { RegisterComponent } from './register/register.component';
import { MonCompteComponent } from './mon-compte/mon-compte.component';
import { AjoutBienComponent } from './ajout-bien/ajout-bien.component';

const routes: Routes = [
	{ path: 'accueil', component: BiensComponent },
	{ path: 'recherche', component: BiensRechercheComponent },
	{ path: 'register', component: RegisterComponent },
	{ path: 'compte', component: MonCompteComponent },
	{ path: 'compte/ajout', component: AjoutBienComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
