import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

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

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
