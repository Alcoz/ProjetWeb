import { Component, OnInit, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class BiensService implements OnInit {

  private url = 'http://localhost:8888/';

  constructor(private http : HttpClient) { }

  ngOnInit() {}

  getBiens(param : string):Observable<any>{
  		return this.http.get<any>(this.url + "biens?nom=" + param);
  }

  getBiensRecents():Observable<any>{
      return this.http.get<any>(this.url + "biensRecents");
  }

}
