import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {

	private nom : string = 'test';
	private prenom : string;
	private ville : string;
	private mail : string;
	private niveau : string;
	private compteur : number;
	private adresse : number;
  constructor() { }

  ngOnInit() {
  	var compte = localStorage.getItem("compte");
  	var value = JSON.parse(compte);
  	this.mail = value[0].mail;
  	this.nom = value[0].nom;
  	this.prenom = value[0].prénom;
  	this.ville = value[0].ville;
  	this.adresse = value[0].adresse;
    
  	if(value[0].Admin == 1){
  		this.niveau = 'Administrateur';
  	}
  	else{
  		this.niveau = 'Utilisateur';
  	}
  }

}
