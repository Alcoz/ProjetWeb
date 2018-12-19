import { Component, OnInit } from '@angular/core';
import { BiensService } from '../../../../services/biens.service';
import { Router } from '@angular/router';
import { CalendarComponent} from '../../../../recherche/descriptif/calendar/calendar.component'

@Component({
  selector: 'app-ajout-bien',
  templateUrl: './ajout-bien.component.html',
  styleUrls: ['./ajout-bien.component.css']
})
export class AjoutBienComponent implements OnInit {

  private listMotsClefs : string[] = [];
  private nom : string;
  private descriptif : string;
  private prix : string;
  
  constructor(private service : BiensService, private router : Router, private calendar : CalendarComponent) { }

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

    let tableauDate : Date[];
    tableauDate = this.calendar.getDates();

    console.log(tableauDate[0]);
    console.log(tableauDate[1]);

    let infos = {
      nom : this.nom,
      descriptif : this.descriptif,
      prix : this.prix,
      motClef : this.listMotsClefs,
      mailProp : tempo[0].mail,
      _id : tempo[0]._id,
      dateDebut : tableauDate[0],
      dateFin : tableauDate[1]
    }

    this.service.ajouterBienUtilisateur(infos)
    .subscribe();

    this.router.navigate(['/auth/compte']);
  }
}
