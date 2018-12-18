import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajout-service',
  templateUrl: './ajout-service.component.html',
  styleUrls: ['./ajout-service.component.css']
})
export class AjoutServiceComponent implements OnInit {

  private listMotsClefs : string[] = [];

  constructor() { }

  ngOnInit() {
  }

   add(param){
  	this.listMotsClefs.push(param);
  }

  suppr(){
  	this.listMotsClefs.pop();
  }

}
