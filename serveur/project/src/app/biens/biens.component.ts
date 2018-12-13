import { Component, OnInit } from '@angular/core';
import { BiensService } from './biens.service';

@Component({
  selector: 'app-biens',
  templateUrl: './biens.component.html',
  styleUrls: ['./biens.component.css']
})

export class BiensComponent implements OnInit {

  private biens : Object[];
  value = '';

  constructor(private service : BiensService) { }

  onKey(values : string) {
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
