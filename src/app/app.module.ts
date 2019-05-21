import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';



import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

import { firebaseConfig } from 'src/environments/environment';

import{ AngularFireAuthModule } from "@angular/fire/auth";
import{ AngularFireModule } from "@angular/fire";
import { GoogleLogComponent } from './google-log/google-log.component';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { CuponComponent } from './componentes/cupon/cupon.component';


@NgModule({
  declarations: [AppComponent, GoogleLogComponent, CuponComponent
 ],
  entryComponents: [CuponComponent],
  imports: [
    NgxQRCodeModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule
    
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    GooglePlus,
    BarcodeScanner,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
   
  ],
  bootstrap: [AppComponent


  ]
 
})
export class AppModule { }

