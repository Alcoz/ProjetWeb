import { Component, OnInit } from '@angular/core';
import { CalendarModule } from '../../../../../node_modules/primeng/components/calendar/calendar'

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  private value: Date;

  constructor() { }

  ngOnInit() {
  }

}
