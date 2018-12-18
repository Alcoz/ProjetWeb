import { Component, OnInit } from '@angular/core';
import { BiensService } from '../../services/biens.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-biens',
  templateUrl: './biens.component.html',
  styleUrls: ['./biens.component.css']
})

export class BiensComponent implements OnInit {

  private biens : Object[];
  private services : Object[];
  value = '';

  constructor(private service : BiensService, private router : Router) { }

  ngOnInit() {
      this.service.getAllBiens().subscribe(res => {
        this.biens = res;
      });
      this.service.getAllServices().subscribe(res => {
        this.services = res;
      });
  }

  simpleSearch(param) {
    this.service.getBiens(param).subscribe(res => {
       this.biens = res;   
    });
  }

  supprimerService(param){
    this.service.supprimerService(param).subscribe();
    window.location.reload();
  }

  supprimerBien(param){
    this.service.supprimerBien(param).subscribe();
    window.location.reload();
  }

  sendInfosDesc(param){
    localStorage.setItem('descriptif', JSON.stringify(param));
  }

  sendInfosModif(param){
    localStorage.setItem('descriptif', JSON.stringify(param));
  }
}