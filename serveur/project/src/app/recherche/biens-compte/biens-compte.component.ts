import { Component, OnInit } from '@angular/core';
import { BiensService} from '../../services/biens.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-biens-compte',
  templateUrl: './biens-compte.component.html',
  styleUrls: ['./biens-compte.component.css']
})
export class BiensCompteComponent implements OnInit {

  private listObjetsProp : Object[];
  private listServicesProp : Object[];
  private listBiensProp : Object[];
  constructor(private service : BiensService, private router : Router) { }

  ngOnInit() {
  	this.biensUtilisateurs();
  }

  biensUtilisateurs(){
  	var object = JSON.parse(localStorage.getItem("compte"));
  	var mail = object[0].mail;

  	this.service.getBiensUtilisateur(mail)
    .subscribe(data => {this.listBiensProp = data;});

    this.service.getServicesUtilisateur(mail)
    .subscribe(data => {this.listServicesProp = data;});
  }

  supprimerService(param){
    this.service.supprimerServiceUtilisateur(param).subscribe();
    window.location.reload();
  }

  supprimerBien(param){
    this.service.supprimerBienUtilisateur(param).subscribe();
    window.location.reload();
  }
}
