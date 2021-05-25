import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from '../primeng/primeng.module';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { UsuarioComponent } from './usuario/usuario.component';
import { AuthRoutingModule } from './auth-routing.module';



@NgModule({
  declarations: [LoginComponent, UsuarioComponent],
  imports: [
    CommonModule,
    PrimengModule,
    FormsModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
