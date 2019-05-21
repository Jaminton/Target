import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';


import { IonicModule } from '@ionic/angular';

import { MiscuponesPage } from './miscupones.page';

const routes: Routes = [
  {
    path: '',
    component: MiscuponesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MiscuponesPage]
})
export class MiscuponesPageModule {





}
