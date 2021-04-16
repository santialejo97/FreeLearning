import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from '../primeng/primeng.module';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { EstadoComponent } from './pages/estados/estado.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UsuarioComponent,
    HomeComponent,
    LoginComponent,
    EstadoComponent,
  ],
  imports: [CommonModule, PrimengModule, FormsModule],
})
export class ComunidadModule {}
