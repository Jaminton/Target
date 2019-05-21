import { Component, OnInit } from '@angular/core';

import{ AngularFireAuthModule, AngularFireAuth } from "@angular/fire/auth";
import{ AngularFireModule } from "@angular/fire";
import {Observable} from 'rxjs/observable';

import {GooglePlus} from '@ionic-native/google-plus/ngx';
import { Platform } from '@ionic/angular';
import { firebaseConfig } from 'src/environments/environment';
import * as firebase from 'firebase';



@Component({
  selector: 'app-google-log',
  templateUrl: './google-log.component.html',
  styleUrls: ['./google-log.component.scss']
})
export class GoogleLogComponent implements OnInit {

  user: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth,
              private gplus: GooglePlus,
              private platform: Platform) {

              this.user = this.afAuth.authState;
               }

               googleLogin(){
                if (this.platform.is('cordova')){
                    this.nativeGoogleLogin();
                    
          
          
            }else {
          
                  this.webGoogleLogin();
          
            }
          }

          async nativeGoogleLogin(): Promise<firebase.User> {
            try {
          
              const gplusUser = await this.gplus.login({
                'webClientId': '464910909072-2inbk1brm27e8n0kladqcn184mot2d01.apps.googleusercontent.com',
                'offline': true,
                'scopes': 'profile email'
              })
          
              return await this.afAuth.auth.signInWithCredential(firebase.auth.GoogleAuthProvider.credential(gplusUser.idToken))
          
            } catch(err) {
              console.log(err)
            }
          }

          async webGoogleLogin():Promise<void>{
              try {
                    const provider = new firebase.auth.GoogleAuthProvider();
                    const credential = await this.afAuth.auth.signInWithPopup(provider);


              }catch(err){

                console.log(err)
              }



          }


          signOut(){

            this.afAuth.auth.signOut();
            if(this.platform.is('cordova')){
              this.gplus.logout();
            }
          }


  ngOnInit() {
  }

 

}
