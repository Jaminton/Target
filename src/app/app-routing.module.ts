import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'inicio', loadChildren: './inicio/inicio.module#InicioPageModule' },
  { path: 'campanas', loadChildren: './campanas/campanas.module#CampanasPageModule' },

  { path: 'cupones', loadChildren: './cupones/cupones.module#CuponesPageModule' },
  { path: 'canjearcodigo', loadChildren: './canjearcodigo/canjearcodigo.module#CanjearcodigoPageModule' },
  { path: 'calificar', loadChildren: './calificar/calificar.module#CalificarPageModule' },
  { path: 'pqrs', loadChildren: './pqrs/pqrs.module#PqrsPageModule' },
  { path: 'compras', loadChildren: './compras/compras.module#ComprasPageModule' },
  { path: 'tarjetones', loadChildren: './tarjetones/tarjetones.module#TarjetonesPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
