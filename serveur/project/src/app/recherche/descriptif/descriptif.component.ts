import { Component, OnInit } from '@angular/core';
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
  private infos : Object;
  
  constructor(private router : Router, private service : BiensService) { }
  
  ngOnInit() {
  	var value = JSON.parse(localStorage.getItem("isLoggedIn"));
  	if(JSON.parse(value) === true){
  		this.isLogged = true;
  	}else{
  		this.isLogged = false;
  	}

    var desc = JSON.parse(localStorage.getItem("descriptif"));
    this.infos = desc;

    var tempo = JSON.parse(localStorage.getItem("compte"));
    var mail = tempo[0].mail;

    if(mail == desc.mailProp){
      this.affichage = false;
    }else{
      this.affichage = true;
    }
  }

  strcmp(a, b)
  {   
      return (a<b?-1:(a>b?1:0));  
  }

}
