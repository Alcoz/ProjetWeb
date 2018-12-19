import { Component, OnInit } from '@angular/core';
import { ConnexionService } from '../connexion/connexion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private nom : string;
  private prenom : string;
  private mail : string;
  private mdp : string;
  private ville : string;
  private adresse : string;

  private resultat : Object;

  constructor(private service : ConnexionService, private router : Router) { }

  ngOnInit() {
  }

  inscription(){
  	let infos = {
  	  nom : this.nom,
  	  prenom : this.prenom,
      mail : this.mail,
      MDP : this.mdp,
      ville : this.ville,
      adresse : this.adresse
    }

    console.log(infos);

    this.service.inscription(infos)
    .subscribe(data => this.resultat = data)

    console.log(this.resultat);

    if(Object.keys(this.resultat).length != 0){
      var value = 'true';
      localStorage.setItem('isLoggedIn', value);
      localStorage.setItem('compte', JSON.stringify(this.resultat));
      this.router.navigate(['/auth/compte']);
    }
    else{
       console.log("erreur");
    }
  }
}
