import { Component, OnInit } from '@angular/core';
import { BiensService } from '../biens/biens.service';

@Component({
  selector: 'app-biens-recherche',
  templateUrl: './biens-recherche.component.html',
  styleUrls: ['./biens-recherche.component.css']
})
export class BiensRechercheComponent implements OnInit {

  private biens : Object[];
  value = '';

  constructor(private service : BiensService) { }

  onKey(values : string) {

  	if(document.getElementById("lesBiens").checked){
  	console.log("test");
  	}
    this.value = values;
    console.log(this.value);
    this.service.getBiens(this.value).subscribe(res => {
    this.biens = res;  
    console.log(this.biens);  
    });
  }

  ngOnInit() {
  }

}
