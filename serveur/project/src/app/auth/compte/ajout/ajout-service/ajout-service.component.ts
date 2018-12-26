import { Component, OnInit } from '@angular/core';
import { BiensService } from '../../../../services/biens.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout-service',
  templateUrl: './ajout-service.component.html',
  styleUrls: ['./ajout-service.component.css']
})
export class AjoutServiceComponent implements OnInit {

  private listMotsClefs : string[] = [];
  private descriptif : string;
  private prix : string;

  constructor(private service : BiensService, private router : Router) { }

  ngOnInit() {
  }

   add(param){
  	this.listMotsClefs.push(param);
  }

  suppr(){
  	this.listMotsClefs.pop();
  }

  ajout(){
    var tempo = JSON.parse(localStorage.getItem("compte"));
    var mail = tempo[0].mail;

    var dates = JSON.parse(localStorage.getItem("dates"));

    console.log(dates.dateDebut);
    console.log(dates.dateFin);

    let infos = {
      descriptif : this.descriptif,
      prix : this.prix,
      motClef : this.listMotsClefs,
      mailProp : tempo[0].mail,
      idBienOuService : tempo[0]._id,
      bienOuService : "service",
      dateDebut : dates.dateDebut,
      dateFin : dates.dateFin
    }

    this.service.ajouterServiceUtilisateur(infos).subscribe();
    this.service.ajouterDatesUtilisateur(infos).subscribe();

    this.router.navigate(['/auth/compte']);
  }
}
