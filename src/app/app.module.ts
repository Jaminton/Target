import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';


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

@NgModule({
  declarations: [AppComponent
 
   

  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule
    

  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent
  
    
  
  ]
})
export class AppModule { }
