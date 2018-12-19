import { Component, OnInit } from '@angular/core';
import { BiensService} from '../../../services/biens.service'

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css',
  '../../../../../node_modules/primeng/resources/themes/nova-light/theme.css',
  '../../../../../node_modules/primeng/resources/primeng.min.css',
  '../../../../../node_modules/primeicons/primeicons.css']
})
export class CalendarComponent implements OnInit {

  private date: Date;
  private tableauDate : Date[] = [];

  constructor(private service : BiensService) { }

  ngOnInit() {
  }

  ajoutDate(){
  	if(this.tableauDate.length < 2){
  		this.tableauDate.push(this.date);
  	}
  }

  supprimer(){
    this.tableauDate.pop();
  }

  getDates(){
    return this.tableauDate;
  }
}
