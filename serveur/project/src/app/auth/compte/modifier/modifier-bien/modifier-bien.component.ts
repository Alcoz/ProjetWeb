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

  private composant : any;
  constructor(private service : BiensService, private router : Router) { }

  ngOnInit() {
  	let biensCompte = new BiensCompteComponent(this.service, this.router);
    var mail = biensCompte.getMail;
    console.log(mail);
  }
}
