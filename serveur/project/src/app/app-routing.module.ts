import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BiensRechercheComponent } from './biens-recherche/biens-recherche.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AuthComponent } from './auth/auth.component';
import { CompteComponent } from './auth/compte/compte.component';
import { DescriptifComponent } from './recherche/descriptif/descriptif.component';
import { AjoutBienComponent } from './auth/compte/ajout/ajout-bien/ajout-bien.component';
import { AjoutServiceComponent } from './auth/compte/ajout/ajout-service/ajout-service.component';
import { ModifierBienComponent } from './auth/compte/modifier/modifier-bien/modifier-bien.component';
import { ModifierServiceComponent } from './auth/compte/modifier/modifier-service/modifier-service.component';


const routes: Routes = [
	{ path: 'accueil', component: AccueilComponent },
	{ path: 'recherche', component: BiensRechercheComponent },
	{ path: 'auth', component: AuthComponent },
	{ path: 'auth/compte', component: CompteComponent },
	{ path: 'recherche/descriptif', component: DescriptifComponent },
	{ path: 'auth/compte/ajout/ajout-bien', component: AjoutBienComponent },
	{ path: 'auth/compte/ajout/ajout-service', component: AjoutServiceComponent },
	{ path: 'auth/compte/modifier/modifier-service', component: ModifierServiceComponent },
	{ path: 'auth/compte/modifier/modifier-bien', component: ModifierBienComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

