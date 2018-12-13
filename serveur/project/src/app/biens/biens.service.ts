import { Component, OnInit, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-service',
  templateUrl: './biens.component.html',
  styleUrls: ['./biens.component.css']
})

@Injectable()
export class BiensService implements OnInit {

  private url = 'http://localhost:8888/biens';

  constructor(private http : HttpClient) { }

  ngOnInit() {}

  getBiens(param : string):Observable<any>{
      console.log(this.url + "?nom=" + param);
  		return this.http.get<any>(this.url + "?nom=" + param);
  }

}
