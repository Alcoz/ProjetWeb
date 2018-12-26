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

  getServices(param):Observable<any>{
    return this.http.get<any>(this.url + "serviceParam?descriptif=" + param);
  }

  getBiensMotClef(param):Observable<any>{
    var tempo = '';
    for(let i = 0; i < param.length; i++){
      tempo += '"' + param[0] + '",';
    }
    tempo = tempo.slice(0,-1)
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

  getServicesUtilisateur(param):Observable<any>{
      return this.http.get<any>(this.url + "servicesProp?mailProp=" + param);
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
    return this.http.get<any>(this.url + "biensAjout?descriptif=" + param.descriptif + "&prix="
      + param.prix + "&motClef=" + param.motClef + "&mailProp=" + param.mailProp);
  }

  ajouterServiceUtilisateur(param){
    return this.http.get<any>(this.url + "serviceAjout?nom=" + param.nom + "&descriptif=" + param.descriptif + "&prix="
      + param.prix + "&motClef=" + param.motClef + "&mailProp=" + param.mailProp);
  }


  ajouterDatesUtilisateur(param){
    return this.http.get<any>(this.url + "disponibilitesAjout?idBienOuService=" + param.idBienOuService + "&bienOuService=" + param.bienOuService + "&dateDebut=" + param.dateDebut
    + "&dateFin=" + param.dateFin);
  }


  getMembres(){
    return this.http.get<any>(this.url + "membres");
  }

  getUtilisateur(param){
    return this.http.get<any>(this.url + "membresMail?mail=" + param);
  }

  supprimerUtilisateur(id, mail){
    return this.http.get<any>(this.url + "ban?_id=" + id + "&mail=" + mail);
  }

  envoieAvertissement(param){
    return this.http.get<any>(this.url + "avertissement?_id=" + param);
  }

  avertissementSuppr(param){
    return this.http.get<any>(this.url + "suppAvertissement?_id=" + param);
  }

  ajouterDates(dateDebut, dateFin){
    return this.http.get<any>(this.url + "avertissement?dateDebut=" + dateDebut + "&dateFin=" + dateFin);
  }

}
