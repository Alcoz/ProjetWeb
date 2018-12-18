import { Component, OnInit, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class BiensService implements OnInit {

  private url = 'http://localhost:8888/';

  constructor(private http : HttpClient) { }

  ngOnInit() {}

  getBiens(param):Observable<any>{
    return this.http.get<any>(this.url + "biens?nom=" + param);
  }

  getBiensMotClef(param):Observable<any>{
    return this.http.get<any>(this.url + "biensMotClef?motClef=" + param);
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
      return this.http.get<any>(this.url + "bienSupp?_id=" + param);
  }

  supprimerServiceUtilisateur(param){
    return this.http.get<any>(this.url + "serviceSupp?_id=" + param);
  }

  ajouterBienUtilisateur(param){
    console.log(param);
    return this.http.get<any>(this.url + "biensAjout?nom=" + param.nom + "&descriptif=" + param.descriptif + "&prix=" 
      + param.prix + "&motClef=" + param.motClef + "&mailProp=" + param.mailProp);
  }

}
