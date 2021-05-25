import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UsuarioComponent } from './usuario/usuario.component';

const routes: Routes = [
    {
      path: '',
      children: [
        {
            path: 'Login',
            component: LoginComponent,
        },
        {
            path: 'Registro',
            component: UsuarioComponent,
        },
        {
            path: '**',
            redirectTo: 'Login',
        },
      ],
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class AuthRoutingModule {}