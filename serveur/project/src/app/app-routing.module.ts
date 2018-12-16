import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BiensRechercheComponent } from './biens-recherche/biens-recherche.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AuthComponent } from './auth/auth.component';
import { CompteComponent } from './auth/compte/compte.component';
import { BiensDescriptifComponent } from './recherche/biens-descriptif/biens-descriptif.component';


const routes: Routes = [
	{ path: 'accueil', component: AccueilComponent },
	{ path: 'recherche', component: BiensRechercheComponent },
	{ path: 'auth', component: AuthComponent },
	{ path: 'auth/compte', component: CompteComponent },
	{ path: 'recherche/biens-descriptif', component: CompteComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

