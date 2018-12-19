import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RequestOptions, Headers} from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {

  private url = 'http://localhost:8888/';

  constructor(private http : HttpClient) { }

  connexion(infos) {
  	const httpOptions = {
		    headers: new HttpHeaders({
	    	'Content-Type':  'application/json',
	    	'Access-Control-Allow-Origin' : 'GET, POST, PUT, DELETE, OPTIONS'
	    })
	   };
  	return this.http.post(this.url + "connexion", JSON.stringify(infos), httpOptions);
  }

  inscription(infos){
    const httpOptions = {
        headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin' : 'GET, POST, PUT, DELETE, OPTIONS'
      })
     };
     return this.http.post(this.url + "register", JSON.stringify(infos), httpOptions);
  }
}
