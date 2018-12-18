import { Component, OnInit, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class BiensService implements OnInit {

  private url = 'http://localhost:8888/';

  constructor(private http : HttpClient) { }

  ngOnInit() {}

  getBiens(param):Observable<any>{
    return this.http.get<any>(this.url + "biensParam?nom=" + param);
  }

  getBiensMotClef(param):Observable<any>{
    var tempo = '';
    for(let i = 0; i < param.length; i++){
      tempo += '"' + param[0] + '",';
    }
    tempo = tempo.slice(0,-1)
    console.log(this.url + "biensMotClef?motClef=" + "[" + tempo + "]");
    return this.http.get<any>(this.url + "biensMotClef?motClef=" + "[" + tempo + "]");
  }

  getAllBiens():Observable<any>{
      return this.http.get<any>(this.url + "biens");
  }

  getAllServices():Observable<any>{
      return this.http.get<any>(this.url + "services");
  }

  getBiensUtilisateur(param):Observable<any>{
  	  return this.http.get<any>(this.url + "biensProp?mailProp=" + param);
  }

  supprimerService(param):Observable<any>{
      console.log(param);
      return this.http.get<any>(this.url + "serviceSupp?_id=" + param);
  }

  supprimerBien(param):Observable<any>{
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

  getMembres(){
    return this.http.get<any>(this.url + "membres");
  }

  getUtilisateur(param){
    return this.http.get<any>(this.url + "membresMail?mail=" + param);
  }

  supprimerUtilisateur(id, mail){
    console.log(id);
    console.log(this.url + "ban?_id=" + id + "&mail=" + mail);
    return this.http.get<any>(this.url + "ban?_id=" + id + "&mail=" + mail);
  }

  envoieAvertissement(param){
    return this.http.get<any>(this.url + "avertissement?_id=" + param);
  }

}
