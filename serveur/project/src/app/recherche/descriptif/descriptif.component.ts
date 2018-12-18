import { Component, OnInit } from '@angular/core';
import { BiensCompteComponent } from  '../biens-compte/biens-compte.component'
import { BiensService} from '../../services/biens.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-descriptif',
  templateUrl: './descriptif.component.html',
  styleUrls: ['./descriptif.component.css']
})
export class DescriptifComponent implements OnInit {

  private affichage : boolean;
  private isLogged : boolean;
  
  constructor(private router : Router, private service : BiensService) { }

  ngOnInit() {
  	var value = JSON.parse(localStorage.getItem("isLoggedIn"));
  	if(JSON.parse(value) === true){
  		this.isLogged = true;
  	}else{
  		this.isLogged = false;
  	}

  	let biensCompte = new BiensCompteComponent(this.service, this.router);
    var mail = biensCompte.getMail;

    var tempo = JSON.parse(localStorage.getItem("compte"));
    var mailIn = tempo[0].mail;
    console.log(mail);
    console.log(mail);
    console.log(mailIn);

    if(mail.length == mailIn.length){
      console.log("vrai");
      this.affichage = false;
    }
    else{
      console.log("faux");
      this.affichage = true;
    }
  }

  strcmp(a, b)
  {   
      return (a<b?-1:(a>b?1:0));  
  }

}
