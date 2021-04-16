import { NgModule } from '@angular/core';

import { RouterLink, RouterModule, Routes } from '@angular/router';

import { EstadoComponent } from './proyecto/pages/estados/estado.component';
import { HomeComponent } from './proyecto/pages/home/home.component';
import { LoginComponent } from './proyecto/pages/login/login.component';
import { UsuarioComponent } from './proyecto/pages/usuario/usuario.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'creacion',
    component: UsuarioComponent,
  },
  {
    path: 'estado',
    component: EstadoComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
