import { Component, OnInit } from '@angular/core';
import { AuthComponent } from '../auth/auth.component'
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private isLoggedIn : boolean;

  constructor(private router : Router) { }

  ngOnInit() {
  	var value = localStorage.getItem('isLoggedIn');
  	if(JSON.parse(value) === true){
  		this.isLoggedIn = true;
  	}else{
  		this.isLoggedIn = false;
  	}
  }

  deconnexion(){
    var value = 'false';
    localStorage.setItem('isLoggedIn', value);
    this.router.navigate(['/accueil']);
  }
}
