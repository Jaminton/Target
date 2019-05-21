import { Component, OnInit } from '@angular/core';
import { AuthService } from "../servicios/auth.service";
import {  Router} from "@angular/router";




//ibrerias para login con gmail 



import{ AngularFireAuthModule, AngularFireAuth } from "@angular/fire/auth";
import{ AngularFireModule } from "@angular/fire";
import {Observable} from 'rxjs/observable'

import {GooglePlus} from '@ionic-native/google-plus/ngx';
import { Platform } from '@ionic/angular';
import { firebaseConfig } from 'src/environments/environment';
import * as firebase from 'firebase';

 
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  
})
export class LoginPage implements OnInit {

  user: Observable<firebase.User>;

  email: string;
  password: string;

  constructor(private authService: AuthService,
              public router: Router,
              private afAuth: AngularFireAuth,
              private gplus: GooglePlus,
              private platform: Platform)
              { this.user = this.afAuth.authState;}

  ngOnInit() {
  }

  onSubmitLogin()
  {
      this.authService.login(this.email, this.password).then(res =>{

          this.router.navigate(['/home']);

      }).catch(err=> alert('los datos son incorrectos o no existe el usuario'))
  }

  


}


