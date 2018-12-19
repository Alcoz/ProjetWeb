import { Component, OnInit } from '@angular/core';
import { BiensService } from '../../services/biens.service';

@Component({
  selector: 'app-biens-recents',
  templateUrl: './biens-recents.component.html',
  styleUrls: ['./biens-recents.component.css']
})
export class BiensRecentsComponent implements OnInit {
 
  private biens : Object[];

  constructor(private service : BiensService) { }

  ngOnInit() {
  	this.service.getAllBiens().subscribe(res => {
        this.biens = res;
      });
  }

  sendInfosDesc(param){
    localStorage.setItem('descriptif', JSON.stringify(param));
  }
}
