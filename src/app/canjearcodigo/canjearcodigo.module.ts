import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CanjearcodigoPage } from './canjearcodigo.page';

const routes: Routes = [
  {
    path: '',
    component: CanjearcodigoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CanjearcodigoPage]
})
export class CanjearcodigoPageModule {}
