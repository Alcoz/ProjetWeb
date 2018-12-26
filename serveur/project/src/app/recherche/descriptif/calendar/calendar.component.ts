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
      let infos = {
        dateDebut : this.tableauDate[0],
        dateFin : this.tableauDate[1]
      }
      localStorage.setItem('dates', JSON.stringify(infos));
  }
}

  supprimer(){
    this.tableauDate.pop();
  }

}
