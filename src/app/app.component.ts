import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
  
    {
      title: 'Login',
      url: '/login',
      icon: 'person'
    },


    {
      title: 'Campañas',
      url: '/campanas',
      icon: 'logo-buffer'

    },
    {
      title: 'MisTarjetones ',
      url: '/tarjetones',
      icon: 'star'

    },

    {
      title: 'Mis Cupones ',
      url: '/cupones',
      icon: 'images'

    },

    {
      title: 'Canjear Codigo ',
      url: '/canjearcodigo',
      icon: 'unlock'

    },
    {
      title: 'Calificar ',
      url: '/calificar',
      icon: 'checkmark'

    },
    {
      title: 'PQRS ',
      url: '/pqrs',
      icon: 'call'

    },
    {
      title: 'Compras ',
      url: '/compras',
      icon: 'card'

    },



  ];

  encodeData: any;
  scannedData: {};
  barcodeScannerOptions: BarcodeScannerOptions;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private barcodeScanner: BarcodeScanner
  ) {
    this.initializeApp();
     //Options
     this.barcodeScannerOptions = {
      showTorchButton: true,
      showFlipCameraButton: true
    };
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.encodeData = "https://www.FreakyJolly.com";
    });
  }

  scanCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      alert('Barcode data ' + JSON.stringify(barcodeData));
      this.scannedData = barcodeData;
    }).catch(err => {
      console.log('Error', err);
    });
  }

  encodedText() {
    
    this.barcodeScanner.encode(this.barcodeScanner.Encode.TEXT_TYPE, this.encodeData).then((encodedData) => {
      console.log(encodedData);
      this.encodeData = encodedData;
    }, (err) => {
      console.log("Error occured : " + err);
    });
  }


}
