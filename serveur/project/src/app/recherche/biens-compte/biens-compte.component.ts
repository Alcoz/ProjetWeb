import { Component, OnInit } from '@angular/core';
import { BiensService} from '../../services/biens.service'

@Component({
  selector: 'app-biens-compte',
  templateUrl: './biens-compte.component.html',
  styleUrls: ['./biens-compte.component.css']
})
export class BiensCompteComponent implements OnInit {

  private listObjetsProp : Object[];
  constructor(private service : BiensService) { }

  ngOnInit() {
  	this.biensUtilisateurs();
  }

  biensUtilisateurs(){
  	var object = JSON.parse(localStorage.getItem("compte"));
  	var mail = object[0].mail;

  	console.log(mail);
  	this.service.getBiensUtilisateur(mail)
    .subscribe(data => {this.listObjetsProp = data;});
  }
}
