import { Component, OnInit } from '@angular/core';
import { BiensCompteComponent } from '../../../../recherche/biens-compte/biens-compte.component'
import { BiensService} from '../../../../services/biens.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-modifier-bien',
  templateUrl: './modifier-bien.component.html',
  styleUrls: ['./modifier-bien.component.css']
})
export class ModifierBienComponent implements OnInit {

  private infos : Object;

  private nom : string;
  private descriptif : string;
  private prix : string;
  private listMotsClefs : string[] = [];

  constructor(private service : BiensService, private router : Router) { }

  ngOnInit() {
  	var infos = JSON.parse(localStorage.getItem("descriptif"));
    console.log(infos);
    this.nom = infos.nom;
    this.descriptif = infos.descriptif;
    this.prix = infos.prixNeuf;
  }
}
