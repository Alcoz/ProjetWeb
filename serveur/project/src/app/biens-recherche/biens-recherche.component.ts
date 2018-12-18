import { Component, OnInit } from '@angular/core';
import { BiensService } from '../services/biens.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-biens-recherche',
  templateUrl: './biens-recherche.component.html',
  styleUrls: ['./biens-recherche.component.css']
})
export class BiensRechercheComponent implements OnInit {

  private biens : Object[];
  private listMotsClefs : string[] = [];
  private biensMotClef : Object[];

  constructor(private service : BiensService, private router : Router) { }

  ngOnInit() {
    this.service.getBiens('').subscribe(res => {
       this.biens = res;   
    });
  }

  simpleSearch(param) {
    this.service.getBiens(param).subscribe(res => {
       this.biens = res;   
    });
  }

  sendInfos(param){
    var value = 'true';
    localStorage.setItem('descriptif', JSON.stringify(param));
    this.router.navigate(['/recherche/descriptif']);
  }

  complexSearch() {
    this.service.getBiensMotClef(this.listMotsClefs).subscribe(res =>{
      this.biensMotClef = res;
    });
  }

  add(param){
    this.listMotsClefs.push(param);
    this.complexSearch();
  }

  suppr(){
    this.listMotsClefs.pop();
    this.complexSearch();
  }
}
