import { NgModule } from '@angular/core';

import { RouterLink, RouterModule, Routes } from '@angular/router';
import { DatosComponent } from './proyecto/pages/datos/datos.component';


import { ValidartokenGuard } from './guards/validartoken.guard';

const routes: Routes = [
  {
    path:'auth',
    loadChildren : () => import('../app/auth/auth.module').then((m)=> m.AuthModule) 
  },
  {
    path:'comunidad',
    loadChildren: () => import('../app/proyecto/comunidad.module').then((m)=>m.ComunidadModule),
    canActivate:[ValidartokenGuard],
    canLoad:[ValidartokenGuard]
  },
  {
    path:'**',
    redirectTo: 'Login'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
