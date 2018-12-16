import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharewoodService {

  constructor() {
    var value = 'false';
  	localStorage.setItem('isLoggedIn', value);
  	let todos = this.getTodos();
  	console.log(todos);
  }

  public getTodos(): Object[] {
  	let test = JSON.parse(localStorage.getItem('isLoggedIn'));
  	return test == null ? [] : test.isLoggedIn;
  }
}
