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

  constructor(private http : HttpClient) { }

  ngOnInit() {
  }

  getBiens():Observable<any>{
  		return this.http.get("http://localhost:8888/biens");
  }

}
