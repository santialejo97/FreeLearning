import { NgModule } from '@angular/core';

import { RouterLink, RouterModule, Routes } from '@angular/router';
import { DatosComponent } from './proyecto/pages/datos/datos.component';

import { EstadoComponent } from './proyecto/pages/estados/estado.component';
import { ForoComponent } from './proyecto/pages/foro/foro.component';
import { HomeComponent } from './proyecto/pages/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { UsuarioComponent } from './auth/usuario/usuario.component';

const routes: Routes = [
  {
    path:'auth',
    loadChildren : () => import('../app/auth/auth.module').then((m)=> m.AuthModule) 
  },
  {
    path:'comunidad',
    loadChildren: () => import('../app/proyecto/comunidad.module').then((m)=>m.ComunidadModule)
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
