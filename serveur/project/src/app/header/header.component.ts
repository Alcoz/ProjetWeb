import { Component, OnInit } from '@angular/core';
import { AuthComponent } from '../auth/auth.component'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private isLoggedIn : boolean;

  constructor() { }

  ngOnInit() {
  	var value = localStorage.getItem('isLoggedIn');
  	if(JSON.parse(value) === true){
  		this.isLoggedIn = true;
  	}else{
  		this.isLoggedIn = false;
  	}
  }
}
