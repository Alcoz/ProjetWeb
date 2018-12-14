import { Component, OnInit, Input } from '@angular/core';
import { ConnexionService } from './connexion.service';
import { AuthComponent } from '../auth.component'

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  private mail : string = '';
  private mdp : string = '';
  private resultat : Object;

  constructor(private service : ConnexionService, private test : AuthComponent) { }

  ngOnInit() {
  }

  onSubmitConnexion(){
  	console.log(this.mail);
  	console.log(this.mdp);

  	let infos = {
  	  mail : this.mail,
  	  mdp : this.mdp
  	}

  	this.service.connexion(infos).subscribe(res => {
    this.resultat = res;});

    console.log(this.resultat);
    if(!(this.resultat == [])){
      console.log("lulu");
      this.test.connexion();
    }
    
  }

}
