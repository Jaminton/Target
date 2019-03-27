import { NgModule } from '@angular/core';
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


@NgModule({
  declarations: [AppComponent
 ],
  entryComponents: [],
  imports: [
    NgxQRCodeModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    FormsModule
  ],
  providers: [
    
    BarcodeScanner,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
   
  ],
  bootstrap: [AppComponent


  ]
})
export class AppModule { }
