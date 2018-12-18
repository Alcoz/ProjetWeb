import { Component, OnInit } from '@angular/core';
import { BiensService } from '../../services/biens.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-utilisateur',
  templateUrl: './liste-utilisateur.component.html',
  styleUrls: ['./liste-utilisateur.component.css']
})
export class ListeUtilisateurComponent implements OnInit {

  private utilisateurs : Object[];

  constructor(private service : BiensService, private router : Router) { }

  ngOnInit() {
  	this.service.getMembres().subscribe(res => {
    	this.utilisateurs = res;
    });
  }

  chercherUtilisateur(param){
  	this.service.getUtilisateur(param).subscribe(res => {
    	this.utilisateurs = res;
    });
  }

  supprimerUtilisateur(param){
  	this.service.supprimerUtilisateur(param._id, param.mail).subscribe();
    window.location.reload();

  }

  envoieAvertissement(param){
    this.service.envoieAvertissement(param).subscribe();
    window.location.reload();
  }

}
