import { Component, OnInit, Input } from '@angular/core';
import { ConnexionService } from './connexion.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  private mail : string = '';
  private mdp : string = '';
  private resultat : boolean = false;

  constructor(private service : ConnexionService) { }

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
  }

}
