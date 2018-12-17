import { Component, OnInit, Input } from '@angular/core';
import { ConnexionService } from './connexion.service';
import { AuthComponent } from '../auth.component'
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})

export class ConnexionComponent implements OnInit {

  private mail : string = '';
  private mdp : string = '';
  private resultat : Object;

  constructor(private service : ConnexionService, private auth : AuthComponent, private router : Router) { }

  ngOnInit() {}

  isEmpty(obj) {
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            return false;
    }
    return JSON.stringify(obj) === JSON.stringify({});
  }

  connexion(){
    let infos = {
      mail : this.mail,
      mdp : this.mdp
    }

    this.service.connexion(infos)
    .subscribe(data => this.resultat = data)

    if(Object.keys(this.resultat).length != 0){
      var value = 'true';
      localStorage.setItem('isLoggedIn', value);
      localStorage.setItem('compte', JSON.stringify(this.resultat));
      this.router.navigate(['/auth/compte']);
    }
    else{
       console.log("erreur");
    }
  }
}
