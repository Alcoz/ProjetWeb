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

  getBiensUtilisateur(param : string):Observable<any>{
  	  return this.http.get<any>(this.url + "biensProp?mailProp=" + param);
  }

  getServicesUtilisateur(param : string):Observable<any>{
      return this.http.get<any>(this.url + "servicesProp?mailProp=" + param);
  }

  supprimerBienUtilisateur(param){
      console.log(param);
      return this.http.get<any>(this.url + "bienSupp?idBien=" + param);
  }

  supprimerServiceUtilisateur(param){
    console.log("servicesupp");
    return this.http.get<any>(this.url + "serviceSupp?idService=" + param);
  }

}
