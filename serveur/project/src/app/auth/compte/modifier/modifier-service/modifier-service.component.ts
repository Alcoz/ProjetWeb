import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modifier-service',
  templateUrl: './modifier-service.component.html',
  styleUrls: ['./modifier-service.component.css']
})
export class ModifierServiceComponent implements OnInit {
  
  private infos : Object;

  private descriptif : string;
  private prix : string;
  private listMotsClefs : string[] = [];


  constructor() { }

  ngOnInit() {
  	var infos = JSON.parse(localStorage.getItem("descriptif"));
    console.log(infos);
    this.descriptif = infos.descriptif;
    this.prix = infos.prix;
  }

}
