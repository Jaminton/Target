import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth : AngularFireAuth, private router : Router) { }


  login(email:string, password:string){

    return new Promise((resolve,rejected) =>{

      this.AFauth.auth.signInWithEmailAndPassword(email, password).then(user => {
        resolve(user); 
        console.log( user)
        console.log( "Estas logeado")
      }).catch(err => rejected(err));

    });

  
  }

Logout(){

this.AFauth.auth.signOut().then(aunth => {

  this.router.navigate(['/login']);
})

}



}
