import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';


@Component({
  selector: 'app-campanas',
  templateUrl: './campanas.page.html',
  styleUrls: ['./campanas.page.scss'],
})
export class CampanasPage implements OnInit {
  segundaPage = "SegundaPage";
  constructor() { }


  ngOnInit() {
  }
  @ViewChild('mySlider', { read: IonSlides }) slides: IonSlides;

  ionViewDidEnter() {
  this.slides.startAutoplay();
  }

  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }




  


}
