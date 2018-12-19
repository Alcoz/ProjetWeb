import { Component, OnInit } from '@angular/core';
import { BiensService } from '../../services/biens.service';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {

  private _id : string;
	private nom : string;
	private prenom : string;
	private ville : string;
	private mail : string;
	private niveau : string;
  private niveauChiffre : number;
	private compteur : number;
	private adresse : number;
  private avertissement : number;

  constructor(private service : BiensService) { }

  ngOnInit() {
  	var compte = localStorage.getItem("compte");
  	var value = JSON.parse(compte);
    console.log(value[0]);
    this._id = value[0]._id;
  	this.mail = value[0].mail;
  	this.nom = value[0].nom;
  	this.prenom = value[0].prénom;
  	this.ville = value[0].ville;
  	this.adresse = value[0].adresse;
    this.compteur = value[0].score;

  	if(value[0].Admin == 1){
  		this.niveau = 'Administrateur';
      this.niveauChiffre = 1;
  	}
  	else{
  		this.niveau = 'Utilisateur';
      this.niveauChiffre = 0;
  	}

    this.avertissement = value[0].avert;
  }

  avertissementSuppr(param){
    this.service.avertissementSuppr(param).subscribe();
    this.avertissement = 0;
    window.location.reload();
  }
}
