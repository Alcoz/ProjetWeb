import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  mail = '';
  mdp = '';

  constructor() { }

  onSubmit() {
    console.log("Form Submitted!");
    console.log("Form Submitted!");
    console.log("Form Submitted!");
    console.log("Form Submitted!");
  }

  ngOnInit() {
  }
}
