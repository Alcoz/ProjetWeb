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

  ngOnInit() {
  }

  getBiens(String param):Observable<any>{
  		return this.http.get(this.url +'?'+ param);
  }

}
