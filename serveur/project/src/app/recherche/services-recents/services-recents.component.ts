import { Component, OnInit } from '@angular/core';
import { BiensService } from '../../services/biens.service';

@Component({
  selector: 'app-services-recents',
  templateUrl: './services-recents.component.html',
  styleUrls: ['./services-recents.component.css']
})
export class ServicesRecentsComponent implements OnInit {

  private services : Object[];

  constructor(private service : BiensService) { }

  ngOnInit() {
  	this.service.getAllServices().subscribe(res => {
        this.services = res;
      });
  }

  sendInfosDesc(param){
    localStorage.setItem('descriptif', JSON.stringify(param));
  }

}
