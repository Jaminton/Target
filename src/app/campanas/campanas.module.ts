import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CampanasPage } from './campanas.page';
import { Component } from '@angular/core';
//import { Slides } from '@ionic/angular';

const routes: Routes = [
  {
    path: '',
    component: CampanasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CampanasPage]
})
export class CampanasPageModule {


  slideOpts = {
    initialSlide: 1,
    speed: 400
  };


}
