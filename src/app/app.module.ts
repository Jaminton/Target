import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CalificarPageModule } from './calificar/calificar.module';
import { CampanasPage } from './campanas/campanas.page';
import { TarjetonesPage } from './tarjetones/tarjetones.page';
import { CuponesPage } from './cupones/cupones.page';
import { CanjearcodigoPage } from './canjearcodigo/canjearcodigo.page';
import { PqrsPage } from './pqrs/pqrs.page';
import { ComprasPage } from './compras/compras.page';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@NgModule({
  declarations: [AppComponent
 ],
  entryComponents: [],
  imports: [
    NgxQRCodeModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
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
