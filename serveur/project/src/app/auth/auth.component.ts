import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

export class AuthComponent implements OnInit {

  private isLoggedIn : boolean = false;
  constructor() { }

  ngOnInit() {
  }

  connexion() {
  	this.isLoggedIn = true;
  }

}
